"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoLink } from "./Logo";
import { Icon, type IconName } from "./Icons";
import { SERVICES, LOCATIONS, SITE } from "@/lib/site";

type MenuItem = {
  label: string;
  href: string;
  desc?: string;
  icon?: IconName;
};

const WORK: MenuItem[] = [
  { label: "Our work", href: "/work", desc: "Selected builds and redesigns", icon: "layout" },
  { label: "Case studies", href: "/work#case-studies", desc: "Before, after and the numbers", icon: "chart" },
  { label: "Reviews", href: "/work#testimonials", desc: "What clients say in their words", icon: "star" },
  { label: "Blog", href: "/blog", desc: "SEO, AEO and build notes", icon: "doc" },
  { label: "About us", href: "/about", desc: "Who we are and how we work", icon: "users" },
];

const MAIN = [
  { label: "Work", href: "/work", children: WORK },
  {
    label: "Services",
    href: "/services",
    children: SERVICES.map((s) => ({
      label: s.shortName,
      href: `/services/${s.slug}`,
      desc: s.tagline,
      icon: s.icon as IconName,
    })),
  },
  {
    label: "Locations",
    href: "/locations",
    children: [
      ...LOCATIONS.filter((l) => l.kind === "local").map((l) => ({
        label: l.city,
        href: `/locations/${l.slug}`,
        desc: `Local — ${l.region}`,
        icon: "pin" as IconName,
      })),
      ...LOCATIONS.filter((l) => l.kind === "global").map((l) => ({
        label: l.city,
        href: `/locations/${l.slug}`,
        desc: `Global — ${l.country}`,
        icon: "globe" as IconName,
      })),
    ],
  },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* --- Utility bar --- */}
      <div className="hidden bg-white text-[0.78rem] text-body lg:block">
        <div className="shell flex h-10 items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <a href={`tel:${SITE.phone}`} className="inline-flex items-center gap-1.5 hover:text-plum">
              <Icon name="phone" size={13} /> {SITE.phoneDisplay}
            </a>
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-1.5 hover:text-plum">
              <Icon name="mail" size={13} /> {SITE.email}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <nav aria-label="Secondary" className="flex items-center gap-4">
              <Link href="/about" className="hover:text-plum">About us</Link>
              <Link href="/services" className="hover:text-plum">Services</Link>
              <Link href="/blog" className="hover:text-plum">Blog</Link>
              <Link href="/locations" className="hover:text-plum">Locations</Link>
            </nav>
            <div className="flex items-center gap-2.5 border-l border-line pl-5">
              {Object.entries(SITE.social).map(([key, href]) => (
                <a
                  key={key}
                  href={href}
                  className="text-navy/60 transition hover:text-plum"
                  aria-label={`Trustpages on ${key}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon name={key as IconName} size={14} />
                </a>
              ))}
            </div>
            <Link href="/contact" className="rounded-full bg-grad px-3.5 py-1.5 text-[0.72rem] font-medium text-white">
              Free site audit
            </Link>
          </div>
        </div>
      </div>

      {/* --- Main header --- */}
      <header
        className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow ${
          scrolled ? "border-line shadow-[0_10px_30px_-24px_rgba(42,36,92,0.55)]" : "border-transparent"
        }`}
      >
        <div className="shell flex h-[68px] items-center justify-between gap-4">
          <LogoLink />

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {MAIN.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 rounded-full px-3 py-2 font-display text-[0.9rem] font-medium text-navy transition hover:bg-mist hover:text-plum"
                >
                  {item.label}
                  {item.children && <Icon name="chevron" size={13} className="mt-0.5 opacity-60" />}
                </Link>

                {item.children && (
                  <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="w-[520px] rounded-[22px] border border-line bg-white p-3 shadow-[0_40px_90px_-40px_rgba(42,36,92,0.45)]">
                      <ul className="grid grid-cols-2 gap-1">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              className="flex items-start gap-2.5 rounded-2xl p-3 transition hover:bg-mist"
                            >
                              {c.icon && (
                                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-lilac/70 text-plum">
                                  <Icon name={c.icon} size={15} />
                                </span>
                              )}
                              <span>
                                <span className="block font-display text-[0.88rem] font-medium text-navy">{c.label}</span>
                                {c.desc && <span className="mt-0.5 block text-[0.73rem] leading-snug text-body">{c.desc}</span>}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={item.label === "Services" ? "/services" : item.label === "Locations" ? "/locations" : "/work"}
                        className="mt-1 flex items-center justify-between rounded-2xl bg-mist px-3 py-2.5 font-display text-[0.8rem] font-medium text-plum"
                      >
                        View all {item.label.toLowerCase()} <Icon name="arrow" size={14} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi Trustpages, I'd like a quote for my website.")}`}
              rel="noopener noreferrer"
              target="_blank"
              className="hidden items-center gap-2 rounded-full border border-[#25D366]/45 bg-[#25D366]/8 px-3 py-1.5 text-[0.75rem] font-medium text-[#1a7f45] sm:inline-flex"
            >
              <Icon name="whatsapp" size={15} />
              <span className="hidden xl:inline">Chat on WhatsApp</span>
              <span className="xl:hidden">WhatsApp</span>
            </a>
            <Link href="/contact" className="btn btn-primary btn-sm hidden lg:inline-flex">
              Get a proposal
            </Link>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 place-items-center rounded-full bg-navy text-white lg:hidden"
            >
              <Icon name={open ? "close" : "menu"} size={19} />
            </button>
          </div>
        </div>
      </header>

      {/* --- Mobile drawer --- */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-0 z-40 overflow-y-auto bg-white pt-[68px] lg:hidden"
      >
        <div className="shell py-6">
          <ul className="divide-y divide-line">
            {MAIN.map((item) => (
              <li key={item.label} className="py-1">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex-1 py-3 font-display text-lg font-medium text-navy"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      onClick={() => setMobileSub(mobileSub === item.label ? null : item.label)}
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={mobileSub === item.label}
                      className="grid h-9 w-9 place-items-center rounded-full bg-mist text-plum"
                    >
                      <Icon name={mobileSub === item.label ? "minus" : "plus"} size={16} />
                    </button>
                  )}
                </div>
                {item.children && mobileSub === item.label && (
                  <ul className="mb-3 space-y-1 pb-2">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="block rounded-xl px-3 py-2 text-[0.92rem] text-body hover:bg-mist"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-2.5">
            <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-primary w-full">
              Get a free proposal
            </Link>
            <a href={`tel:${SITE.phone}`} className="btn btn-outline w-full">
              <Icon name="phone" size={16} /> {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
