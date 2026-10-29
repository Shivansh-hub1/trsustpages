import type { Metadata } from "next";
import Link from "next/link";
import { Icon, type IconName } from "@/components/Icons";
import { HeroArtwork, HexBadges, OrbitDiagram, ProjectMock, Scribble } from "@/components/Artwork";
import Faq from "@/components/Faq";
import LeadForm from "@/components/LeadForm";
import { SectionHeading, SplitCTA, StatStrip, CheckList, CTABand, JsonLd, Pill } from "@/components/ui";
import {
  SITE, STATS, SERVICES, PROCESS, TESTIMONIALS, PORTFOLIO, FAQS, DIFFERENTIATORS, BLOG_POSTS, LOCATIONS,
} from "@/lib/site";
import { homeGraph, faqSchema, breadcrumbSchema, graph, reviewsSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Web Design & SEO Agency in Bikapur, Ayodhya | Trustpages",
  description:
    "Fast, trustworthy websites built in Bikapur, Ayodhya — designed to convert and optimised for Google, Maps and AI search. Fixed prices from ₹24,999.",
  alternates: { canonical: "/" },
};

const CLIENT_WORDS = [
  "Awadh Handloom", "Mishra Dental Care", "Ayodhya Heritage Stays", "Verma Interiors",
  "Saryu Agro Logistics", "Northline Studio", "Kaushal Coaching", "Ganpati Steel Works",
  "Nirvana Yoga Studio", "Chandra Sweets", "Bharat Auto Spares", "Anand Physiotherapy",
];

const WHY_CARDS: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "shield",
    title: "Trust in the first 5 seconds",
    body: "A slow or amateur-looking site loses the visitor before they read a word. We lead with proof, clarity and real pricing context so people stay.",
  },
  {
    icon: "target",
    title: "More enquiries, not more traffic",
    body: "Every page has one job. Clear calls to action, short forms and WhatsApp handoff turn interest into conversations you can actually close.",
  },
  {
    icon: "bolt",
    title: "Speed that holds on 4G",
    body: "Performance budgets, optimised images and lean fonts. Target: LCP under 2.5s on a mid-range Android phone, not just your developer's laptop.",
  },
  {
    icon: "search",
    title: "Built to be found",
    body: "Clean semantics, schema, sitemaps and internal links from day one — plus location and service pages that match how people actually search.",
  },
  {
    icon: "spark",
    title: "Readable by AI assistants",
    body: "Answer-first paragraphs and a consistent entity footprint so ChatGPT, Gemini and Perplexity describe your business correctly when asked.",
  },
  {
    icon: "handshake",
    title: "You own everything",
    body: "Domain, hosting, code, analytics and ad accounts in your name. No hostage situation if you ever want to work with someone else.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeGraph()} id="home-graph" />
      <JsonLd
        data={graph([
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          reviewsSchema(),
        ])}
        id="home-graph-extra"
      />

      {/* ============================ HERO ============================ */}
      <section className="mesh relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(65%_55%_at_50%_0%,#000,transparent)] dotgrid"
          aria-hidden="true"
        />
        <div className="shell relative pb-16 pt-12 text-center md:pb-20 md:pt-16">
          <div className="flex justify-center">
            <Pill icon="pin">
              Based in Bikapur, Ayodhya · Working across India &amp; worldwide
            </Pill>
          </div>

          <h1 className="display-hero mx-auto mt-6 max-w-4xl text-navy">
            Turn your website into a{" "}
            <span className="relative inline-block">
              <span className="grad-text">growth engine</span>
              <Scribble className="absolute -bottom-3 left-0 h-3 w-full" />
            </span>{" "}
            people trust
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-[1.03rem] leading-relaxed text-body">
            Your strategic partner for web design, development, SEO and AI-search visibility.
            We build fast, credible websites — then make sure the right buyers find them in Google,
            in maps, and in ChatGPT, Gemini and Perplexity.
          </p>

          <div className="mt-8 flex justify-center">
            <SplitCTA />
          </div>

          <p className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[0.78rem] text-body">
            <span className="inline-flex items-center gap-1.5">
              <span className="flex text-[#f5a623]" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Icon key={i} name="star" size={13} />
                ))}
              </span>
              <strong className="font-semibold text-navy">5.0</strong> on Google
            </span>
            <span aria-hidden="true" className="text-line">|</span>
            <span>60+ projects delivered</span>
            <span aria-hidden="true" className="text-line">|</span>
            <span>Fixed price, agreed in writing</span>
          </p>

          <div className="mt-10">
            <HexBadges />
          </div>
        </div>
      </section>

      {/* ==================== STATEMENT / SPLIT ==================== */}
      <section className="section">
        <div className="shell grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="eyebrow">The problem we solve</p>
            <h2 className="h-section mt-3">
              A beautiful website that nobody finds is just an{" "}
              <span className="grad-text">expensive brochure</span>
            </h2>

            <div className="mt-6 space-y-4 text-[0.97rem] leading-relaxed text-body">
              <p>
                Most businesses we meet have already paid for a website. It looks acceptable. It
                does nothing: no enquiries, no rankings, no idea whether anyone visited. The
                design was treated as decoration instead of the top of the sales funnel.
              </p>
              <p>
                Trustpages works the other way round. We start with the questions your customer
                types at 11pm, the objections that stop them calling, and the one action each page
                must drive. Then we design, build and optimise toward that — and report on it in
                plain language every month.
              </p>
              <p className="border-l-2 border-plum/30 pl-4 text-[0.93rem] italic text-navy/80">
                Design and SEO are not two projects. Done properly, they are the same project.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services" className="btn btn-primary">
                Explore our services <Icon name="arrow" size={16} />
              </Link>
              <Link href="/work" className="btn btn-outline">
                See the work
              </Link>
            </div>
          </div>

          <HeroArtwork />
        </div>
      </section>

      {/* ==================== STATS ==================== */}
      <section className="border-y border-line bg-mist/60 py-12">
        <div className="shell">
          <StatStrip stats={STATS} />
        </div>
      </section>

      {/* ==================== CLIENT MARQUEE ==================== */}
      <section className="overflow-hidden border-b border-line bg-white py-10">
        <p className="shell text-center text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-body">
          Trusted by shops, clinics, studios and brands
        </p>
        <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-10">
            {[...CLIENT_WORDS, ...CLIENT_WORDS].map((c, i) => (
              <span
                key={`${c}-${i}`}
                className="whitespace-nowrap font-display text-[1.05rem] font-medium tracking-tight text-navy/35"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ORBIT DIAGRAM ==================== */}
      <section className="section bg-white">
        <div className="shell">
          <SectionHeading
            align="center"
            eyebrow="One team, full stack of growth"
            title="Everything that makes a website"
            highlight="earn its keep"
            intro="Six disciplines that normally live in six different agencies, run by one team that has to answer for the result."
          />

          <div className="mt-14">
            <OrbitDiagram
              items={[
                { label: "Web design & UI/UX", icon: <Icon name="layout" size={16} /> },
                { label: "Development & CMS", icon: <Icon name="code" size={16} /> },
                { label: "SEO & local search", icon: <Icon name="search" size={16} /> },
                { label: "Ads & performance marketing", icon: <Icon name="megaphone" size={16} /> },
                { label: "AEO & GEO (AI search)", icon: <Icon name="spark" size={16} /> },
                { label: "Analytics & reporting", icon: <Icon name="chart" size={16} /> },
              ]}
            />

            {/* mobile / tablet fallback */}
            <div className="grid gap-3 sm:grid-cols-2 lg:hidden">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="card-flat flex items-start gap-3 p-4 transition hover:-translate-y-0.5 hover:shadow-soft"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-grad text-white">
                    <Icon name={s.icon as IconName} size={16} />
                  </span>
                  <span>
                    <span className="block font-display text-[0.9rem] font-medium text-navy">{s.shortName}</span>
                    <span className="mt-0.5 block text-[0.76rem] leading-snug text-body">{s.tagline}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-full border border-line bg-white px-6 py-4 shadow-soft">
            {[
              { icon: "users" as IconName, label: "More visibility" },
              { icon: "target" as IconName, label: "More enquiries" },
              { icon: "cart" as IconName, label: "More sales" },
              { icon: "chart" as IconName, label: "Sustainable growth" },
            ].map((x, i) => (
              <span key={x.label} className="flex items-center gap-2">
                {i > 0 && <span className="mr-6 hidden h-4 w-px bg-line sm:block" aria-hidden="true" />}
                <Icon name={x.icon} size={16} className="text-plum" />
                <span className="font-display text-[0.86rem] font-medium text-navy">{x.label}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHAT YOU GET ==================== */}
      <section className="section bg-mist/50">
        <div className="shell grid items-center gap-12 lg:grid-cols-[1fr_1.02fr]">
          <div>
            <p className="eyebrow">What a Trustpages build includes</p>
            <h2 className="h-section mt-3">
              A website built to convert visitors into{" "}
              <span className="grad-text">customers</span>
            </h2>
            <p className="mt-4 lead">
              No mystery deliverables. Here is exactly what lands on your domain when we finish —
              and what it is for.
            </p>
            <CheckList
              className="mt-7"
              items={[
                "Fast, mobile-first pages tested on real Android handsets",
                "A design system that looks modern and credible in your sector",
                "SEO-ready structure: schema, sitemap, canonical, internal links",
                "Clear calls to action with a WhatsApp handoff, not a dead form",
                "CMS so your team edits copy, prices and photos without a developer",
                "Analytics and conversion events wired before launch, not after",
                "30 days of post-launch support and a written handover",
              ]}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {WHY_CARDS.slice(0, 4).map((c) => (
              <div key={c.title} className="card p-5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#f0e2fb] text-[#6b2e88]">
                  <Icon name={c.icon} size={19} strokeWidth={2} />
                </span>
                <h3 className="h-card mt-4 text-[1.02rem]">{c.title}</h3>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-body">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY IT MATTERS (6 cards) ==================== */}
      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Why the investment pays"
            title="Six reasons a proper website is the"
            highlight="cheapest growth lever you have"
            intro="You do not need a bigger ad budget. You need the thing your ad budget points at to be worth clicking."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {WHY_CARDS.map((c) => (
              <article key={c.title} className="card-flat group p-6 transition hover:-translate-y-1 hover:shadow-lift">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-grad text-white">
                  <Icon name={c.icon} size={20} strokeWidth={2} />
                </span>
                <h3 className="h-card mt-5">{c.title}</h3>
                <p className="mt-2.5 text-[0.9rem] leading-relaxed text-body">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROCESS ==================== */}
      <section id="process" className="section bg-navy relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.16]" aria-hidden="true">
          <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-plum blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-plum-300 blur-3xl" />
        </div>
        <div className="shell relative">
          <SectionHeading
            invert
            align="center"
            eyebrow="How we work"
            title="Four stages, no"
            highlight="black boxes"
            intro="Every project runs on the same spine. You always know which stage you are in and what is expected of you."
          />
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <li key={p.step} className="relative rounded-[24px] border border-white/12 bg-white/[0.06] p-6 backdrop-blur">
                <span className="font-display text-[2.4rem] font-semibold leading-none text-white/18">{p.step}</span>
                <h3 className="mt-3 font-display text-[1.05rem] font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-[0.87rem] leading-relaxed text-white/65">{p.body}</p>
                {i < PROCESS.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 place-items-center rounded-full bg-plum text-white lg:grid" aria-hidden="true">
                    <Icon name="arrow" size={12} />
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ==================== SERVICES GRID ==================== */}
      <section className="section">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Services"
              title="What we do, and what it"
              highlight="costs"
              intro="Transparent starting prices. Scope is agreed in writing before anything begins."
            />
            <Link href="/services" className="btn btn-outline">
              All services <Icon name="arrow" size={15} />
            </Link>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="card-flat group flex flex-col p-6 transition hover:-translate-y-1 hover:border-plum/30 hover:shadow-lift"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f0e2fb] text-[#6b2e88] transition group-hover:bg-grad group-hover:text-white">
                    <Icon name={s.icon as IconName} size={22} strokeWidth={2} />
                  </span>
                  <span className="rounded-full bg-mist px-2.5 py-1 font-display text-[0.68rem] font-semibold text-navy">
                    from {s.priceFrom}
                  </span>
                </div>
                <h3 className="h-card mt-5">{s.shortName}</h3>
                <p className="mt-1 font-display text-[0.8rem] font-medium text-plum">{s.tagline}</p>
                <p className="mt-3 flex-1 text-[0.88rem] leading-relaxed text-body">{s.blurb}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-display text-[0.82rem] font-medium text-navy">
                  See detail &amp; pricing <Icon name="arrow" size={14} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PORTFOLIO ==================== */}
      <section className="section bg-mist/50">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Selected work"
              title="Turning strategy into"
              highlight="measurable results"
              intro="A snapshot of recent builds. Numbers are from client analytics, rounded conservatively."
            />
            <Link href="/work" className="btn btn-outline">
              Full portfolio <Icon name="arrow" size={15} />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PORTFOLIO.slice(0, 6).map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="group overflow-hidden rounded-[24px] border border-line bg-white transition hover:-translate-y-1 hover:shadow-lift"
              >
                <ProjectMock tone={p.tone} label={p.sector.split(" · ")[0]} />
                <div className="p-5">
                  <p className="text-[0.72rem] font-medium uppercase tracking-wider text-body">{p.sector}</p>
                  <h3 className="mt-1.5 font-display text-[1.05rem] font-semibold text-navy">{p.title}</h3>
                  <p className="mt-1 text-[0.85rem] text-body">{p.detail}</p>
                  <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-lilac/70 px-3 py-1 text-[0.76rem] font-semibold text-plum">
                    <Icon name="chart" size={13} /> {p.result}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section id="testimonials" className="section">
        <div className="shell">
          <SectionHeading
            align="center"
            eyebrow="Client words"
            title="What clients say about the"
            highlight="process — and the numbers"
            intro="Boringly specific feedback, which is the only kind worth quoting."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="card relative p-6">
                <Icon name="quote" size={26} className="text-plum/20" />
                <blockquote className="mt-3 text-[0.95rem] leading-relaxed text-navy/85">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-grad font-display text-[0.85rem] font-semibold text-white">
                    {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </span>
                  <span>
                    <span className="block font-display text-[0.88rem] font-semibold text-navy">{t.name}</span>
                    <span className="block text-[0.76rem] text-body">{t.role} · {t.place}</span>
                  </span>
                  <span className="ml-auto flex text-[#f5a623]" aria-label="5 out of 5">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Icon key={i} name="star" size={12} />
                    ))}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== DIFFERENTIATORS + FORM ==================== */}
      <section className="section bg-mist/60">
        <div className="shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow">Why Trustpages</p>
            <h2 className="h-section mt-3">
              A small studio with the standards of a{" "}
              <span className="grad-text">much bigger one</span>
            </h2>
            <p className="mt-4 lead">
              We are deliberately small so the person who scopes your project is the person who
              builds it. Here is what that buys you.
            </p>
            <CheckList className="mt-7" items={DIFFERENTIATORS} />
          </div>

          <div className="card p-6 md:p-8">
            <h2 className="h-card">Tell us about your project</h2>
            <p className="mt-1.5 text-[0.85rem] text-body">
              One short form. No sales sequence, no drip emails — a human reply {SITE.responseWindow}.
            </p>
            <div className="mt-5">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="section">
        <div className="shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="h-section mt-3">
              Straight answers to the questions we get{" "}
              <span className="grad-text">every week</span>
            </h2>
            <p className="mt-4 text-[0.93rem] leading-relaxed text-body">
              If your question is not here, ask it directly — we answer by WhatsApp, usually the
              same day.
            </p>
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi Trustpages, I have a question about a website project.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline mt-6"
            >
              <Icon name="whatsapp" size={16} /> Ask on WhatsApp
            </a>
            <p className="mt-4 text-[0.8rem] text-body">
              Prefer reading? <Link href="/faq" className="text-plum underline underline-offset-2">Full FAQ page</Link>
            </p>
          </div>
          <div>
            <Faq items={FAQS.slice(0, 6)} />
          </div>
        </div>
        <JsonLd data={faqSchema(FAQS)} id="home-faq" />
      </section>

      {/* ==================== BLOG ==================== */}
      <section className="section bg-mist/50">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Notes" title="Practical writing on SEO," highlight="AI search and building" />
            <Link href="/blog" className="btn btn-outline">
              All articles <Icon name="arrow" size={15} />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-flat group flex flex-col p-6 transition hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="w-fit rounded-full bg-lilac/70 px-2.5 py-1 font-display text-[0.68rem] font-semibold uppercase tracking-wider text-plum">
                  {post.category}
                </span>
                <h3 className="h-card mt-4 text-[1.02rem]">{post.title}</h3>
                <p className="mt-2 flex-1 text-[0.86rem] leading-relaxed text-body">{post.excerpt}</p>
                <span className="mt-4 text-[0.74rem] text-body">
                  {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })} · {post.readingTime}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== LOCATIONS ==================== */}
      <section className="section">
        <div className="shell">
          <SectionHeading
            align="center"
            eyebrow="Where we work"
            title="Local roots,"
            highlight="global reach"
            intro="We are physically in Ayodhya district and work remotely with clients across time zones. Choose your city for local specifics."
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {LOCATIONS.map((l) => (
              <Link
                key={l.slug}
                href={`/locations/${l.slug}`}
                className="card-flat group flex items-center gap-3 p-4 transition hover:-translate-y-0.5 hover:border-plum/30 hover:shadow-soft"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-mist text-plum">
                  <Icon name={l.kind === "local" ? "pin" : "globe"} size={17} />
                </span>
                <span>
                  <span className="block font-display text-[0.9rem] font-medium text-navy">{l.city}</span>
                  <span className="block text-[0.72rem] text-body">{l.kind === "local" ? l.region : l.country}</span>
                </span>
                <Icon name="arrow" size={14} className="ml-auto text-line transition group-hover:text-plum" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
