"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatio?: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before",
  afterAlt = "After",
  beforeLabel = "Before",
  afterLabel = "After",
  aspectRatio = "16/10",
  className,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const pct = Math.min(100, Math.max(0, (x / rect.width) * 100));
      setPosition(pct);
    },
    []
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      setIsDragging(true);
      updatePosition(e.clientX);
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Keyboard support
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const step = e.shiftKey ? 10 : 2;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setPosition((p) => Math.max(0, p - step));
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setPosition((p) => Math.min(100, p + step));
      }
    },
    []
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden select-none bg-bg-tertiary",
        isDragging ? "cursor-ew-resize" : "cursor-ew-resize",
        className
      )}
      style={{ aspectRatio }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      role="slider"
      aria-label="Before and after comparison slider"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* After image (bottom layer — full) */}
      <div className="absolute inset-0">
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          className="object-cover pointer-events-none"
          sizes="(max-width: 1024px) 100vw, 80vw"
          draggable={false}
        />
      </div>

      {/* Before image (top layer — clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className="object-cover pointer-events-none"
          sizes="(max-width: 1024px) 100vw, 80vw"
          draggable={false}
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white/90 z-10 pointer-events-none"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center pointer-events-none">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-text"
          >
            <path
              d="M7 4L3 10L7 16M13 4L17 10L13 16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div
        className="absolute top-4 left-4 z-20 pointer-events-none transition-opacity duration-200"
        style={{ opacity: position > 15 ? 1 : 0 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-medium text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded">
          {beforeLabel}
        </span>
      </div>
      <div
        className="absolute top-4 right-4 z-20 pointer-events-none transition-opacity duration-200"
        style={{ opacity: position < 85 ? 1 : 0 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-medium text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded">
          {afterLabel}
        </span>
      </div>
    </div>
  );
}
