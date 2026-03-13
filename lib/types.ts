export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: "residential" | "commercial" | "interior" | "landscape";
  tags: string[];
  featured: boolean;
  client: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  year: number;
  status: "concept" | "in-progress" | "completed";
  area?: string;
  duration?: string;
  description: string;
  designConcept: string;
  pullQuote?: string;
  heroImage: ProjectImage;
  gallery: ProjectImage[];
  floorPlans: FloorPlan[];
  renders: ProjectImage[];
  materials?: Material[];
  specifications?: {
    floors: number;
    bedrooms?: number;
    bathrooms?: number;
    parking?: number;
    style: string;
  };
  metaTitle: string;
  metaDescription: string;
}

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  blurDataURL?: string;
}

export interface FloorPlan {
  id: string;
  label: string;
  image: ProjectImage;
  downloadURL?: string;
}

export interface Material {
  name: string;
  type: string;
  swatch?: ProjectImage;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  items: string[];
  image: ProjectImage;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  project?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  coverImage: ProjectImage;
  date: string;
  readTime: string;
  content: string;
}
