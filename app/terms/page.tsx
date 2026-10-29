import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, CTABand } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Trustpages terms of service: project scope, payment terms, intellectual property, revisions, hosting, and liability for web design and SEO engagements.",
  alternates: { canonical: "/terms" },
};

const trail = [
  { name: "Home", path: "/" },
  { name: "Terms", path: "/terms" },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of"
        highlight="service"
        intro="The commercial rules we work under. Project-specific scope always takes precedence."
        trail={trail}
      />
      <section className="section">
        <div className="shell prose-tp max-w-3xl">
          <p className="text-[0.85rem] text-body">Last updated: 29 October 2026</p>

          <h2>1. Scope and quotes</h2>
          <p>
            Every project begins with a written scope listing deliverables, pages, revisions, price
            and timeline. Work outside that scope is quoted separately before it starts. Estimates
            are valid for 30 days.
          </p>

          <h2>2. Payment</h2>
          <p>
            Standard terms are 50% to begin and 50% before launch, or milestone-based for larger
            builds. Retainers are invoiced monthly in advance. Invoices are due within 7 days.
            Work may pause on overdue accounts.
          </p>

          <h2>3. Revisions</h2>
          <p>
            Each design stage includes two rounds of consolidated revisions. Additional rounds or
            changes after sign-off are billed at our published hourly rate.
          </p>

          <h2>4. Intellectual property</h2>
          <p>
            On final payment, you own the design files, the code we wrote for you, and all content
            produced for the project. We retain the right to reference the work in our portfolio
            unless you ask otherwise in writing. Third-party assets (fonts, plugins, stock) remain
            under their own licences.
          </p>

          <h2>5. Domain, hosting and accounts</h2>
          <p>
            Domains, hosting, analytics, Search Console and advertising accounts are registered in
            your name. You pay providers directly. We are not liable for outages or policy actions
            by third-party providers.
          </p>

          <h2>6. SEO and results</h2>
          <p>
            Search rankings are controlled by third-party search engines. We commit to doing the
            agreed work to a professional standard and to reporting honestly; we do not and cannot
            guarantee specific rankings, traffic or revenue.
          </p>

          <h2>7. Client responsibilities</h2>
          <p>
            Timely provision of content, approvals and access. Delays in these extend the delivery
            date. You confirm you have rights to any material you supply.
          </p>

          <h2>8. Liability</h2>
          <p>
            Our liability for any claim is limited to the fees paid for the affected engagement in
            the preceding three months. We are not liable for indirect or consequential loss.
          </p>

          <h2>9. Termination</h2>
          <p>
            Either party may end a retainer with 30 days&apos; written notice. Fees for work already
            performed remain payable. On termination we hand over all assets and documentation.
          </p>

          <h2>10. Governing law</h2>
          <p>
            These terms are governed by the laws of India, with jurisdiction in the courts of
            Ayodhya, Uttar Pradesh. Contact:{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a> ·{" "}
            <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a>
          </p>
          <p>
            See also: <Link href="/privacy">Privacy policy</Link>
          </p>
        </div>
      </section>
      <CTABand />
    </>
  );
}
