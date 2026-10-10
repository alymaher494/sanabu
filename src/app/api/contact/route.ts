import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name zu kurz")
    .max(100, "Name zu lang"),
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
});

// Simple in-memory rate limiting per IP (per container lifecycle).
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, { count: number; first: number }>();

function rateLimited(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now - entry.first > WINDOW_MS) {
    hits.set(ip, { count: 1, first: now });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

function getClientIp(req: Request) {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(req: Request) {
  const ip = getClientIp(req);
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Zu viele Anfragen. Bitte versuchen Sie es in einer Minute erneut." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Ungültige Anfrage." },
      { status: 400 }
    );
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message ?? "Ungültige Eingaben.";
    return NextResponse.json(
      { error: firstError, fieldErrors: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const { name, email, phone, service, message, consent } = parsed.data;

  try {
    await db.contactRequest.create({
      data: {
        name,
        email,
        phone,
        service,
        message,
        consent,
        status: "new",
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Anfrage empfangen. Wir melden uns innerhalb von 24 Stunden.",
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("[contact] DB error:", err);
    return NextResponse.json(
      { error: "Beim Speichern ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed." },
    { status: 405, headers: { Allow: "POST" } }
  );
}
