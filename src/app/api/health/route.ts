import { NextResponse } from "next/server";

/**
 * GET /api/health — lightweight liveness probe (no database dependency).
 * Exposes no environment, paths, or provider details by design.
 */
export async function GET() {
  return NextResponse.json({ status: "ok" }, { status: 200 });
}
