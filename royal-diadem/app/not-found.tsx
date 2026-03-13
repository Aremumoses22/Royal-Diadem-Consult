import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="overline mb-6">Page Not Found</p>
      <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-text">
        404
      </h1>
      <p className="mt-8 text-lg text-text-secondary max-w-md leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>
      <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/"
          className="px-8 py-4 bg-accent text-text-inverse text-[13px] font-sans font-medium uppercase tracking-[0.15em] hover:bg-accent-hover transition-colors duration-300"
        >
          Back to Home
        </Link>
        <Link
          href="/projects"
          className="px-8 py-4 border border-border text-[13px] font-sans font-medium uppercase tracking-[0.15em] hover:bg-text hover:text-bg transition-colors duration-300"
        >
          View Projects
        </Link>
      </div>
    </section>
  );
}
