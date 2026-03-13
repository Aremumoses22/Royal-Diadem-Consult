"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  splitBy?: "words" | "lines";
}

export function TextReveal({
  children,
  as: Tag = "h2",
  className = "",
  delay = 0,
  splitBy = "words",
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    // Split text into words
    const text = el.textContent || "";
    const parts =
      splitBy === "words"
        ? text.split(" ")
        : text.split("\n");

    el.innerHTML = parts
      .map(
        (part) =>
          `<span style="display:inline-block;overflow:hidden;vertical-align:top;"><span style="display:inline-block;">${part}</span></span>`
      )
      .join(splitBy === "words" ? " " : "<br/>");

    const innerSpans = el.querySelectorAll(
      "span > span"
    );

    gsap.set(innerSpans, {
      y: "110%",
    });

    const tl = gsap.to(innerSpans, {
      y: "0%",
      duration: 0.8,
      stagger: 0.04,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
      // Restore original text
      if (el) el.textContent = text;
    };
  }, [children, delay, splitBy]);

  return (
    // @ts-expect-error - dynamic tag element
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
