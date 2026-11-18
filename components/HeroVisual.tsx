import Link from "next/link";
import { Icon } from "./Icons";
import { SITE } from "@/lib/site";

interface HeroVisualProps {
  screenshot?: string;
  badgeTop?: string;
  badgeBottom?: string;
  rating?: string;
  tag?: string;
  location?: string;
  priceFrom?: string;
}

export default function HeroVisual({
  screenshot = "/screenshots/project-hero.png",
  badgeTop = "100/100 Speed",
  badgeBottom = "Core Web Vitals Verified",
  rating = "5.0 ★ Google Rated",
  tag = "Ayodhya District Hub",
  location = "Bikapur, Ayodhya",
  priceFrom = "₹24,999",
}: HeroVisualProps) {
  return (
    <div className="relative mx-auto w-full max-w-[480px] lg:max-w-none">
      {/* Background ambient glow */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-plum/20 via-lilac/30 to-sky/20 blur-2xl opacity-70" />

      {/* Main Glass Card Frame */}
      <div className="relative overflow-hidden rounded-[24px] border border-line bg-white/95 shadow-[0_30px_70px_-30px_rgba(42,36,92,0.45)] backdrop-blur">
        {/* Browser Mock Chrome Bar */}
        <div className="flex items-center justify-between border-b border-line bg-mist/90 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-0.5 text-[11px] font-medium text-navy/70 ring-1 ring-line shadow-inner">
            <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
            <span>devshivansh.in/live-hub</span>
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-plum">
            Official
          </span>
        </div>

        {/* Real Screenshot Preview */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-mist">
          <img
            src={screenshot}
            alt="Website and digital experience interface preview"
            width={800}
            height={500}
            className="h-full w-full object-cover object-top transition duration-500 hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />

          {/* Overlay Tag inside screenshot */}
          <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-navy/85 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{tag}</span>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="p-5">
          <div className="grid grid-cols-2 gap-3 pb-4 border-b border-line">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-lilac text-plum">
                <Icon name="bolt" size={16} />
              </span>
              <div>
                <p className="font-display text-xs font-bold text-navy">{badgeTop}</p>
                <p className="text-[10px] text-body">{badgeBottom}</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-amber-50 text-amber-600">
                <Icon name="star" size={16} />
              </span>
              <div>
                <p className="font-display text-xs font-bold text-navy">{rating}</p>
                <p className="text-[10px] text-body">{location}</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div>
              <p className="text-[11px] text-body">Fixed Scope Package</p>
              <p className="font-display text-sm font-bold text-navy">Starting at {priceFrom}</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-grad px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:shadow-glow hover:-translate-y-0.5"
            >
              Check Availability <Icon name="arrow" size={12} />
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Badge (Bottom-left) */}
      <div className="absolute -bottom-4 -left-3 hidden sm:flex items-center gap-2 rounded-2xl border border-line bg-white px-3.5 py-2 shadow-soft backdrop-blur">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-50 text-emerald-600">
          <Icon name="shield" size={15} />
        </span>
        <span className="font-display text-xs font-bold text-navy">100% Code &amp; Domain Ownership</span>
      </div>
    </div>
  );
}
