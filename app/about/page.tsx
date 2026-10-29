import type { Metadata } from "next";
import Link from "next/link";
import { Icon, type IconName } from "@/components/Icons";
import { PageHero, JsonLd, CTABand, SectionHeading, CheckList, StatStrip } from "@/components/ui";
import { SITE, STATS, DIFFERENTIATORS, PROCESS } from "@/lib/site";
import { breadcrumbSchema, graph, organizationSchema, abs } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Trustpages — a web studio in Bikapur, Ayodhya",
  description:
    "A small web design and growth studio in Bikapur, Ayodhya. Since 2021 we have delivered 60+ websites for local businesses and international brands.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Trustpages — Bikapur, Ayodhya",
    description:
      "A small studio with big-agency standards: designers and developers who own the outcome, not just the deliverable.",
    url: abs("/about/"),
  },
};

const trail = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

const VALUES: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "handshake",
    title: "Say the honest thing",
    body: "If a project will not pay back, we say so before you spend. If a month went badly, the report says that too. Trust is the product.",
  },
  {
    icon: "target",
    title: "Scope before pixels",
    body: "Every engagement starts with a written scope, a price and a date. Surprises belong in birthdays, not invoices.",
  },
  {
    icon: "bolt",
    title: "Performance is a feature",
    body: "A page that loads in six seconds is a design failure, however it looks. We set budgets and hold the build to them.",
  },
  {
    icon: "shield",
    title: "Own your assets",
    body: "Domain, hosting, code, design files, analytics and ad accounts stay in your name — always, from day one.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={graph([organizationSchema(), breadcrumbSchema(trail)])} />

      <PageHero
        eyebrow={`Est. ${SITE.foundingYear} · Bikapur, Ayodhya`}
        title="A small studio that takes"
        highlight="your numbers personally"
        intro={
          <>
            Trustpages is a web design and digital growth studio on Bikapur Main Road, in Ayodhya
            district, Uttar Pradesh. We are deliberately small: the people who scope your project
            are the people who design, build and optimise it. No account-manager relay, no
            outsourced second team, no surprise invoice.
          </>
        }
        trail={trail}
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-primary">
            Meet us on a call <Icon name="arrow" size={16} />
          </Link>
          <Link href="/work" className="btn btn-outline">
            See our work
          </Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="h-section mt-3">
              Started because good businesses kept getting{" "}
              <span className="grad-text">bad websites</span>
            </h2>
            <div className="mt-5 space-y-4 text-[0.96rem] leading-relaxed text-body">
              <p>
                Trustpages began in {SITE.foundingYear} with a simple observation: in tier-2 and
                tier-3 India, plenty of good businesses were paying for websites that made them look
                smaller than they were. Slow pages, stock photos, no phone number above the fold —
                and nobody to call when something broke.
              </p>
              <p>
                We started with local shops and clinics in Bikapur and Ayodhya district. Word
                travelled — a dentist told a coaching centre, a homestay owner told a handloom
                exporter — and the work grew into eCommerce stores, dashboards and international
                projects in the UAE, UK and US.
              </p>
              <p>
                The approach never changed. Understand what the business actually sells, write the
                words a real customer would recognise, build it fast, make it findable, and report
                on what happened. That is the whole method.
              </p>
            </div>

            <div className="mt-8 rounded-[22px] border border-line bg-mist/70 p-6">
              <p className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-plum">
                What we are not
              </p>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-navy/80">
                We are not a 200-person agency with a sales floor. We do not buy template bundles
                and call it custom. We do not guarantee first-page rankings, because nobody who
                understands Google can honestly promise that.
              </p>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="card p-6">
              <h2 className="h-card">At a glance</h2>
              <dl className="mt-4 space-y-3 text-[0.88rem]">
                {[
                  ["Founded", String(SITE.foundingYear)],
                  ["Base", "Bikapur, Ayodhya, Uttar Pradesh"],
                  ["Team", "Small, senior, hands-on"],
                  ["Clients served", "60+ projects"],
                  ["Languages", "English · Hindi"],
                  ["Working hours", SITE.hours],
                  ["Reply time", SITE.responseWindow],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-start justify-between gap-4 border-b border-line pb-2.5 last:border-0 last:pb-0">
                    <dt className="text-body">{k}</dt>
                    <dd className="text-right font-medium text-navy">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="card p-6">
              <h2 className="h-card">Talk to a human</h2>
              <div className="mt-4 space-y-2.5 text-[0.88rem]">
                <a href={`tel:${SITE.phone}`} className="flex items-center gap-2.5 text-navy hover:text-plum">
                  <Icon name="phone" size={15} className="text-plum" /> {SITE.phoneDisplay}
                </a>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 break-all text-navy hover:text-plum">
                  <Icon name="mail" size={15} className="shrink-0 text-plum" /> {SITE.email}
                </a>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-navy hover:text-plum"
                >
                  <Icon name="whatsapp" size={15} className="text-plum" /> WhatsApp us
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-line bg-mist/60 py-12">
        <div className="shell">
          <StatStrip stats={STATS} />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="How we behave"
            title="Four rules we do not"
            highlight="bend"
            intro="These came from client complaints about other agencies. We wrote them down so we could be held to them."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {VALUES.map((v) => (
              <div key={v.title} className="card p-6">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-lilac text-plum">
                  <Icon name={v.icon} size={19} />
                </span>
                <h3 className="h-card mt-4">{v.title}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-body">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist/50">
        <div className="shell grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Working with us</p>
            <h2 className="h-section mt-3">What you can expect, in writing</h2>
            <CheckList className="mt-6" items={DIFFERENTIATORS} />
          </div>
          <div>
            <p className="eyebrow">Delivery</p>
            <h2 className="h-section mt-3">The four-stage spine</h2>
            <ol className="mt-6 space-y-4">
              {PROCESS.map((p) => (
                <li key={p.step} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-grad font-display text-[0.78rem] font-semibold text-white">
                    {p.step}
                  </span>
                  <span>
                    <span className="block font-display text-[0.98rem] font-semibold text-navy">{p.title}</span>
                    <span className="mt-1 block text-[0.88rem] leading-relaxed text-body">{p.body}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CTABand
        title="Want to know if we are a fit?"
        body="A 30-minute call, no deck. Tell us what you sell and what is not working. You will leave with a straight answer either way."
      />
    </>
  );
}
