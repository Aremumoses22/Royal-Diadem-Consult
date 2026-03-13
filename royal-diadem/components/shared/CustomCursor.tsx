"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch devices
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    if (!cursor || !dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleElementHover = (e: Event) => {
      const target = e.target as HTMLElement;
      const cursorAttr = target.closest("[data-cursor]");
      if (cursorAttr) {
        const text = cursorAttr.getAttribute("data-cursor") || "";
        setCursorText(text);
        setIsHovering(true);
      }
    };

    const handleElementLeave = () => {
      setCursorText("");
      setIsHovering(false);
    };

    // Smooth follow animation
    let rafId: number;
    const animate = () => {
      // Cursor ring (slower follow)
      cursorX += (mouseX - cursorX) * 0.12;
      cursorY += (mouseY - cursorY) * 0.12;
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;

      // Dot (faster follow)
      dotX += (mouseX - dotX) * 0.25;
      dotY += (mouseY - dotY) * 0.25;
      dot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;

      rafId = requestAnimationFrame(animate);
    };

    // Add listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleElementHover);
    document.addEventListener("mouseout", handleElementLeave);

    rafId = requestAnimationFrame(animate);

    // Add default cursor hiding to body
    document.body.style.cursor = "none";

    // Hide cursor on all interactive elements
    const style = document.createElement("style");
    style.textContent = `
      a, button, [role="button"], input, textarea, select, [data-cursor] {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleElementHover);
      document.removeEventListener("mouseout", handleElementLeave);
      cancelAnimationFrame(rafId);
      document.body.style.cursor = "";
      style.remove();
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer ring */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[99999] pointer-events-none mix-blend-difference"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease, width 0.4s cubic-bezier(0.33,1,0.68,1), height 0.4s cubic-bezier(0.33,1,0.68,1)",
          width: isHovering ? "80px" : "32px",
          height: isHovering ? "80px" : "32px",
        }}
      >
        <div
          className="w-full h-full rounded-full border border-white/70 flex items-center justify-center"
          style={{
            backgroundColor: isHovering ? "rgba(255,255,255,0.1)" : "transparent",
            transition: "background-color 0.3s ease",
          }}
        >
          {cursorText && (
            <span
              className="text-[10px] font-sans uppercase tracking-[0.15em] text-white"
              style={{
                opacity: isHovering ? 1 : 0,
                transition: "opacity 0.2s ease 0.1s",
              }}
            >
              {cursorText}
            </span>
          )}
        </div>
      </div>

      {/* Inner dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 z-[99999] pointer-events-none mix-blend-difference"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease, width 0.3s ease, height 0.3s ease",
          width: isHovering ? "0px" : "6px",
          height: isHovering ? "0px" : "6px",
        }}
      >
        <div className="w-full h-full rounded-full bg-white" />
      </div>
    </>
  );
}
