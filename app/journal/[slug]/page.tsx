import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { blogPosts } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Royal Diadem Consult`,
      description: post.excerpt,
      images: [{ url: post.coverImage.src, width: 1200, height: 800 }],
      type: "article",
    },
  };
}

export default async function JournalPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const nextPost = blogPosts[(currentIndex + 1) % blogPosts.length];

  return (
    <article>
      {/* Hero */}
      <section className="relative h-[60vh] lg:h-[70vh] w-full overflow-hidden">
        <Image
          src={post.coverImage.src}
          alt={post.coverImage.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 flex flex-col justify-end h-full px-8 md:px-16 lg:px-20 pb-14 lg:pb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-white/70">
                {post.category}
              </span>
              <span className="text-white/40">·</span>
              <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-white/70">
                {post.readTime}
              </span>
              <span className="text-white/40">·</span>
              <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-white/70">
                {new Date(post.date).toLocaleDateString("en-NG", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <h1 className="font-serif text-[clamp(1.75rem,5vw,3.75rem)] text-white font-light leading-[1.12]">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 px-6 md:px-8">
        <div className="max-w-[720px] mx-auto">
          <ScrollReveal>
            <div className="prose-custom">
              {post.content.split("\n\n").map((block, i) => {
                // Handle different markdown-like blocks
                if (block.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      className="font-serif text-2xl lg:text-3xl font-light mt-12 mb-6"
                    >
                      {block.replace("## ", "")}
                    </h2>
                  );
                }
                if (block.startsWith("### ")) {
                  return (
                    <h3
                      key={i}
                      className="font-serif text-xl lg:text-2xl font-light mt-10 mb-4"
                    >
                      {block.replace("### ", "")}
                    </h3>
                  );
                }
                if (block.startsWith("**")) {
                  return (
                    <p
                      key={i}
                      className="text-base lg:text-lg text-text font-medium leading-relaxed mb-4"
                    >
                      {block.replace(/\*\*/g, "")}
                    </p>
                  );
                }
                if (block.startsWith("| ")) {
                  // Simple table rendering
                  const rows = block.split("\n").filter((r) => !r.startsWith("|---"));
                  const headers = rows[0]
                    ?.split("|")
                    .filter(Boolean)
                    .map((h) => h.trim());
                  const dataRows = rows.slice(1);

                  return (
                    <div key={i} className="overflow-x-auto my-8">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            {headers?.map((h, hi) => (
                              <th
                                key={hi}
                                className="py-3 pr-6 text-left font-mono text-[11px] uppercase tracking-[0.15em] text-text-tertiary"
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {dataRows.map((row, ri) => (
                            <tr key={ri} className="border-b border-border/50">
                              {row
                                .split("|")
                                .filter(Boolean)
                                .map((cell, ci) => (
                                  <td
                                    key={ci}
                                    className="py-3 pr-6 text-text-secondary"
                                  >
                                    {cell.trim()}
                                  </td>
                                ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }
                if (block.startsWith("- ") || block.startsWith("1. ")) {
                  const items = block.split("\n");
                  const isOrdered = block.startsWith("1. ");
                  const ListTag = isOrdered ? "ol" : "ul";

                  return (
                    <ListTag
                      key={i}
                      className={`my-4 space-y-2 ${
                        isOrdered ? "list-decimal" : "list-disc"
                      } pl-6`}
                    >
                      {items.map((item, ii) => (
                        <li
                          key={ii}
                          className="text-base text-text-secondary leading-relaxed"
                        >
                          {item.replace(/^[-\d]+\.\s?/, "").replace(/\*\*(.*?)\*\*/g, "$1")}
                        </li>
                      ))}
                    </ListTag>
                  );
                }
                if (block.trim() === "") return null;

                return (
                  <p
                    key={i}
                    className="text-base lg:text-[17px] text-text-secondary leading-[1.8] mb-6"
                  >
                    {block}
                  </p>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Back + Next Post */}
      <section className="border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Back to Journal */}
            <ScrollReveal>
              <Link
                href="/journal"
                className="inline-flex items-center gap-2 text-sm font-sans font-medium text-text-secondary hover:text-accent transition-colors group"
              >
                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>
                Back to Journal
              </Link>
            </ScrollReveal>

            {/* Next Post */}
            {nextPost && nextPost.slug !== post.slug && (
              <ScrollReveal delay={100}>
                <div className="lg:text-right">
                  <p className="text-[11px] font-sans uppercase tracking-[0.2em] text-text-tertiary mb-3">
                    Next Article
                  </p>
                  <Link
                    href={`/journal/${nextPost.slug}`}
                    className="font-serif text-xl lg:text-2xl font-light hover:text-accent transition-colors duration-300"
                  >
                    {nextPost.title}
                  </Link>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>
    </article>
  );
}
