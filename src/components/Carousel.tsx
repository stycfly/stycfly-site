"use client";

import { useState } from "react";
import Image from "next/image";

type Slide = {
  src: string;
  alt: string;
};

export default function Carousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);

  const go = (delta: number) => {
    setIndex((i) => (i + delta + slides.length) % slides.length);
  };

  return (
    <div className="hover-lift overflow-hidden rounded-xl border border-line">
      <div className="relative aspect-[9/16] w-full overflow-hidden sm:aspect-[3/4]">
        {slides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            className={`object-cover transition-opacity duration-500 ${
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            priority={i === 0}
          />
        ))}

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Photo précédente"
          className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-ink shadow-md transition-transform hover:scale-105"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
            <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Photo suivante"
          className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-ink shadow-md transition-transform hover:scale-105"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Aller à la photo ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-white" : "w-2 bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
