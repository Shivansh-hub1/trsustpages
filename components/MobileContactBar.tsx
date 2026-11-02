"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/site";
import { Icon } from "./Icons";

export default function MobileContactBar() {
  const pathname = usePathname();
  if (pathname === "/admin" || pathname.startsWith("/admin/")) return null;
  return (
    <nav aria-label="Quick contact" className="mobile-contact-bar fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_24px_rgba(42,36,92,0.08)] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi Trustpages, I'd like to discuss a website project.")}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline !min-h-11 !px-3"><Icon name="whatsapp" size={16} /> WhatsApp<span className="sr-only"> (opens in a new tab)</span></a>
        <Link href="/contact#project-enquiry" className="btn btn-primary !min-h-11 !px-3">Get a proposal <Icon name="arrow" size={15} /></Link>
      </div>
    </nav>
  );
}
