"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { services } from "@/lib/data";

export function ServicesOverview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-28 lg:py-40 px-6 md:px-8 bg-bg-secondary">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <span className="overline">What We Do</span>
        </ScrollReveal>

        <div className="mt-14 relative">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 100}>
              <Link
                href={`/services#${service.id}`}
                className="group block border-t border-border py-6 lg:py-8"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 lg:gap-12">
                    <span className="font-mono text-sm text-text-tertiary w-8 shrink-0">
                      {service.number}
                    </span>
                    <h3 className="font-serif text-[clamp(1.25rem,3vw,1.875rem)] font-light text-text group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <span className="text-text-tertiary group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 text-xl">
                    →
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
          {/* Bottom border */}
          <div className="border-t border-border" />

          {/* Floating preview image (desktop only) */}
          {hoveredIndex !== null && (
            <div
              className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-72 h-48 overflow-hidden pointer-events-none z-10 transition-opacity duration-300"
              style={{ opacity: hoveredIndex !== null ? 1 : 0 }}
            >
              <Image
                src={services[hoveredIndex].image.src}
                alt={services[hoveredIndex].image.alt}
                fill
                className="object-cover"
                sizes="288px"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
