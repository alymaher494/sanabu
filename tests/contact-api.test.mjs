/**
 * Contact API decision-table tests (no network, no database, no email).
 *
 * Run: `npm test`  →  node --test tests/contact-api.test.mjs
 */
import { describe, it } from "node:test";
import assert from "node:assert/strict";

import {
  buildLeadEmail,
  createRateLimiter,
  decideContactGet,
  decideContactPost,
  PRIVACY_POLICY_VERSION,
  sendLeadEmail,
} from "../src/lib/contact.ts";

const validBody = () => ({
  name: "  Max Mustermann  ",
  email: "max@beispiel.de",
  phone: "+49 1590 123456",
  service: "Sanierung & Renovierung",
  message: "Bitte um ein Angebot für eine Badsanierung in Kahl.",
  consent: true,
  website: "",
  startedAt: Date.now() - 30_000,
});

const okSend = async () => ({ ok: true });
const failSend = async () => ({ ok: false });

describe("POST /api/contact", () => {
  it("valid submission → 201 and sends trimmed lead", async () => {
    let sent = null;
    const res = await decideContactPost({
      body: validBody(),
      bodyParseable: true,
      ip: "10.0.0.1",
      limiter: createRateLimiter(),
      send: async (data) => {
        sent = data;
        return { ok: true };
      },
    });
    assert.equal(res.status, 201);
    assert.equal(res.json.success, true);
    assert.equal(sent.name, "Max Mustermann");
  });

  it("invalid email → 422 with field errors", async () => {
    const res = await decideContactPost({
      body: { ...validBody(), email: "keine-mail" },
      bodyParseable: true,
      ip: "10.0.0.2",
      limiter: createRateLimiter(),
      send: okSend,
    });
    assert.equal(res.status, 422);
    assert.ok(res.json.fieldErrors.email);
  });

  it("missing required field → 422", async () => {
    const { name, ...rest } = validBody();
    assert.ok(name.length > 0 && !("name" in rest)); // guard: field actually removed
    const res = await decideContactPost({
      body: rest,
      bodyParseable: true,
      ip: "10.0.0.3",
      limiter: createRateLimiter(),
      send: okSend,
    });
    assert.equal(res.status, 422);
    assert.ok(res.json.fieldErrors.name);
  });

  it("consent false → 422", async () => {
    const res = await decideContactPost({
      body: { ...validBody(), consent: false },
      bodyParseable: true,
      ip: "10.0.0.4",
      limiter: createRateLimiter(),
      send: okSend,
    });
    assert.equal(res.status, 422);
    assert.ok(res.json.fieldErrors.consent);
  });

  it("oversized message → 422", async () => {
    const res = await decideContactPost({
      body: { ...validBody(), message: "x".repeat(2001) },
      bodyParseable: true,
      ip: "10.0.0.5",
      limiter: createRateLimiter(),
      send: okSend,
    });
    assert.equal(res.status, 422);
  });

  it("honeypot filled → silent success, nothing sent", async () => {
    let called = false;
    const res = await decideContactPost({
      body: { ...validBody(), website: "http://spam.example" },
      bodyParseable: true,
      ip: "10.0.0.6",
      limiter: createRateLimiter(),
      send: async () => {
        called = true;
        return { ok: true };
      },
    });
    assert.equal(res.status, 200);
    assert.equal(res.json.success, true);
    assert.equal(res.suppressed, true);
    assert.equal(called, false);
  });

  it("implausibly fast submission → silent success, nothing sent", async () => {
    let called = false;
    const now = Date.now();
    const res = await decideContactPost({
      body: { ...validBody(), startedAt: now - 100 },
      bodyParseable: true,
      ip: "10.0.0.7",
      now,
      limiter: createRateLimiter(),
      send: async () => {
        called = true;
        return { ok: true };
      },
    });
    assert.equal(res.status, 200);
    assert.equal(res.suppressed, true);
    assert.equal(called, false);
  });

  it("6 rapid submissions → 6th is 429 with Retry-After", async () => {
    const limiter = createRateLimiter();
    const now = Date.now();
    let last = null;
    for (let i = 0; i < 6; i++) {
      last = await decideContactPost({
        body: validBody(),
        bodyParseable: true,
        ip: "10.0.0.8",
        now: now + i * 100,
        limiter,
        send: okSend,
      });
    }
    assert.equal(last.status, 429);
    assert.ok(Number(last.headers["Retry-After"]) > 0);
  });

  it("unparseable body → 400", async () => {
    const res = await decideContactPost({
      body: null,
      bodyParseable: false,
      ip: "10.0.0.9",
      limiter: createRateLimiter(),
      send: okSend,
    });
    assert.equal(res.status, 400);
  });

  it("provider failure → safe 500 without internals", async () => {
    const res = await decideContactPost({
      body: validBody(),
      bodyParseable: true,
      ip: "10.0.0.10",
      limiter: createRateLimiter(),
      send: failSend,
    });
    assert.equal(res.status, 500);
    const text = JSON.stringify(res.json);
    assert.ok(!text.includes("Max Mustermann"));
    assert.ok(!text.includes("stack"));
    assert.ok(res.json.error);
  });
});

describe("GET /api/contact", () => {
  it("→ 405 with Allow: POST", () => {
    const res = decideContactGet();
    assert.equal(res.status, 405);
    assert.equal(res.headers.Allow, "POST");
  });
});

describe("lead email", () => {
  it("contains all lead fields + consent version, no tech internals", () => {
    const { subject, text } = buildLeadEmail(
      {
        name: "Max Mustermann",
        email: "max@beispiel.de",
        phone: "+49 1590 123456",
        service: "Abbrucharbeiten",
        message: "Bitte Keller entrümpeln.",
      },
      "2026-10-10T00:00:00.000Z"
    );
    for (const needle of [
      "Max Mustermann",
      "max@beispiel.de",
      "+49 1590 123456",
      "Abbrucharbeiten",
      "Bitte Keller entrümpeln.",
      PRIVACY_POLICY_VERSION,
    ]) {
      assert.ok(text.includes(needle), `missing: ${needle}`);
    }
    assert.ok(subject.includes("Abbrucharbeiten"));
  });

  it("missing provider config → ok:false and log contains no PII", async () => {
    const logs = [];
    const res = await sendLeadEmail(
      {
        name: "Max Mustermann",
        email: "max@beispiel.de",
        phone: "+49 1",
        service: "Sonstiges",
        message: "Hallo",
      },
      {},
      async () => {
        throw new Error("must not be called");
      },
      (m) => logs.push(m)
    );
    assert.equal(res.ok, false);
    assert.ok(!logs.join("\n").includes("Max Mustermann"));
  });

  it("sends via provider with auth header and sanitized reply_to", async () => {
    let seen = null;
    const res = await sendLeadEmail(
      {
        name: "Max",
        email: "evil@example.de\r\nBcc: victim@example.de",
        phone: "+49 1",
        service: "Sonstiges",
        message: "Hallo",
      },
      { apiKey: "test-key", to: "owner@example.de", from: "Site <noreply@example.de>" },
      async (_url, init) => {
        seen = init;
        return new Response("{}", { status: 200 });
      },
      () => {}
    );
    assert.equal(res.ok, true);
    assert.equal(seen.headers.Authorization, "Bearer test-key");
    const payload = JSON.parse(seen.body);
    assert.ok(!payload.reply_to.includes("\r"));
    assert.ok(!payload.reply_to.includes("\n"));
    assert.equal(payload.text.includes("Max"), true);
  });
});
