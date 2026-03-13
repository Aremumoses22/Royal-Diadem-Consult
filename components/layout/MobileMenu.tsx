"use client";

import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { navLinks, siteConfig } from "@/lib/utils/constants";
import { useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export function MobileMenu({ isOpen, onClose, pathname }: MobileMenuProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-40 bg-bg transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] lg:hidden",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="flex flex-col justify-between h-full pt-28 pb-12 px-8">
        {/* Navigation Links */}
        <nav className="flex flex-col gap-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={cn(
                "font-serif text-4xl font-light transition-all duration-500",
                "opacity-0",
                isOpen && "opacity-100",
                pathname === link.href
                  ? "text-accent"
                  : "text-text hover:text-accent"
              )}
              style={{
                transitionDelay: isOpen ? `${150 + i * 80}ms` : "0ms",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contact Info */}
        <div
          className={cn(
            "border-t border-border pt-8 space-y-3 transition-all duration-500",
            "opacity-0",
            isOpen && "opacity-100"
          )}
          style={{ transitionDelay: isOpen ? "550ms" : "0ms" }}
        >
          <a
            href={`mailto:${siteConfig.email}`}
            className="block text-sm text-text-secondary hover:text-accent transition-colors"
          >
            {siteConfig.email}
          </a>
          <a
            href={`tel:${siteConfig.phone}`}
            className="block text-sm text-text-secondary hover:text-accent transition-colors"
          >
            {siteConfig.phone}
          </a>
          <div className="flex gap-6 pt-4">
            {Object.entries(siteConfig.socials).map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.15em] text-text-tertiary hover:text-accent transition-colors"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
