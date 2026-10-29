import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, CTABand } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Trustpages collects, uses and protects personal data submitted through this website, including WhatsApp enquiries, analytics and cookie usage.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const trail = [
  { name: "Home", path: "/" },
  { name: "Privacy", path: "/privacy" },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        highlight="policy"
        intro="What we collect, why, and how to make us delete it."
        trail={trail}
      />
      <section className="section">
        <div className="shell prose-tp max-w-3xl">
          <p className="text-[0.85rem] text-body">
            Last updated: 29 October 2026 · Applies to {SITE.url}
          </p>

          <h2>What we collect</h2>
          <p>
            We collect only what you send us. If you use the enquiry form, that means the name,
            phone number, email, service interest and message you enter. The form opens WhatsApp
            with your details pre-filled — the message is delivered through WhatsApp and is subject
            to WhatsApp&apos;s own privacy terms until it reaches us.
          </p>
          <p>
            If you call or email, we keep the contact details you give us so we can reply and follow
            up on the project.
          </p>

          <h2>Analytics</h2>
          <p>
            We use privacy-respecting analytics to understand which pages are useful. We do not sell
            data, we do not build advertising profiles of visitors, and we do not run third-party
            tracking pixels on enquiry pages.
          </p>

          <h2>How long we keep it</h2>
          <p>
            Enquiries that do not become projects are deleted within 12 months. Project records are
            kept for as long as required for tax and contractual reasons, and then deleted.
          </p>

          <h2>Your rights</h2>
          <p>
            Write to <a href={`mailto:${SITE.email}`}>{SITE.email}</a> to ask what we hold about you,
            to correct it, or to have it deleted. We respond within 30 days. If you are in the EU or
            UK, you also have the right to complain to your local data protection authority.
          </p>

          <h2>Cookies</h2>
          <p>
            This site sets no advertising cookies. Any analytics cookie we use is first-party and
            aggregated. You can block cookies in your browser without losing access to any page.
          </p>

          <h2>Contact</h2>
          <p>
            {SITE.legalName}, {SITE.address.street}, {SITE.address.locality},{" "}
            {SITE.address.region} {SITE.address.postalCode}, India ·{" "}
            <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a> ·{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
          <p>
            See also: <Link href="/terms">Terms of service</Link>
          </p>
        </div>
      </section>
      <CTABand />
    </>
  );
}
