import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our comprehensive architecture services: design, visualization, project management, and consulting. Royal Diadem Consult.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-40 lg:pt-52 pb-20 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <span className="overline">Capabilities</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="font-serif text-[clamp(2.25rem,5vw,4rem)] font-light leading-[1.1] mt-6 max-w-3xl">
              Our Services
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-6 text-lg text-text-secondary max-w-2xl leading-[1.8]">
              From initial concept to final construction, we offer a
              comprehensive suite of architectural services designed to bring
              extraordinary visions to life.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-20 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 100}>
              <div
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 py-20 lg:py-28 border-t border-border items-center"
              >
                {/* Number */}
                <div className="lg:col-span-1">
                  <span className="font-mono text-3xl lg:text-4xl text-text-tertiary/30">
                    {service.number}
                  </span>
                </div>

                {/* Image */}
                <div className="lg:col-span-5 order-3 lg:order-2">
                  <div className="relative aspect-[4/3] overflow-hidden bg-bg-tertiary">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-6 order-2 lg:order-3 flex flex-col justify-center">
                  <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-light">
                    {service.title}
                  </h2>
                  <p className="mt-5 text-base text-text-secondary leading-[1.8]">
                    {service.description}
                  </p>

                  {/* Service Items */}
                  <div className="mt-8">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-text-tertiary mb-4">
                      Includes
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {service.items.map((item) => (
                        <span
                          key={item}
                          className="text-sm text-text-secondary border border-border px-4 py-2"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/projects"
                    className="inline-block mt-8 text-sm font-sans font-medium text-accent hover:text-accent-hover transition-colors duration-300 relative group"
                  >
                    View Related Projects
                    <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-accent-hover group-hover:w-full transition-all duration-400" />
                    <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
