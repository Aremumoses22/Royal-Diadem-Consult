import { siteConfig } from "@/lib/utils/constants";

interface JsonLdProps {
  type: "Organization" | "LocalBusiness" | "Article" | "ImageGallery" | "WebPage";
  data?: Record<string, unknown>;
}

export function JsonLd({ type, data = {} }: JsonLdProps) {
  const baseOrganization = {
    "@context": "https://schema.org",
    "@type": "ArchitecturalFirm",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    sameAs: Object.values(siteConfig.socials),
  };

  const schemas: Record<string, object> = {
    Organization: baseOrganization,
    LocalBusiness: {
      ...baseOrganization,
      "@type": "LocalBusiness",
      openingHours: "Mo-Fr 09:00-18:00",
      priceRange: "$$$$",
      ...data,
    },
    Article: {
      "@context": "https://schema.org",
      "@type": "Article",
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      ...data,
    },
    ImageGallery: {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      ...data,
    },
    WebPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      isPartOf: {
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      ...data,
    },
  };

  const schema = schemas[type] || schemas.Organization;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
