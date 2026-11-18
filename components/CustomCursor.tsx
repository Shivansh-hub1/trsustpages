"use client";

import { useEffect, useState, useRef } from "react";

/**
 * Exact Matebiz Cursor Motion Effect.
 * Matches:
 * - .cursor-dot: 8px solid purple (#6b2e88) dot following mouse immediately
 * - .cursor-outline: 32px thin purple ring trailing smoothly with requestAnimationFrame lerp
 * - Smooth hover scaling on interactive targets
 */
export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on mobile/touch devices or if coarse pointer
    if (
      typeof window === "undefined" ||
      "ontouchstart" in window ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    setMounted(true);

    let mouseX = -100;
    let mouseY = -100;
    let outlineX = -100;
    let outlineY = -100;
    let isHovered = false;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.top = `${mouseY}px`;
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.opacity = "1";
      }
      if (outlineRef.current) {
        outlineRef.current.style.opacity = "1";
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.closest(
          "a, button, input, textarea, select, [role='button'], .btn, .card, .card-flat, summary, label"
        )
      ) {
        isHovered = true;
      } else {
        isHovered = false;
      }
    };

    const onMouseLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (outlineRef.current) outlineRef.current.style.opacity = "0";
    };

    const onMouseEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (outlineRef.current) outlineRef.current.style.opacity = "1";
    };

    // Smooth 60fps lerp trailing loop for outline ring
    const animate = () => {
      outlineX += (mouseX - outlineX) * 0.2;
      outlineY += (mouseY - outlineY) * 0.2;

      if (outlineRef.current) {
        outlineRef.current.style.top = `${outlineY}px`;
        outlineRef.current.style.left = `${outlineX}px`;
        outlineRef.current.style.transform = `translate(-50%, -50%) scale(${
          isHovered ? 1.35 : 1
        })`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Exact Matebiz Cursor Dot */}
      <div
        ref={dotRef}
        className="cursor-dot fixed pointer-events-none rounded-full bg-[#6b2e88] w-[8px] h-[8px] -translate-x-1/2 -translate-y-1/2 z-[99999] opacity-0 transition-opacity duration-150"
        aria-hidden="true"
      />
      {/* Exact Matebiz Cursor Outline */}
      <div
        ref={outlineRef}
        className="cursor-outline fixed pointer-events-none rounded-full border-[1.5px] border-[#6b2e88] w-[32px] h-[32px] -translate-x-1/2 -translate-y-1/2 z-[99998] opacity-0 transition-[transform,opacity] duration-200 ease-out"
        aria-hidden="true"
      />
    </>
  );
}
