import Link from "next/link";
import { Logo } from "./Logo";
import { Icon, type IconName } from "./Icons";
import { SITE, SERVICES, LOCATIONS } from "@/lib/site";

const INDUSTRIES = [
  "Retail & kirana",
  "Healthcare & clinics",
  "Hospitality & homestays",
  "Education & coaching",
  "Manufacturing",
  "Real estate",
  "Legal & CA firms",
  "D2C brands",
  "Logistics",
  "NGOs & trusts",
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/72">
      <div className="shell py-16">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr_1fr_1.1fr]">
          {/* Brand + NAP */}
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-[0.9rem] leading-relaxed text-white/65">
              A web design and digital growth studio in Bikapur, Ayodhya. We build fast, trustworthy
              websites — then make sure the right people find them in Google and in AI answers.
            </p>

            <address className="mt-6 space-y-2.5 text-[0.86rem] not-italic text-white/70">
              <p className="flex items-start gap-2.5">
                <Icon name="pin" size={15} className="mt-0.5 shrink-0 text-plum-300" />
                <span>
                  {SITE.address.street},<br />
                  {SITE.address.locality}, {SITE.address.region} {SITE.address.postalCode}, India
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Icon name="phone" size={15} className="shrink-0 text-plum-300" />
                <a href={`tel:${SITE.phone}`} className="hover:text-white">{SITE.phoneDisplay}</a>
              </p>
              <p className="flex items-center gap-2.5">
                <Icon name="mail" size={15} className="shrink-0 text-plum-300" />
                <a href={`mailto:${SITE.email}`} className="break-all hover:text-white">{SITE.email}</a>
              </p>
              <p className="flex items-center gap-2.5">
                <Icon name="clock" size={15} className="shrink-0 text-plum-300" />
                {SITE.hours}
              </p>
            </address>

            <div className="mt-6 flex items-center gap-3">
              {Object.entries(SITE.social).map(([key, href]) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Trustpages on ${key}`}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/75 transition hover:border-plum-300 hover:text-plum-300"
                >
                  <Icon name={key as IconName} size={15} />
                </a>
              ))}
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Trustpages on WhatsApp"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/75 transition hover:border-plum-300 hover:text-plum-300"
              >
                <Icon name="whatsapp" size={15} />
              </a>
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h2 className="font-display text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-white">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5 text-[0.88rem]">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="transition hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="font-medium text-plum-300 hover:text-white">
                  All services →
                </Link>
              </li>
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <h2 className="font-display text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-white">
              Company
            </h2>
            <ul className="mt-4 space-y-2.5 text-[0.88rem]">
              <li><Link href="/about" className="hover:text-white">About us</Link></li>
              <li><Link href="/work" className="hover:text-white">Our work</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
            </ul>
          </nav>

          {/* Locations */}
          <div>
            <h2 className="font-display text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-white">
              Where we work
            </h2>
            <ul className="mt-4 space-y-2.5 text-[0.88rem]">
              {LOCATIONS.map((l) => (
                <li key={l.slug}>
                  <Link href={`/locations/${l.slug}`} className="inline-flex items-center gap-1.5 hover:text-white">
                    <Icon name={l.kind === "local" ? "pin" : "globe"} size={13} className="text-plum-300" />
                    {l.city}
                    <span className="text-white/40">{l.kind === "local" ? "· UP" : `· ${l.country}`}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-display text-[0.8rem] font-medium text-white transition hover:bg-white/18"
            >
              Book a free 30-min call <Icon name="arrow" size={14} />
            </Link>
          </div>
        </div>

        {/* Industry strip — useful for topical relevance and internal linking */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <h2 className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/50">
            Industries we build for
          </h2>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[0.8rem] text-white/55">
            {INDUSTRIES.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-[0.78rem] text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {SITE.foundingYear}–2026 {SITE.legalName}. All rights reserved.
          </p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>GSTIN available on invoice</span>
            <span aria-hidden="true">·</span>
            <span>Bikapur · Ayodhya · Faizabad · Lucknow · Varanasi</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
