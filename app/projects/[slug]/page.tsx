import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { ProjectGallery } from "@/components/project/ProjectGallery";
import { BeforeAfterSlider } from "@/components/shared/BeforeAfterSlider";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.metaTitle,
    description: project.metaDescription,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIdx = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIdx + 1) % projects.length];

  const metaItems = [
    { label: "Client", value: project.client },
    {
      label: "Location",
      value: `${project.location.city}, ${project.location.country}`,
    },
    { label: "Year", value: String(project.year) },
    { label: "Type", value: project.category },
    ...(project.area ? [{ label: "Area", value: project.area }] : []),
    {
      label: "Status",
      value: project.status.charAt(0).toUpperCase() + project.status.slice(1),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src={project.heroImage.src}
          alt={project.heroImage.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="relative z-10 flex flex-col justify-end h-full px-8 md:px-16 lg:px-20 pb-20 md:pb-24 lg:pb-32">
          <div className="max-w-4xl">
            <h1 className="font-serif text-[clamp(2.25rem,6vw,4.5rem)] text-white font-light leading-[1.05]">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="mt-4 text-lg text-white/70 font-sans font-light">
                {project.subtitle}
              </p>
            )}
            <p className="mt-4 text-[13px] uppercase tracking-[0.2em] text-white/50 font-sans">
              {project.location.city}, {project.location.country} · {project.year}
            </p>
          </div>
        </div>
      </section>

      {/* Metadata Grid */}
      <section className="py-16 lg:py-24 px-6 md:px-8 border-b border-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">
            {metaItems.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 80}>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-tertiary mb-2">
                    {item.label}
                  </p>
                  <p className="font-serif text-lg capitalize">{item.value}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Design Concept */}
      <section className="py-24 lg:py-32 px-6 md:px-8">
        <div className="max-w-[680px] mx-auto">
          <ScrollReveal>
            <span className="overline">The Concept</span>
          </ScrollReveal>

          {project.designConcept.split("\n\n").map((paragraph, i) => (
            <ScrollReveal key={i} delay={100 + i * 100}>
              <p className="mt-6 text-base lg:text-[17px] text-text-secondary leading-[1.8]">
                {paragraph}
              </p>
            </ScrollReveal>
          ))}

          {project.pullQuote && (
            <ScrollReveal delay={400}>
              <blockquote className="mt-12 pl-6 border-l-2 border-accent">
                <p className="font-serif text-2xl lg:text-3xl font-light italic text-text leading-snug">
                  &ldquo;{project.pullQuote}&rdquo;
                </p>
              </blockquote>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <ProjectGallery images={project.gallery} />
      )}

      {/* Before / After — Render vs. Built */}
      {project.renders.length > 0 && project.gallery.length > 0 && (
        <section className="py-24 lg:py-32 px-6 md:px-8">
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <span className="overline">Render vs. Reality</span>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="mt-14">
                <BeforeAfterSlider
                  beforeSrc={project.renders[0].src}
                  afterSrc={project.gallery[0].src}
                  beforeLabel="Render"
                  afterLabel="Built"
                  beforeAlt="3D render of the project"
                  afterAlt="Completed project photograph"
                  aspectRatio="16/9"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Materials */}
      {project.materials && project.materials.length > 0 && (
        <section className="py-24 lg:py-32 px-6 md:px-8">
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <span className="overline">Materials</span>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-12 mt-14">
              {project.materials.map((mat, i) => (
                <ScrollReveal key={mat.name} delay={i * 100}>
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-bg-tertiary mb-4" />
                    <p className="font-serif text-lg">{mat.name}</p>
                    <p className="text-xs text-text-tertiary uppercase tracking-wider mt-1">
                      {mat.type}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Specifications */}
      {project.specifications && (
        <section className="py-20 lg:py-28 px-6 md:px-8 bg-bg-secondary">
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <span className="overline">Specifications</span>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-12 mt-14">
              {Object.entries(project.specifications).map(([key, value], i) => (
                <ScrollReveal key={key} delay={i * 80}>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-tertiary mb-2">
                      {key}
                    </p>
                    <p className="font-serif text-2xl font-light">{value}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next Project */}
      <section className="relative">
        <Link
          href={`/projects/${nextProject.slug}`}
          className="group block relative h-[60vh] overflow-hidden"
        >
          <Image
            src={nextProject.heroImage.src}
            alt={nextProject.heroImage.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/50 font-sans mb-4">
              Next Project
            </p>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white font-light">
              {nextProject.title}
            </h2>
          </div>
        </Link>
      </section>
    </>
  );
}
