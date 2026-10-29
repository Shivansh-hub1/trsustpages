"use client";

import { useState } from "react";
import { Icon } from "./Icons";

export default function Faq({
  items,
  columns = 1,
}: {
  items: { q: string; a: string }[];
  columns?: 1 | 2;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={columns === 2 ? "grid gap-3 md:grid-cols-2" : "space-y-3"}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={`overflow-hidden rounded-[18px] border bg-white transition-colors ${
              isOpen ? "border-plum/35 shadow-[0_18px_45px_-34px_rgba(107,46,136,0.55)]" : "border-line"
            }`}
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-button-${i}`}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-display text-[0.98rem] font-medium leading-snug text-navy">
                  {item.q}
                </span>
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition ${
                    isOpen ? "bg-grad text-white" : "bg-mist text-plum"
                  }`}
                  aria-hidden="true"
                >
                  <Icon name={isOpen ? "minus" : "plus"} size={15} strokeWidth={2} />
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-button-${i}`}
              hidden={!isOpen}
              className="px-5 pb-5"
            >
              <p className="text-[0.92rem] leading-relaxed text-body">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
