"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { projects } from "@/lib/data";
import { projectCategories } from "@/lib/utils/constants";
import { cn } from "@/lib/utils/cn";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Alternating grid sizes for editorial feel
  const getGridClass = (index: number) => {
    const pattern = index % 3;
    if (pattern === 0) return "md:col-span-7";
    if (pattern === 1) return "md:col-span-5";
    return "md:col-span-12";
  };

  return (
    <>
      {/* Page Header */}
      <section className="pt-40 lg:pt-52 pb-16 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <span className="overline">Portfolio</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="font-serif text-[clamp(2.25rem,5vw,4rem)] font-light leading-[1.1] mt-6">
              Our Work
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-6 md:px-8 sticky top-20 lg:top-24 z-30 bg-bg/90 backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-wrap gap-3">
            {projectCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                aria-pressed={activeCategory === cat.value}
                className={cn(
                  "px-5 py-2 text-[13px] font-sans uppercase tracking-[0.12em] border transition-all duration-300",
                  activeCategory === cat.value
                    ? "bg-text text-text-inverse border-text"
                    : "bg-transparent text-text-secondary border-border hover:border-text hover:text-text"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 lg:py-20 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
            {filteredProjects.map((project, i) => (
              <ScrollReveal
                key={project.id}
                delay={i * 100}
                className={getGridClass(i)}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block"
                >
                  <div
                    className={cn(
                      "relative overflow-hidden bg-bg-tertiary",
                      i % 3 === 2 ? "aspect-[21/9]" : "aspect-[4/3]"
                    )}
                  >
                    <Image
                      src={project.heroImage.src}
                      alt={project.heroImage.alt}
                      fill
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  </div>
                  <div className="mt-5">
                    <h3 className="font-serif text-xl lg:text-2xl font-light text-text group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-[13px] font-sans text-text-secondary">
                      {project.location.city} · {project.year} ·{" "}
                      <span className="capitalize">{project.category}</span>
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-24">
              <p className="text-text-secondary text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
