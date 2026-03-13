import Link from "next/link";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function StudioIntro() {
  return (
    <section className="py-28 lg:py-40 px-6 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <span className="overline">Our Philosophy</span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="font-serif text-[clamp(1.75rem,4vw,3rem)] font-light leading-[1.2] mt-6 text-text">
            We don&apos;t just design buildings.
            <br />
            We craft environments that elevate the human experience.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="mt-8 text-base lg:text-lg text-text-secondary leading-[1.8] max-w-2xl mx-auto">
            Royal Diadem Consult is an architecture studio rooted in the belief
            that great design transforms lives. We bring together bold vision,
            technical mastery, and deep respect for context to create spaces
            that endure — physically, emotionally, and culturally.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <Link
            href="/about"
            className="inline-block mt-10 text-sm font-sans font-medium text-accent hover:text-accent-hover transition-colors duration-300 relative group"
          >
            Discover Our Story
            <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-accent-hover group-hover:w-full transition-all duration-400" />
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
