import { Icon } from "./Icons";

const TECHS = [
  {
    name: "Next.js 16",
    role: "App Router & SSR",
    badge: "100/100 Core Web Vitals",
    color: "from-zinc-900 to-black text-white",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 180 180" fill="currentColor">
        <path d="M145.47 151.78l-72.19-94.88v94.88H53.5V36.93h19.78l72.19 94.88V36.93h19.78v114.85z" />
      </svg>
    ),
  },
  {
    name: "React 19",
    role: "Interactive Client UI",
    badge: "Component System",
    color: "from-sky-500/20 to-cyan-500/10 text-cyan-700",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 115.3 100" fill="currentColor">
        <path d="M57.6 42.9a7.1 7.1 0 1 0 7.2 7.1 7.1 7.1 0 0 0-7.2-7.1Zm0-42.9C25.8 0 0 11.2 0 25c0 10.6 15.3 19.6 37.6 23.2-1.3-4.4-2.1-9-2.1-13.8 0-19.1 10.1-34.4 22.1-34.4s22.1 15.3 22.1 34.4c0 4.8-.8 9.4-2.1 13.8C99.9 44.6 115.3 35.6 115.3 25c0-13.8-25.8-25-57.7-25ZM86.8 59.8c3.9 2.5 7.4 5.3 10.3 8.3 11.7 12 18.2 24.3 18.2 31.9 0 0-5.8 8.1-23.7 8.1-12.7 0-27.1-4.2-40.4-11.8 3.8-2.6 7.3-5.5 10.2-8.6 10.9-11.4 17.6-23.8 25.4-27.9Z" opacity="0.9" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    role: "Strict Type Safety",
    badge: "Zero Runtime Regressions",
    color: "from-blue-600/20 to-blue-500/10 text-blue-700",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h18v18H3V3zm10.72 13.57c.62.37 1.44.6 2.27.6 1.48 0 2.29-.68 2.29-1.68 0-1-.62-1.52-1.92-2l-.7-.27c-1.62-.61-2.45-1.46-2.45-2.73 0-1.8 1.49-3.07 3.83-3.07 1.05 0 1.95.25 2.57.57l-.54 1.55c-.5-.26-1.25-.49-2.07-.49-1.27 0-2.02.63-2.02 1.49 0 .88.62 1.34 1.84 1.8l.7.27c1.82.68 2.58 1.52 2.58 2.87 0 1.9-1.5 3.19-4.07 3.19-1.19 0-2.29-.3-2.95-.68l.54-1.65zM7.5 9.47h6.05v1.65h-2.1v7.6H9.55v-7.6H7.5V9.47z" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS v4",
    role: "Modern Utility Styling",
    badge: "Sub-10KB CSS Bundle",
    color: "from-teal-500/20 to-cyan-500/10 text-teal-700",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "Supabase & Postgres",
    role: "Database & Auth",
    badge: "Enterprise Security",
    color: "from-emerald-500/20 to-green-500/10 text-emerald-700",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.362 9.354H12V.3a.3.3 0 0 0-.535-.194L2.69 11.237a1.144 1.144 0 0 0 .888 1.884H12v9.055a.3.3 0 0 0 .535.193l8.775-11.132a1.144 1.144 0 0 0-.948-1.883Z" />
      </svg>
    ),
  },
  {
    name: "Figma",
    role: "UI/UX & Prototyping",
    badge: "Pixel-Perfect Layouts",
    color: "from-purple-500/20 to-pink-500/10 text-purple-700",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.5 12a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zm-5-3.5A3.5 3.5 0 0 1 7 5h5v7H7a3.5 3.5 0 0 1-3.5-3.5zm7 0V5h5a3.5 3.5 0 0 1 0 7h-5zm0 7h-5A3.5 3.5 0 0 1 7 12h5v3.5zm0 0v3.5A3.5 3.5 0 0 1 7 22a3.5 3.5 0 0 1-3.5-3.5c0-1.933 1.567-3.5 3.5-3.5h5z" />
      </svg>
    ),
  },
  {
    name: "UPI & Razorpay",
    role: "Instant Payment Gateway",
    badge: "Zero Drop-off Flow",
    color: "from-indigo-500/20 to-blue-500/10 text-indigo-700",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    name: "Google Search Console & GA4",
    role: "SEO & Traffic Analytics",
    badge: "Rank #1 Visibility",
    color: "from-amber-500/20 to-yellow-500/10 text-amber-700",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m16 12-4-4-4 4" />
        <path d="M12 16V8" />
      </svg>
    ),
  },
];

export default function TechStack() {
  return (
    <section className="border-t border-line bg-gradient-to-b from-mist/70 via-white to-mist/40 py-16">
      <div className="shell">
        <div className="text-center">
          <p className="eyebrow">Enterprise-grade Stack</p>
          <h2 className="h-section mt-2 text-navy">
            Technologies &amp; frameworks we use to build{" "}
            <span className="grad-text-animated">lightning-fast websites</span>
          </h2>
          <p className="lead mx-auto mt-3 max-w-2xl">
            We avoid slow template builders and bloated plugins. Every site is built on battle-tested, high-performance modern web architecture.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TECHS.map((t) => (
            <div
              key={t.name}
              className="card-flat group relative overflow-hidden p-5 transition duration-300 hover:-translate-y-1 hover:border-plum/30 hover:shadow-lift"
            >
              <div className="flex items-center justify-between">
                <span className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${t.color} p-2 shadow-sm transition duration-300 group-hover:scale-110`}>
                  {t.icon}
                </span>
                <span className="rounded-full bg-mist px-2.5 py-0.5 text-[0.66rem] font-semibold text-plum ring-1 ring-line">
                  {t.badge}
                </span>
              </div>
              <h3 className="font-display mt-4 text-[1.05rem] font-bold text-navy group-hover:text-plum transition-colors">
                {t.name}
              </h3>
              <p className="mt-1 text-xs text-body">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
