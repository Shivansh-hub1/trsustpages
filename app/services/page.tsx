import type { Metadata } from "next";
import Link from "next/link";
import { Icon, type IconName } from "@/components/Icons";
import { PageHero, JsonLd, CTABand, SectionHeading, CheckList } from "@/components/ui";
import { SERVICES, PROCESS } from "@/lib/site";
import { breadcrumbSchema, servicesItemListSchema, graph, abs } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Services — Design, SEO & AI Search",
  description:
    "Web design, Next.js development, eCommerce, SEO, ads and AEO/GEO from our Bikapur studio. Fixed scope, transparent pricing from ₹15,000/mo.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Trustpages, Bikapur (Ayodhya)",
    description:
      "Design, build, rank and get cited. Six services, one accountable team, transparent starting prices.",
    url: abs("/services/"),
  },
};

const trail = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={graph([servicesItemListSchema(), breadcrumbSchema(trail)])} />

      <PageHero
        eyebrow="Services · transparent pricing"
        title="Design, build, rank —"
        highlight="and get cited"
        intro={
          <>
            Six services that cover the whole path from “we need a website” to “we are the answer
            people find”. Pick one, or let us sequence them for you. Every price below is a real
            starting point, not a teaser.
          </>
        }
        trail={trail}
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-primary">
            Book a free 30-min call <Icon name="arrow" size={16} />
          </Link>
          <Link href="/work" className="btn btn-outline">
            See results first
          </Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="shell space-y-5">
          {SERVICES.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className="card grid gap-6 p-6 md:p-8 lg:grid-cols-[1.15fr_1fr] lg:items-center"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-grad text-white">
                    <Icon name={s.icon as IconName} size={22} strokeWidth={2} />
                  </span>
                  <div>
                    <p className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-body">
                      0{i + 1} · {s.tagline}
                    </p>
                    <h2 className="h-card mt-0.5">{s.name}</h2>
                  </div>
                </div>

                <p className="mt-4 text-[0.93rem] leading-relaxed text-body">{s.blurb}</p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Link href={`/services/${s.slug}`} className="btn btn-primary btn-sm">
                    Details &amp; pricing <Icon name="arrow" size={14} />
                  </Link>
                  <span className="rounded-full bg-mist px-3 py-1.5 font-display text-[0.78rem] font-semibold text-navy">
                    from {s.priceFrom}
                  </span>
                </div>
              </div>

              <div className="rounded-[18px] bg-mist/60 p-5">
                <p className="font-display text-[0.72rem] font-semibold uppercase tracking-wider text-plum">
                  Included
                </p>
                <CheckList className="mt-3" items={s.deliverables.slice(0, 4)} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-mist/50">
        <div className="shell">
          <SectionHeading
            align="center"
            eyebrow="How the work runs"
            title="The same four stages,"
            highlight="whichever service you choose"
          />
          <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <li key={p.step} className="card p-5">
                <span className="font-display text-[1.5rem] font-semibold leading-none text-plum/25">{p.step}</span>
                <h3 className="mt-2 font-display text-[0.98rem] font-semibold text-navy">{p.title}</h3>
                <p className="mt-1.5 text-[0.85rem] leading-relaxed text-body">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTABand />
    </>
  );
}
