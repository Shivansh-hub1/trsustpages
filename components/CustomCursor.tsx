"use client";

import { useEffect, useState, useRef } from "react";

/**
 * Lightweight, high-performance custom cursor inspired by top creative agencies.
 * - Dot instantly follows cursor.
 * - Smooth trailing ring tracks with subtle momentum using requestAnimationFrame.
 * - Scales and glows when hovering over interactive elements (a, button, input, .card).
 * - Automatically disabled on touch screens and when prefers-reduced-motion is active.
 */
export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mouseX = useRef(-100);
  const mouseY = useRef(-100);
  const ringX = useRef(-100);
  const ringY = useRef(-100);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse/trackpad) and no reduced motion
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasFinePointer || prefersReducedMotion) return;

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = target.closest(
        'a, button, input, textarea, select, [role="button"], .btn, .card, .card-flat, summary, label'
      );
      setIsHovered(!!isInteractive);
    };

    // Smooth lerp loop for the outer follower ring
    const render = () => {
      // Linear interpolation factor (smooth trailing effect)
      const ease = 0.18;
      ringX.current += (mouseX.current - ringX.current) * ease;
      ringY.current += (mouseY.current - ringY.current) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX.current}px, ${ringY.current}px, 0)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    rafId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (!mounted) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* Inner sharp dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 h-2 w-2 rounded-full bg-[#6b2e88] transition-transform duration-75 will-change-transform shadow-[0_0_8px_rgba(107,46,136,0.6)]"
      />

      {/* Outer fluid trailing ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border will-change-transform transition-[width,height,margin,border-color,background-color] duration-200 ease-out ${
          isHovered
            ? "-ml-6 -mt-6 h-12 w-12 border-[#6b2e88] bg-[#6b2e88]/10 shadow-[0_0_20px_rgba(107,46,136,0.35)] scale-110"
            : "-ml-4 -mt-4 h-8 w-8 border-[#2a245c]/40 bg-transparent"
        }`}
      />
    </div>
  );
}
