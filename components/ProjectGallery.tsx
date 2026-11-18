import Link from "next/link";
import { Icon } from "./Icons";

const PROJECTS = [
  {
    title: "Enterprise SaaS & High-Converting Digital Portal",
    category: "Full-Stack Web Development",
    screenshot: "/screenshots/project-hero.png",
    stat: "1.1s Mobile LCP",
    metricLabel: "Core Web Vitals",
    features: ["Next.js 16 App Router", "Tailwind CSS v4", "100/100 Lighthouse"],
    link: "/services/web-development",
  },
  {
    title: "Direct-to-Consumer eCommerce & Product Catalog",
    category: "eCommerce Development",
    screenshot: "/screenshots/project-ecommerce.png",
    stat: "+240% Checkout Rate",
    metricLabel: "Instant UPI & Razorpay",
    features: ["Automated Cart", "Razorpay / UPI", "Inventory Sync"],
    link: "/services/ecommerce",
  },
  {
    title: "Local Search & AI Knowledge Engine Dashboard",
    category: "SEO, AEO & GEO Optimization",
    screenshot: "/screenshots/project-analytics.png",
    stat: "#1 Rank in Ayodhya",
    metricLabel: "Google Maps & Search",
    features: ["LocalBusiness Schema", "Voice & AI Answers", "NAP Citations"],
    link: "/services/seo-services",
  },
  {
    title: "Workshop & Events Interactive Booking Platform",
    category: "UI/UX & Custom Web App",
    screenshot: "/screenshots/project-arts.png",
    stat: "+180% Registrations",
    metricLabel: "Event Calendar",
    features: ["Mobile Tickets", "Schedule Filter", "Direct WhatsApp Flow"],
    link: "/services/website-design",
  },
  {
    title: "Healthcare, Clinic & Wellness Appointment Portal",
    category: "Local Business Web Solution",
    screenshot: "/screenshots/project-spa.png",
    stat: "4.9★ Local Rating",
    metricLabel: "Doctor & Clinic Trust",
    features: ["Appointment Booking", "Google Reviews Sync", "Emergency Call Link"],
    link: "/locations/ayodhya",
  },
  {
    title: "Professional Services & Client Intake Engine",
    category: "Workflow Automation",
    screenshot: "/screenshots/project-organizer.png",
    stat: "< 12hr Lead Turnaround",
    metricLabel: "Zero Missed Leads",
    features: ["Smart Intake Form", "Automated SMS/Email", "100% Asset Ownership"],
    link: "/services/web-development",
  },
];

export default function ProjectGallery() {
  return (
    <section className="section bg-gradient-to-b from-white via-mist/50 to-white">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Visual Portfolio &amp; Case Studies</p>
            <h2 className="h-section mt-2 text-navy">
              Real websites and web applications built for{" "}
              <span className="grad-text-animated">measurable business growth</span>
            </h2>
            <p className="lead mt-3 max-w-2xl">
              Every project is engineered with authentic device responsiveness, clean typography, conversion-focused wireframes, and verified performance.
            </p>
          </div>
          <Link href="/work" className="btn btn-primary">
            Explore All Project Details <Icon name="arrow" size={16} />
          </Link>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, idx) => (
            <article
              key={p.title}
              className="card group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift hover:border-plum/30"
            >
              {/* Browser frame mock with SSL bar */}
              <div className="border-b border-line bg-mist/90 px-3.5 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                  <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                  <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                  <div className="ml-2 flex h-5 flex-1 items-center gap-1.5 rounded-full bg-white px-2.5 text-[10px] text-body ring-1 ring-line">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span className="truncate">trustpages.in/project-0{idx + 1}</span>
                  </div>
                </div>
              </div>

              {/* Real screenshot preview */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-mist">
                <img
                  src={p.screenshot}
                  alt={`${p.title} live interface preview`}
                  width={720}
                  height={450}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Floating metric badge */}
                <div className="absolute bottom-3 right-3 rounded-xl border border-white/80 bg-white/95 px-3 py-1.5 shadow-md backdrop-blur">
                  <p className="font-display text-xs font-bold text-navy leading-none">{p.stat}</p>
                  <p className="text-[10px] text-plum font-semibold leading-tight">{p.metricLabel}</p>
                </div>
              </div>

              {/* Details & Tags */}
              <div className="flex flex-1 flex-col p-6">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-plum">
                  {p.category}
                </span>
                <h3 className="h-card mt-2 text-[1.1rem] font-bold text-navy group-hover:text-plum transition-colors">
                  {p.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.features.map((feat) => (
                    <span
                      key={feat}
                      className="rounded-full bg-mist px-2.5 py-1 text-[11px] font-medium text-navy/80 ring-1 ring-line"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-line flex items-center justify-between">
                  <Link
                    href={p.link}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-plum hover:text-navy transition-colors"
                  >
                    View Stack Details <Icon name="arrow" size={13} className="transition group-hover:translate-x-1" />
                  </Link>
                  <span className="text-[11px] text-body">Fixed Scope</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
