import { Project, Service, Testimonial, BlogPost } from "./types";

// ──────────────────────────────────────────────
// PROJECTS
// ──────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: "1",
    slug: "the-meridian-residence",
    title: "The Meridian Residence",
    subtitle: "A study in light and concrete",
    category: "residential",
    tags: ["modern", "luxury", "minimalist"],
    featured: true,
    client: "Private Client",
    location: { city: "Lagos", state: "Lagos", country: "Nigeria" },
    year: 2025,
    status: "completed",
    area: "650 m²",
    duration: "24 months",
    description:
      "A contemporary luxury residence that redefines the Lagos skyline with its bold geometric forms and seamless indoor-outdoor living.",
    designConcept:
      "The Meridian Residence emerges from the intersection of tropical modernism and timeless minimalism. The design responds to Lagos's climate with deep overhangs, cross-ventilation strategies, and a central courtyard that brings nature into the heart of the home.\n\nThe material palette — fair-faced concrete, warm oak timber, and floor-to-ceiling glass — creates a dialogue between weight and transparency. Each room frames a carefully composed view, turning the landscape into living art.\n\nSustainability was woven into every decision: rainwater harvesting, passive cooling, and locally sourced materials reduce the building's environmental footprint while enhancing its connection to place.",
    pullQuote:
      "Architecture should be a conversation between land, light, and the lives lived within.",
    heroImage: {
      id: "h1",
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85",
      alt: "The Meridian Residence exterior at golden hour",
      width: 1920,
      height: 1280,
    },
    gallery: [
      {
        id: "g1",
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85",
        alt: "Living room interior with floor-to-ceiling windows",
        width: 1920,
        height: 1280,
      },
      {
        id: "g2",
        src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=85",
        alt: "Central courtyard with reflecting pool",
        width: 1920,
        height: 1280,
      },
      {
        id: "g3",
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85",
        alt: "Master bedroom overlooking garden",
        width: 1920,
        height: 1280,
      },
      {
        id: "g4",
        src: "https://images.unsplash.com/photo-1600573472591-ee6e68b1e0f0?w=1920&q=85",
        alt: "Kitchen and dining area",
        width: 1920,
        height: 1280,
      },
    ],
    floorPlans: [],
    renders: [],
    materials: [
      { name: "Fair-Faced Concrete", type: "Structure" },
      { name: "European Oak", type: "Flooring" },
      { name: "Low-E Glass", type: "Facade" },
    ],
    specifications: {
      floors: 3,
      bedrooms: 5,
      bathrooms: 6,
      parking: 4,
      style: "Contemporary Minimalist",
    },
    metaTitle: "The Meridian Residence | Royal Diadem Consult",
    metaDescription:
      "A contemporary luxury residence in Lagos featuring bold geometric forms, tropical modernism, and seamless indoor-outdoor living.",
  },
  {
    id: "2",
    slug: "azure-tower",
    title: "Azure Tower",
    subtitle: "Commercial excellence redefined",
    category: "commercial",
    tags: ["commercial", "tower", "modern"],
    featured: true,
    client: "Azure Development Group",
    location: { city: "Abuja", state: "FCT", country: "Nigeria" },
    year: 2024,
    status: "completed",
    area: "12,000 m²",
    duration: "36 months",
    description:
      "A 15-storey commercial tower that sets a new standard for office architecture in Nigeria's capital with its crystalline facade and sustainable design.",
    designConcept:
      "Azure Tower was conceived as a vertical garden — a building that breathes. The double-skin glass facade reduces solar heat gain by 40%, while integrated planters on every third floor create cascading greenery visible from the street.\n\nThe ground floor is given entirely to public space: an open lobby that flows into a landscaped plaza. This gesture of generosity defines the building's relationship with the city.\n\nInside, flexible floor plates and a central atrium filled with natural light create workspaces that prioritize wellbeing without sacrificing efficiency.",
    pullQuote: "A building should give more to the city than it takes.",
    heroImage: {
      id: "h2",
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85",
      alt: "Azure Tower glass facade reflecting sky",
      width: 1920,
      height: 1280,
    },
    gallery: [
      {
        id: "g5",
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85",
        alt: "Open plan office interior",
        width: 1920,
        height: 1280,
      },
      {
        id: "g6",
        src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=85",
        alt: "Glass atrium with greenery",
        width: 1920,
        height: 1280,
      },
    ],
    floorPlans: [],
    renders: [],
    materials: [
      { name: "Structural Steel", type: "Structure" },
      { name: "Double-Skin Glass", type: "Facade" },
      { name: "Polished Concrete", type: "Flooring" },
    ],
    specifications: { floors: 15, style: "Modern Sustainable" },
    metaTitle: "Azure Tower | Royal Diadem Consult",
    metaDescription:
      "A 15-storey sustainable commercial tower in Abuja with a crystalline double-skin facade and integrated vertical gardens.",
  },
  {
    id: "3",
    slug: "serene-villa",
    title: "Serene Villa",
    subtitle: "Tropical luxury reimagined",
    category: "residential",
    tags: ["villa", "tropical", "luxury"],
    featured: true,
    client: "Private Client",
    location: {
      city: "Port Harcourt",
      state: "Rivers",
      country: "Nigeria",
    },
    year: 2025,
    status: "completed",
    area: "480 m²",
    duration: "18 months",
    description:
      "A tropical villa that dissolves the boundary between architecture and landscape, with pavilion-style living spaces connected by water gardens.",
    designConcept:
      "Serene Villa draws from the tradition of tropical pavilion architecture. Rather than a single mass, the home is composed of interconnected volumes — each oriented to capture prevailing breezes and frame views of the surrounding garden.\n\nWater is the binding element: a shallow reflecting pool runs through the center of the compound, connecting the living pavilion to the private quarters. The sound of water is ever-present, creating a meditative atmosphere.\n\nNatural materials — laterite stone, iroko wood, and handmade ceramic tiles — ground the architecture in its West African context while maintaining a contemporary sensibility.",
    pullQuote:
      "The best architecture doesn't fight the climate — it dances with it.",
    heroImage: {
      id: "h3",
      src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=85",
      alt: "Serene Villa exterior with reflecting pool",
      width: 1920,
      height: 1280,
    },
    gallery: [
      {
        id: "g7",
        src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=85",
        alt: "Open pavilion living space",
        width: 1920,
        height: 1280,
      },
      {
        id: "g8",
        src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=85",
        alt: "Interior with natural materials",
        width: 1920,
        height: 1280,
      },
    ],
    floorPlans: [],
    renders: [],
    materials: [
      { name: "Laterite Stone", type: "Walls" },
      { name: "Iroko Wood", type: "Structure" },
      { name: "Ceramic Tiles", type: "Flooring" },
    ],
    specifications: {
      floors: 2,
      bedrooms: 4,
      bathrooms: 5,
      parking: 3,
      style: "Tropical Modernism",
    },
    metaTitle: "Serene Villa | Royal Diadem Consult",
    metaDescription:
      "A tropical villa in Port Harcourt with pavilion-style living, reflecting pools, and natural West African materials.",
  },
  {
    id: "4",
    slug: "the-loft-collection",
    title: "The Loft Collection",
    subtitle: "Industrial elegance",
    category: "interior",
    tags: ["interior", "loft", "renovation"],
    featured: true,
    client: "Loft Living Ltd",
    location: { city: "Lagos", state: "Lagos", country: "Nigeria" },
    year: 2024,
    status: "completed",
    area: "320 m²",
    duration: "8 months",
    description:
      "Transformation of a colonial-era warehouse into luxury loft apartments that honor the building's industrial heritage while introducing contemporary comfort.",
    designConcept:
      "The Loft Collection is a conversation between old and new. The original steel trusses, brick walls, and timber columns were carefully restored, becoming the architectural backdrop for a decidedly modern living experience.\n\nNew interventions are expressed honestly — steel-and-glass mezzanines, polished concrete floors, and minimalist kitchen blocks — creating a clear visual distinction between heritage and insertion.\n\nEach unit is unique, shaped by the existing structure rather than imposed upon it. The result is living spaces with extraordinary character that no new building could replicate.",
    pullQuote: "The most sustainable building is the one already built.",
    heroImage: {
      id: "h4",
      src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&q=85",
      alt: "Loft interior with exposed brick and steel",
      width: 1920,
      height: 1280,
    },
    gallery: [
      {
        id: "g9",
        src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=85",
        alt: "Open plan loft with mezzanine",
        width: 1920,
        height: 1280,
      },
      {
        id: "g10",
        src: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1920&q=85",
        alt: "Kitchen with exposed structural elements",
        width: 1920,
        height: 1280,
      },
    ],
    floorPlans: [],
    renders: [],
    materials: [
      { name: "Exposed Brick", type: "Walls" },
      { name: "Steel", type: "Structure" },
      { name: "Polished Concrete", type: "Flooring" },
    ],
    specifications: { floors: 2, bedrooms: 2, bathrooms: 2, style: "Industrial Modern" },
    metaTitle: "The Loft Collection | Royal Diadem Consult",
    metaDescription:
      "Luxury loft apartments in Lagos transformed from a colonial-era warehouse, honoring industrial heritage with contemporary design.",
  },
  {
    id: "5",
    slug: "oasis-gardens",
    title: "Oasis Gardens",
    subtitle: "Where city meets nature",
    category: "landscape",
    tags: ["landscape", "garden", "urban"],
    featured: false,
    client: "Municipal Authority",
    location: { city: "Abuja", state: "FCT", country: "Nigeria" },
    year: 2024,
    status: "completed",
    area: "5,000 m²",
    duration: "12 months",
    description:
      "A public urban garden that transforms a neglected city block into a green sanctuary with indigenous planting, water features, and community gathering spaces.",
    designConcept:
      "Oasis Gardens reclaims space for nature in the heart of the city. The design uses indigenous Nigerian plant species to create a low-maintenance, biodiverse landscape that provides shade, habitat, and beauty.\n\nPathways meander through planted zones of varying density — from open lawns for community events to dense groves for solitary reflection. A central water feature collects and recirculates rainwater, making the garden itself a lesson in sustainability.",
    pullQuote: "Public space is the living room of the city.",
    heroImage: {
      id: "h5",
      src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1920&q=85",
      alt: "Urban garden with water features and pathways",
      width: 1920,
      height: 1280,
    },
    gallery: [],
    floorPlans: [],
    renders: [],
    materials: [],
    specifications: { floors: 1, style: "Landscape Urbanism" },
    metaTitle: "Oasis Gardens | Royal Diadem Consult",
    metaDescription:
      "A public urban garden in Abuja with indigenous planting, water features, and community gathering spaces.",
  },
  {
    id: "6",
    slug: "horizon-house",
    title: "Horizon House",
    subtitle: "Framing the infinite",
    category: "residential",
    tags: ["residential", "contemporary", "views"],
    featured: false,
    client: "Private Client",
    location: { city: "Calabar", state: "Cross River", country: "Nigeria" },
    year: 2025,
    status: "in-progress",
    area: "380 m²",
    duration: "20 months",
    description:
      "Perched on a hillside overlooking the Cross River, this residence uses cantilevered volumes and expansive glazing to capture panoramic views of the waterway.",
    designConcept:
      "Horizon House is organized around a single idea: the view. Every major space opens toward the river, with the building's form stepping down the hillside in a series of interconnected platforms.\n\nA dramatic cantilevered living room extends 6 meters beyond the hillside edge, creating the sensation of floating above the landscape. The structural daring is balanced by warm material choices — timber cladding, stone bases, and planted rooftops that root the building in its terrain.",
    pullQuote: "Architecture at its best is a frame for the world beyond.",
    heroImage: {
      id: "h6",
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=85",
      alt: "Hillside residence with cantilevered volume",
      width: 1920,
      height: 1280,
    },
    gallery: [],
    floorPlans: [],
    renders: [],
    materials: [
      { name: "Timber Cladding", type: "Facade" },
      { name: "Natural Stone", type: "Base" },
      { name: "Green Roof", type: "Roofing" },
    ],
    specifications: {
      floors: 3,
      bedrooms: 4,
      bathrooms: 4,
      parking: 2,
      style: "Contemporary Hillside",
    },
    metaTitle: "Horizon House | Royal Diadem Consult",
    metaDescription:
      "A hillside residence in Calabar with cantilevered volumes overlooking the Cross River and warm natural materials.",
  },
];

// ──────────────────────────────────────────────
// SERVICES
// ──────────────────────────────────────────────

export const services: Service[] = [
  {
    id: "s1",
    number: "01",
    title: "Architectural Design",
    description:
      "From initial concept to final documentation, we create architecture that responds to context, climate, and human need. Every project begins with deep listening — understanding not just what our clients want, but how they live.",
    items: [
      "Concept Design",
      "Schematic Design",
      "Design Development",
      "Construction Documents",
      "Building Planning",
      "Floor Plan Design",
    ],
    image: {
      id: "si1",
      src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
      alt: "Architectural drawings and models",
      width: 800,
      height: 600,
    },
  },
  {
    id: "s2",
    number: "02",
    title: "Interior Architecture",
    description:
      "We design interiors that are extensions of architecture — not afterthoughts. Space, light, material, and proportion are choreographed to create environments of quiet power and lasting comfort.",
    items: [
      "Interior Space Planning",
      "Material Selection",
      "Custom Furniture Design",
      "Lighting Design",
      "Building Renovation Design",
    ],
    image: {
      id: "si2",
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
      alt: "Modern interior design",
      width: 800,
      height: 600,
    },
  },
  {
    id: "s3",
    number: "03",
    title: "3D Visualization",
    description:
      "Our photorealistic renders and animations bring unbuilt projects to life. We use cutting-edge visualization technology to help clients see, feel, and experience their buildings before a single brick is laid.",
    items: [
      "3D Rendering",
      "Walkthrough Animations",
      "BIM Modeling",
      "Virtual Reality Tours",
      "Architectural Photography Direction",
    ],
    image: {
      id: "si3",
      src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      alt: "3D architectural visualization",
      width: 800,
      height: 600,
    },
  },
  {
    id: "s4",
    number: "04",
    title: "Project Management",
    description:
      "We guide projects from vision to reality with rigorous oversight. Our project management ensures quality, budget adherence, and timely delivery through every phase of construction.",
    items: [
      "Construction Supervision",
      "Contractor Coordination",
      "Budget Planning",
      "Timeline Scheduling",
      "Quality Assurance",
    ],
    image: {
      id: "si4",
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      alt: "Construction site management",
      width: 800,
      height: 600,
    },
  },
  {
    id: "s5",
    number: "05",
    title: "Consulting",
    description:
      "Our consulting services provide expert guidance on architectural feasibility, regulatory compliance, sustainable design strategies, and property development potential.",
    items: [
      "Architectural Consultation",
      "Building Permit Assistance",
      "Land Use Planning",
      "Property Development Advice",
      "Sustainable Design Strategy",
    ],
    image: {
      id: "si5",
      src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      alt: "Architecture consultation meeting",
      width: 800,
      height: 600,
    },
  },
];

// ──────────────────────────────────────────────
// TESTIMONIALS
// ──────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Royal Diadem Consult transformed our vision into a masterpiece. Their attention to detail and understanding of how we wanted to live was remarkable.",
    author: "Chief & Mrs. Adebayo",
    title: "Lagos, Nigeria",
    project: "The Meridian Residence, 2025",
  },
  {
    id: "t2",
    quote:
      "The Azure Tower has become the landmark building of our portfolio. The sustainable design reduced our operating costs by 35% — architecture that pays for itself.",
    author: "Engr. Okafor",
    title: "CEO, Azure Development Group",
    project: "Azure Tower, 2024",
  },
  {
    id: "t3",
    quote:
      "They listened to the land before they drew a single line. Our home feels like it grew from the earth, not placed upon it.",
    author: "Dr. & Mrs. Eze",
    title: "Port Harcourt, Nigeria",
    project: "Serene Villa, 2025",
  },
];

// ──────────────────────────────────────────────
// BLOG POSTS
// ──────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    slug: "cost-of-building-a-house-in-nigeria-2026",
    title: "Cost of Building a House in Nigeria (2026 Guide)",
    excerpt:
      "A comprehensive breakdown of construction costs across Nigeria — from land acquisition to finishing, with city-by-city price comparisons and money-saving strategies.",
    category: "Building Guide",
    coverImage: {
      id: "bc1",
      src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
      alt: "Construction site in progress",
      width: 1200,
      height: 800,
    },
    date: "2026-02-15",
    readTime: "12 min read",
    content: `## Understanding Construction Costs in Nigeria

Building a house in Nigeria is one of the most significant investments most people will make. In 2026, costs have shifted due to inflation, currency fluctuations, and evolving material prices. This guide breaks down everything you need to know.

### Land Acquisition

The cost of land varies dramatically across Nigeria:

- **Lagos (Lekki Phase 1):** ₦80M – ₦250M per plot
- **Lagos (Ajah/Ibeju-Lekki):** ₦15M – ₦50M per plot
- **Abuja (Maitama):** ₦100M – ₦400M per plot
- **Port Harcourt (GRA):** ₦30M – ₦80M per plot
- **Ibadan:** ₦3M – ₦15M per plot

### Construction Cost Per Square Meter

The cost of building varies by finish quality:

| Quality Level | Cost per m² | Description |
|---|---|---|
| Basic | ₦150,000 – ₦250,000 | Standard finishes, local materials |
| Mid-Range | ₦250,000 – ₦450,000 | Quality finishes, some imported materials |
| High-End | ₦450,000 – ₦800,000 | Premium finishes, imported materials |
| Luxury | ₦800,000+ | Bespoke design, top-tier everything |

### How to Save Money

1. **Hire a qualified architect** — Proper design reduces waste by 15-25%
2. **Buy materials in bulk** — Negotiate directly with manufacturers
3. **Phase your construction** — Build in stages to manage cash flow
4. **Use local materials** — Laterite, bamboo, and compressed earth blocks can reduce costs significantly

### Conclusion

A well-planned 4-bedroom bungalow in Lagos will cost between ₦35M – ₦80M in 2026, depending on location and finish level. Always work with a registered architect and quantity surveyor to get accurate estimates for your specific project.`,
  },
  {
    id: "b2",
    slug: "modern-house-designs-in-nigeria",
    title: "Modern House Designs in Nigeria: Trends for 2026",
    excerpt:
      "Explore the latest architectural trends shaping Nigerian residential design — from tropical modernism to smart homes, and how leading architects are redefining the Nigerian home.",
    category: "Design Trends",
    coverImage: {
      id: "bc2",
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      alt: "Modern Nigerian residence with clean lines",
      width: 1200,
      height: 800,
    },
    date: "2026-01-28",
    readTime: "8 min read",
    content: `## The Evolution of Nigerian Architecture

Nigerian residential architecture is experiencing a renaissance. A new generation of architects is blending international design principles with deeply local sensibilities, creating homes that are both globally relevant and unmistakably Nigerian.

### Trend 1: Tropical Modernism

The most significant movement in Nigerian architecture is the return to climate-responsive design. Rather than importing Western prototypes that rely on air conditioning, architects are designing buildings that work *with* the tropical climate:

- Deep overhangs for rain and sun protection
- Cross-ventilation through strategic window placement
- Courtyards and atriums that create natural air channels
- Elevated structures to catch breezes and manage flooding

### Trend 2: Material Honesty

There's a growing appreciation for materials in their natural state:

- Fair-faced concrete replacing painted plaster
- Exposed timber structures
- Natural stone from Nigerian quarries
- Handmade clay bricks and tiles

### Trend 3: Indoor-Outdoor Living

The boundary between inside and outside is dissolving:

- Sliding glass walls that open entire rooms to gardens
- Covered terraces as primary living spaces
- Lap pools integrated into the architectural form
- Rooftop gardens and productive landscapes

### Trend 4: Compact Smart Design

With rising land costs, architects are designing smaller homes that feel larger:

- Open-plan layouts
- Multi-functional spaces
- Built-in storage solutions
- Double-height spaces for perceived volume

### What This Means for Homeowners

If you're planning to build in 2026, work with an architect who understands these trends and can customize them for your lifestyle and budget.`,
  },
  {
    id: "b3",
    slug: "how-to-choose-an-architect-in-nigeria",
    title: "How to Choose an Architect in Nigeria",
    excerpt:
      "Selecting the right architect is the most important decision in your building journey. Learn what to look for, questions to ask, and red flags to avoid.",
    category: "Professional Guide",
    coverImage: {
      id: "bc3",
      src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
      alt: "Architect reviewing building plans",
      width: 1200,
      height: 800,
    },
    date: "2026-01-10",
    readTime: "6 min read",
    content: `## Finding Your Architect

Choosing an architect is like choosing a doctor — you need someone technically excellent, experienced with your specific situation, and easy to communicate with. Here's your complete guide.

### Step 1: Verify Registration

In Nigeria, every practicing architect must be registered with:

- **NIA** (Nigerian Institute of Architects) — Professional body
- **ARCON** (Architects Registration Council of Nigeria) — Regulatory body

Always ask to see registration certificates. An unregistered "architect" cannot legally sign off on building plans.

### Step 2: Review Their Portfolio

Look for:

- Projects similar to what you want to build
- Quality of design (not just size)
- Consistency across their body of work
- Photography quality (indicates attention to detail)

### Step 3: Ask These Questions

1. How many projects like mine have you completed?
2. What is your design process — from first meeting to construction?
3. Do you handle building permit applications?
4. Will you supervise construction?
5. What is your fee structure?
6. Can I speak with past clients?

### Step 4: Understand Fees

Architectural fees in Nigeria typically range from **5-15%** of the total construction cost:

| Service | Typical Fee |
|---|---|
| Design only (drawings) | 5-8% |
| Design + supervision | 10-15% |
| Consultation only | Flat rate per session |

### Red Flags to Avoid

- No ARCON registration
- Unwilling to provide references
- No written contract
- Vague about timelines
- Copies designs from Pinterest without adaptation

### Our Recommendation

Take your time. Visit architects' offices, review their work in person, and trust your instincts about communication style. The right architect will ask as many questions as you do.`,
  },
  {
    id: "b4",
    slug: "sustainable-architecture-tropical-climates",
    title: "Sustainable Architecture in Tropical Climates",
    excerpt:
      "How Nigerian architects are pioneering green building practices that work with — not against — the tropical environment, reducing energy costs and environmental impact.",
    category: "Sustainability",
    coverImage: {
      id: "bc4",
      src: "https://images.unsplash.com/photo-1518005068251-37900150dfca?w=1200&q=80",
      alt: "Green building with natural ventilation",
      width: 1200,
      height: 800,
    },
    date: "2025-12-20",
    readTime: "10 min read",
    content: `## Building Green in the Tropics

Sustainability in tropical architecture isn't just about solar panels — it's about fundamentally rethinking how buildings interact with their environment. In Nigeria, where electricity is unreliable and cooling costs are enormous, sustainable design isn't just ethical; it's practical.

### Passive Cooling Strategies

Before reaching for air conditioning, consider these architectural solutions:

**Natural Ventilation:** Strategic window placement creates pressure differentials that move air through the building. Stack ventilation (low inlet, high outlet) is particularly effective in Nigeria's warm climate.

**Thermal Mass:** Heavy materials like concrete and stone absorb heat during the day and release it at night, evening out temperature swings.

**Shading:** Deep overhangs, brise-soleil, and tree canopies can reduce solar heat gain by 50-70%.

### Water Management

- Rainwater harvesting (Nigeria receives 1000-4000mm annually)
- Greywater recycling for irrigation
- Permeable paving to reduce runoff
- Bioswales and rain gardens

### Local Materials

Using locally sourced materials dramatically reduces a building's carbon footprint:

- Compressed earth blocks (CEB) — excellent thermal properties
- Bamboo — fast-growing, strong, versatile
- Laterite stone — abundant across Nigeria
- Recycled materials — steel, glass, timber

### The Economic Case

A sustainably designed home costs approximately 10-15% more to build but saves 30-50% on annual energy and water costs. The investment typically pays for itself within 3-5 years.

### Looking Forward

As material costs rise and climate effects intensify, sustainable architecture is moving from "nice to have" to "essential." The best architects in Nigeria are already designing for this future.`,
  },
  {
    id: "b5",
    slug: "building-permit-process-nigeria",
    title: "The Building Permit Process in Nigeria: A Step-by-Step Guide",
    excerpt:
      "Navigate Nigeria's building approval process with confidence. From LASBCA in Lagos to FCDA in Abuja, we break down requirements, timelines, and common pitfalls.",
    category: "Building Guide",
    coverImage: {
      id: "bc5",
      src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
      alt: "Architectural documents and permits",
      width: 1200,
      height: 800,
    },
    date: "2025-11-15",
    readTime: "9 min read",
    content: `## Why Building Permits Matter

Building without a permit in Nigeria isn't just risky — it's illegal. Structures built without approval can be demolished by the government, and you'll have no legal recourse. Here's how to do it right.

### In Lagos (LASBCA/LABSCA)

The Lagos State Building Control Agency oversees building approvals:

**Required Documents:**
1. Architectural drawings (signed by registered architect)
2. Structural drawings (signed by registered engineer)
3. Survey plan
4. Certificate of Occupancy (C of O) or equivalent
5. Tax clearance certificate
6. Environmental impact assessment (for large projects)

**Process:**
1. Submit application with all documents
2. Pay assessment fees
3. Site inspection
4. Review by technical committee
5. Approval or revision request
6. Building permit issued

**Timeline:** 4-8 weeks (in practice, often longer)

### In Abuja (FCDA)

The Federal Capital Development Authority process is similar but involves:

- Development permit application
- Plot allocation verification
- Environmental compliance
- Infrastructure levy payment

### Common Mistakes

1. **Starting construction before approval** — This is the biggest risk
2. **Using unregistered professionals** — Drawings must be signed by ARCON-registered architects
3. **Not updating plans** — Any design change requires an amendment application
4. **Ignoring setback requirements** — Each zone has specific building line setbacks

### How We Help

At Royal Diadem Consult, building permit assistance is included in our full-service architectural packages. We prepare all documentation, liaise with approval authorities, and manage the process from start to finish.`,
  },
];
