import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import Faq from "@/components/Faq";
import { PageHero, JsonLd, CTABand } from "@/components/ui";
import { FAQS, SERVICES, SITE } from "@/lib/site";
import { breadcrumbSchema, faqSchema, graph, abs } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ — Websites, Pricing, SEO and AI Search",
  description:
    "Website cost in India, timelines, who owns the domain and code, what AEO and GEO mean, and how we work with Bikapur and global clients. Straight answers.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Frequently asked questions | Trustpages",
    description: "Straight answers on pricing, timelines, SEO and AI search visibility.",
    url: abs("/faq/"),
  },
};

const trail = [
  { name: "Home", path: "/" },
  { name: "FAQ", path: "/faq" },
];

const EXTRA = [
  {
    q: "Do you sign NDAs and contracts?",
    a: "Yes. Every engagement runs on a written scope signed by both sides, and we sign NDAs on request. Payment terms are typically 50% to start and 50% on launch, with larger projects split into milestones.",
  },
  {
    q: "Which industries do you work with?",
    a: "Retail and kirana stores, healthcare and dental clinics, hospitality and homestays, education and coaching, manufacturing, real estate, legal and CA firms, D2C brands, logistics companies and non-profits. The common thread is a business that needs enquiries or orders, not a brochure.",
  },
  {
    q: "Can you write the content as well as build the site?",
    a: "Yes. Copy is part of every build — website text, service pages, FAQs and meta descriptions. We write in English and Hindi, and price additional content writing separately if you need ongoing blog output.",
  },
  {
    q: "What happens if I want to leave?",
    a: "You take everything: domain, hosting, repository, design files, analytics and Search Console access. We write a handover document so the next developer is not guessing.",
  },
  {
    q: "How do you handle payments?",
    a: "UPI, bank transfer or card, with a GST invoice. International clients are invoiced in USD by bank transfer. No auto-renewing contracts without a written renewal date.",
  },
  {
    q: "Do you offer a free audit?",
    a: "Yes — a short written site review covering performance, mobile usability, on-page SEO and conversion blockers. Ask for it on WhatsApp and we will send it within two working days, no obligation.",
  },
];

export default function FaqPage() {
  const all = [...FAQS, ...EXTRA];
  return (
    <>
      <JsonLd
        data={graph([
          faqSchema(all),
          breadcrumbSchema(trail),
          {
            "@type": "WebPage",
            "@id": abs("/faq/#page"),
            name: "Trustpages FAQ",
            isPartOf: { "@id": `${abs("/")}#website` },
            inLanguage: "en-IN",
          },
        ])}
      />

      <PageHero
        eyebrow="Answers, not sales copy"
        title="Frequently asked"
        highlight="questions"
        intro={
          <>
            The questions we actually get on calls, written down with the same answers we give
            there. If yours is missing, WhatsApp us — we will reply the same day in most cases.
          </>
        }
        trail={trail}
      >
        <a
          href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi Trustpages, I have a question.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          <Icon name="whatsapp" size={16} /> Ask your question
        </a>
      </PageHero>

      <section className="section">
        <div className="shell max-w-3xl">
          <h2 className="h-card mb-4">Working with Trustpages</h2>
          <Faq items={FAQS} />
          <h2 className="h-card mb-4 mt-12">Practical details</h2>
          <Faq items={EXTRA} />
        </div>
      </section>

      <section className="border-t border-line bg-mist/50 py-12">
        <div className="shell">
          <h2 className="h-card">Related services</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="inline-flex rounded-full border border-line bg-white px-3.5 py-2 text-[0.82rem] font-medium text-navy transition hover:border-plum/40 hover:text-plum"
                >
                  {s.shortName} — from {s.priceFrom}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand />
    </>
  );
}
