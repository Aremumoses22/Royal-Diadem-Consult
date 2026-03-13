"use client";

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  type KeyboardEvent,
} from "react";
import { useRouter } from "next/navigation";
import { projects, blogPosts, services } from "@/lib/data";
import { cn } from "@/lib/utils/cn";

interface SearchResult {
  type: "project" | "service" | "journal" | "page";
  title: string;
  subtitle?: string;
  href: string;
}

const staticPages: SearchResult[] = [
  { type: "page", title: "Home", href: "/" },
  { type: "page", title: "About the Studio", href: "/about" },
  { type: "page", title: "Our Projects", href: "/projects" },
  { type: "page", title: "Services", href: "/services" },
  { type: "page", title: "Journal", href: "/journal" },
  { type: "page", title: "Contact", href: "/contact" },
];

function getAllSearchItems(): SearchResult[] {
  const projectItems: SearchResult[] = projects.map((p) => ({
    type: "project",
    title: p.title,
    subtitle: `${p.location.city} · ${p.year} · ${p.category}`,
    href: `/projects/${p.slug}`,
  }));

  const serviceItems: SearchResult[] = services.map((s) => ({
    type: "service",
    title: s.title,
    subtitle: s.description.slice(0, 80) + "…",
    href: `/services#${s.id}`,
  }));

  const journalItems: SearchResult[] = blogPosts.map((b) => ({
    type: "journal",
    title: b.title,
    subtitle: `${b.category} · ${b.readTime}`,
    href: `/journal/${b.slug}`,
  }));

  return [...staticPages, ...projectItems, ...serviceItems, ...journalItems];
}

const typeLabels: Record<SearchResult["type"], string> = {
  page: "Page",
  project: "Project",
  service: "Service",
  journal: "Journal",
};

const typeColors: Record<SearchResult["type"], string> = {
  page: "bg-text-tertiary/20 text-text-secondary",
  project: "bg-accent/15 text-accent",
  service: "bg-accent-subtle/30 text-accent-hover",
  journal: "bg-text-tertiary/10 text-text-tertiary",
};

export function SearchOverlay() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const results = useCallback(() => {
    if (!query.trim()) return getAllSearchItems().slice(0, 8);
    const q = query.toLowerCase();
    return getAllSearchItems().filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle?.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q)
    );
  }, [query]);

  const filteredResults = results();

  // Cmd+K / Ctrl+K to open
  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Scroll active item into view
  useEffect(() => {
    if (!listRef.current) return;
    const items = listRef.current.querySelectorAll("[data-search-item]");
    items[activeIndex]?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  const navigate = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filteredResults.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && filteredResults[activeIndex]) {
      e.preventDefault();
      navigate(filteredResults[activeIndex].href);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-start justify-center pt-[15vh]" role="dialog" aria-modal="true" aria-label="Search">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full max-w-[600px] mx-4 bg-bg border border-border rounded-lg shadow-2xl overflow-hidden animate-fade-in">
        {/* Input */}
        <div className="flex items-center gap-3 px-5 border-b border-border">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-text-tertiary shrink-0"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search pages, projects, articles…"
            className="flex-1 py-4 bg-transparent text-base font-sans text-text placeholder:text-text-tertiary focus:outline-none"
            aria-label="Search"
            role="combobox"
            aria-expanded="true"
            aria-controls="search-results"
            aria-activedescendant={`search-item-${activeIndex}`}
          />
          <kbd className="hidden md:inline-flex items-center px-2 py-0.5 text-[10px] font-mono text-text-tertiary bg-bg-secondary border border-border rounded">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div
          ref={listRef}
          id="search-results"
          role="listbox"
          className="max-h-[50vh] overflow-y-auto py-2"
        >
          {filteredResults.length === 0 ? (
            <div className="px-5 py-10 text-center">
              <p className="text-text-tertiary text-sm">
                No results for &ldquo;{query}&rdquo;
              </p>
            </div>
          ) : (
            filteredResults.map((item, i) => (
              <button
                key={`${item.type}-${item.href}`}
                id={`search-item-${i}`}
                data-search-item
                role="option"
                aria-selected={i === activeIndex}
                onClick={() => navigate(item.href)}
                onMouseEnter={() => setActiveIndex(i)}
                className={cn(
                  "w-full flex items-center gap-4 px-5 py-3 text-left transition-colors",
                  i === activeIndex ? "bg-bg-secondary" : "hover:bg-bg-secondary/50"
                )}
              >
                <span
                  className={cn(
                    "shrink-0 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded",
                    typeColors[item.type]
                  )}
                >
                  {typeLabels[item.type]}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-sans text-text truncate">
                    {item.title}
                  </p>
                  {item.subtitle && (
                    <p className="text-xs text-text-tertiary truncate mt-0.5">
                      {item.subtitle}
                    </p>
                  )}
                </div>
                {i === activeIndex && (
                  <span className="text-text-tertiary text-xs shrink-0">
                    ↵
                  </span>
                )}
              </button>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-2.5 border-t border-border bg-bg-secondary/50">
          <div className="flex items-center gap-3 text-[10px] font-mono text-text-tertiary">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-bg border border-border rounded text-[10px]">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-bg border border-border rounded text-[10px]">↓</kbd>
              navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-bg border border-border rounded text-[10px]">↵</kbd>
              open
            </span>
          </div>
          <span className="text-[10px] font-mono text-text-tertiary">
            {filteredResults.length} result{filteredResults.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>
    </div>
  );
}
