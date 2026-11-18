"use client";

import { useEffect, useState, useRef } from "react";

/**
 * Premium Creative Agency Cursor Effect.
 * - Buttery-smooth fluid follower ring with ambient radial glow.
 * - Center target dot with vibrant gradient styling.
 * - Dynamic expansion & magnetic glow on hover over interactive elements.
 * - Zero layout thrashing, 60fps transform-only rendering with requestAnimationFrame.
 * - Only mounts on non-touch devices with fine pointers.
 */
export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const mouseX = useRef(-200);
  const mouseY = useRef(-200);
  const ringX = useRef(-200);
  const ringY = useRef(-200);
  const glowX = useRef(-200);
  const glowY = useRef(-200);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on devices with a mouse/trackpad (no phones/tablets) and no reduced motion
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasFinePointer || prefersReducedMotion) return;

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      // Position inner dot immediately for 0ms latency
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = target.closest(
        'a, button, input, textarea, select, [role="button"], .btn, .card, .card-flat, summary, label, nav, [data-open-enquire]'
      );
      setIsHovered(!!isInteractive);
    };

    // Smooth lerp render loop
    const render = () => {
      // Ring follows mouse with smooth ease
      const ringEase = 0.22;
      ringX.current += (mouseX.current - ringX.current) * ringEase;
      ringY.current += (mouseY.current - ringY.current) * ringEase;

      // Outer glow follows with slightly more floaty lag
      const glowEase = 0.12;
      glowX.current += (mouseX.current - glowX.current) * glowEase;
      glowY.current += (mouseY.current - glowY.current) * glowEase;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX.current}px, ${ringY.current}px, 0)`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowX.current}px, ${glowY.current}px, 0)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    rafId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[99999] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* 1. Large Ambient Glow aura (drifts with momentum) */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 -ml-16 -mt-16 h-32 w-32 rounded-full bg-gradient-to-tr from-[#6b2e88]/15 via-[#a855f7]/10 to-transparent blur-xl will-change-transform"
      />

      {/* 2. Outer Smooth Follower Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border-2 will-change-transform transition-[width,height,margin,border-color,background-color,transform] duration-200 ease-out ${
          isHovered
            ? "-ml-7 -mt-7 h-14 w-14 border-[#6b2e88] bg-[#6b2e88]/15 shadow-[0_0_24px_rgba(107,46,136,0.45)] scale-110"
            : isClicking
            ? "-ml-3 -mt-3 h-6 w-6 border-[#a855f7] bg-[#6b2e88]/30 scale-90"
            : "-ml-5 -mt-5 h-10 w-10 border-[#6b2e88]/60 bg-transparent shadow-[0_0_12px_rgba(107,46,136,0.2)]"
        }`}
      />

      {/* 3. Center Vibrant Pointer Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -ml-1.5 -mt-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-[#894fa6] to-[#2a245c] shadow-[0_0_10px_rgba(107,46,136,0.9)] will-change-transform transition-[transform,opacity] duration-150 ${
          isHovered ? "scale-150 opacity-90" : "scale-100 opacity-100"
        }`}
      />
    </div>
  );
}
