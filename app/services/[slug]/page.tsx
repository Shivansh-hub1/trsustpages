import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon, type IconName } from "@/components/Icons";
import Faq from "@/components/Faq";
import { PageHero, SectionHeading, JsonLd, CheckList, CTABand, Breadcrumbs } from "@/components/ui";
import { SERVICES, SITE, LOCATIONS } from "@/lib/site";
import { breadcrumbSchema, faqSchema, graph, serviceSchema, abs } from "@/lib/schema";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  const title = `${service.shortName} in Bikapur, Ayodhya`;
  const description = `${service.tagline}. ${service.name} from Trustpages in Bikapur, Ayodhya — from ${service.priceFrom}. Fixed scope, India & worldwide.`.slice(0, 158);
  return {
    title,
    description,
    alternates: { canonical: `/services/${service.slug}` },
    keywords: service.keywords,
    openGraph: {
      title: `${title} | Trustpages`,
      description,
      url: abs(`/services/${service.slug}/`),
      type: "article",
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = SERVICES.filter((s) => s.slug !== service.slug);
  const trail = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.shortName, path: `/services/${service.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={graph([
          serviceSchema(service),
          faqSchema(service.faqs),
          breadcrumbSchema(trail),
        ])}
      />

      <PageHero
        eyebrow={`${service.tagline} · from ${service.priceFrom}`}
        title={service.shortName}
        highlight="that pays for itself"
        intro={service.blurb}
        trail={trail}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/contact" className="btn btn-primary">
            Get a fixed quote <Icon name="arrow" size={16} />
          </Link>
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
              `Hi Trustpages, I'm interested in ${service.name}.`,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <Icon name="whatsapp" size={16} /> Ask a question
          </a>
          <span className="text-[0.8rem] text-body">Reply {SITE.responseWindow}</span>
        </div>
      </PageHero>

      {/* Quick answer block — the passage AI assistants and snippets lift */}
      <section className="border-b border-line bg-white py-10">
        <div className="shell max-w-3xl">
          <h2 className="font-display text-[1.1rem] font-semibold text-navy">
            What is {service.shortName.toLowerCase()} at Trustpages?
          </h2>
          <p className="mt-3 text-[0.97rem] leading-relaxed text-body">
            <strong className="text-navy">{service.name}</strong> is delivered by Trustpages from
            Bikapur, Ayodhya, Uttar Pradesh, starting at {service.priceFrom}. {service.hook}{" "}
            Engagements run for businesses in India and remotely for clients in the UAE, UK and US,
            and every scope is fixed in writing before work starts.
          </p>
        </div>
      </section>

      {/* Deliverables + outcomes */}
      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="eyebrow">What you get</p>
            <h2 className="h-section mt-3">Deliverables, spelled out</h2>
            <CheckList className="mt-6" items={service.deliverables} />
            <div className="mt-8 rounded-[20px] border border-line bg-mist/70 p-5">
              <p className="font-display text-[0.8rem] font-semibold uppercase tracking-wider text-plum">
                Investment
              </p>
              <p className="mt-1 font-display text-[1.6rem] font-semibold text-navy">
                from {service.priceFrom}
              </p>
              <p className="mt-1 text-[0.82rem] text-body">
                Fixed scope, fixed price. GST invoiced separately. No lock-in beyond the agreed
                project term.
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow">Outcomes</p>
            <h2 className="h-section mt-3">What actually changes</h2>
            <div className="mt-6 space-y-4">
              {service.outcomes.map((o) => (
                <div key={o.title} className="card-flat p-5">
                  <h3 className="font-display text-[1rem] font-semibold text-navy">{o.title}</h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-body">{o.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-mist/50">
        <div className="shell">
          <SectionHeading
            eyebrow="Process"
            title="How this engagement"
            highlight="runs"
            intro="Four stages, each with a clear output you approve before we move on."
          />
          <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p) => (
              <li key={p.step} className="card p-5">
                <span className="font-display text-[1.5rem] font-semibold leading-none text-plum/25">{p.step}</span>
                <h3 className="mt-2 font-display text-[0.98rem] font-semibold text-navy">{p.title}</h3>
                <p className="mt-1.5 text-[0.85rem] leading-relaxed text-body">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Local + service cross links (internal linking for SEO) */}
      <section className="section">
        <div className="shell grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="h-card">{service.shortName} in your city</h2>
            <p className="mt-2 text-[0.9rem] text-body">
              This service is delivered across these locations, with local specifics on each page.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {LOCATIONS.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/locations/${l.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-2 text-[0.82rem] font-medium text-navy transition hover:border-plum/40 hover:text-plum"
                  >
                    <Icon name={l.kind === "local" ? "pin" : "globe"} size={13} />
                    {service.shortName} in {l.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="h-card">Other services</h2>
            <p className="mt-2 text-[0.9rem] text-body">
              Most clients pair this with one other discipline. These are the common combinations.
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/services/${o.slug}`}
                    className="flex items-center gap-2.5 rounded-2xl border border-line bg-white p-3 text-[0.85rem] font-medium text-navy transition hover:border-plum/40 hover:text-plum"
                  >
                    <Icon name={o.icon as IconName} size={15} className="text-plum" />
                    {o.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-mist/50">
        <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="h-section mt-3">Questions about {service.shortName.toLowerCase()}</h2>
            <p className="mt-4 text-[0.9rem] text-body">
              Still unsure? Message us — we will tell you honestly if this is not the right service
              for where your business is today.
            </p>
            <div className="mt-6">
              <Breadcrumbs trail={trail} />
            </div>
          </div>
          <Faq items={service.faqs} />
        </div>
      </section>

      <CTABand
        title={`Ready to start on ${service.shortName.toLowerCase()}?`}
        body="Send us your goals and current site (if you have one). You'll get a written scope and fixed price within two working days."
      />
    </>
  );
}
