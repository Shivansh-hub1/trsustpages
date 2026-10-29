import type { SVGProps } from "react";

export type IconName =
  | "layout" | "code" | "search" | "megaphone" | "cart" | "spark"
  | "check" | "arrow" | "arrowUp" | "phone" | "mail" | "whatsapp"
  | "star" | "plus" | "minus" | "pin" | "clock" | "quote" | "shield"
  | "bolt" | "chart" | "target" | "users" | "sparkle" | "menu" | "close"
  | "linkedin" | "instagram" | "x" | "github" | "google" | "chevron"
  | "globe" | "doc" | "handshake";

const P: Record<IconName, React.ReactNode> = {
  layout: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M3 9h18M9 21V9" /></>,
  code: <><path d="M8 6 3 12l5 6M16 6l5 6-5 6" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.6-3.6" /></>,
  megaphone: <><path d="M3 11v2a1 1 0 0 0 1 1h2l9 5V5L6 10H4a1 1 0 0 0-1 1Z" /><path d="M18 9a3 3 0 0 1 0 6" /></>,
  cart: <><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /><path d="M2 3h3l2.6 11.4a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L22 7H6" /></>,
  spark: <><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8" /></>,
  check: <><path d="m4 12.5 5 5L20 6.5" /></>,
  arrow: <><path d="M4 12h15M13 6l6 6-6 6" /></>,
  arrowUp: <><path d="M7 17 17 7M9 7h8v8" /></>,
  phone: <><path d="M6 3h3l1.5 4.5L8.5 9a12 12 0 0 0 6.5 6.5l1.5-2L21 15v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4 5.2 2 2 0 0 1 6 3Z" /></>,
  mail: <><rect x="2.5" y="4.5" width="19" height="15" rx="3" /><path d="m3 6.5 9 6.5 9-6.5" /></>,
  whatsapp: <><path d="M20.5 11.6A8.4 8.4 0 0 1 7.9 19l-4.4 1.2 1.2-4.3A8.4 8.4 0 1 1 20.5 11.6Z" /><path d="M8.6 7.9c.4-.1.8 0 1 .4l.7 1.3c.1.3.1.6-.1.8l-.5.5c.5 1.1 1.4 2 2.5 2.4l.5-.6c.2-.2.5-.3.8-.1l1.3.7c.3.2.5.6.4 1-.2 1-1.2 1.7-2.2 1.6-2.9-.4-5.2-2.7-5.6-5.6-.1-1 .5-1.9 1.2-2.4Z" /></>,
  star: <><path d="m12 3 2.7 5.7 6.3.8-4.6 4.4 1.2 6.1L12 17l-5.6 3 1.2-6.1L3 9.5l6.3-.8Z" /></>,
  plus: <><path d="M12 5v14M5 12h14" /></>,
  minus: <><path d="M5 12h14" /></>,
  pin: <><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.6" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5.5l3.5 2" /></>,
  quote: <><path d="M9.5 6C6.5 7.4 5 10 5 13v5h5v-6H7.6c.1-1.7.8-3 2.4-3.8L9.5 6ZM19.5 6C16.5 7.4 15 10 15 13v5h5v-6h-2.4c.1-1.7.8-3 2.4-3.8L19.5 6Z" /></>,
  shield: <><path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6l8-3Z" /><path d="m8.5 12 2.5 2.5 4.5-5" /></>,
  bolt: <><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" /></>,
  chart: <><path d="M4 20V4M4 20h16" /><path d="M8 16v-4M12.5 16V8M17 16v-7" /></>,
  target: <><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" /></>,
  users: <><circle cx="9" cy="8" r="3.2" /><path d="M2.8 20c0-3.4 2.8-5.4 6.2-5.4s6.2 2 6.2 5.4" /><path d="M16.5 5.4a3.2 3.2 0 0 1 0 6M18 14.8c2.1.6 3.4 2.2 3.4 4.4" /></>,
  sparkle: <><path d="M12 3.5 13.8 9l5.5 1.8-5.5 1.8L12 18l-1.8-5.4L4.7 10.8 10.2 9Z" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  close: <><path d="M6 6l12 12M18 6 6 18" /></>,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="4" /><path d="M7.5 10v6M7.5 7.6v.1M11.5 16v-3.2c0-1.3.8-2.2 2-2.2s2 .9 2 2.2V16" /></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17 6.8v.1" /></>,
  x: <><path d="M4 4l16 16M20 4 4 20" /></>,
  github: <><path d="M9 20v-3c-3 .7-3.7-1.5-3.7-1.5-.5-1.2-1.3-1.6-1.3-1.6-1-.7 0-.7 0-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.4-.3-4.5-1.2-4.5-5.3 0-1.1.4-2 1-2.8-.1-.3-.4-1.3.1-2.6 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.5 1.3.2 2.3.1 2.6.6.8 1 1.7 1 2.8 0 4.1-2.2 5-4.5 5.3.4.4.7 1.1.7 2.2V20" /></>,
  google: <><path d="M20.5 12.2c0-.7-.1-1.3-.2-1.9H12v3.7h4.8a4.2 4.2 0 0 1-1.8 2.7v2.2h2.9c1.7-1.6 2.6-3.9 2.6-6.7Z" /><path d="M12 21c2.4 0 4.4-.8 5.9-2.1l-2.9-2.2c-.8.5-1.8.9-3 .9a5.3 5.3 0 0 1-5-3.6H4v2.3A9 9 0 0 0 12 21Z" /><path d="M7 14a5.4 5.4 0 0 1 0-3.4V8.3H4a9 9 0 0 0 0 8l3-2.3Z" /><path d="M12 6.6c1.3 0 2.5.5 3.4 1.3l2.6-2.6A9 9 0 0 0 4 8.3L7 10a5.3 5.3 0 0 1 5-3.4Z" /></>,
  chevron: <><path d="m6 9 6 6 6-6" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3.5 9.5h17M3.5 14.5h17M12 3c2.2 2.4 3.3 5.4 3.3 9S14.2 18.6 12 21c-2.2-2.4-3.3-5.4-3.3-9S9.8 5.4 12 3Z" /></>,
  doc: <><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></>,
  handshake: <><path d="m3 11 3-3 4 1 2 2 2-2 4-1 3 3-4 5-3-1-2 2-2-2-3 1-4-5Z" /><path d="M8 9 5 6M16 9l3-3" /></>,
};

export function Icon({
  name,
  size = 20,
  strokeWidth = 1.7,
  ...rest
}: { name: IconName; size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
  const filled = name === "star" || name === "quote" || name === "sparkle" || name === "bolt";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {P[name]}
    </svg>
  );
}
