import { NextResponse } from "next/server";
import {
  createRateLimiter,
  decideContactGet,
  decideContactPost,
  sendLeadEmail,
  type ContactResult,
} from "@/lib/contact";

/**
 * POST /api/contact — public lead-capture endpoint.
 *
 * Architecture (Vercel, no database):
 *   Browser → POST /api/contact → Zod validation → anti-spam
 *   → transactional email (Resend) → business owner.
 *
 * Submitted PII is never stored locally and never logged.
 * All provider calls happen server-side. Decision logic lives in
 * `@/lib/contact` and is covered by `tests/contact-api.test.mjs`.
 */

const limiter = createRateLimiter();

function toResponse(result: ContactResult): NextResponse {
  return NextResponse.json(result.json, {
    status: result.status,
    headers: result.headers,
  });
}

/**
 * Client IP for abuse accounting only (never trusted for authorization).
 * Prefers `x-real-ip` (set by the hosting edge), falls back to the first
 * `x-forwarded-for` entry. Both are client-influenced — the honeypot field
 * carries the main anti-bot weight, and the in-memory limiter is a
 * per-instance best-effort on serverless (see module docs).
 */
function getClientIp(req: Request): string {
  const realIp = req.headers.get("x-real-ip")?.trim();
  if (realIp) return realIp;
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) {
    const first = fwd.split(",")[0]?.trim();
    if (first) return first;
  }
  return "unknown";
}

export async function POST(req: Request) {
  const ip = getClientIp(req);

  let body: unknown = null;
  let bodyParseable = false;
  try {
    body = await req.json();
    bodyParseable = true;
  } catch {
    bodyParseable = false;
  }

  const result = await decideContactPost({
    body,
    bodyParseable,
    ip,
    limiter,
    send: (data) =>
      sendLeadEmail(data, {
        apiKey: process.env.RESEND_API_KEY,
        to: process.env.CONTACT_EMAIL_TO,
        from: process.env.EMAIL_FROM,
      }),
  });
  return toResponse(result);
}

export async function GET() {
  return toResponse(decideContactGet());
}
