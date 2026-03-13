import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/utils/constants";

export function Footer() {
  return (
    <footer className="bg-bg-inverse text-text-inverse">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 py-20 lg:py-28">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Studio Name */}
          <div className="lg:col-span-1">
            <div className="flex flex-col leading-tight mb-6">
              <span className="font-serif text-2xl font-light tracking-wide">
                ROYAL DIADEM
              </span>
              <span className="font-serif text-sm font-light tracking-[0.25em] text-text-inverse/60">
                CONSULT
              </span>
            </div>
            <p className="text-sm text-text-inverse/50 leading-relaxed max-w-xs">
              Creating architecture that elevates the human experience. Based in
              Nigeria, designing for the world.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="overline !text-text-inverse/40 mb-6">Navigation</h4>
            <nav aria-label="Footer navigation" className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text-inverse/70 hover:text-text-inverse transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="overline !text-text-inverse/40 mb-6">Contact</h4>
            <div className="flex flex-col gap-3">
              <p className="text-sm text-text-inverse/70">
                {siteConfig.address}
              </p>
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-sm text-text-inverse/70 hover:text-text-inverse transition-colors"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-text-inverse/70 hover:text-text-inverse transition-colors"
              >
                {siteConfig.email}
              </a>
              <p className="text-sm text-text-inverse/50 mt-2">
                {siteConfig.officeHours}
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="overline !text-text-inverse/40 mb-6">Follow</h4>
            <div className="flex flex-col gap-3">
              {Object.entries(siteConfig.socials).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-inverse/70 hover:text-text-inverse transition-colors duration-300 capitalize"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-text-inverse/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-text-inverse/40">
            © {new Date().getFullYear()} Royal Diadem Consult. All rights
            reserved.
          </p>
          <p className="text-xs text-text-inverse/30">
            Designed & Developed with precision
          </p>
        </div>
      </div>
    </footer>
  );
}
