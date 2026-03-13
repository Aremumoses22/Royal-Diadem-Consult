"use client";

import { useState, useEffect } from "react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const testimonial = testimonials[current];

  return (
    <section
      className="py-28 lg:py-40 px-6 md:px-8 bg-bg-inverse text-text-inverse"
      aria-label="Client testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <span className="overline !text-accent-subtle">Testimonials</span>
        </ScrollReveal>

        <div className="mt-14 min-h-[280px] flex flex-col items-center justify-center" aria-live="polite" aria-atomic="true">
          <blockquote
            key={testimonial.id}
            className="animate-fade-in"
          >
            <p className="font-serif text-[clamp(1.5rem,3.5vw,2.5rem)] font-light italic leading-[1.4] text-text-inverse/90">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <footer className="mt-10">
              <p className="text-sm font-sans font-medium text-text-inverse/80">
                — {testimonial.author}
              </p>
              <p className="text-xs font-sans text-text-inverse/50 mt-1.5">
                {testimonial.title}
              </p>
              {testimonial.project && (
                <p className="text-xs font-sans text-accent-subtle mt-1.5">
                  {testimonial.project}
                </p>
              )}
            </footer>
          </blockquote>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-accent-subtle w-6"
                  : "bg-text-inverse/20 hover:bg-text-inverse/40"
              }`}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
