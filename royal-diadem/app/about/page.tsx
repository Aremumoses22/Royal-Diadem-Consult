import type { Metadata } from "next";
import Image from "next/image";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover the story, philosophy, and people behind Royal Diadem Consult — a world-class architecture studio in Nigeria.",
};

const stats = [
  { number: "15+", label: "Years of Practice" },
  { number: "200+", label: "Projects Completed" },
  { number: "50+", label: "Residential Designs" },
  { number: "12", label: "Industry Awards" },
];

const credentials = [
  {
    category: "Education",
    items: [
      "B.Sc Architecture, University of Lagos",
      "M.Sc Architecture, Covenant University",
    ],
  },
  {
    category: "Professional",
    items: [
      "Nigerian Institute of Architects (NIA)",
      "Architects Registration Council (ARCON)",
      "Council for Regulation of Engineering (COREN)",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-40 lg:pt-52 pb-20 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <span className="overline">About the Studio</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="font-serif text-[clamp(2.25rem,5vw,4rem)] font-light leading-[1.1] mt-6 max-w-4xl">
              Where Vision
              <br />
              Meets Structure
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Founder Bio */}
      <section className="py-20 lg:py-28 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Portrait */}
          <ScrollReveal>
            <div className="relative aspect-[3/4] overflow-hidden bg-bg-tertiary">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85"
                alt="Principal Architect portrait"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>

          {/* Bio Text */}
          <div className="flex flex-col justify-center">
            <ScrollReveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-tertiary mb-6">
                Founded 2010
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="text-lg lg:text-xl text-text leading-[1.7]">
                Royal Diadem Consult was established with a singular vision: to
                create architecture that speaks to both the landscape and the
                people who inhabit it.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="mt-6 text-base text-text-secondary leading-[1.8]">
                Our principal architect brings over 15 years of experience
                designing across residential, commercial, and institutional
                typologies. Every project begins with deep listening —
                understanding not just what our clients want, but how they live,
                work, and dream.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="mt-6 text-base text-text-secondary leading-[1.8]">
                We believe architecture is an act of service — to the people who
                use it, the communities it shapes, and the environment it exists
                within. This conviction drives every line we draw and every
                material we specify.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-28 lg:py-40 px-6 md:px-8 bg-bg-inverse text-text-inverse">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="overline !text-accent-subtle">Design Philosophy</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <blockquote className="font-serif text-[clamp(1.5rem,3.5vw,3rem)] font-light italic leading-[1.3] mt-10">
              &ldquo;Architecture is the thoughtful making of space. It is not
              about the building — it is about the life that unfolds within
              it.&rdquo;
            </blockquote>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-10 text-base text-text-inverse/60 leading-[1.8] max-w-2xl mx-auto">
              Our approach is rooted in contextual modernism — designs that are
              unambiguously contemporary yet deeply connected to their African
              setting. We draw inspiration from local materials, climate, and
              cultural patterns, reinterpreting them through a lens of precision
              and restraint.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-28 lg:py-36 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <p className="font-serif text-[clamp(2.5rem,5vw,3.75rem)] font-light text-accent">
                    {stat.number}
                  </p>
                  <p className="mt-3 text-sm font-sans text-text-secondary uppercase tracking-[0.1em]">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 lg:py-28 px-6 md:px-8 bg-bg-secondary">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <span className="overline">Credentials</span>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mt-14">
            {credentials.map((group, i) => (
              <ScrollReveal key={group.category} delay={i * 150}>
                <h3 className="font-serif text-2xl font-light mb-6">
                  {group.category}
                </h3>
                <ul className="space-y-4">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-base text-text-secondary border-b border-border pb-4 leading-[1.6]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
