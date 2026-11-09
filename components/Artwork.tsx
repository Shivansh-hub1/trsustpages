import type { ReactNode } from "react";

/* ================================================================
   All artwork is inline SVG/CSS — no stock photography.
   ================================================================ */

/** Hero: abstract browser window + floating proof cards. */
/** Hero: Real browser frame showcasing authentic client site screenshot with live metrics. */
export function HeroArtwork() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]" aria-hidden="true">
      {/* glow */}
      <div className="absolute -inset-6 rounded-[48px] bg-[radial-gradient(60%_60%_at_50%_20%,rgba(107,46,136,0.22),transparent_70%)] blur-2xl" />

      {/* main browser frame */}
      <div className="relative overflow-hidden rounded-[26px] border border-line bg-white shadow-[0_45px_90px_-50px_rgba(42,36,92,0.55)]">
        <div className="flex items-center gap-1.5 border-b border-line bg-mist/90 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <div className="ml-3 flex h-6 flex-1 items-center gap-2 rounded-full bg-white px-3 text-[11px] font-medium text-navy/70 shadow-inner ring-1 ring-line">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 14.14 14.14"/></svg>
            <span className="truncate">devshivansh.in/services/web-development</span>
            <span className="ml-auto text-[10px] text-[#1a7f45] font-semibold hidden sm:flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" /> SSL Verified
            </span>
          </div>
        </div>

        {/* Real website screenshot */}
        <div className="relative aspect-[16/11] w-full overflow-hidden bg-mist">
          <img
            src="/screenshots/web-development.png"
            alt="Trustpages live custom web development project screenshot"
            width={1200}
            height={825}
            className="h-full w-full object-cover object-top transition duration-500 hover:scale-[1.02]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent opacity-80" />
        </div>
      </div>

      {/* floating proof card: speed & Core Web Vitals */}
      <div className="absolute -left-4 -bottom-5 hidden w-[184px] rounded-2xl border border-line bg-white p-3 shadow-[0_28px_60px_-34px_rgba(42,36,92,0.5)] sm:block">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#e9f9f0] text-[#1a7f45] font-display font-bold text-xs ring-2 ring-[#1a7f45]/20">
            100
          </span>
          <div>
            <p className="font-display text-[0.8rem] font-bold text-navy">Performance 100</p>
            <p className="text-[0.68rem] text-body">Core Web Vitals</p>
          </div>
        </div>
        <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-mist">
          <span className="block h-full w-[98%] rounded-full bg-[#28c840]" />
        </div>
      </div>

      {/* floating proof card: map pack #1 */}
      <div className="absolute -right-4 -top-4 hidden w-[196px] rounded-2xl border border-line bg-white p-3 shadow-[0_28px_60px_-34px_rgba(42,36,92,0.5)] md:block animate-float">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#f4ebff] text-plum font-display font-bold text-xs ring-2 ring-plum/20">
            #1
          </span>
          <div>
            <p className="font-display text-[0.8rem] font-bold text-navy">Rank #1 in Ayodhya</p>
            <p className="text-[0.68rem] text-body">Google Maps &amp; Search</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Hexagon trust badges — truthful claims only. */
export function HexBadges() {
  const badges = [
    { top: "FOCUS", mid: "MOBILE", bottom: "first design" },
    { top: "BASED IN", mid: "BIKAPUR", bottom: "Ayodhya, UP" },
    { top: "REPLY", mid: "< 12 HRS", bottom: "Mon–Sat" },
    { top: "YOUR", mid: "WEBSITE", bottom: "your assets" },
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
/** Real screenshot project mock for case studies. */
export function ProjectMock({
  screenshot = "/screenshots/web-development.png",
  label,
  dense = false,
}: {
  screenshot?: string;
  label?: string;
  dense?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden border-b border-line lg:h-full ${dense ? "rounded-none rounded-tl-[24px] lg:rounded-l-[26px] lg:rounded-tr-none" : "rounded-t-[24px]"}`}
      aria-hidden="true"
    >
      <div className="flex items-center gap-1.5 border-b border-line bg-mist/80 px-4 py-2">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        {label && (
          <span className="ml-auto rounded-full bg-white px-2 py-0.5 font-display text-[0.62rem] font-semibold text-plum">
            {label}
          </span>
        )}
      </div>
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-mist">
        <img
          src={screenshot}
          alt={label ? `${label} website screenshot` : "Website project screenshot"}
          width={800}
          height={500}
          className="h-full w-full object-cover object-top transition duration-300 hover:scale-105"
        />
      </div>
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
