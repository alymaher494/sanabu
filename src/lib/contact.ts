import { z } from "zod";

/**
 * Contact lead handling — framework-free core logic.
 *
 * The Next.js route (`src/app/api/contact/route.ts`) is a thin adapter over
 * this module so the full decision table (validation, honeypot, bot timing,
 * rate limiting, provider success/failure) is unit-testable with plain
 * `node:test` and no browser, database, or network access.
 */

/** Version identifier of the privacy notice the consent refers to. */
export const PRIVACY_POLICY_VERSION = "2026-10";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name zu kurz").max(100, "Name zu lang"),
  email: z
    .string()
    .trim()
    .min(1, "E-Mail erforderlich")
    .email("Ungültige E-Mail-Adresse")
    .max(150, "E-Mail zu lang"),
  phone: z
    .string()
    .trim()
    .min(6, "Telefonnummer zu kurz")
    .max(40, "Telefonnummer zu lang")
    .regex(/^[0-9+()\-\s/]+$/, "Ungültige Zeichen in der Telefonnummer"),
  service: z
    .string()
    .trim()
    .min(1, "Leistungsbereich erforderlich")
    .max(120, "Leistungsbereich zu lang"),
  message: z
    .string()
    .trim()
    .min(10, "Nachricht zu kurz")
    .max(2000, "Nachricht zu lang"),
  consent: z.boolean().refine((v) => v === true, "Zustimmung erforderlich"),
  /** Honeypot: legitimate users always submit an empty string. */
  website: z.string().max(200).optional().default(""),
  /** Timestamp (ms epoch) when the form was rendered; set by the client. */
  startedAt: z.number().int().positive().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const RATE_LIMIT_WINDOW_MS = 60_000;
export const RATE_LIMIT_MAX_PER_WINDOW = 5;
/** Submissions faster than this after render are treated as bots. */
export const MIN_FORM_DWELL_MS = 2000;

export type RateLimiter = {
  check: (
    ip: string,
    now?: number
  ) => { limited: boolean; retryAfterSec: number };
};

/**
 * Best-effort in-memory limiter (per serverless instance — see route docs).
 */
export function createRateLimiter(
  windowMs = RATE_LIMIT_WINDOW_MS,
  maxPerWindow = RATE_LIMIT_MAX_PER_WINDOW
): RateLimiter {
  const hits = new Map<string, { count: number; first: number }>();
  return {
    check(ip: string, now: number = Date.now()) {
      const entry = hits.get(ip);
      if (!entry || now - entry.first > windowMs) {
        hits.set(ip, { count: 1, first: now });
        return { limited: false, retryAfterSec: 0 };
      }
      entry.count += 1;
      if (entry.count > maxPerWindow) {
        return {
          limited: true,
          retryAfterSec: Math.max(
            1,
            Math.ceil((windowMs - (now - entry.first)) / 1000)
          ),
        };
      }
      return { limited: false, retryAfterSec: 0 };
    },
  };
}

export type LeadData = Pick<
  ContactInput,
  "name" | "email" | "phone" | "service" | "message"
>;

export type EmailEnv = {
  apiKey?: string;
  to?: string;
  from?: string;
};

export function buildLeadEmail(
  data: LeadData,
  submittedAtIso: string
): { subject: string; text: string } {
  const subject = `Neue Anfrage: ${data.service} – ${data.name}`.slice(0, 120);
  const text = [
    "Neue Kontaktanfrage über die Website (Sam Bau).",
    "",
    `Name: ${data.name}`,
    `E-Mail: ${data.email}`,
    `Telefon: ${data.phone}`,
    `Leistungsbereich: ${data.service}`,
    `Zustimmung Datenschutzerklärung: ja (Version ${PRIVACY_POLICY_VERSION}, ${submittedAtIso})`,
    "",
    "Nachricht:",
    data.message,
  ].join("\n");
  return { subject, text };
}

function escapeHeader(value: string): string {
  return value.replace(/[\r\n]+/g, " ").slice(0, 150);
}

export type FetchImpl = typeof fetch;

/**
 * Sends the lead via the Resend REST API. Returns `{ ok: true }` only when
 * the provider accepted the message. Never throws, never logs PII.
 */
export async function sendLeadEmail(
  data: LeadData,
  env: EmailEnv,
  fetchImpl: FetchImpl = fetch,
  log: (msg: string) => void = console.error
): Promise<{ ok: boolean }> {
  const { apiKey, to, from } = env;
  if (!apiKey || !to || !from) {
    log("[contact] email provider not configured");
    return { ok: false };
  }

  const { subject, text } = buildLeadEmail(data, new Date().toISOString());

  let res: Response;
  try {
    res = await fetchImpl("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: escapeHeader(data.email),
        subject,
        text,
      }),
    });
  } catch {
    log("[contact] email provider request failed");
    return { ok: false };
  }

  if (!res.ok) {
    log(`[contact] email provider rejected request (status ${res.status})`);
    return { ok: false };
  }
  return { ok: true };
}

export type ContactResult = {
  status: number;
  json: unknown;
  headers?: Record<string, string>;
  /** True when no notification may be sent (bot traffic). */
  suppressed?: boolean;
};

export const CONTACT_SUCCESS = {
  success: true,
  message: "Anfrage empfangen. Wir melden uns innerhalb von 24 Stunden.",
};

const UNAVAILABLE = {
  error:
    "Ihre Anfrage konnte derzeit nicht übermittelt werden. Bitte rufen Sie uns direkt an oder versuchen Sie es später erneut.",
};

/**
 * Full decision table for POST /api/contact. Pure apart from the injected
 * `send` and clock — safe to unit test.
 */
export async function decideContactPost(options: {
  /** Already-parsed JSON body (pass a sentinel for unparseable input). */
  body: unknown;
  bodyParseable: boolean;
  ip: string;
  now?: number;
  limiter: RateLimiter;
  send: (data: LeadData) => Promise<{ ok: boolean }>;
}): Promise<ContactResult> {
  const { body, bodyParseable, ip, limiter, send } = options;
  const now = options.now ?? Date.now();

  const { limited, retryAfterSec } = limiter.check(ip, now);
  if (limited) {
    return {
      status: 429,
      json: {
        error:
          "Zu viele Anfragen. Bitte versuchen Sie es in einer Minute erneut.",
      },
      headers: { "Retry-After": String(retryAfterSec) },
    };
  }

  if (!bodyParseable) {
    return { status: 400, json: { error: "Ungültige Anfrage." } };
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const firstError =
      parsed.error.issues[0]?.message ?? "Ungültige Eingaben.";
    return {
      status: 422,
      json: {
        error: firstError,
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
    };
  }

  const { name, email, phone, service, message, website, startedAt } =
    parsed.data;

  // Honeypot / bot-timing: answer with the normal success payload so
  // automated submitters learn nothing — but send nothing.
  if (website.trim() !== "") {
    return { status: 200, json: CONTACT_SUCCESS, suppressed: true };
  }
  if (
    typeof startedAt === "number" &&
    startedAt <= now &&
    now - startedAt < MIN_FORM_DWELL_MS
  ) {
    return { status: 200, json: CONTACT_SUCCESS, suppressed: true };
  }

  const result = await send({ name, email, phone, service, message });
  if (!result.ok) {
    return { status: 500, json: UNAVAILABLE };
  }
  return { status: 201, json: CONTACT_SUCCESS };
}

export function decideContactGet(): ContactResult {
  return {
    status: 405,
    json: { error: "Method not allowed." },
    headers: { Allow: "POST" },
  };
}
