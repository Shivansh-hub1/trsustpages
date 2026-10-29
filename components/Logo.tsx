import Link from "next/link";

/** Trustpages mark: a shield/page hybrid — "pages that earn trust". */
export function Logo({ variant = "dark", compact = false }: { variant?: "dark" | "light"; compact?: boolean }) {
  const wordColor = variant === "light" ? "#ffffff" : "#2a245c";
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg width="38" height="38" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="tp-logo-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6b2e88" />
            <stop offset="100%" stopColor="#2a245c" />
          </linearGradient>
        </defs>
        <path
          d="M20 2.5 34.5 8v12.3c0 8-6.1 14.6-14.5 17.2C11.6 34.9 5.5 28.3 5.5 20.3V8L20 2.5Z"
          fill="url(#tp-logo-grad)"
        />
        <path d="M13.4 20.2 18 24.8l8.8-9.4" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[1.32rem] font-semibold tracking-[-0.03em]" style={{ color: wordColor }}>
            Trust<span style={{ color: variant === "light" ? "#dda7fb" : "#6b2e88" }}>pages</span>
          </span>
          <span
            className="mt-0.5 text-[0.55rem] font-medium uppercase tracking-[0.22em]"
            style={{ color: variant === "light" ? "rgba(255,255,255,0.7)" : "#7b7aba" }}
          >
            Web · Growth · AI Search
          </span>
        </span>
      )}
    </span>
  );
}

export function LogoLink({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Link href="/" aria-label="Trustpages — home" className="inline-flex shrink-0 items-center">
      <Logo variant={variant} />
    </Link>
  );
}
