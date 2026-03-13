"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";
import { navLinks, siteConfig } from "@/lib/utils/constants";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 50);
      setHidden(currentY > lastScrollY && currentY > 400);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-bg/90 backdrop-blur-md border-b border-border"
            : "bg-transparent",
          hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"
        )}
      >
        <nav aria-label="Main navigation" className="max-w-[1200px] mx-auto flex items-center justify-between px-6 md:px-8 h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <div className="flex flex-col leading-tight">
              <span
                className={cn(
                  "font-serif text-lg lg:text-xl font-light tracking-wide transition-colors duration-500",
                  scrolled ? "text-text" : "text-white"
                )}
              >
                ROYAL DIADEM
              </span>
              <span
                className={cn(
                  "font-serif text-xs lg:text-sm font-light tracking-[0.25em] transition-colors duration-500",
                  scrolled ? "text-text-secondary" : "text-white/60"
                )}
              >
                CONSULT
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-[13px] font-sans font-medium uppercase tracking-[0.15em] transition-colors duration-300",
                  "hover:text-accent",
                  "after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:bg-accent after:transition-all after:duration-400",
                  pathname === link.href
                    ? "text-accent after:w-full"
                    : scrolled
                      ? "text-text-secondary after:w-0 hover:after:w-full"
                      : "text-white/80 after:w-0 hover:after:w-full"
                )}
              >
                {link.label}
              </Link>
            ))}
            {/* Search trigger — pill button */}
            <button
              onClick={() => {
                window.dispatchEvent(
                  new KeyboardEvent("keydown", { key: "k", metaKey: true })
                );
              }}
              className={cn(
                "flex items-center gap-2.5 px-4 py-2 rounded-full text-[13px] font-sans transition-all duration-300 border",
                scrolled
                  ? "text-text-tertiary bg-bg-secondary/80 border-border hover:border-accent hover:text-accent"
                  : "text-white/60 bg-white/10 border-white/20 hover:bg-white/20 hover:text-white"
              )}
              aria-label="Search (⌘K)"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <span className="hidden xl:inline">Search</span>
              <kbd
                className={cn(
                  "text-[10px] font-mono rounded px-1.5 py-0.5 border ml-1",
                  scrolled
                    ? "text-text-tertiary/70 bg-bg border-border"
                    : "text-white/40 bg-white/5 border-white/15"
                )}
              >
                ⌘K
              </kbd>
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-10 flex flex-col items-end gap-[6px] p-2"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={cn(
                "block h-[1.5px] transition-all duration-300",
                scrolled ? "bg-text" : "bg-white",
                mobileOpen ? "w-6 rotate-45 translate-y-[7.5px]" : "w-6"
              )}
            />
            <span
              className={cn(
                "block h-[1.5px] transition-all duration-300",
                scrolled ? "bg-text" : "bg-white",
                mobileOpen ? "w-0 opacity-0" : "w-4"
              )}
            />
            <span
              className={cn(
                "block h-[1.5px] transition-all duration-300",
                scrolled ? "bg-text" : "bg-white",
                mobileOpen ? "w-6 -rotate-45 -translate-y-[7.5px]" : "w-6"
              )}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
