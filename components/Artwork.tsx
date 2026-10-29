import type { ReactNode } from "react";

/* ================================================================
   All artwork is inline SVG/CSS — no stock photography.
   ================================================================ */

/** Hero: abstract browser window + floating proof cards. */
export function HeroArtwork() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]" aria-hidden="true">
      {/* glow */}
      <div className="absolute -inset-6 rounded-[48px] bg-[radial-gradient(60%_60%_at_50%_20%,rgba(107,46,136,0.22),transparent_70%)] blur-2xl" />

      {/* main browser frame */}
      <div className="relative overflow-hidden rounded-[26px] border border-line bg-white shadow-[0_45px_90px_-50px_rgba(42,36,92,0.55)]">
        <div className="flex items-center gap-1.5 border-b border-line bg-mist/70 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 h-5 flex-1 rounded-full bg-white/80 ring-1 ring-line" />
        </div>

        <div className="space-y-4 p-5">
          <div className="flex items-center gap-2">
            <span className="h-7 w-7 rounded-lg bg-grad" />
            <span className="h-2.5 w-16 rounded-full bg-navy/25" />
            <span className="ml-auto h-2 w-9 rounded-full bg-navy/12" />
            <span className="h-2 w-9 rounded-full bg-navy/12" />
            <span className="h-5 w-14 rounded-full bg-grad" />
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-lilac-soft to-sky p-4">
            <div className="h-2.5 w-24 rounded-full bg-plum/50" />
            <div className="mt-3 h-4 w-[86%] rounded-full bg-navy/70" />
            <div className="mt-2 h-4 w-[62%] rounded-full bg-plum/60" />
            <div className="mt-3 h-2 w-[74%] rounded-full bg-navy/15" />
            <div className="mt-1.5 h-2 w-[58%] rounded-full bg-navy/15" />
            <div className="mt-4 flex gap-2">
              <span className="h-7 w-24 rounded-full bg-grad" />
              <span className="h-7 w-20 rounded-full bg-white ring-1 ring-line" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-xl border border-line bg-white p-2.5">
                <span className="block h-6 w-6 rounded-lg bg-lilac" />
                <span className="mt-2 block h-1.5 w-10 rounded-full bg-navy/25" />
                <span className="mt-1.5 block h-1.5 w-14 rounded-full bg-navy/12" />
              </div>
            ))}
          </div>

          {/* "ranking" trend line — the outcome people buy */}
          <div className="rounded-xl border border-line bg-white p-3">
            <svg viewBox="0 0 240 56" className="h-14 w-full" role="presentation">
              <defs>
                <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#6b2e88" />
                  <stop offset="100%" stopColor="#2a245c" />
                </linearGradient>
                <linearGradient id="hero-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6b2e88" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#6b2e88" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 44 L34 40 L68 42 L102 30 L136 26 L170 18 L204 12 L240 6 L240 56 L0 56 Z" fill="url(#hero-fill)" />
              <path d="M0 44 L34 40 L68 42 L102 30 L136 26 L170 18 L204 12 L240 6" fill="none" stroke="url(#hero-line)" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="240" cy="6" r="4" fill="#6b2e88" />
            </svg>
          </div>
        </div>
      </div>

      {/* floating proof card: speed */}
      <div className="absolute -left-4 bottom-16 hidden w-[168px] rounded-2xl border border-line bg-white p-3 shadow-[0_28px_60px_-34px_rgba(42,36,92,0.5)] sm:block">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#e9f9f0] text-[#1a7f45]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7" /></svg>
          </span>
          <div>
            <p className="font-display text-[0.78rem] font-semibold leading-none text-navy">98 Lighthouse</p>
            <p className="mt-1 text-[0.63rem] leading-none text-body">Performance budget met</p>
          </div>
        </div>
        <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-mist">
          <span className="block h-full w-[96%] rounded-full bg-[#28c840]" />
        </div>
      </div>

      {/* floating proof card: map pack */}
      <div className="absolute -right-3 top-24 hidden w-[186px] rounded-2xl border border-line bg-white p-3 shadow-[0_28px_60px_-34px_rgba(42,36,92,0.5)] md:block animate-float">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-lilac text-plum">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.6" /></svg>
          </span>
          <div>
            <p className="font-display text-[0.78rem] font-semibold leading-none text-navy">Map pack · #1</p>
            <p className="mt-1 text-[0.63rem] leading-none text-body">“web design Bikapur”</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Hexagon trust badges — truthful claims only. */
export function HexBadges() {
  const badges = [
    { top: "GOOGLE", mid: "5.0 ★", bottom: "27 reviews" },
    { top: "BASED IN", mid: "BIKAPUR", bottom: "Ayodhya, UP" },
    { top: "REPLY", mid: "< 12 HRS", bottom: "Mon–Sat" },
    { top: "SINCE", mid: "2021", bottom: "60+ builds" },
  ];

  return (
    <div className="grid grid-cols-2 justify-items-center gap-3 sm:flex sm:flex-wrap sm:items-center sm:justify-center md:gap-4" aria-label="Trust highlights">
      {badges.map((b) => (
        <div key={b.mid} className="relative h-[104px] w-[95px] shrink-0 md:h-[118px] md:w-[108px]">
          <div className="hex-badge absolute inset-0 bg-gradient-to-b from-[#ded8f0] to-[#b9b2d6]" />
          <div className="hex-badge absolute inset-[3px] bg-white" />
          <div className="hex-badge absolute inset-[8px] bg-gradient-to-b from-white to-[#faf8ff]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-3 text-center">
            <span className="font-display text-[0.44rem] font-semibold uppercase leading-none tracking-[0.14em] text-navy/50">
              {b.top}
            </span>
            <span className="mt-1.5 font-display text-[0.8rem] font-bold leading-none text-navy">{b.mid}</span>
            <span className="mt-1.5 h-px w-6 bg-plum/25" aria-hidden="true" />
            <span className="mt-1.5 font-display text-[0.46rem] font-semibold uppercase leading-none tracking-[0.08em] text-plum">
              {b.bottom}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Orbit diagram — services radiating out of one core promise. */
export function OrbitDiagram({ items }: { items: { label: string; icon: ReactNode }[] }) {
  const rows = [22, 172, 322];
  return (
    <div className="relative mx-auto hidden h-[420px] w-full max-w-[980px] lg:block" aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 980 420" preserveAspectRatio="none">
        <defs>
          <linearGradient id="orbit-g" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6b2e88" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#2a245c" stopOpacity="0.18" />
          </linearGradient>
        </defs>
        {[
          "M286 52 C 328 62, 344 112, 370 150",
          "M286 203 L 363 203",
          "M286 354 C 328 344, 344 294, 370 256",
          "M694 52 C 652 62, 636 112, 610 150",
          "M694 203 L 617 203",
          "M694 354 C 652 344, 636 294, 610 256",
        ].map((d, i) => (
          <path key={i} d={d} fill="none" stroke="url(#orbit-g)" strokeWidth="2" strokeDasharray="5 6" />
        ))}
        {[
          [370, 150], [363, 203], [370, 256],
          [610, 150], [617, 203], [610, 256],
        ].map(([cx, cy], i) => (
          <circle key={`d${i}`} cx={cx} cy={cy} r="6" fill="#ffffff" stroke="#6b2e88" strokeWidth="2" />
        ))}
      </svg>

      {/* core */}
      <div className="absolute left-1/2 top-1/2 flex h-[264px] w-[264px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[6px] border-navy bg-white text-center shadow-[0_30px_70px_-40px_rgba(42,36,92,0.55)]">
        <div className="absolute inset-[-16px] rounded-full border border-dashed border-plum/25" />
        <div className="absolute inset-[-38px] rounded-full border border-dashed border-plum/12" />
        <div className="px-6">
          <span className="mx-auto mb-3 grid h-11 w-11 place-items-center rounded-full bg-lilac text-plum">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11v2a1 1 0 0 0 1 1h2l9 5V5L6 10H4a1 1 0 0 0-1 1Z" /><path d="M18 9a3 3 0 0 1 0 6" /></svg>
          </span>
          <p className="font-display text-[1.08rem] font-semibold leading-tight text-navy">
            Digital growth
            <br />
            <span className="grad-text">that compounds</span>
          </p>
        </div>
      </div>

      {/* satellites */}
      {items.map((item, i) => {
        const row = i % 3;
        const side = i < 3 ? "left" : "right";
        return (
          <div
            key={item.label}
            className="absolute w-[286px]"
            style={{ top: rows[row], [side]: 0 } as React.CSSProperties}
          >
            <div className={`flex items-center gap-3 rounded-full border border-line bg-white px-3 py-2.5 shadow-[0_20px_50px_-38px_rgba(42,36,92,0.7)] ${side === "right" ? "flex-row-reverse text-right" : ""}`}>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-grad text-white">
                {item.icon}
              </span>
              <span className="font-display text-[0.84rem] font-medium text-navy">{item.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** Reusable abstract "project" mock — tints per case study, no photos. */
export function ProjectMock({ tone = "plum", label, dense = false }: { tone?: string; label?: string; dense?: boolean }) {
  const tones: Record<string, { a: string; b: string; ink: string }> = {
    plum: { a: "#f4e0ff", b: "#faf1ff", ink: "#6b2e88" },
    navy: { a: "#e7e9fb", b: "#f4f7ff", ink: "#2a245c" },
    sky: { a: "#eaeffd", b: "#f7f9ff", ink: "#3b5cb8" },
    lilac: { a: "#f6e9ff", b: "#fdf7ff", ink: "#894fa6" },
  };
  const t = tones[tone] ?? tones.plum;
  return (
    <div
      className={`relative overflow-hidden border-b border-line lg:h-full ${dense ? "rounded-none rounded-tl-[24px] lg:rounded-l-[26px] lg:rounded-tr-none" : "rounded-t-[24px]"}`}
      style={{ background: `linear-gradient(135deg, ${t.a} 0%, ${t.b} 100%)` }}
      aria-hidden="true"
    >
      <div className="p-5">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full" style={{ background: t.ink, opacity: 0.35 }} />
          <span className="h-2 w-2 rounded-full" style={{ background: t.ink, opacity: 0.25 }} />
          <span className="h-2 w-2 rounded-full" style={{ background: t.ink, opacity: 0.15 }} />
        </div>
        <div className="mt-4 h-3 w-3/4 rounded-full" style={{ background: t.ink, opacity: 0.75 }} />
        <div className="mt-2 h-2 w-1/2 rounded-full" style={{ background: t.ink, opacity: 0.28 }} />
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-14 rounded-xl bg-white/75 ring-1 ring-white" />
          ))}
        </div>
        <div className="mt-3 flex gap-2">
          <span className="h-6 w-20 rounded-full" style={{ background: t.ink, opacity: 0.8 }} />
          <span className="h-6 w-14 rounded-full bg-white/80" />
        </div>

        {dense && (
          <>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-16 rounded-xl bg-white/70 ring-1 ring-white" />
              ))}
            </div>
            <div className="mt-5 space-y-2">
              <div className="h-2 w-full rounded-full" style={{ background: t.ink, opacity: 0.16 }} />
              <div className="h-2 w-[86%] rounded-full" style={{ background: t.ink, opacity: 0.16 }} />
              <div className="h-2 w-[64%] rounded-full" style={{ background: t.ink, opacity: 0.16 }} />
            </div>
            <div className="mt-5 flex gap-2">
              <span className="h-14 flex-1 rounded-xl bg-white/75 ring-1 ring-white" />
              <span className="h-14 flex-1 rounded-xl bg-white/75 ring-1 ring-white" />
            </div>
          </>
        )}
      </div>
      {label && (
        <span className="absolute right-3 top-3 rounded-full bg-white/85 px-2.5 py-1 font-display text-[0.62rem] font-semibold uppercase tracking-wider" style={{ color: t.ink }}>
          {label}
        </span>
      )}
    </div>
  );
}

/** Decorative scribble underline used under hero words. */
export function Scribble({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 180 14" fill="none" aria-hidden="true">
      <path d="M2 9C28 3 52 3 78 7c26 4 52 4 78-2" stroke="#dda7fb" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}
