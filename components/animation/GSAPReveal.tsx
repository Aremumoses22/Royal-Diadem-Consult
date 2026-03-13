"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GSAPRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  stagger?: number;
  scrub?: boolean;
}

export function GSAPReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 40,
  stagger = 0,
  scrub = false,
}: GSAPRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const translateMap = {
      up: { y: distance, x: 0 },
      down: { y: -distance, x: 0 },
      left: { x: distance, y: 0 },
      right: { x: -distance, y: 0 },
    };

    const translate = translateMap[direction];
    const targets = stagger > 0 ? el.children : el;

    gsap.set(targets, {
      opacity: 0,
      x: translate.x,
      y: translate.y,
    });

    const animation = gsap.to(targets, {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      stagger: stagger > 0 ? stagger : 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        end: scrub ? "bottom 20%" : undefined,
        scrub: scrub ? 1 : false,
        toggleActions: scrub ? undefined : "play none none none",
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [direction, delay, duration, distance, stagger, scrub]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
