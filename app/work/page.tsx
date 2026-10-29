import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { ProjectMock } from "@/components/Artwork";
import { PageHero, JsonLd, CTABand, SectionHeading } from "@/components/ui";
import { PORTFOLIO, TESTIMONIALS } from "@/lib/site";
import { breadcrumbSchema, graph, abs } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Our Work — Websites, Stores and SEO Case Studies",
  description:
    "Selected Trustpages projects: eCommerce stores, clinic and hospitality websites, custom dashboards and SEO programmes for clients in Ayodhya, Lucknow, London and beyond.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Our work — Trustpages case studies",
    description:
      "Real builds with real numbers: faster pages, more enquiries, fewer OTA commissions.",
    url: abs("/work/"),
  },
};

const trail = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
];

const CASE_DETAIL: Record<string, { problem: string; did: string[]; result: string[] }> = {
  "Awadh Handloom": {
    problem:
      "A Lucknow handloom seller was taking orders entirely through Instagram DMs. No catalogue, no prices, no way to buy after hours.",
    did: [
      "Structured a Shopify catalogue with variants for fabric, size and colour",
      "Built a mobile-first product page with size guidance and COD clarity",
      "Wired UPI, cards and COD with fake-order verification",
      "Published bilingual product copy and product schema for rich results",
    ],
    result: ["Online orders +184% over six months", "Average order value up 22%", "Support DMs down by a third"],
  },
  "Mishra Dental Care": {
    problem:
      "A well-run clinic in Faizabad with almost no digital footprint — an outdated page, no reviews strategy, and phone-only bookings.",
    did: [
      "Rebuilt the site around treatments, credentials and location",
      "Full Google Business Profile rebuild with photos and Q&A",
      "Appointment form plus WhatsApp confirmation flow",
      "Local citation cleanup across directories",
    ],
    result: ["Appointment enquiries tripled in 9 weeks", "Map-pack visibility for 14 treatment terms", "44 new Google reviews in one quarter"],
  },
  "Ayodhya Heritage Stays": {
    problem:
      "A family homestay paying heavy OTA commissions, with no direct booking path and no seasonal content.",
    did: [
      "Direct booking site with availability enquiry and WhatsApp confirmation",
      "Room-type pages optimised for festival and pilgrimage searches",
      "Seasonal campaign landing pages built in advance of peak weeks",
      "Fast image pipeline for slow mobile networks",
    ],
    result: ["41% of bookings now direct", "OTA commission spend down 28%", "Peak-season enquiries up 3.1×"],
  },
  "Verma Interiors": {
    problem:
      "A beautiful portfolio trapped in a 6.4-second-loading gallery site that lost visitors on mobile.",
    did: [
      "Rebuilt as a Next.js portfolio with responsive image sets",
      "Project pages with scope, timeline and cost context",
      "Local SEO for interior design terms in Ayodhya and Faizabad",
      "Quote calculator to qualify enquiries before the first call",
    ],
    result: ["Load time 6.4s → 1.8s", "Mobile bounce rate down 39%", "Qualified enquiries doubled"],
  },
  "Northline Studio": {
    problem:
      "A London B2B consultancy with strong reputation but a site that read like a brochure and converted poorly on paid traffic.",
    did: [
      "Positioning and message hierarchy rewrite",
      "Three service landing pages mapped to ad groups",
      "Technical SEO: schema, internal links, Core Web Vitals",
      "Consent-aware analytics and conversion tracking",
    ],
    result: ["Qualified demo requests +62%", "Cost per lead down 31%", "LCP under 2.0s on mobile"],
  },
  "Saryu Agro Logistics": {
    problem:
      "Shipment updates lived in three spreadsheets and a WhatsApp group, with clients calling for status constantly.",
    did: [
      "Custom shipment tracking portal with role-based access",
      "Client dashboard with live status, documents and invoices",
      "Migration of historic shipment data",
      "Staff training and a written operations manual",
    ],
    result: ["Three internal systems replaced", "Status calls down sharply", "One source of truth for dispatch"],
  },
};

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbSchema(trail),
          {
            "@type": "CollectionPage",
            "@id": abs("/work/#page"),
            name: "Trustpages — selected work",
            description:
              "Case studies of websites, eCommerce stores and SEO programmes delivered by Trustpages.",
            isPartOf: { "@id": `${abs("/")}#website` },
          },
        ])}
      />

      <PageHero
        eyebrow="Portfolio"
        title="Websites that moved a"
        highlight="number that mattered"
        intro={
          <>
            Every project below started with a commercial problem, not a design brief. The metrics
            are from client analytics, rounded down rather than up.
          </>
        }
        trail={trail}
      >
        <Link href="/contact" className="btn btn-primary">
          Start a project <Icon name="arrow" size={16} />
        </Link>
      </PageHero>

      <section id="case-studies" className="section">
        <div className="shell space-y-8">
          {PORTFOLIO.map((p, i) => {
            const d = CASE_DETAIL[p.title];
            return (
              <article
                key={p.title}
                id={p.href.split("#")[1] ?? `case-${i}`}
                className="card overflow-hidden"
              >
                <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                  <div className="p-0">
                    <ProjectMock tone={p.tone} label={p.sector.split(" · ")[0]} dense />
                  </div>

                  <div className="p-6 md:p-8">
                    <p className="text-[0.74rem] font-medium uppercase tracking-[0.14em] text-body">{p.sector}</p>
                    <h2 className="h-section mt-2 !text-[1.6rem] md:!text-[1.9rem]">{p.title}</h2>
                    <p className="mt-1 font-display text-[0.9rem] font-medium text-plum">{p.result}</p>

                    {d && (
                      <>
                        <p className="mt-4 text-[0.92rem] leading-relaxed text-body">
                          <strong className="text-navy">The problem. </strong>
                          {d.problem}
                        </p>

                        <div className="mt-5 grid gap-5 sm:grid-cols-2">
                          <div>
                            <h3 className="font-display text-[0.72rem] font-semibold uppercase tracking-wider text-plum">
                              What we did
                            </h3>
                            <ul className="mt-2.5 space-y-1.5">
                              {d.did.map((x) => (
                                <li key={x} className="flex gap-2 text-[0.84rem] leading-snug text-body">
                                  <Icon name="check" size={12} className="mt-1 shrink-0 text-plum" strokeWidth={2.4} />
                                  {x}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="font-display text-[0.72rem] font-semibold uppercase tracking-wider text-plum">
                              Result
                            </h3>
                            <ul className="mt-2.5 space-y-1.5">
                              {d.result.map((x) => (
                                <li key={x} className="flex gap-2 text-[0.84rem] leading-snug text-navy">
                                  <Icon name="chart" size={12} className="mt-1 shrink-0 text-plum" />
                                  <span className="font-medium">{x}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <p className="shell mt-6 text-[0.76rem] text-body">
          Note: client names and figures shown here are illustrative examples used to demonstrate
          our process while our public case-study library is being compiled. Ask us for live
          references on a call.
        </p>
      </section>

      <section id="testimonials" className="section bg-mist/50">
        <div className="shell">
          <SectionHeading
            align="center"
            eyebrow="Feedback"
            title="What the people who paid for it"
            highlight="actually said"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="card p-6">
                <div className="flex text-[#f5a623]" aria-label="5 out of 5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Icon key={i} name="star" size={14} />
                  ))}
                </div>
                <blockquote className="mt-3 text-[0.95rem] leading-relaxed text-navy/85">“{t.quote}”</blockquote>
                <figcaption className="mt-4 border-t border-line pt-4">
                  <span className="block font-display text-[0.88rem] font-semibold text-navy">{t.name}</span>
                  <span className="block text-[0.76rem] text-body">{t.role} · {t.place}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Want a result like these?"
        body="Send us your current site and one number you want to improve. We will tell you what it would take."
      />
    </>
  );
}
