"use client";

import { useEffect, useState, useRef, type FormEvent } from "react";
import { Icon } from "./Icons";
import { SITE } from "@/lib/site";

export default function EnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "fallback">("idle");
  const [waLink, setWaLink] = useState(`https://wa.me/${SITE.whatsapp}`);
  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  const openModal = () => {
    setStatus("idle");
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    sessionStorage.setItem("trustpages_enquiry_dismissed", "true");
  };

  useEffect(() => {
    // 1. Auto-show once per session after 7 seconds if not dismissed
    const timer = setTimeout(() => {
      if (sessionStorage.getItem("trustpages_enquiry_dismissed") !== "true") {
        setIsOpen(true);
      }
    }, 7000);

    // 2. Global event listener & hash listener
    const handleOpen = () => openModal();
    window.addEventListener("open-enquire", handleOpen);

    const handleHash = () => {
      if (window.location.hash === "#enquire" || window.location.hash === "#enquire-now") {
        openModal();
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);

    // 3. Delegate click on any button or link with data-open-enquire or href="#enquire"
    const handleDocumentClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("[data-open-enquire], [href='#enquire'], [href='#enquire-now']");
      if (target) {
        e.preventDefault();
        openModal();
      }
    };
    document.addEventListener("click", handleDocumentClick);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("open-enquire", handleOpen);
      window.removeEventListener("hashchange", handleHash);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  // Lock body scroll and handle Escape key when open
  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);

    // Focus first input on open
    const focusTimer = setTimeout(() => {
      firstInputRef.current?.focus();
    }, 100);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(focusTimer);
    };
  }, [isOpen]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();
    const company = String(fd.get("company") || ""); // honeypot

    const text = `Hi Trustpages, I'm enquiring through your website.
Name: ${name}
Phone: ${phone}${email ? `\nEmail: ${email}` : ""}
Message: ${message}`;
    setWaLink(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`);

    setStatus("sending");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          service: "Enquire Now Popup",
          message,
          company,
          sourcePage: typeof window !== "undefined" ? window.location.pathname : "/",
        }),
      });

      const data = await res.json().catch(() => ({ ok: false }));
      if (res.ok && data.ok) {
        setStatus("success");
        form.reset();
        return;
      }
      setStatus("fallback");
    } catch {
      setStatus("fallback");
    }
  }

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquire-now-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Blurred backdrop */}
      <div
        className="fixed inset-0 bg-navy/60 backdrop-blur-sm transition-opacity"
        onClick={closeModal}
        aria-hidden="true"
      />

      {/* Modal card */}
      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-[820px] overflow-hidden rounded-[26px] bg-white shadow-[0_30px_90px_-20px_rgba(42,36,92,0.5)] border border-line animate-rise"
      >
        <div className="grid md:grid-cols-[1.1fr_1.3fr]">
          {/* Left Column: Visual & Value Props */}
          <div className="relative hidden flex-col justify-between bg-gradient-to-br from-[#faf4ff] via-[#f7f0ff] to-[#edf2ff] p-8 md:flex">
            <div>
              {/* Target / Growth Graphic */}
              <div className="relative mb-6 flex justify-center" aria-hidden="true">
                <svg width="130" height="110" viewBox="0 0 130 110" fill="none" className="drop-shadow-sm">
                  {/* Decorative glowing backplate */}
                  <ellipse cx="65" cy="55" rx="50" ry="40" fill="url(#t-glow)" opacity="0.4" />
                  
                  {/* Bullseye target circles */}
                  <circle cx="58" cy="48" r="38" fill="#ffffff" stroke="#e0d4f5" strokeWidth="2.5" />
                  <circle cx="58" cy="48" r="28" fill="#f5edff" stroke="#6b2e88" strokeWidth="3.5" />
                  <circle cx="58" cy="48" r="18" fill="#ffffff" stroke="#894fa6" strokeWidth="3" />
                  <circle cx="58" cy="48" r="8" fill="#6b2e88" />
                  
                  {/* Arrow hitting the bullseye */}
                  <path d="M92 14 L58 48" stroke="#5d2f74" strokeWidth="3.5" strokeLinecap="round" />
                  <polygon points="56,46 54,54 62,52" fill="#5d2f74" />
                  <path d="M88 10 L96 18 M92 6 L100 14" stroke="#894fa6" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Metric 3D growth bars */}
                  <rect x="88" y="55" width="10" height="28" rx="3" fill="#c084fc" opacity="0.85" />
                  <rect x="102" y="42" width="10" height="41" rx="3" fill="#894fa6" />
                  <rect x="116" y="30" width="10" height="53" rx="3" fill="#6b2e88" />

                  <defs>
                    <radialGradient id="t-glow" cx="0.5" cy="0.5" r="0.5">
                      <stop offset="0%" stopColor="#dda7fb" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#f4e0ff" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-[1.45rem] font-bold leading-tight text-navy">
                Scale Your <span className="grad-text">Digital Footprint.</span>
              </h3>
              <p className="mt-2.5 text-[0.84rem] leading-relaxed text-body">
                We partner with forward-thinking brands to deliver bespoke, high-converting digital experiences.
              </p>
            </div>

            {/* 3 Value Propositions */}
            <ul className="mt-6 space-y-3.5 border-t border-line/60 pt-6">
              <li className="flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-plum shadow-sm ring-1 ring-purple-100">
                  <Icon name="shield" size={15} />
                </span>
                <span className="font-display text-[0.84rem] font-medium text-navy">
                  Bespoke Digital Strategies
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-plum shadow-sm ring-1 ring-purple-100">
                  <Icon name="clock" size={15} />
                </span>
                <span className="font-display text-[0.84rem] font-medium text-navy">
                  Data-Driven Execution
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-plum shadow-sm ring-1 ring-purple-100">
                  <Icon name="search" size={15} />
                </span>
                <span className="font-display text-[0.84rem] font-medium text-navy">
                  Global Agency Expertise
                </span>
              </li>
            </ul>
          </div>

          {/* Right Column: Form */}
          <div className="relative bg-white p-7 sm:p-9">
            {/* Close Button */}
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close enquiry popup"
              className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-navy/60 transition hover:bg-mist hover:text-navy focus:outline-none focus:ring-2 focus:ring-plum"
            >
              <Icon name="close" size={16} />
            </button>

            <h2 id="enquire-now-title" className="font-display text-2xl font-bold text-navy">
              Enquire Now
            </h2>
            <p className="mt-1 text-[0.84rem] text-body">
              Fill out the form below to share your business objectives.
            </p>

            {status === "success" ? (
              <div className="my-8 rounded-2xl bg-[#e9f9f0] p-6 text-center text-[#1a7f45]">
                <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-[#1a7f45]/15 text-[#1a7f45]">
                  <Icon name="check" size={24} strokeWidth={2.4} />
                </div>
                <h4 className="font-display text-lg font-semibold text-navy">Enquiry Received!</h4>
                <p className="mt-2 text-sm text-body leading-relaxed">
                  Thank you! We reply within 12 business hours with a clear scope and quote.
                </p>
                <div className="mt-5">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full !text-sm"
                  >
                    <Icon name="whatsapp" size={16} /> Chat instantly on WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                {/* Honeypot field for bot suppression */}
                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="eq-company">Company</label>
                  <input id="eq-company" name="company" tabIndex={-1} autoComplete="off" />
                </div>

                <div>
                  <label htmlFor="eq-name" className="sr-only">
                    Name*
                  </label>
                  <input
                    ref={firstInputRef}
                    id="eq-name"
                    name="name"
                    required
                    minLength={2}
                    placeholder="Name*"
                    className="field !rounded-xl !py-2.5 !text-[0.92rem]"
                  />
                </div>

                <div>
                  <label htmlFor="eq-phone" className="sr-only">
                    Phone No*
                  </label>
                  <input
                    id="eq-phone"
                    name="phone"
                    required
                    type="tel"
                    inputMode="tel"
                    pattern="[0-9+\s-]{7,16}"
                    placeholder="Phone No*"
                    className="field !rounded-xl !py-2.5 !text-[0.92rem]"
                  />
                </div>

                <div>
                  <label htmlFor="eq-email" className="sr-only">
                    Email*
                  </label>
                  <input
                    id="eq-email"
                    name="email"
                    required
                    type="email"
                    placeholder="Email*"
                    className="field !rounded-xl !py-2.5 !text-[0.92rem]"
                  />
                </div>

                <div>
                  <label htmlFor="eq-message" className="sr-only">
                    Type Your Message*
                  </label>
                  <textarea
                    id="eq-message"
                    name="message"
                    required
                    rows={3}
                    placeholder="Type Your Message*"
                    className="field !rounded-xl !py-2.5 !text-[0.92rem] resize-none"
                  />
                </div>

                {status === "fallback" && (
                  <p className="rounded-xl bg-[#fff6e6] p-2.5 text-xs text-[#8a5a00] leading-snug">
                    Could not connect directly.{" "}
                    <a href={waLink} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                      Send via WhatsApp
                    </a>{" "}
                    for instant reply.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn btn-primary w-full !rounded-full !py-3.5 !text-[0.95rem] font-semibold shadow-glow"
                >
                  {status === "sending" ? "Sending…" : "Submit"}
                </button>

                <p className="text-center text-[0.72rem] text-body">
                  Your information is private · 100% spam-free · Rapid response
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
