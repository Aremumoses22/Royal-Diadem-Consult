import Link from "next/link";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function ContactCTA() {
  return (
    <section className="py-32 lg:py-44 px-6 md:px-8 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-bg-secondary" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] font-light leading-[1.15] text-text">
            Let&apos;s Create Something
            <br />
            Extraordinary
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="mt-6 text-text-secondary text-base lg:text-lg leading-[1.8] max-w-xl mx-auto">
            Every great building begins with a conversation. Tell us about your
            vision, and let&apos;s bring it to life.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <Link
            href="/contact"
            className="inline-block mt-10 px-10 py-4 bg-accent text-text-inverse text-[13px] font-sans font-medium uppercase tracking-[0.15em] hover:bg-accent-hover transition-colors duration-300"
          >
            Start a Conversation
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
