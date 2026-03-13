"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";

interface ImageRevealProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export function ImageReveal({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("overflow-hidden", className)}
    >
      <div
        className={cn(
          "transition-all duration-[1000ms]",
          isVisible
            ? "scale-100 [clip-path:inset(0_0_0_0)]"
            : "scale-110 [clip-path:inset(100%_0_0_0)]"
        )}
        style={{
          transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="w-full h-full object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        />
      </div>
    </div>
  );
}
