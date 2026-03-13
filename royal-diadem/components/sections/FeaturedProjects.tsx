import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { projects } from "@/lib/data";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  // Alternating grid layout: large-small, small-large
  const layouts = [
    "md:col-span-7",
    "md:col-span-5",
    "md:col-span-5",
    "md:col-span-7",
  ];

  return (
    <section className="py-28 lg:py-40 px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <span className="overline">Selected Works</span>
        </ScrollReveal>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 mt-14">
          {featured.map((project, i) => (
            <ScrollReveal
              key={project.id}
              delay={i * 150}
              className={`${layouts[i]} col-span-1`}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[4/3] bg-bg-tertiary">
                  <Image
                    src={project.heroImage.src}
                    alt={project.heroImage.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                {/* Project Info */}
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

        {/* View All */}
        <ScrollReveal delay={600} className="text-center mt-20">
          <Link
            href="/projects"
            className="inline-block text-sm font-sans font-medium text-accent hover:text-accent-hover transition-colors duration-300 relative group"
          >
            View All Projects
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
