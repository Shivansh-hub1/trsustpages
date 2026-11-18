"use client";

import { useEffect, useState } from "react";

const WORDS = [
  "growth engine",
  "lead machine",
  "client magnet",
  "revenue driver",
];

export default function AnimatedHeroText() {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % WORDS.length);
        setIsFading(false);
      }, 300);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`inline-block transition-all duration-300 transform ${
        isFading ? "opacity-0 -translate-y-2 scale-95" : "opacity-100 translate-y-0 scale-100"
      }`}
    >
      <span className="grad-text font-bold bg-gradient-to-r from-[#6b2e88] via-[#894fa6] to-[#2a245c] bg-clip-text text-transparent">
        {WORDS[index]}
      </span>
    </span>
  );
}
