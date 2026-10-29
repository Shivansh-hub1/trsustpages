import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icons";
import { SITE } from "@/lib/site";

/* ------------------------------------------------------------------ */
/* JSON-LD                                                            */
/* ------------------------------------------------------------------ */
export function JsonLd({ data, id }: { data: object; id?: string }) {
  return (
    <script
      type="application/ld+json"
      id={id}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Section heading                                                    */
/* ------------------------------------------------------------------ */
export function SectionHeading({
  eyebrow,
  title,
  highlight,
  intro,
  align = "left",
  as: Tag = "h2",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  intro?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  invert?: boolean;
}) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      {eyebrow && (
        <p className={`eyebrow ${invert ? "!text-plum-300" : ""}`}>{eyebrow}</p>
      )}
      <Tag className={`h-section mt-3 ${invert ? "!text-white" : ""}`}>
        {title} {highlight && <span className={invert ? "text-plum-300" : "grad-text"}>{highlight}</span>}
      </Tag>
      {intro && (
        <div className={`mt-4 lead ${invert ? "!text-white/70" : ""} ${align === "center" ? "mx-auto" : ""}`}>
          {intro}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Pill / tag                                                         */
/* ------------------------------------------------------------------ */
export function Pill({ children, icon }: { children: ReactNode; icon?: IconName }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-3.5 py-1.5 font-display text-[0.76rem] font-medium text-navy">
      {icon && <Icon name={icon} size={13} className="text-plum" />}
      {children}
    </span>
  );
}

export function CheckList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-2.5 ${className}`}>
      {items.map((i) => (
        <li key={i} className="flex gap-2.5 text-[0.93rem] text-body">
          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-lilac text-plum">
            <Icon name="check" size={12} strokeWidth={2.4} />
          </span>
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/* Buttons                                                            */
/* ------------------------------------------------------------------ */
export function SplitCTA({
  primaryLabel = "Get a proposal",
  primaryHref = "/contact",
  secondaryLabel = "Chat with us",
  className = "",
}: {
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  className?: string;
}) {
  return (
    <div className={`split-cta ${className}`}>
      <Link href={primaryHref}>
        <Icon name="target" size={16} /> {primaryLabel}
      </Link>
      <span className="or" aria-hidden="true">OR</span>
      <a
        href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
          "Hi Trustpages, I'd like to discuss a website project.",
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="whatsapp" size={16} /> {secondaryLabel}
      </a>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Breadcrumbs (visible + accessible)                                 */
/* ------------------------------------------------------------------ */
export function Breadcrumbs({ trail }: { trail: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[0.78rem] text-body">
      <ol className="flex flex-wrap items-center gap-1.5">
        {trail.map((t, i) => (
          <li key={t.path} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true" className="text-line">/</span>}
            {i === trail.length - 1 ? (
              <span aria-current="page" className="font-medium text-navy">{t.name}</span>
            ) : (
              <Link href={t.path} className="hover:text-plum">{t.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/* Page hero (inner pages)                                            */
/* ------------------------------------------------------------------ */
export function PageHero({
  eyebrow,
  title,
  highlight,
  intro,
  trail,
  children,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  intro?: ReactNode;
  trail: { name: string; path: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="mesh relative overflow-hidden border-b border-line">
      <div className="pointer-events-none absolute inset-0 opacity-[0.55] [mask-image:radial-gradient(60%_60%_at_50%_0%,#000,transparent)] dotgrid" aria-hidden="true" />
      <div className="shell relative py-12 md:py-16">
        <Breadcrumbs trail={trail} />
        <div className="mt-6 grid items-end gap-8 lg:grid-cols-[1.35fr_1fr]">
          <div>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h1 className="display-hero mt-3 text-navy">
              {title} {highlight && <span className="grad-text">{highlight}</span>}
            </h1>
            {intro && <div className="mt-5 max-w-2xl lead">{intro}</div>}
            {children && <div className="mt-7">{children}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Stats strip                                                        */
/* ------------------------------------------------------------------ */
export function StatStrip({ stats }: { stats: { value: string; label: string; note?: string }[] }) {
  return (
    <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="border-l-2 border-plum/25 pl-4">
          <dt className="sr-only">{s.label}</dt>
          <dd>
            <span className="block font-display text-[1.9rem] font-semibold leading-none text-navy">{s.value}</span>
            <span className="mt-2 block font-display text-[0.85rem] font-medium text-ink">{s.label}</span>
            {s.note && <span className="mt-0.5 block text-[0.75rem] text-body">{s.note}</span>}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/* ------------------------------------------------------------------ */
/* CTA band                                                           */
/* ------------------------------------------------------------------ */
export function CTABand({
  title = "Ready to build something people trust?",
  body = "Tell us what you sell and who you sell it to. You'll get a written scope, a fixed price and a timeline — usually within two working days.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="section pt-0">
      <div className="shell">
        <div className="relative overflow-hidden rounded-[34px] bg-grad px-6 py-14 text-center md:px-14 md:py-16">
          <div
            className="pointer-events-none absolute -left-16 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-plum-300/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="h-section !text-white">{title}</h2>
            <p className="mt-4 text-[1rem] leading-relaxed text-white/75">{body}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn bg-white text-navy hover:bg-lilac">
                Get a free proposal
              </Link>
              <a
                href={`tel:${SITE.phone}`}
                className="btn btn-ghost"
              >
                <Icon name="phone" size={16} /> {SITE.phoneDisplay}
              </a>
            </div>
            <p className="mt-5 text-[0.78rem] text-white/55">
              Reply {SITE.responseWindow} · No lock-in contracts · You own everything we build
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
