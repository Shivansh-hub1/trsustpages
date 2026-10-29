import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { PageHero, JsonLd, CTABand, SectionHeading } from "@/components/ui";
import { LOCATIONS, SITE } from "@/lib/site";
import { breadcrumbSchema, graph, localBusinessSchema, abs } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Locations — Bikapur to Worldwide",
  description:
    "We work from Bikapur, Ayodhya: serving Bikapur, Ayodhya, Faizabad, Lucknow and Varanasi in person, plus Dubai, London and New York remotely.",
  alternates: { canonical: "/locations" },
  openGraph: {
    title: "Where Trustpages works",
    description: "Local roots in Ayodhya district, global clients in the UAE, UK and US.",
    url: abs("/locations/"),
  },
};

const trail = [
  { name: "Home", path: "/" },
  { name: "Locations", path: "/locations" },
];

export default function LocationsIndex() {
  const local = LOCATIONS.filter((l) => l.kind === "local");
  const global = LOCATIONS.filter((l) => l.kind === "global");

  return (
    <>
      <JsonLd
        data={graph([
          localBusinessSchema(),
          breadcrumbSchema(trail),
          {
            "@type": "ItemList",
            name: "Trustpages service locations",
            itemListElement: LOCATIONS.map((l, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: l.city,
              url: abs(`/locations/${l.slug}/`),
            })),
          },
        ])}
      />

      <PageHero
        eyebrow="Service areas"
        title="Local roots in Ayodhya,"
        highlight="work that travels"
        intro={
          <>
            Our desk is on Bikapur Main Road in Ayodhya district, Uttar Pradesh. That is where we
            meet clients face to face, and where the local SEO work is sharpest. Everything else
            happens over scheduled calls, shared documents and WhatsApp — which is how we serve
            clients in the Gulf, UK and US.
          </>
        }
        trail={trail}
      />

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Near us"
            title="Uttar Pradesh —"
            highlight="in person"
            intro="Site visits, photo shoots and meetings across Ayodhya district and nearby cities."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {local.map((l) => (
              <Link
                key={l.slug}
                href={`/locations/${l.slug}`}
                className="card group p-6 transition hover:-translate-y-1 hover:border-plum/30 hover:shadow-lift"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-grad text-white">
                    <Icon name="pin" size={19} />
                  </span>
                  <div>
                    <h2 className="h-card !text-[1.05rem]">{l.city}</h2>
                    <p className="text-[0.74rem] text-body">{l.region}, {l.country}</p>
                  </div>
                  <Icon name="arrow" size={16} className="ml-auto text-line transition group-hover:text-plum" />
                </div>
                <p className="mt-4 text-[0.9rem] leading-relaxed text-body">{l.focus}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {l.localProof.slice(0, 3).map((p) => (
                    <li key={p} className="rounded-full bg-mist px-2.5 py-1 text-[0.7rem] text-navy/75">
                      {p}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist/50">
        <div className="shell">
          <SectionHeading
            eyebrow="Remote clients"
            title="Global —"
            highlight="remote first"
            intro="Clear written scope, weekly previews and overlap hours in your time zone. No time-zone theatre."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {global.map((l) => (
              <Link
                key={l.slug}
                href={`/locations/${l.slug}`}
                className="card group p-6 transition hover:-translate-y-1 hover:border-plum/30 hover:shadow-lift"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#f0e2fb] text-[#6b2e88]">
                  <Icon name="globe" size={19} />
                </span>
                <h2 className="h-card mt-4 !text-[1.05rem]">{l.city}</h2>
                <p className="text-[0.74rem] text-body">{l.country}</p>
                <p className="mt-3 text-[0.88rem] leading-relaxed text-body">{l.focus}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-display text-[0.8rem] font-medium text-navy group-hover:text-plum">
                  {l.city} details <Icon name="arrow" size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell card p-6 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="h-card">Trustpages — studio address</h2>
              <address className="mt-3 space-y-2 text-[0.92rem] not-italic text-body">
                <p>{SITE.address.street},<br />{SITE.address.locality}, {SITE.address.region} {SITE.address.postalCode}, India</p>
                <p className="flex items-center gap-2">
                  <Icon name="phone" size={14} className="text-plum" />
                  <a href={`tel:${SITE.phone}`} className="text-navy hover:text-plum">{SITE.phoneDisplay}</a>
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="mail" size={14} className="text-plum" />
                  <a href={`mailto:${SITE.email}`} className="break-all text-navy hover:text-plum">{SITE.email}</a>
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="clock" size={14} className="text-plum" /> {SITE.hours}
                </p>
              </address>
            </div>
            <div>
              <h2 className="h-card">Not on the list?</h2>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-body">
                We work with clients anywhere a call and a shared document will reach. If your city
                is missing, that is a website gap, not a limitation — ask us and we will tell you
                honestly how we would handle the time difference.
              </p>
              <Link href="/contact" className="btn btn-primary btn-sm mt-4">
                Ask about your city <Icon name="arrow" size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
