import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Thoughts on architecture, building in Nigeria, design trends, and industry insights from Royal Diadem Consult.",
};

export default function JournalPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      {/* Page Header */}
      <section className="pt-40 lg:pt-52 pb-20 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <span className="overline">Journal</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="font-serif text-[clamp(2.25rem,5vw,4rem)] font-light leading-[1.1] mt-6 max-w-3xl">
              Thoughts on
              <br />
              Architecture
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-6 text-lg text-text-secondary max-w-2xl leading-[1.8]">
              Insights, guides, and reflections on architecture, design, and
              building in Nigeria.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Article */}
      <section className="pb-20 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <Link href={`/journal/${featured.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-bg-tertiary">
                  <Image
                    src={featured.coverImage.src}
                    alt={featured.coverImage.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    priority
                  />
                </div>
                <div className="lg:col-span-5 flex flex-col justify-center py-4">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-accent">
                      {featured.category}
                    </span>
                    <span className="text-text-tertiary">·</span>
                    <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-text-tertiary">
                      {featured.readTime}
                    </span>
                  </div>
                  <h2 className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-light leading-[1.2] group-hover:text-accent transition-colors duration-300">
                    {featured.title}
                  </h2>
                  <p className="mt-5 text-base text-text-secondary leading-[1.8] line-clamp-3">
                    {featured.excerpt}
                  </p>
                  <p className="mt-6 text-sm font-mono text-text-tertiary">
                    {new Date(featured.date).toLocaleDateString("en-NG", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Article Grid */}
      <section className="pb-28 lg:pb-40 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="border-t border-border pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
              {rest.map((post, i) => (
                <ScrollReveal key={post.id} delay={i * 100}>
                  <Link
                    href={`/journal/${post.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden mb-6">
                      <Image
                        src={post.coverImage.src}
                        alt={post.coverImage.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-accent">
                        {post.category}
                      </span>
                      <span className="text-text-tertiary">·</span>
                      <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-text-tertiary">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl lg:text-2xl font-light leading-snug group-hover:text-accent transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm text-text-secondary leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <p className="mt-4 text-xs font-mono text-text-tertiary">
                      {new Date(post.date).toLocaleDateString("en-NG", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
