"use client";

import { useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import type { ProjectImage } from "@/lib/types";

interface ProjectGalleryProps {
  images: ProjectImage[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const prev = () =>
    setLightboxIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setLightboxIndex((i) => (i + 1) % images.length);

  // Gallery layout: alternating full-width, 2-up
  const getLayout = (index: number) => {
    if (index % 3 === 0) return "col-span-12";
    return "col-span-12 md:col-span-6";
  };

  return (
    <>
      <section className="py-20 lg:py-28 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <span className="overline mb-14 block">Gallery</span>
          </ScrollReveal>

          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            {images.map((image, i) => (
              <ScrollReveal
                key={image.id}
                delay={i * 100}
                className={getLayout(i)}
              >
                <button
                  onClick={() => openLightbox(i)}
                  className="group relative w-full overflow-hidden cursor-pointer"
                >
                  <div
                    className={`relative ${
                      i % 3 === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 60vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  </div>
                  {image.caption && (
                    <p className="mt-2 text-xs text-text-tertiary text-left">
                      {image.caption}
                    </p>
                  )}
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9998] bg-black/95 flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
            aria-label="Close lightbox"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Counter */}
          <p className="absolute bottom-6 left-6 text-white/40 text-sm font-mono">
            {lightboxIndex + 1} / {images.length}
          </p>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors p-4"
            aria-label="Previous image"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors p-4"
            aria-label="Next image"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
