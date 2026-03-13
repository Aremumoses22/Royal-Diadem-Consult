export const siteConfig = {
  name: "Royal Diadem Consult",
  tagline: "Architecture · Design · Vision",
  description:
    "Royal Diadem Consult is a world-class architecture studio creating timeless buildings that elevate the human experience. Based in Nigeria.",
  url: "https://royaldiadem.com",
  email: "info@royaldiadem.com",
  phone: "+234 XXX XXX XXXX",
  whatsapp: "+234XXXXXXXXXX",
  address: "Lagos, Nigeria",
  socials: {
    instagram: "https://instagram.com/royaldiadem",
    linkedin: "https://linkedin.com/company/royaldiadem",
    twitter: "https://twitter.com/royaldiadem",
    facebook: "https://facebook.com/royaldiadem",
  },
  officeHours: "Monday – Friday, 9:00 AM – 6:00 PM",
} as const;

export const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
] as const;

export const projectCategories = [
  { label: "All", value: "all" },
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
  { label: "Interior", value: "interior" },
  { label: "Landscape", value: "landscape" },
] as const;
