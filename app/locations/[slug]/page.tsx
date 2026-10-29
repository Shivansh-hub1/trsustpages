import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon, type IconName } from "@/components/Icons";
import Faq from "@/components/Faq";
import { PageHero, JsonLd, CheckList, CTABand, SectionHeading } from "@/components/ui";
import { LOCATIONS, SERVICES, SITE } from "@/lib/site";
import { breadcrumbSchema, faqSchema, graph, abs } from "@/lib/schema";

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) return {};
  const title = `Web Design & SEO in ${loc.city}`;
  return {
    title,
    description: `Web design, development and SEO for ${loc.city} businesses — built by Trustpages from Bikapur, Ayodhya. ${loc.focus}`.slice(0, 158),
    alternates: { canonical: `/locations/${loc.slug}` },
    keywords: [
      `web design ${loc.city}`,
      `website developer ${loc.city}`,
      `SEO agency ${loc.city}`,
      `digital marketing ${loc.city}`,
    ],
    openGraph: {
      title: `${title} | Trustpages`,
      description: loc.focus,
      url: abs(`/locations/${loc.slug}/`),
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) notFound();

  const trail = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations" },
    { name: loc.city, path: `/locations/${loc.slug}` },
  ];
  const others = LOCATIONS.filter((l) => l.slug !== loc.slug);

  return (
    <>
      <JsonLd
        data={graph([
          {
            "@type": "WebPage",
            "@id": abs(`/locations/${loc.slug}/#page`),
            name: `Web design and SEO in ${loc.city}`,
            description: loc.intro,
            isPartOf: { "@id": `${abs("/")}#website` },
            about: { "@id": `${abs("/")}#localbusiness` },
            inLanguage: "en-IN",
          },
          {
            "@type": "Service",
            "@id": abs(`/locations/${loc.slug}/#service`),
            name: `Web design, development and SEO in ${loc.city}`,
            serviceType: "Web design and digital marketing",
            provider: { "@id": `${abs("/")}#localbusiness` },
            areaServed: {
              "@type": "City",
              name: loc.city,
              containedInPlace: { "@type": "AdministrativeArea", name: loc.region },
              address: { "@type": "PostalAddress", addressCountry: loc.country },
            },
            description: loc.focus,
          },
          faqSchema(loc.faqs),
          breadcrumbSchema(trail),
        ])}
      />

      <PageHero
        eyebrow={`${loc.kind === "local" ? "Local" : "Global"} · ${loc.city}, ${loc.country}`}
        title={`Web design & SEO in`}
        highlight={loc.city}
        intro={loc.intro}
        trail={trail}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/contact" className="btn btn-primary">
            Get a quote for {loc.city} <Icon name="arrow" size={16} />
          </Link>
          <a href={`tel:${SITE.phone}`} className="btn btn-outline">
            <Icon name="phone" size={15} /> {SITE.phoneDisplay}
          </a>
        </div>
      </PageHero>

      {/* Answer-first summary — the block search engines and LLMs lift */}
      <section className="border-b border-line bg-white py-10">
        <div className="shell max-w-3xl">
          <h2 className="font-display text-[1.1rem] font-semibold text-navy">
            Who builds websites in {loc.city}?
          </h2>
          <p className="mt-3 text-[0.97rem] leading-relaxed text-body">
            <strong className="text-navy">Trustpages</strong> designs, builds and ranks websites for
            businesses in {loc.city}, {loc.region === loc.country ? "" : loc.region + ", "}
            {loc.country}. {loc.focus} Projects typically start at ₹24,999 for a
            five-page website and ₹15,000/month for SEO, with a fixed written scope agreed before
            work begins. Contact: {SITE.phoneDisplay} · {SITE.email}.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow">Why {loc.city} businesses work with us</p>
            <h2 className="h-section mt-3">
              What is different about working in{" "}
              <span className="grad-text">{loc.city}</span>
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-body">{loc.focus}</p>
            <CheckList className="mt-6" items={loc.localProof} />

            <div className="mt-8 rounded-[20px] border border-line bg-mist/70 p-5">
              <p className="font-display text-[0.74rem] font-semibold uppercase tracking-wider text-plum">
                Service area
              </p>
              <p className="mt-1.5 text-[0.9rem] leading-relaxed text-navy/80">
                {loc.city} · {loc.landmark}. Our studio is on Bikapur Main Road, Ayodhya district —
                roughly {loc.kind === "local" ? "within an hour of most of our local clients" : "a remote-first relationship with scheduled overlap hours"}.
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow">Available in {loc.city}</p>
            <h2 className="h-section mt-3">Services we deliver here</h2>
            <ul className="mt-6 grid gap-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="card-flat group flex items-center gap-3 p-4 transition hover:-translate-y-0.5 hover:border-plum/30 hover:shadow-soft"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#f0e2fb] text-[#6b2e88] transition group-hover:bg-grad group-hover:text-white">
                      <Icon name={s.icon as IconName} size={16} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-[0.88rem] font-medium text-navy">{s.shortName}</span>
                      <span className="block truncate text-[0.74rem] text-body">from {s.priceFrom}</span>
                    </span>
                    <Icon name="arrow" size={14} className="ml-auto shrink-0 text-line transition group-hover:text-plum" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-mist/50">
        <div className="shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">FAQ · {loc.city}</p>
            <h2 className="h-section mt-3">Local questions, answered</h2>
            <p className="mt-4 text-[0.9rem] text-body">
              Call {SITE.phoneDisplay} or message us on WhatsApp for anything not covered here.
            </p>
          </div>
          <Faq items={loc.faqs} />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            align="center"
            eyebrow="Other locations"
            title="We also work in"
            highlight="these places"
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/locations/${o.slug}`}
                className="card-flat group flex items-center gap-3 p-4 transition hover:-translate-y-0.5 hover:border-plum/30 hover:shadow-soft"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-mist text-plum">
                  <Icon name={o.kind === "local" ? "pin" : "globe"} size={17} />
                </span>
                <span>
                  <span className="block font-display text-[0.9rem] font-medium text-navy">Web design in {o.city}</span>
                  <span className="block text-[0.72rem] text-body">{o.region}, {o.country}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title={`Let's talk about your ${loc.city} project`}
        body="Tell us what you sell and who buys it. You'll get a written scope, a fixed price and a launch date — usually within two working days."
      />
    </>
  );
}
