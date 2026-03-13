"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2560&q=85"
          alt="Modern architectural masterpiece at golden hour"
          fill
          priority
          className="object-cover scale-105"
          sizes="100vw"
          style={{
            transform: loaded ? "scale(1)" : "scale(1.1)",
            transition: "transform 1.5s cubic-bezier(0.33, 1, 0.68, 1)",
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full px-8 md:px-16 lg:px-20 pb-20 md:pb-24 lg:pb-32">
        <div
          className="max-w-4xl"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition:
              "opacity 0.8s cubic-bezier(0.33, 1, 0.68, 1) 0.5s, transform 0.8s cubic-bezier(0.33, 1, 0.68, 1) 0.5s",
          }}
        >
          <h1 className="font-serif text-[clamp(2.5rem,8vw,7rem)] text-white font-light leading-[1.05] tracking-tight">
            Royal Diadem
            <br />
            Consult
          </h1>
          <p
            className="mt-5 md:mt-6 text-[13px] md:text-sm font-sans uppercase tracking-[0.25em] text-white/60"
            style={{
              opacity: loaded ? 1 : 0,
              transition: "opacity 0.8s ease 1s",
            }}
          >
            Architecture · Design · Vision
          </p>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.8s ease 1.5s",
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-sans">
            Scroll
          </span>
          <div className="w-[1px] h-8 bg-white/25 overflow-hidden">
            <div className="w-full h-full bg-white/80 animate-[slideDown_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          0% {
            transform: translateY(-100%);
          }
          50% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </section>
  );
}
