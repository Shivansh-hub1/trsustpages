"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "Web Development",
  "Website Design",
  "SEO & Local Growth",
  "eCommerce Stores",
];

export default function AnimatedHeroText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = PHRASES[phraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText === currentPhrase) {
      // Pause at full word before deleting
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === "") {
      // Move to next phrase
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    } else {
      // Typing or deleting speed
      const speed = isDeleting ? 45 : 90;
      timer = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? currentPhrase.substring(0, prev.length - 1)
            : currentPhrase.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, phraseIndex]);

  return (
    <span className="inline-flex items-center font-bold">
      <span className="grad-text">{displayedText}</span>
      {/* Blinking typewriter cursor line matching the user's screenshot */}
      <span
        className="ml-1 inline-block h-[1.05em] w-[2.5px] bg-[#6b2e88] align-middle animate-caret"
        aria-hidden="true"
      />
    </span>
  );
}
