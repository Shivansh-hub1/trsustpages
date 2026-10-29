"use client";

import { useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "./Icons";
import { SITE } from "@/lib/site";

type State = "idle" | "sending" | "saved" | "fallback";

/**
 * Lead form.
 * 1. Saves the enquiry to Supabase via /api/enquiry (stored, owned, queryable).
 * 2. Offers WhatsApp as an instant second channel.
 * If the API is unavailable it degrades to WhatsApp only — no lead is lost.
 */
export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const [state, setState] = useState<State>("idle");
  const [waHref, setWaHref] = useState(`https://wa.me/${SITE.whatsapp}`);
  const pathname = usePathname();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") || "");
    const phone = String(fd.get("phone") || "");
    const email = String(fd.get("email") || "");
    const service = String(fd.get("service") || "");
    const message = String(fd.get("message") || "");
    const company = String(fd.get("company") || ""); // honeypot

    const text = `Hi Trustpages, I'd like a quote.
Name: ${name}
Phone: ${phone}${email ? `\nEmail: ${email}` : ""}
Service: ${service}${message ? `\nAbout my business: ${message}` : ""}`;
    setWaHref(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`);

    setState("sending");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, service, message, company, sourcePage: pathname }),
      });
      const data = await res.json().catch(() => ({ ok: false }));
      if (res.ok && data.ok) {
        setState("saved");
        form.reset();
        return;
      }
      setState("fallback");
    } catch {
      setState("fallback");
    }
  }

  const busy = state === "sending";

  return (
    <form onSubmit={handleSubmit} className="space-y-3" aria-label="Project enquiry form" noValidate={false}>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="lf-name" className="mb-1.5 block font-display text-[0.78rem] font-medium text-navy">
            Your name <span className="text-plum">*</span>
          </label>
          <input id="lf-name" name="name" required autoComplete="name" minLength={2} className="field" placeholder="Ramesh Verma" />
        </div>
        <div>
          <label htmlFor="lf-phone" className="mb-1.5 block font-display text-[0.78rem] font-medium text-navy">
            Phone / WhatsApp <span className="text-plum">*</span>
          </label>
          <input
            id="lf-phone"
            name="phone"
            required
            inputMode="tel"
            autoComplete="tel"
            pattern="[0-9+\s-]{7,16}"
            className="field"
            placeholder="+91 9xxxxxxxxx"
          />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="lf-email" className="mb-1.5 block font-display text-[0.78rem] font-medium text-navy">
            Email
          </label>
          <input id="lf-email" name="email" type="email" autoComplete="email" className="field" placeholder="you@business.com" />
        </div>
        <div>
          <label htmlFor="lf-service" className="mb-1.5 block font-display text-[0.78rem] font-medium text-navy">
            What do you need?
          </label>
          <select id="lf-service" name="service" className="field" defaultValue="Website design & build">
            <option>Website design &amp; build</option>
            <option>Website redesign</option>
            <option>eCommerce store</option>
            <option>Local SEO / Google Business Profile</option>
            <option>SEO retainer</option>
            <option>Google / Meta ads</option>
            <option>AEO &amp; GEO (AI search)</option>
            <option>Something else</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="lf-message" className="mb-1.5 block font-display text-[0.78rem] font-medium text-navy">
          About your business
        </label>
        <textarea
          id="lf-message"
          name="message"
          rows={compact ? 2 : 3}
          className="field resize-none"
          placeholder="What you sell, who you sell to, and what is not working right now."
        />
      </div>

      {/* honeypot — hidden from humans and assistive tech */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="lf-company">Company</label>
        <input id="lf-company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <button type="submit" className="btn btn-primary w-full" disabled={busy}>
        {busy ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Icon name="arrow" size={17} /> Request a free proposal
          </>
        )}
      </button>

      <div className="text-center text-[0.72rem] leading-relaxed text-body" aria-live="polite">
        {state === "saved" && (
          <p className="rounded-xl bg-[#e9f9f0] px-3 py-2 font-medium text-[#1a7f45]">
            Got it — your enquiry is saved. We reply {SITE.responseWindow}.
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="mt-1 block underline underline-offset-2">
              Want an answer sooner? Send it on WhatsApp too →
            </a>
          </p>
        )}

        {state === "fallback" && (
          <p className="rounded-xl bg-[#fff6e6] px-3 py-2 font-medium text-[#8a5a00]">
            We couldn&apos;t save the form just now.{" "}
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
              Send it on WhatsApp instead
            </a>{" "}
            — same details, no retyping.
          </p>
        )}

        {(state === "idle" || state === "sending") && (
          <>
            Saved securely and never shared. Prefer email?{" "}
            <a href={`mailto:${SITE.email}`} className="text-plum underline underline-offset-2">
              {SITE.email}
            </a>{" "}
            · or{" "}
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="text-plum underline underline-offset-2">
              chat on WhatsApp
            </a>
          </>
        )}
      </div>
    </form>
  );
}
