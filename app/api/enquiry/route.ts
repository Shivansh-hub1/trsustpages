import { NextResponse } from "next/server";

/**
 * Lead capture endpoint.
 * Writes enquiries to Supabase (table: public.enquiries) using the service role key.
 * The key never reaches the browser — it lives in server-side env vars only.
 *
 * Required env vars (set in Vercel → Project → Settings → Environment Variables):
 *   SUPABASE_URL
 *   SUPABASE_SERVICE_ROLE_KEY
 */

type Body = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
  sourcePage?: string;
};

const clean = (v: unknown, max = 2000) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

// Very small in-memory throttle. Vercel functions are per-instance, so this is a
// speed bump rather than a hard guarantee — good enough to stop naive form spam.
const hits = new Map<string, { count: number; ts: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 6;

function throttled(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now - entry.ts > WINDOW_MS) {
    hits.set(ip, { count: 1, ts: now });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_HITS;
}

export async function POST(request: Request) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    return NextResponse.json(
      { ok: false, error: "not_configured" },
      { status: 503 },
    );
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (throttled(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "bad_json" }, { status: 400 });
  }

  const name = clean(body.name, 120);
  const phone = clean(body.phone, 32);
  const email = clean(body.email, 160);
  const service = clean(body.service, 120);
  const message = clean(body.message, 2000);
  const sourcePage = clean(body.sourcePage, 200);

  // Honeypot: bots fill hidden fields. Silently accept and discard.
  if (clean((body as Record<string, unknown>).company, 100)) {
    return NextResponse.json({ ok: true });
  }

  if (name.length < 2 || phone.replace(/\D/g, "").length < 7) {
    return NextResponse.json({ ok: false, error: "invalid_input" }, { status: 422 });
  }

  try {
    const res = await fetch(`${url}/rest/v1/enquiries`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify([
        {
          name,
          phone,
          email: email || null,
          service: service || null,
          message: message || null,
          source_page: sourcePage || null,
          referrer: request.headers.get("referer") || null,
          user_agent: request.headers.get("user-agent") || null,
        },
      ]),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Supabase insert failed", res.status, detail.slice(0, 500));
      return NextResponse.json({ ok: false, error: "db_error" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Enquiry route error", err);
    return NextResponse.json({ ok: false, error: "unexpected" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: false, error: "method_not_allowed" }, { status: 405 });
}
