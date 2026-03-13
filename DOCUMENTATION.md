# Royal Diadem Consult — Technical & Design Documentation

### World-Class Architecture Studio Website

> A Pritzker-caliber digital experience. Minimalist luxury. Editorial precision. Cinematic immersion.

---

## Table of Contents

1. [Project Vision & Philosophy](#1-project-vision--philosophy)
2. [Design System & Visual Language](#2-design-system--visual-language)
3. [Typography System](#3-typography-system)
4. [Color Architecture](#4-color-architecture)
5. [Grid & Layout System](#5-grid--layout-system)
6. [Motion & Interaction Design](#6-motion--interaction-design)
7. [Page-by-Page Specification](#7-page-by-page-specification)
8. [Component Library](#8-component-library)
9. [Services Architecture](#9-services-architecture)
10. [Portfolio & Gallery System](#10-portfolio--gallery-system)
11. [Advanced Features](#11-advanced-features)
12. [Admin Dashboard (CMS)](#12-admin-dashboard-cms)
13. [Technical Architecture & Stack](#13-technical-architecture--stack)
14. [Performance & SEO Strategy](#14-performance--seo-strategy)
15. [Responsive Strategy](#15-responsive-strategy)
16. [Accessibility Standards](#16-accessibility-standards)
17. [Deployment & Infrastructure](#17-deployment--infrastructure)
18. [File & Folder Structure](#18-file--folder-structure)
19. [Development Phases & Milestones](#19-development-phases--milestones)
20. [References & Inspiration](#20-references--inspiration)

---

## 1. Project Vision & Philosophy

### 1.1 Core Objective

Build a **world-class architecture studio website** for Royal Diadem Consult that rivals the digital presence of Pritzker Prize-winning firms such as Zaha Hadid Architects, BIG (Bjarke Ingels Group), Foster + Partners, and studios featured on **ArchDaily** and **Dezeen**.

The website must accomplish two primary goals:

1. **Showcase design mastery** — An immersive, gallery-driven portfolio that treats each project as a cinematic narrative
2. **Convert visitors into clients** — Refined CTAs, consultation request flows, and effortless contact mechanisms

### 1.2 Design Philosophy

| Principle | Description |
|---|---|
| **Less is More** | Mies van der Rohe's ethos applied to digital — every pixel earns its place |
| **Architecture as Narrative** | Each project page tells a story: concept → process → realization |
| **Visual Supremacy** | Photography and renders dominate; text supports, never competes |
| **Quiet Luxury** | No visual noise — sophistication through restraint, not excess |
| **Editorial Precision** | Magazine-grade layout inspired by Wallpaper*, Dezeen, and Architectural Digest |
| **Cinematic Pacing** | Scroll-driven storytelling with deliberate rhythm and reveal |

### 1.3 Target Audience

| Segment | Intent |
|---|---|
| High-net-worth individuals | Custom residential design |
| Property developers | Commercial & mixed-use projects |
| Corporate clients | Office & institutional architecture |
| Fellow architects & designers | Collaboration & peer recognition |
| Media & publications | Press features, ArchDaily submissions |

---

## 2. Design System & Visual Language

### 2.1 Aesthetic Direction

**Minimalist Luxury** — The intersection of Swiss design precision and Japanese spatial awareness.

**Visual References:**

- Zaha Hadid Architects website (immersive hero, project-first navigation)
- BIG.dk (bold grid, storytelling through imagery)
- David Chipperfield Architects (editorial restraint, refined typography)
- John Pawson (monastic minimalism, considered whitespace)
- Olson Kundig (full-bleed photography, cinematic scroll)

### 2.2 Whitespace Philosophy

Whitespace is not empty space — it is **architectural breathing room**. Maintain generous margins and padding:

- **Minimum section padding:** 120px vertical (desktop), 80px (mobile)
- **Content max-width:** 1440px (with 80px side margins on desktop)
- **Paragraph max-width:** 680px (for optimal reading line-length)
- **Image breathing room:** Minimum 40px gap between image grid items

### 2.3 Imagery Standards

| Aspect | Specification |
|---|---|
| **Primary format** | WebP with JPEG fallback |
| **Hero images** | Minimum 2560×1440px, full-viewport coverage |
| **Portfolio images** | Minimum 1920×1280px, 3:2 or 16:9 aspect ratio |
| **Thumbnail grid** | 800×600px minimum |
| **Quality** | 85-92% compression for WebP |
| **Style** | Architectural photography standards — corrected verticals, natural light, no HDR artifacts |
| **Color treatment** | Desaturated, slightly warm tone — consistent across all assets |

### 2.4 Iconography

- **Style:** Thin-stroke line icons (1.5px stroke weight)
- **Library:** Custom SVG icon set aligned with architectural drawing aesthetics
- **Alternative:** Phosphor Icons (thin weight) or custom line-drawn icons
- **Size:** 24px base, 32px for feature icons, 48px for hero accents
- **Color:** Monochrome, inheriting text color

---

## 3. Typography System

### 3.1 Font Selection

Typography is the backbone of editorial luxury. Use a refined serif + geometric sans-serif pairing:

**Primary Display Font (Headlines):**

```
Font: "Playfair Display" or "Cormorant Garamond" or "EB Garamond"
Alternative premium: "Freight Display Pro" (licensed)
Weight: 300 (Light), 400 (Regular), 600 (SemiBold)
Usage: Page titles, hero text, section headings, project names
```

**Secondary Body Font (UI & Body):**

```
Font: "Inter" or "Satoshi" or "General Sans"
Alternative premium: "Söhne" by Klim Type (licensed)
Weight: 300 (Light), 400 (Regular), 500 (Medium)
Usage: Navigation, body text, UI labels, metadata
```

**Monospace Accent (Technical Details):**

```
Font: "JetBrains Mono" or "IBM Plex Mono"
Weight: 400
Usage: Project specs, measurements, dates, technical labels
```

### 3.2 Type Scale (Desktop)

```
Hero Display:        80px / 88px line-height  / -1.5px tracking
Page Title (H1):     64px / 72px line-height  / -1.2px tracking
Section Title (H2):  48px / 56px line-height  / -0.8px tracking
Subsection (H3):     32px / 40px line-height  / -0.5px tracking
Large Body:          20px / 32px line-height  /  0px tracking
Body:                16px / 28px line-height  /  0px tracking
Small / Caption:     13px / 20px line-height  /  0.5px tracking
Overline / Label:    11px / 16px line-height  /  2px tracking (UPPERCASE)
```

### 3.3 Type Scale (Mobile)

```
Hero Display:        40px / 48px line-height  / -1px tracking
Page Title (H1):     36px / 42px line-height  / -0.8px tracking
Section Title (H2):  28px / 36px line-height  / -0.5px tracking
Subsection (H3):     22px / 30px line-height  / -0.3px tracking
Large Body:          18px / 28px line-height  /  0px tracking
Body:                16px / 26px line-height  /  0px tracking
Small / Caption:     12px / 18px line-height  /  0.5px tracking
Overline / Label:    10px / 14px line-height  /  2px tracking (UPPERCASE)
```

### 3.4 Typographic Rules

- Headlines: **Serif font, light weight, tight tracking** — evoking carved stone inscriptions
- Body text: **Sans-serif, regular weight, generous line-height** — effortless readability
- Labels & metadata: **Uppercase sans-serif, wide tracking** — architectural drawing convention
- **Never bold body text** — use weight hierarchy and size differentiation instead
- Maximum **65-75 characters per line** for body text (optimal readability)

---

## 4. Color Architecture

### 4.1 Primary Palette

```css
/* Light Mode (Default) */
--color-bg-primary:      #FAFAF8;    /* Warm off-white — like fine paper */
--color-bg-secondary:    #F2F0EC;    /* Warm light gray — subtle sections */
--color-bg-tertiary:     #E8E5DF;    /* Warm mid-gray — hover states */
--color-bg-inverse:      #1A1A18;    /* Near-black — footer, dark sections */

--color-text-primary:    #1A1A18;    /* Primary text — deep charcoal */
--color-text-secondary:  #6B6860;    /* Secondary text — warm gray */
--color-text-tertiary:   #9C9890;    /* Muted text — captions, metadata */
--color-text-inverse:    #FAFAF8;    /* Text on dark backgrounds */

--color-accent:          #8B7355;    /* Warm bronze/gold — CTAs, links */
--color-accent-hover:    #6D5A43;    /* Darker bronze — hover state */
--color-accent-subtle:   #D4C5B0;    /* Light bronze — borders, dividers */

--color-border:          #E0DCD6;    /* Subtle borders */
--color-border-strong:   #C8C2B8;    /* Emphasized borders */
```

```css
/* Dark Mode */
--color-bg-primary:      #0F0F0E;    /* Deep black */
--color-bg-secondary:    #1A1918;    /* Elevated surface */
--color-bg-tertiary:     #2A2826;    /* Component background */
--color-bg-inverse:      #FAFAF8;    /* Inverse elements */

--color-text-primary:    #F0EDE8;    /* Primary text */
--color-text-secondary:  #A09C94;    /* Secondary text */
--color-text-tertiary:   #6B6860;    /* Muted text */
--color-text-inverse:    #1A1A18;    /* Text on light backgrounds */

--color-accent:          #C4A87C;    /* Warm gold */
--color-accent-hover:    #D4BC96;    /* Lighter gold */
--color-accent-subtle:   #3D3528;    /* Subtle gold tint */

--color-border:          #2A2826;    /* Subtle borders */
--color-border-strong:   #3D3A36;    /* Emphasized borders */
```

### 4.2 Semantic Colors

```css
--color-success:     #4A7C59;    /* Muted green */
--color-warning:     #A68B3C;    /* Muted amber */
--color-error:       #9C4040;    /* Muted red */
--color-info:        #4A6A8B;    /* Muted blue */
```

### 4.3 Color Usage Rules

- **90% neutrals** — backgrounds, text, and structure use only the neutral palette
- **Accent color** used exclusively for: interactive elements, selected states, and singular CTAs
- **Never more than one accent color** visible in any viewport at once
- Dark sections used sparingly for **dramatic contrast** (e.g., philosophy section, footer, manifesto blocks)
- Images should be the **primary source of color** on any page

---

## 5. Grid & Layout System

### 5.1 Editorial Grid

Inspired by Swiss International Typographic Style and architectural drawing grids:

```
Desktop (1440px+):
├── 12-column grid
├── Column width: 76px
├── Gutter: 24px
├── Margin: 80px (left/right)
└── Content area: 1280px

Tablet (768px–1439px):
├── 8-column grid
├── Gutter: 20px
├── Margin: 40px (left/right)
└── Content area: fluid

Mobile (< 768px):
├── 4-column grid
├── Gutter: 16px
├── Margin: 20px (left/right)
└── Content area: fluid
```

### 5.2 Layout Patterns

**1. Full-Bleed Hero**
```
┌──────────────────────────────────────────┐
│                                          │
│          FULL VIEWPORT IMAGE             │
│          with overlay text               │
│                                          │
│                                          │
└──────────────────────────────────────────┘
```

**2. Asymmetric Split (60/40)**
```
┌────────────────────┬─────────────┐
│                    │             │
│   Large Image      │  Text Block │
│   (8 columns)      │  (4 cols)   │
│                    │             │
└────────────────────┴─────────────┘
```

**3. Editorial Stagger**
```
┌─────────────────┐
│  Image (left)   │  ─── offset top
└─────────────────┘
         ┌─────────────────┐
         │  Image (right)  │  ─── offset bottom
         └─────────────────┘
```

**4. Masonry Grid (Portfolio)**
```
┌──────┐  ┌──────┐  ┌──────┐
│      │  │      │  │      │
│  3:2 │  │  2:3 │  │  1:1 │
│      │  │      │  │      │
└──────┘  │      │  └──────┘
┌──────┐  └──────┘  ┌──────┐
│      │  ┌──────┐  │      │
│  2:3 │  │      │  │  3:2 │
│      │  │  3:2 │  └──────┘
│      │  │      │
└──────┘  └──────┘
```

**5. Full-Width Image Sequence (Project Detail)**
```
┌──────────────────────────────────────────┐
│           Full-width image 1             │
└──────────────────────────────────────────┘
         ┌──────────────────────┐
         │  Text block (narrow) │
         └──────────────────────┘
┌──────────────────────────────────────────┐
│           Full-width image 2             │
└──────────────────────────────────────────┘
┌──────────────────┐  ┌──────────────────┐
│   Image left      │  │   Image right    │
└──────────────────┘  └──────────────────┘
```

---

## 6. Motion & Interaction Design

### 6.1 Animation Philosophy

Motion should feel like **architecture in time** — deliberate, structural, and never decorative. Every animation must serve a purpose: reveal hierarchy, guide attention, or reinforce spatial metaphor.

### 6.2 Core Animation Library

**Page Transitions:**

```
Type:           Fade + Slide
Duration:       800ms
Easing:         cubic-bezier(0.76, 0, 0.24, 1)  — "Expo ease in-out"
Direction:      Content fades up 40px
Overlay:        Optional black curtain wipe (600ms) for project transitions
```

**Scroll Reveals:**

```
Type:           Fade + Translate Y
Trigger:        Element enters viewport at 20% visibility
Duration:       700ms
Easing:         cubic-bezier(0.33, 1, 0.68, 1)   — "Cubic ease out"
Stagger:        150ms between sibling elements
Translate:      30px upward
```

**Image Reveals:**

```
Type:           Clip-path reveal (bottom to top) or scale reveal
Duration:       1000ms
Easing:         cubic-bezier(0.76, 0, 0.24, 1)
Effect:         Image scales from 1.1 to 1.0 while clip-path reveals
```

**Hover States:**

```
Images:         Scale 1.0 → 1.03 over 500ms, slight desaturation lift
Links:          Underline width animates 0% → 100% from left
Buttons:        Background color transition 300ms
Cards:          Subtle Y translate (-4px) + shadow increase
```

**Navigation:**

```
Menu open:      Full-screen overlay slides from right (600ms)
Menu items:     Staggered fade-in, 80ms delay between items
Logo:           Subtle scale on scroll (shrink from 1.0 to 0.85)
```

### 6.3 Scroll-Driven Experiences

**Parallax Layers:**
- Hero image: Scroll at 0.6x speed (subtle depth)
- Text overlays: Scroll at 1.0x speed (normal)
- Maximum parallax offset: 100px (avoid motion sickness)

**Progress Indicators:**
- Thin horizontal progress bar at top of page (1px, accent color)
- Project detail pages: Vertical scroll progress on the side

**Scroll Snap (where applicable):**
- Hero sections: `scroll-snap-type: y mandatory`
- Horizontal project carousels: `scroll-snap-type: x mandatory`

### 6.4 Cursor & Micro-interactions

```
Default:        Custom minimal cursor (small circle, 8px)
Hover on image: Cursor expands to 48px circle with "View" text
Hover on link:  Cursor morphs to dot (4px)
Drag:           Cursor shows drag indicator
Loading:        Cursor shows subtle pulse animation
```

### 6.5 Animation Technology

- **GSAP (GreenSock)** — Primary animation engine for scroll-triggered animations
- **Framer Motion** — React component animations and page transitions
- **Lenis** — Smooth scrolling with momentum
- **CSS transitions** — Simple hover states and micro-interactions

---

## 7. Page-by-Page Specification

---

### 7.1 HOME PAGE

**Purpose:** First impression. Communicate mastery, evoke emotion, drive exploration.

**URL:** `/`

#### Section 1: Cinematic Hero

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│           [Full-viewport hero image/video]            │
│                                                      │
│                                                      │
│     ROYAL DIADEM                                     │
│     CONSULT                                          │
│                                                      │
│     Architecture · Design · Vision                   │
│                                                      │
│                      ↓ Scroll                        │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- **Full-viewport** hero (100vh)
- **Background:** Full-bleed architectural image or slow-motion video (15s loop, muted)
- **Overlay:** Subtle gradient from bottom (rgba(0,0,0,0.3))
- **Studio name:** Serif display font, 80px, white, positioned lower-left with 80px margins
- **Tagline:** Sans-serif, 14px uppercase, 3px tracking, white at 70% opacity
- **Scroll indicator:** Minimal animated arrow or line at bottom center
- **Parallax:** Image moves at 0.7x scroll speed
- **On mobile:** Image crops to portrait, text centered

#### Section 2: Studio Introduction

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│     "We don't just design buildings.                 │
│      We craft environments that elevate              │
│      the human experience."                          │
│                                                      │
│     OVERLINE: OUR PHILOSOPHY                         │
│                                                      │
│     [2-3 sentences about the studio]                 │
│                                                      │
│     → Discover Our Story                             │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- **Layout:** Centered text block, max-width 800px
- **Statement:** Large serif font (48px), light weight
- **Overline:** Uppercase sans-serif, 11px, 2px tracking, accent color
- **Body:** 18px sans-serif, secondary color, generous line-height
- **CTA link:** Minimal text link with animated underline → About page
- **Scroll reveal:** Text fades up with 30px translate, staggered by line

#### Section 3: Featured Projects

```
┌──────────────────────────────────────────────────────┐
│  OVERLINE: SELECTED WORKS                            │
│                                                      │
│  ┌───────────────────────┐  ┌──────────────────┐    │
│  │                       │  │                  │    │
│  │   Project Image 1     │  │  Project Image 2 │    │
│  │   (large — 8 cols)    │  │  (small — 4 cols)│    │
│  │                       │  │                  │    │
│  │   Project Name        │  │  Project Name    │    │
│  │   Category · Year     │  │  Category · Year │    │
│  └───────────────────────┘  └──────────────────┘    │
│                                                      │
│  ┌──────────────────┐  ┌───────────────────────┐    │
│  │  Project Image 3 │  │                       │    │
│  │  (small — 4 cols)│  │   Project Image 4     │    │
│  │                  │  │   (large — 8 cols)    │    │
│  │  Project Name    │  │                       │    │
│  │  Category · Year │  │   Project Name        │    │
│  └──────────────────┘  │   Category · Year     │    │
│                         └───────────────────────┘    │
│                                                      │
│                  → View All Projects                 │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- **Layout:** Asymmetric editorial grid, alternating large/small
- **Images:** Hover reveals project name with slide-up overlay
- **Project count:** Display 4-6 featured projects
- **Hover effect:** Image scales 1.03x, desaturation lifts, info overlay slides up
- **Click:** Navigates to Project Detail page with cinematic page transition
- **CTA:** "View All Projects" — centered text link below grid

#### Section 4: Services Overview

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  OVERLINE: WHAT WE DO                                │
│                                                      │
│  ──────────────────────────────────────────────      │
│  01  Architectural Design              →             │
│  ──────────────────────────────────────────────      │
│  02  Interior Architecture             →             │
│  ──────────────────────────────────────────────      │
│  03  3D Visualization                  →             │
│  ──────────────────────────────────────────────      │
│  04  Project Management                →             │
│  ──────────────────────────────────────────────      │
│  05  Consulting                        →             │
│  ──────────────────────────────────────────────      │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- **Layout:** Full-width list with horizontal rules
- **Style:** Numbered list (monospace numbers), service name in serif, arrow on right
- **Hover:** Row highlights with background shift, text animates right slightly, image preview appears to the side
- **Interaction:** Hover on a service reveals a related image (floating, follows cursor or fixed position)
- **Click:** Navigates to Services page with anchor to that section

#### Section 5: Awards & Recognition (Optional)

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  OVERLINE: RECOGNITION                               │
│                                                      │
│  [ArchDaily Logo]  [Dezeen Logo]  [NIA Logo]         │
│                                                      │
│  "Featured in ArchDaily's Best of 2025"              │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- **Layout:** Centered, minimal
- **Logos:** Grayscale, 40% opacity, full opacity on hover
- **Quote:** Single press mention or award highlight

#### Section 6: Testimonial / Client Quote

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  ┌────────────────────────────────────────────┐      │
│  │                                            │      │
│  │  "Royal Diadem Consult transformed our     │      │
│  │   vision into a masterpiece. Their          │      │
│  │   attention to detail is unmatched."        │      │
│  │                                            │      │
│  │   — Chief Adebayo, Lagos                   │      │
│  │     Residential Project, 2025              │      │
│  │                                            │      │
│  └────────────────────────────────────────────┘      │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- **Layout:** Centered large quote on contrasting background (dark section)
- **Font:** Serif, 36px, light weight, italic
- **Attribution:** Sans-serif, 13px, uppercase tracking
- **Carousel:** Multiple testimonials with subtle crossfade (auto-advance 8s)

#### Section 7: Contact CTA

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  ┌────────────────────────────────────────────┐      │
│  │                                            │      │
│  │  Let's Create Something                   │      │
│  │  Extraordinary                             │      │
│  │                                            │      │
│  │  [ Start a Conversation → ]               │      │
│  │                                            │      │
│  └────────────────────────────────────────────┘      │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- **Layout:** Full-width dark section or architectural image background
- **Headline:** Serif, 56px, white
- **Button:** Outlined or filled, sans-serif uppercase, wide tracking
- **Link:** Goes to Contact page

---

### 7.2 ABOUT PAGE

**Purpose:** Build trust and emotional connection. Tell the story of the architect and studio.

**URL:** `/about`

#### Section 1: Page Header

```
OVERLINE: ABOUT THE STUDIO

Royal Diadem Consult —
Where Vision Meets Structure
```

- **Layout:** Left-aligned, large serif heading (64px), generous top padding (200px)
- **Animated:** Text reveals word-by-word or line-by-line on load

#### Section 2: Founder Portrait & Bio

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  ┌──────────────┐    Founded in [Year]               │
│  │              │                                    │
│  │  Portrait    │    [Architect's Name] established  │
│  │  Photo       │    Royal Diadem Consult with a     │
│  │  (5 cols)    │    singular vision: to create       │
│  │              │    architecture that speaks to      │
│  │              │    both the landscape and the       │
│  └──────────────┘    people who inhabit it.           │
│                                                      │
│                      [Extended biography paragraph]   │
│                      [Extended biography paragraph]   │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- **Layout:** Asymmetric 5/7 column split
- **Image:** B&W or desaturated portrait, clip-path reveal on scroll
- **Bio:** 16-18px body text, generous line height

#### Section 3: Design Philosophy

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  ┌────────────────────────────────────────────┐      │
│  │           [Full-bleed image]               │      │
│  │           Design Philosophy                │      │
│  └────────────────────────────────────────────┘      │
│                                                      │
│  "Architecture is the thoughtful making              │
│   of space."                                         │
│                                                      │
│  [Philosophy text — 2-3 paragraphs about              │
│   design approach, material sensitivity,             │
│   contextual design, sustainability]                 │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- **Layout:** Full-width image followed by centered text block
- **Quote:** Large serif italic on dark background section

#### Section 4: Credentials & Education

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  OVERLINE: CREDENTIALS                               │
│                                                      │
│  Education                   Professional            │
│  ─────────────               ─────────────           │
│  B.Sc Architecture           NIA Member              │
│  University of [X], 20XX     ARCON Registered        │
│                              COREN Certified         │
│  M.Sc Architecture                                   │
│  University of [X], 20XX     [Other affiliations]    │
│                                                      │
│  Experience                  Awards                  │
│  ─────────────               ─────────────           │
│  15+ Years in Practice       Best Residential 20XX   │
│  200+ Projects Completed     ArchDaily Feature 20XX  │
│  50+ Residential Designs                             │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- **Layout:** 2-column or 4-column grid of credential blocks
- **Numbers:** Large serif display (64px) with animated count-up on scroll
- **Labels:** Uppercase sans-serif, small

#### Section 5: Team (If Applicable)

- Grid of team member cards
- Portrait, name, title, subtle hover reveal of short bio
- Circular or square portraits, consistent crop

---

### 7.3 PROJECTS / PORTFOLIO PAGE

**Purpose:** The centerpiece of the entire site. Showcase every project as a work of art.

**URL:** `/projects`

#### Section 1: Page Header with Filter

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  OVERLINE: PORTFOLIO                                 │
│                                                      │
│  Our Work                                            │
│                                                      │
│  [ All ]  [ Residential ]  [ Commercial ]            │
│  [ Interior ]  [ Landscape ]                         │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- **Filter:** Horizontal pill buttons or minimal text tabs
- **Active state:** Underline or filled background (accent color)
- **Transition:** Filtered items animate with layout shift (GSAP Flip plugin)

#### Section 2: Project Grid

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  ┌──────────────────┐  ┌──────────────────┐          │
│  │                  │  │                  │          │
│  │  Project Image   │  │  Project Image   │          │
│  │                  │  │                  │          │
│  │  ────────────    │  │  ────────────    │          │
│  │  Project Name    │  │  Project Name    │          │
│  │  Lagos · 2025    │  │  Abuja · 2024   │          │
│  │  Residential     │  │  Commercial      │          │
│  └──────────────────┘  └──────────────────┘          │
│                                                      │
│  ┌───────────────────────────────────────┐           │
│  │                                       │           │
│  │  Project Image (wide)                 │           │
│  │                                       │           │
│  │  ─────────────                        │           │
│  │  Project Name                         │           │
│  │  Port Harcourt · 2024 · Interior     │           │
│  └───────────────────────────────────────┘           │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- **Grid:** Varied sizes — small (6-col), medium (8-col), large (12-col), alternating rhythm
- **Info placement:** Below image, left-aligned: Name (serif, 24px), Location + Year + Category (sans-serif, 13px, secondary color)
- **Hover:** Image lightens slightly, subtle scale, cursor becomes "View" circle
- **Animation:** Projects reveal with stagger on scroll (150ms between items)
- **Pagination:** "Load More" button or infinite scroll with skeleton loading

---

### 7.4 PROJECT DETAIL PAGE

**Purpose:** Deep dive into a single project. Cinematic storytelling through imagery and design narrative.

**URL:** `/projects/[slug]`

#### Section 1: Project Hero

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│           [Full-viewport hero image]                 │
│                                                      │
│                                                      │
│     PROJECT NAME                                     │
│     Lagos, Nigeria · 2025                            │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- **Full-viewport** hero image (100vh) with project name overlay
- **Parallax:** Subtle (0.8x speed)
- **Text:** Positioned bottom-left, serif 64px, white with text-shadow

#### Section 2: Project Metadata

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  Client              Location         Year           │
│  ──────              ────────         ────           │
│  Private             Lagos, Nigeria   2025           │
│                                                      │
│  Type                Area             Status         │
│  ──────              ────────         ──────         │
│  Residential         450 m²           Completed      │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- **Layout:** 3-column or 6-column metadata grid
- **Style:** Monospace labels (uppercase, 11px, 2px tracking), values in serif (20px)
- **Dividers:** Thin horizontal rules above each label

#### Section 3: Design Concept

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  OVERLINE: THE CONCEPT                               │
│                                                      │
│  [2-3 paragraphs describing the design vision,       │
│   site context, client brief, and how form           │
│   responds to function]                              │
│                                                      │
│  Large pull quote from the narrative                 │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- **Layout:** Centered narrow text block (max-width 680px)
- **Pull quote:** Serif, 36px, accent left-border
- **Scroll animation:** Text fades in with subtle upward translate

#### Section 4: Image Gallery Sequence

```
┌──────────────────────────────────────────────────────┐
│  [Full-bleed exterior photo]                         │
│                                                      │
│  ┌──────────────┐  ┌──────────────┐                  │
│  │ Detail shot  │  │ Detail shot  │                  │
│  └──────────────┘  └──────────────┘                  │
│                                                      │
│  [Full-bleed interior photo]                         │
│                                                      │
│  ┌────────┐  ┌────────┐  ┌────────┐                  │
│  │ 3 col  │  │ 3 col  │  │ 3 col  │                  │
│  └────────┘  └────────┘  └────────┘                  │
│                                                      │
│  [Full-bleed landscape / context shot]               │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- **Layout:** Alternating full-bleed, 2-up, and 3-up image arrangements
- **Image reveal:** Clip-path animation, bottom-to-top reveal on scroll
- **Lightbox:** Click any image to open full-screen lightbox with arrow navigation
- **Captions:** Small sans-serif below each image (optional)

#### Section 5: Floor Plans & Drawings

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  OVERLINE: DRAWINGS                                  │
│                                                      │
│  ┌──────────────────────────────────────────┐        │
│  │                                          │        │
│  │           Floor Plan Image               │        │
│  │                                          │        │
│  └──────────────────────────────────────────┘        │
│                                                      │
│  [ Ground Floor ]  [ First Floor ]  [ Roof Plan ]    │
│                                                      │
│  ↓ Download Floor Plans (PDF)                        │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- **Layout:** Centered, bordered container with dark background
- **Tab navigation:** Switch between floor levels
- **Download:** PDF download link with subtle icon
- **Zoom:** Pinch-zoom on mobile, scroll-zoom on desktop

#### Section 6: 3D Renders

- Full-width 3D render images
- Optional: Embedded 3D viewer (Three.js) for model rotation
- Optional: Before/after slider for renovation projects

#### Section 7: Materials & Specifications

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  OVERLINE: MATERIALS                                 │
│                                                      │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐              │
│  │ Texture │  │ Texture │  │ Texture │              │
│  │ swatch  │  │ swatch  │  │ swatch  │              │
│  ├─────────┤  ├─────────┤  ├─────────┤              │
│  │ Concrete│  │ Oak     │  │ Glass   │              │
│  │ Fin.    │  │ Timber  │  │ Low-E   │              │
│  └─────────┘  └─────────┘  └─────────┘              │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- **Layout:** Horizontal scroll or 3-4 column grid
- **Swatches:** Circular or square material texture thumbnails
- **Labels:** Material name + type below

#### Section 8: Next Project Navigation

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  ┌────────────────────────────────────────────┐      │
│  │                                            │      │
│  │          [Next project hero image]         │      │
│  │                                            │      │
│  │     NEXT PROJECT                           │      │
│  │     Project Name                           │      │
│  │                                            │      │
│  └────────────────────────────────────────────┘      │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- **Full-viewport** teaser for the next project
- **Hover:** Image reveals as cursor moves into section
- **Click:** Cinematic transition (black curtain wipe) to next project
- **Parallax:** Image scrolls into view as user reaches bottom

---

### 7.5 SERVICES PAGE

**Purpose:** Clearly communicate capabilities. Position the studio as comprehensive and professional.

**URL:** `/services`

#### Page Header

```
OVERLINE: CAPABILITIES

Our Services
```

#### Service Sections (Accordion or Full Sections)

Each service category gets a dedicated section:

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  01                                                  │
│  ─────────────────────────────────────────────       │
│                                                      │
│  Architectural Design                                │
│                                                      │
│  ┌──────────────┐    From initial concept to         │
│  │              │    final documentation, we         │
│  │  Service     │    create architecture that        │
│  │  Image       │    responds to context, climate,   │
│  │              │    and human need.                 │
│  └──────────────┘                                    │
│                                                      │
│  Includes:                                           │
│  · Concept Design    · Schematic Design              │
│  · Design Development · Construction Documents       │
│                                                      │
│  → View Related Projects                             │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Service Categories:**

1. **Core Architectural Services**
   - Architectural Design
   - Building Planning
   - Floor Plan Design
   - 3D Architectural Visualization
   - Building Renovation Design
   - Interior Space Planning
   - Landscape Design

2. **Technical & Construction Services**
   - Construction Drawings
   - Structural Coordination
   - Building Documentation
   - Site Analysis
   - Feasibility Studies
   - Material Specification

3. **Project Management**
   - Construction Supervision
   - Project Management
   - Contractor Coordination
   - Budget Planning
   - Timeline Scheduling

4. **Digital / Modern Architecture Services**
   - 3D Rendering
   - Walkthrough Animations
   - BIM Modeling
   - Sustainable Design
   - Smart Building Design

5. **Consulting Services**
   - Architectural Consultation
   - Building Permit Assistance
   - Land Use Planning
   - Property Development Advice

**Design Pattern:**
- Each service: numbered, with image + description + sub-items
- "View Related Projects" link filtered to that category
- CTA at bottom: "Discuss Your Project →"

---

### 7.6 CONTACT PAGE

**Purpose:** Remove friction. Make it effortless to reach the studio.

**URL:** `/contact`

#### Layout

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  OVERLINE: GET IN TOUCH                              │
│                                                      │
│  Let's Build                                         │
│  Together                                            │
│                                                      │
│  ┌──────────────────┐  ┌──────────────────────┐      │
│  │                  │  │                      │      │
│  │  Contact Info    │  │  Contact Form         │      │
│  │                  │  │                      │      │
│  │  📍 Address      │  │  Name                │      │
│  │  📞 Phone        │  │  Email               │      │
│  │  ✉️ Email        │  │  Phone               │      │
│  │  💬 WhatsApp     │  │  Project Type ▾      │      │
│  │                  │  │  Budget Range ▾      │      │
│  │  Office Hours    │  │  Timeline ▾          │      │
│  │  Mon-Fri 9-6    │  │  Message             │      │
│  │                  │  │                      │      │
│  │                  │  │  [ Send Message → ]  │      │
│  │                  │  │                      │      │
│  └──────────────────┘  └──────────────────────┘      │
│                                                      │
│  ┌──────────────────────────────────────────┐        │
│  │                                          │        │
│  │           Interactive Map                │        │
│  │           (Google Maps embed)            │        │
│  │                                          │        │
│  └──────────────────────────────────────────┘        │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Contact Form Fields:**

| Field | Type | Required |
|---|---|---|
| Full Name | Text input | Yes |
| Email Address | Email input | Yes |
| Phone Number | Tel input | Yes |
| Project Type | Select (Residential, Commercial, Interior, Landscape, Renovation, Consultation) | Yes |
| Estimated Budget | Select (ranges) | No |
| Preferred Timeline | Select (Immediate, 1-3 months, 3-6 months, 6+ months) | No |
| Project Description | Textarea | Yes |
| Attachments | File upload (images, PDFs) | No |

**Additional Elements:**
- **WhatsApp floating button** — Fixed bottom-right, green icon, pulses gently every 10s
- **Map:** Google Maps or Mapbox embed, custom-styled (grayscale to match site aesthetic)
- **Success state:** Form submission shows elegant confirmation with animation
- **Validation:** Real-time inline validation, red accent on error, green on valid

---

### 7.7 BLOG / JOURNAL PAGE (Optional but Powerful)

**Purpose:** SEO engine. Establish thought leadership. Drive organic traffic.

**URL:** `/journal`

#### Layout

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  OVERLINE: JOURNAL                                   │
│                                                      │
│  Thoughts on                                         │
│  Architecture                                        │
│                                                      │
│  ┌───────────────────────────────────────┐           │
│  │  Featured Article Image              │           │
│  │                                       │           │
│  │  Category · 8 min read               │           │
│  │  Article Title Goes Here             │           │
│  │  Brief excerpt of the article...     │           │
│  └───────────────────────────────────────┘           │
│                                                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐           │
│  │ Article  │  │ Article  │  │ Article  │           │
│  │ Card 1   │  │ Card 2   │  │ Card 3   │           │
│  └──────────┘  └──────────┘  └──────────┘           │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Blog Topics for SEO (Nigeria-focused):**
- Cost of Building a House in Nigeria (2026 Guide)
- Modern House Designs in Nigeria
- How to Choose an Architect in Nigeria
- Small House Plan Ideas That Maximize Space
- Building Permit Process in Nigeria
- Sustainable Architecture in Tropical Climates
- Interior Design Trends for Nigerian Homes
- How to Plan a Renovation Project

---

## 8. Component Library

### 8.1 Navigation

**Desktop Navigation:**

```
┌──────────────────────────────────────────────────────┐
│  ROYAL DIADEM          Projects  About  Services     │
│  CONSULT               Journal   Contact        ☰   │
└──────────────────────────────────────────────────────┘
```

- **Position:** Fixed top, transparent by default, white background on scroll
- **Logo:** Left-aligned, serif font, two lines ("ROYAL DIADEM" / "CONSULT")
- **Links:** Right-aligned, sans-serif, 13px uppercase, 1.5px tracking
- **Active state:** Subtle dot below active link or underline
- **Scroll behavior:** Navbar hides on scroll down, reveals on scroll up (smart navbar)
- **Transition:** Background fades from transparent to solid over 200ms
- **Height:** 80px default, 64px on scroll (compresses)

**Mobile Navigation (Full-Screen Overlay):**

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  ROYAL DIADEM                              ✕  Close  │
│  CONSULT                                             │
│                                                      │
│                                                      │
│     Projects                                         │
│     About                                            │
│     Services                                         │
│     Journal                                          │
│     Contact                                          │
│                                                      │
│                                                      │
│  ─────────────────────────                           │
│                                                      │
│  info@royaldiadem.com                                │
│  +234 XXX XXX XXXX                                   │
│                                                      │
│  Instagram · LinkedIn · Twitter                      │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- **Trigger:** Hamburger icon (two horizontal lines, not three)
- **Animation:** Overlay slides from right (600ms), links stagger in (80ms each)
- **Background:** Solid dark or light color matching theme
- **Links:** Serif, 48px, light weight
- **Contact info:** Small sans-serif at bottom

### 8.2 Footer

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  ROYAL DIADEM CONSULT                                │
│                                                      │
│  ┌──────────────┐  ┌──────────────┐  ┌─────────┐    │
│  │ Navigation   │  │ Contact      │  │ Social  │    │
│  │              │  │              │  │         │    │
│  │ Projects     │  │ Address      │  │ IG      │    │
│  │ About        │  │ Phone        │  │ LI      │    │
│  │ Services     │  │ Email        │  │ TW      │    │
│  │ Journal      │  │ WhatsApp     │  │ FB      │    │
│  │ Contact      │  │              │  │         │    │
│  └──────────────┘  └──────────────┘  └─────────┘    │
│                                                      │
│  ─────────────────────────────────────────────       │
│                                                      │
│  © 2026 Royal Diadem Consult. All rights reserved.  │
│  Designed & Developed by [Your Name]                 │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- **Background:** Dark (inverse palette)
- **Layout:** 3-column or 4-column grid
- **Style:** Minimal, lots of breathing room
- **Links:** Subtle hover with underline animation

### 8.3 Buttons

**Primary Button:**
```css
.btn-primary {
  background: var(--color-accent);
  color: white;
  padding: 16px 40px;
  font-size: 13px;
  font-family: var(--font-sans);
  text-transform: uppercase;
  letter-spacing: 2px;
  border: none;
  transition: background 300ms ease;
}
.btn-primary:hover {
  background: var(--color-accent-hover);
}
```

**Secondary Button (Outlined):**
```css
.btn-secondary {
  background: transparent;
  color: var(--color-text-primary);
  padding: 16px 40px;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 1px solid var(--color-border-strong);
  transition: all 300ms ease;
}
.btn-secondary:hover {
  background: var(--color-text-primary);
  color: var(--color-bg-primary);
}
```

**Text Link:**
```css
.text-link {
  font-size: 14px;
  text-decoration: none;
  position: relative;
}
.text-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0%;
  height: 1px;
  background: currentColor;
  transition: width 400ms cubic-bezier(0.33, 1, 0.68, 1);
}
.text-link:hover::after {
  width: 100%;
}
```

### 8.4 Cards

**Project Card:**
- Image container with aspect ratio (3:2 or 4:3)
- Hover: Image scales 1.03x within overflow:hidden container
- Below image: Project name (serif, 22px), Location + Year (sans, 13px, secondary)
- Cursor: Custom "View" circle on hover

**Service Card:**
- Number (monospace, 48px, secondary color)
- Title (serif, 28px)
- Description (sans, 16px, 3-4 lines)
- Arrow icon link

**Blog Card:**
- Image with 16:9 ratio
- Category label (overline style)
- Title (serif, 22px)
- Date + Read time (sans, 13px, secondary)

### 8.5 Form Elements

All form inputs follow a **minimal underline** style:

```css
.form-input {
  border: none;
  border-bottom: 1px solid var(--color-border);
  padding: 16px 0;
  font-size: 16px;
  font-family: var(--font-sans);
  background: transparent;
  width: 100%;
  transition: border-color 300ms ease;
}
.form-input:focus {
  outline: none;
  border-bottom-color: var(--color-accent);
}
.form-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-text-tertiary);
}
```

### 8.6 Image Lightbox

- **Trigger:** Click any gallery image
- **Background:** Black overlay (95% opacity)
- **Image:** Centered, max 90vw × 90vh, object-fit contain
- **Navigation:** Left/right arrows, keyboard support (← →), swipe on mobile
- **Close:** Top-right X button, Escape key, click outside image
- **Counter:** "3 / 12" in bottom-left corner
- **Animation:** Fade in overlay (300ms), image scales from 0.95 to 1.0
- **Caption:** Below image in small sans-serif

### 8.7 WhatsApp Floating Button

```
Position: Fixed, bottom-right (24px from edges)
Size: 56px circle
Color: #25D366 (WhatsApp green)
Icon: WhatsApp logo (white, 24px)
Shadow: 0 4px 12px rgba(0,0,0,0.15)
Animation: Gentle pulse every 10 seconds
Hover: Scale 1.1, shadow increases
Click: Opens wa.me link with pre-filled message
Z-index: 9999
```

Pre-filled message template:
```
Hello Royal Diadem Consult! I'm interested in discussing an architecture project. Can we schedule a consultation?
```

---

## 9. Services Architecture

### 9.1 Complete Service Catalog

#### Category 1: Core Architectural Services

| Service | Description | Icon Concept |
|---|---|---|
| Architectural Design | Complete building design from concept to final drawings | Building outline |
| Building Planning | Strategic space planning and zoning compliance | Grid/plan view |
| Floor Plan Design | Detailed 2D floor layouts optimized for flow and function | Floor plan icon |
| 3D Architectural Visualization | Photorealistic renders of proposed designs | 3D cube |
| Building Renovation Design | Redesign and modernization of existing structures | Refresh/arrows |
| Interior Space Planning | Functional and aesthetic interior layouts | Room layout |
| Landscape Design | Outdoor spaces, gardens, and environmental integration | Leaf/tree |

#### Category 2: Technical & Construction Services

| Service | Description |
|---|---|
| Construction Drawings | Production-ready technical drawings for builders |
| Structural Coordination | Liaison with structural engineers for integrity |
| Building Documentation | Complete as-built documentation and records |
| Site Analysis | Terrain, climate, and context evaluation |
| Feasibility Studies | Viability assessment before project commitment |
| Material Specification | Selection and specification of finishes and materials |

#### Category 3: Project Management

| Service | Description |
|---|---|
| Construction Supervision | On-site quality control and oversight |
| Project Management | End-to-end coordination of design and build |
| Contractor Coordination | Managing builder relationships and deliverables |
| Budget Planning | Cost estimation and financial planning |
| Timeline Scheduling | Milestone-driven project scheduling |

#### Category 4: Digital / Modern Architecture

| Service | Description |
|---|---|
| 3D Rendering | High-fidelity photorealistic visualizations |
| Walkthrough Animations | Animated virtual tours of spaces |
| BIM Modeling | Building Information Modeling for integrated design |
| Sustainable Design | Energy-efficient and eco-conscious architecture |
| Smart Building Design | IoT-integrated intelligent building systems |

#### Category 5: Consulting Services

| Service | Description |
|---|---|
| Architectural Consultation | Expert advice on design direction and feasibility |
| Building Permit Assistance | Navigating regulatory approval processes |
| Land Use Planning | Zoning, density, and land utilization strategy |
| Property Development Advice | Investment and development viability consulting |

---

## 10. Portfolio & Gallery System

### 10.1 Project Data Model

```typescript
interface Project {
  // Core identifiers
  id: string;
  slug: string;
  title: string;
  subtitle?: string;

  // Classification
  category: 'residential' | 'commercial' | 'interior' | 'landscape';
  tags: string[];
  featured: boolean;
  order: number;

  // Details
  client: string;
  location: {
    city: string;
    state: string;
    country: string;
    coordinates?: { lat: number; lng: number };
  };
  year: number;
  status: 'concept' | 'in-progress' | 'completed';
  area?: string;               // e.g., "450 m²"
  duration?: string;           // e.g., "18 months"

  // Narrative
  description: string;         // Short (2-3 sentences)
  designConcept: string;       // Long-form (3-5 paragraphs, rich text)
  pullQuote?: string;          // Highlighted quote from narrative

  // Media
  heroImage: Image;
  gallery: Image[];
  floorPlans: FloorPlan[];
  renders: Image[];
  beforeAfter?: { before: Image; after: Image }[];

  // Materials
  materials?: Material[];

  // Technical
  specifications?: {
    floors: number;
    bedrooms?: number;
    bathrooms?: number;
    parking?: number;
    style: string;             // e.g., "Contemporary", "Minimalist"
  };

  // Files
  downloadablePDF?: string;    // URL to downloadable floor plan PDF

  // SEO
  metaTitle: string;
  metaDescription: string;
  ogImage: string;

  // Timestamps
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
}

interface Image {
  id: string;
  url: string;                 // Cloudinary URL
  alt: string;
  width: number;
  height: number;
  caption?: string;
  blurDataURL?: string;        // Base64 blur placeholder for Next.js Image
}

interface FloorPlan {
  id: string;
  label: string;               // e.g., "Ground Floor", "First Floor"
  image: Image;
  downloadURL?: string;
}

interface Material {
  name: string;
  type: string;                // e.g., "Flooring", "Facade", "Roofing"
  swatch?: Image;              // Texture thumbnail
}
```

### 10.2 Gallery Interaction Patterns

**Portfolio Grid Filtering:**
1. User clicks category filter
2. Non-matching items animate out (fade + scale down, 300ms)
3. Grid re-layouts with GSAP Flip (600ms)
4. Matching items animate in (fade + translate up, 400ms, staggered 100ms)

**Image Lightbox Flow:**
1. User clicks gallery image
2. Image expands from its grid position to center screen (FLIP animation)
3. Background dims to 95% black
4. Navigation arrows + counter appear (fade in, 200ms delay)
5. Swipe or arrow key to navigate → crossfade between images (400ms)
6. Close → image shrinks back to grid position

**Infinite Scroll / Load More:**
1. User scrolls to bottom or clicks "Load More"
2. Skeleton placeholders appear (pulse animation)
3. New projects load and animate in with stagger
4. Smooth scroll to maintain position

### 10.3 Image Optimization Pipeline

```
Original Upload (Cloudinary)
    │
    ├── Hero:     2560px wide, WebP, quality 85
    ├── Large:    1920px wide, WebP, quality 85
    ├── Medium:   1200px wide, WebP, quality 80
    ├── Small:    800px wide, WebP, quality 80
    ├── Thumb:    400px wide, WebP, quality 75
    └── Blur:     32px wide, base64 (blur placeholder)

Responsive loading via <picture> or Next.js Image:
  - Mobile: 800px
  - Tablet: 1200px
  - Desktop: 1920px
  - Retina: 2560px (2x)
```

---

## 11. Advanced Features

### 11.1 3D Project Viewer

**Technology:** Three.js + React Three Fiber

```
- Load .glb/.gltf 3D models
- Orbit controls (rotate, zoom, pan)
- Auto-rotate option
- Material/texture switching
- Day/night lighting toggle
- Responsive canvas (resizes with container)
- Loading indicator with progress bar
- Fallback: Static 360° image rotation for low-end devices
```

### 11.2 Virtual Walkthrough

**Technology:** Pannellum.js or A-Frame.js

```
- 360° panoramic images of interiors
- Hotspot navigation between rooms
- Info tooltips on materials/features
- VR mode for headsets
- Fallback: Image carousel for unsupported browsers
```

### 11.3 Before / After Slider

**Technology:** Custom React component

```
- Draggable center divider
- Before image (left) / After image (right)
- Touch and mouse support
- Labels: "Before" / "After"
- Smooth drag with requestAnimationFrame
- Responsive aspect ratio
```

### 11.4 Downloadable Floor Plans

```
- PDF generation from uploaded drawings
- Watermarked preview on site
- Download button with email gate (optional)
- Analytics tracking on downloads
```

### 11.5 Smart Search

```
- Full-text search across projects, services, blog
- Keyboard shortcut: Cmd+K / Ctrl+K
- Search overlay with instant results
- Fuzzy matching
- Recent searches
```

---

## 12. Admin Dashboard (CMS)

### 12.1 CMS Option: Sanity.io (Recommended)

**Why Sanity:**
- Headless CMS with real-time editing
- Image pipeline built-in (hotspot cropping, focal points)
- Custom schemas match our data models exactly
- Free tier generous for this use case
- Live preview integration with Next.js

**Alternative:** Payload CMS (self-hosted, full control)

### 12.2 Admin Capabilities

| Module | Actions |
|---|---|
| **Projects** | Create, edit, delete, reorder, feature/unfeature, manage gallery |
| **Services** | Edit service descriptions, reorder, toggle visibility |
| **Blog Posts** | Rich text editor, image embedding, SEO fields, draft/publish |
| **Contact Messages** | View submissions, mark as read, reply via email |
| **Media Library** | Upload, organize, crop, tag images |
| **Site Settings** | Studio info, social links, contact details, SEO defaults |
| **Testimonials** | Add/edit client quotes |

### 12.3 Content Schemas (Sanity Example)

```typescript
// schemas/project.ts
export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'category', title: 'Category', type: 'string',
      options: { list: ['residential', 'commercial', 'interior', 'landscape'] } },
    { name: 'featured', title: 'Featured', type: 'boolean' },
    { name: 'client', title: 'Client', type: 'string' },
    { name: 'location', title: 'Location', type: 'object',
      fields: [
        { name: 'city', type: 'string' },
        { name: 'state', type: 'string' },
        { name: 'country', type: 'string' },
      ]
    },
    { name: 'year', title: 'Year', type: 'number' },
    { name: 'status', title: 'Status', type: 'string',
      options: { list: ['concept', 'in-progress', 'completed'] } },
    { name: 'area', title: 'Area', type: 'string' },
    { name: 'description', title: 'Short Description', type: 'text', rows: 3 },
    { name: 'designConcept', title: 'Design Concept', type: 'blockContent' },
    { name: 'heroImage', title: 'Hero Image', type: 'image',
      options: { hotspot: true } },
    { name: 'gallery', title: 'Gallery', type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }] },
    { name: 'floorPlans', title: 'Floor Plans', type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'label', type: 'string' },
        { name: 'image', type: 'image' },
        { name: 'pdf', type: 'file' },
      ]}]
    },
    { name: 'materials', title: 'Materials', type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'name', type: 'string' },
        { name: 'type', type: 'string' },
        { name: 'swatch', type: 'image' },
      ]}]
    },
    { name: 'metaTitle', title: 'SEO Title', type: 'string' },
    { name: 'metaDescription', title: 'SEO Description', type: 'text', rows: 2 },
  ],
  orderings: [
    { title: 'Year (Newest)', name: 'yearDesc', by: [{ field: 'year', direction: 'desc' }] },
  ],
};
```

---

## 13. Technical Architecture & Stack

### 13.1 Technology Stack

| Layer | Technology | Justification |
|---|---|---|
| **Framework** | Next.js 15 (App Router) | SSR/SSG, image optimization, routing, performance |
| **Language** | TypeScript | Type safety, better DX, fewer runtime errors |
| **Styling** | Tailwind CSS 4 + CSS Modules | Utility-first with component isolation |
| **Animation** | GSAP + Framer Motion + Lenis | Industry-standard animation quality |
| **CMS** | Sanity.io v3 | Headless CMS, real-time, customizable schemas |
| **Image CDN** | Cloudinary / Sanity Image Pipeline | Responsive images, transformations, WebP |
| **3D** | Three.js + React Three Fiber | 3D model viewing |
| **Forms** | React Hook Form + Zod | Validation, performance |
| **Email** | Resend or Nodemailer | Transactional emails for contact form |
| **Maps** | Mapbox GL JS or Google Maps | Custom-styled map embeds |
| **Analytics** | Vercel Analytics + Google Analytics 4 | Performance + traffic insights |
| **Hosting** | Vercel | Edge deployment, CDN, perfect Next.js integration |
| **Domain** | Custom domain via Vercel | SSL included |

### 13.2 Architecture Pattern

```
┌─────────────────────────────────────────────────┐
│                    Client (Browser)              │
│                                                  │
│  Next.js App (SSR + Client Components)          │
│  ├── Pages (App Router)                          │
│  ├── Components (UI Library)                     │
│  ├── Hooks (Custom React Hooks)                  │
│  ├── Lib (Utilities, Sanity Client, etc.)       │
│  └── Styles (Tailwind + CSS Modules)            │
│                                                  │
└────────────┬──────────────────┬─────────────────┘
             │                  │
             ▼                  ▼
┌──────────────────┐  ┌──────────────────┐
│    Sanity CMS    │  │   Cloudinary     │
│    (Content)     │  │   (Images)       │
│                  │  │                  │
│  - Projects      │  │  - Originals     │
│  - Services      │  │  - Transforms    │
│  - Blog Posts    │  │  - WebP/AVIF     │
│  - Settings      │  │  - Responsive    │
│  - Testimonials  │  │                  │
└──────────────────┘  └──────────────────┘
             │
             ▼
┌──────────────────┐
│     Vercel       │
│   (Deployment)   │
│                  │
│  - Edge CDN      │
│  - Serverless    │
│  - Analytics     │
│  - Preview       │
└──────────────────┘
```

### 13.3 Key Packages

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "typescript": "^5.5.0",

    "@sanity/client": "^6.0.0",
    "@sanity/image-url": "^1.0.0",
    "next-sanity": "^9.0.0",

    "gsap": "^3.12.0",
    "framer-motion": "^11.0.0",
    "lenis": "^1.1.0",

    "@react-three/fiber": "^8.0.0",
    "@react-three/drei": "^9.0.0",

    "react-hook-form": "^7.0.0",
    "zod": "^3.0.0",
    "@hookform/resolvers": "^3.0.0",

    "sharp": "^0.33.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.0.0"
  },
  "devDependencies": {
    "tailwindcss": "^4.0.0",
    "@tailwindcss/typography": "^0.5.0",
    "eslint": "^9.0.0",
    "eslint-config-next": "^15.0.0",
    "prettier": "^3.0.0",
    "prettier-plugin-tailwindcss": "^0.6.0"
  }
}
```

---

## 14. Performance & SEO Strategy

### 14.1 Performance Targets

| Metric | Target | Tool |
|---|---|---|
| Lighthouse Performance | ≥ 95 | Chrome DevTools |
| First Contentful Paint | < 1.2s | Web Vitals |
| Largest Contentful Paint | < 2.5s | Web Vitals |
| Total Blocking Time | < 200ms | Web Vitals |
| Cumulative Layout Shift | < 0.1 | Web Vitals |
| Time to Interactive | < 3.5s | Web Vitals |
| Page Weight (initial) | < 500KB | webpack-bundle-analyzer |

### 14.2 Performance Strategies

1. **Image Optimization**
   - Next.js `<Image>` component with blur placeholder
   - WebP/AVIF format with JPEG fallback
   - Responsive `srcset` with breakpoint-appropriate sizes
   - Lazy loading for below-fold images
   - Priority loading for hero and LCP images

2. **Code Splitting**
   - Route-based splitting (automatic with Next.js App Router)
   - Dynamic imports for heavy components (3D viewer, lightbox, map)
   - Tree-shaking via ES modules

3. **Font Loading**
   - `next/font` for automatic optimization
   - `font-display: swap` for FOUT prevention
   - Subset fonts to Latin characters only
   - Preload critical fonts

4. **Caching**
   - ISR (Incremental Static Regeneration) for project pages
   - Static generation for services, about pages
   - CDN edge caching via Vercel
   - Cache Sanity API responses with `revalidate`

5. **Animation Performance**
   - GSAP uses `transform` and `opacity` only (GPU-composited)
   - `will-change` applied judiciously before animation start
   - `requestAnimationFrame` for scroll listeners
   - Debounced resize handlers
   - Reduced motion media query respected

### 14.3 SEO Strategy

**Technical SEO:**
- Server-side rendering for all pages
- Structured data (JSON-LD) for: Organization, LocalBusiness, ImageGallery, Article
- Sitemap.xml auto-generated
- Robots.txt configured
- Canonical URLs on all pages
- Open Graph + Twitter Card meta tags
- Alt text on every image

**On-Page SEO:**
```html
<!-- Example: Project Detail Page -->
<title>{Project Name} | Architecture Project | Royal Diadem Consult</title>
<meta name="description" content="{Project description in 150-160 chars}" />
<meta property="og:title" content="{Project Name} — Royal Diadem Consult" />
<meta property="og:description" content="{Short description}" />
<meta property="og:image" content="{Hero image URL — 1200x630}" />
<meta property="og:type" content="article" />
<link rel="canonical" href="https://royaldiadem.com/projects/{slug}" />

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "{Project Name}",
  "description": "{Description}",
  "image": "{Image URL}",
  "creator": {
    "@type": "Organization",
    "name": "Royal Diadem Consult"
  }
}
</script>
```

**Content SEO (Blog):**
- Target long-tail keywords relevant to Nigerian architecture market
- 1500-2500 word articles with proper heading hierarchy
- Internal linking between projects, services, and blog posts
- Schema markup for BlogPosting

---

## 15. Responsive Strategy

### 15.1 Breakpoints

```css
/* Tailwind CSS breakpoints */
sm:  640px    /* Large phones (landscape) */
md:  768px    /* Tablets */
lg:  1024px   /* Small laptops */
xl:  1280px   /* Desktop */
2xl: 1536px   /* Large desktop */

/* Custom breakpoints */
3xl: 1920px   /* Full HD monitors */
```

### 15.2 Responsive Behavior Matrix

| Element | Mobile (< 768) | Tablet (768-1024) | Desktop (> 1024) |
|---|---|---|---|
| Navigation | Hamburger → Fullscreen overlay | Hamburger → Fullscreen overlay | Horizontal link bar |
| Hero | 100vh, centered text, portrait crop | 100vh, left-aligned text | 100vh, left-aligned text, parallax |
| Project Grid | Single column | 2-column | 2-3 column asymmetric |
| Typography | Mobile scale (40px max) | Interpolated | Desktop scale (80px max) |
| Section Padding | 80px vertical | 100px vertical | 120px vertical |
| Side Margins | 20px | 40px | 80px |
| Gallery | Single column + lightbox | 2-column | Mixed layout (full-bleed + grid) |
| Footer | Stacked, single column | 2-column | 3-4 column |
| WhatsApp Button | Visible, 48px | Visible, 56px | Visible, 56px |
| Animations | Reduced (no parallax) | Standard | Full (parallax + custom cursor) |

### 15.3 Touch-Specific Considerations

- Swipe gestures for lightbox navigation and carousels
- Larger tap targets (minimum 44px × 44px)
- No hover-dependent content reveals on touch devices
- Custom cursor disabled on touch devices
- Scroll-snap for horizontal carousels on mobile

---

## 16. Accessibility Standards

### 16.1 WCAG 2.1 AA Compliance

| Criterion | Implementation |
|---|---|
| Color Contrast | Minimum 4.5:1 for body text, 3:1 for large text |
| Keyboard Navigation | All interactive elements focusable, visible focus rings |
| Screen Readers | Semantic HTML, ARIA labels, alt text on all images |
| Reduced Motion | `prefers-reduced-motion` disables all animations, transitions |
| Focus Management | Focus trapped in modal/lightbox, returned to trigger on close |
| Skip Navigation | "Skip to content" link as first focusable element |
| Form Labels | All inputs have associated labels, error messages linked via aria-describedby |
| Image Alt Text | Descriptive alt text on all project images |
| Heading Hierarchy | Proper H1 → H6 nesting, single H1 per page |
| Link Purpose | All links describe destination, no "click here" text |
| Language | `lang="en"` on `<html>` element |
| Viewport | No disabled zoom (`user-scalable=yes`) |

### 16.2 Reduced Motion Example

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 17. Deployment & Infrastructure

### 17.1 Environments

| Environment | URL | Purpose |
|---|---|---|
| Development | `localhost:3000` | Local development |
| Preview | `*.vercel.app` | Branch previews, PR reviews |
| Staging | `staging.royaldiadem.com` | Final testing before production |
| Production | `royaldiadem.com` | Live site |

### 17.2 CI/CD Pipeline

```
Developer pushes to GitHub
    │
    ├── Branch push → Vercel Preview Deployment
    │   └── Preview URL generated + comment on PR
    │
    ├── PR merged to main → Vercel Production Deployment
    │   ├── Build Next.js (SSG + SSR)
    │   ├── Run ESLint + TypeScript checks
    │   ├── Run Lighthouse CI
    │   └── Deploy to edge CDN
    │
    └── Sanity content update → Webhook triggers ISR
        └── On-demand revalidation of affected pages
```

### 17.3 Environment Variables

```env
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=

# Cloudinary (if using)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Email (Resend)
RESEND_API_KEY=

# Maps
NEXT_PUBLIC_MAPBOX_TOKEN=
# or
NEXT_PUBLIC_GOOGLE_MAPS_KEY=

# Analytics
NEXT_PUBLIC_GA_ID=

# Site
NEXT_PUBLIC_SITE_URL=https://royaldiadem.com
```

---

## 18. File & Folder Structure

```
royal-diadem-consult/
│
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (fonts, providers, nav, footer)
│   ├── page.tsx                  # Home page
│   ├── loading.tsx               # Global loading state
│   ├── not-found.tsx             # 404 page
│   │
│   ├── about/
│   │   └── page.tsx              # About page
│   │
│   ├── projects/
│   │   ├── page.tsx              # Projects listing
│   │   └── [slug]/
│   │       └── page.tsx          # Project detail (dynamic)
│   │
│   ├── services/
│   │   └── page.tsx              # Services page
│   │
│   ├── journal/
│   │   ├── page.tsx              # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx          # Blog post detail
│   │
│   ├── contact/
│   │   └── page.tsx              # Contact page
│   │
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts          # Contact form API
│   │   ├── revalidate/
│   │   │   └── route.ts          # Sanity webhook revalidation
│   │   └── og/
│   │       └── route.tsx         # Dynamic OG image generation
│   │
│   └── globals.css               # Global styles + Tailwind imports
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── Footer.tsx
│   │   └── PageTransition.tsx
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── TextLink.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── Textarea.tsx
│   │   ├── Badge.tsx
│   │   ├── Overline.tsx
│   │   └── SectionHeading.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── StudioIntro.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── Testimonials.tsx
│   │   ├── ContactCTA.tsx
│   │   └── Awards.tsx
│   │
│   ├── project/
│   │   ├── ProjectGrid.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectHero.tsx
│   │   ├── ProjectMetadata.tsx
│   │   ├── ProjectGallery.tsx
│   │   ├── FloorPlanViewer.tsx
│   │   ├── MaterialsList.tsx
│   │   ├── NextProject.tsx
│   │   └── BeforeAfterSlider.tsx
│   │
│   ├── gallery/
│   │   ├── Lightbox.tsx
│   │   ├── ImageGrid.tsx
│   │   └── LazyImage.tsx
│   │
│   ├── contact/
│   │   ├── ContactForm.tsx
│   │   ├── QuoteRequestForm.tsx
│   │   ├── ContactInfo.tsx
│   │   └── Map.tsx
│   │
│   ├── blog/
│   │   ├── BlogCard.tsx
│   │   ├── BlogGrid.tsx
│   │   └── BlogContent.tsx
│   │
│   ├── animation/
│   │   ├── ScrollReveal.tsx
│   │   ├── ParallaxImage.tsx
│   │   ├── TextReveal.tsx
│   │   ├── ImageReveal.tsx
│   │   ├── SmoothScroll.tsx
│   │   └── CustomCursor.tsx
│   │
│   └── shared/
│       ├── WhatsAppButton.tsx
│       ├── ThemeToggle.tsx
│       ├── ScrollProgress.tsx
│       ├── SearchOverlay.tsx
│       └── SkipToContent.tsx
│
├── hooks/
│   ├── useScrollDirection.ts
│   ├── useMediaQuery.ts
│   ├── useInView.ts
│   ├── useLenis.ts
│   ├── useReducedMotion.ts
│   └── useLightbox.ts
│
├── lib/
│   ├── sanity/
│   │   ├── client.ts              # Sanity client configuration
│   │   ├── queries.ts             # GROQ queries
│   │   ├── image.ts               # Image URL builder
│   │   └── types.ts               # TypeScript types from schema
│   │
│   ├── utils/
│   │   ├── cn.ts                  # clsx + tailwind-merge helper
│   │   ├── formatDate.ts
│   │   ├── generateMetadata.ts
│   │   └── constants.ts
│   │
│   └── email/
│       └── sendContactEmail.ts
│
├── sanity/                        # Sanity Studio (embedded)
│   ├── schema/
│   │   ├── project.ts
│   │   ├── service.ts
│   │   ├── blogPost.ts
│   │   ├── testimonial.ts
│   │   ├── siteSettings.ts
│   │   └── index.ts
│   ├── sanity.config.ts
│   └── sanity.cli.ts
│
├── public/
│   ├── fonts/                     # Self-hosted fonts
│   ├── icons/                     # Favicon, app icons
│   ├── og/                        # Default OG images
│   └── robots.txt
│
├── styles/
│   └── animations.css             # GSAP/custom animation utilities
│
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── package.json
├── .env.local
├── .env.example
├── .eslintrc.json
├── .prettierrc
└── README.md
```

---

## 19. Development Phases & Milestones

### Phase 1: Foundation (Week 1-2)

| Task | Details |
|---|---|
| Project setup | Next.js 15, TypeScript, Tailwind CSS 4, ESLint, Prettier |
| Design system | Colors, typography, spacing tokens in Tailwind config |
| Component library | Button, Input, Card, Overline, SectionHeading |
| Layout components | Navbar, Footer, MobileMenu, PageTransition |
| Sanity setup | Schemas for all content types, studio configuration |
| Font setup | Load and configure serif + sans-serif + mono fonts |
| Global styles | Reset, base styles, animation utilities |
| Smooth scroll | Lenis integration |

### Phase 2: Core Pages (Week 3-4)

| Task | Details |
|---|---|
| Home page | All 7 sections with scroll animations |
| About page | All 5 sections with content from CMS |
| Projects listing | Grid with category filters, GSAP Flip transitions |
| Project detail | Hero, metadata, concept, gallery, floor plans, materials, next project |
| Services page | Numbered service sections with images |
| Contact page | Form with validation, map, WhatsApp integration |

### Phase 3: Advanced Features (Week 5-6)

| Task | Details |
|---|---|
| Image lightbox | Full-screen gallery with keyboard/swipe navigation |
| Custom cursor | Context-aware cursor with smooth interpolation |
| Blog/Journal | Listing + detail pages with rich text rendering |
| 3D viewer | Three.js integration for project models (if applicable) |
| Before/After slider | Renovation project comparison tool |
| Search overlay | Cmd+K search across all content |
| WhatsApp button | Floating button with pre-filled message |

### Phase 4: Optimization & Polish (Week 7-8)

| Task | Details |
|---|---|
| Performance | Lighthouse optimization, image lazy loading, code splitting |
| SEO | Meta tags, structured data, sitemap, robots.txt |
| Accessibility | WCAG 2.1 AA audit, keyboard nav, screen reader testing |
| Dark mode | Full dark mode implementation with system preference detection |
| Animation polish | Reduced motion support, timing refinements |
| Cross-browser | Test Safari, Chrome, Firefox, Edge, Samsung Internet |
| Mobile testing | iOS Safari, Chrome Android, various screen sizes |
| Content | Seed CMS with real project data and images |

### Phase 5: Launch (Week 9)

| Task | Details |
|---|---|
| Domain setup | Configure custom domain on Vercel |
| SSL | Verify HTTPS (automatic via Vercel) |
| Analytics | Google Analytics 4 + Vercel Analytics |
| OG images | Verify social sharing previews |
| Final QA | Complete walkthrough of all pages and interactions |
| Launch | Deploy to production |
| Post-launch | Monitor errors, performance, user analytics |

---

## 20. References & Inspiration

### 20.1 World-Class Architecture Studio Websites

| Studio | URL | Inspiration For |
|---|---|---|
| Zaha Hadid Architects | zaha-hadid.com | Immersive hero, project navigation |
| BIG (Bjarke Ingels Group) | big.dk | Bold grid, storytelling |
| Foster + Partners | fosterandpartners.com | Elegant minimalism, dark theme |
| David Chipperfield Architects | davidchipperfield.com | Editorial restraint, typography |
| Olson Kundig | olsonkundig.com | Full-bleed photography, cinematic scroll |
| John Pawson | johnpawson.com | Monastic minimalism |
| Snøhetta | snohetta.com | Clean grid, project storytelling |
| Heatherwick Studio | heatherwick.com | Dynamic layouts, innovation |
| Kengo Kuma & Associates | kkaa.co.jp | Material-focused, subtle motion |
| MVRDV | mvrdv.nl | Colorful grid, filter system |

### 20.2 Design Platforms

| Platform | Relevance |
|---|---|
| **ArchDaily** | Architecture project presentation standards |
| **Dezeen** | Editorial layout, magazine-style architecture content |
| **Divisare** | Minimal image-first portfolio presentation |
| **Wallpaper*** | Luxury editorial design language |
| **Architectural Digest** | High-end residential narrative |

### 20.3 Animation & Interaction References

| Reference | URL | Inspiration For |
|---|---|---|
| Awwwards | awwwards.com | Award-winning UI/UX patterns |
| Locomotive.ca | locomotive.ca | Smooth scroll, GSAP mastery |
| Aristide Benoist | aristidebenoist.com | Minimalist portfolio animations |
| Lusion | lusion.co | Three.js creative coding |
| Active Theory | activetheory.net | Cinematic web experiences |

### 20.4 Typography Inspiration

| Foundry/Resource | Note |
|---|---|
| Klim Type | Söhne, Untitled — premium architectural typography |
| Grilli Type | GT America, GT Sectra — Swiss precision |
| Google Fonts | Cormorant Garamond, Inter, Playfair Display — free high-quality options |
| Fontshare | Satoshi, General Sans — modern free alternatives |

---

## Appendix A: Naming Conventions

| Context | Convention | Example |
|---|---|---|
| Components | PascalCase | `ProjectCard.tsx` |
| Hooks | camelCase, use- prefix | `useScrollDirection.ts` |
| Utilities | camelCase | `formatDate.ts` |
| CSS classes | kebab-case (Tailwind) | `text-primary bg-secondary` |
| Sanity schemas | camelCase | `blogPost` |
| URLs/slugs | kebab-case | `/projects/lagos-villa` |
| Env variables | SCREAMING_SNAKE_CASE | `SANITY_API_TOKEN` |
| TypeScript types | PascalCase | `Project`, `BlogPost` |

---

## Appendix B: Browser Support

| Browser | Version |
|---|---|
| Chrome | Last 2 versions |
| Safari | Last 2 versions |
| Firefox | Last 2 versions |
| Edge | Last 2 versions |
| Samsung Internet | Last 2 versions |
| iOS Safari | 15+ |
| Chrome Android | Last 2 versions |

---

## Appendix C: Key Design Decisions Log

| Decision | Choice | Rationale |
|---|---|---|
| CMS | Sanity.io over WordPress | Headless, developer-friendly, real-time, free tier |
| Hosting | Vercel over Netlify | Native Next.js support, edge functions, ISR |
| Animation | GSAP + Framer Motion | GSAP for scroll-driven, Framer for component transitions |
| Styling | Tailwind over styled-components | Faster development, smaller bundle, consistent design tokens |
| Fonts | Google Fonts (free) | Budget-friendly with high-quality options |
| Image CDN | Sanity Image Pipeline + Cloudinary for extras | Built-in with CMS, reliable CDN |
| Smooth scroll | Lenis over Locomotive Scroll | Lighter, better maintained, fewer conflicts |

---

---

## Appendix D: Implementation Progress Tracker

> **Last Audit Date:** 10 March 2026  
> **Project Directory:** `/royal-diadem/`  
> **Framework:** Next.js 16.1.6 (App Router) · React 19.2.3 · TypeScript 5 · Tailwind CSS 4

### Phase 1: Foundation — ✅ COMPLETED

| Task | Status | Notes |
|---|---|---|
| Project setup (Next.js, TypeScript, Tailwind, ESLint) | ✅ Done | Created via `create-next-app` |
| Design system tokens (colors, typography, spacing) | ✅ Done | `globals.css` with `@theme inline` — full token system |
| Font setup (Serif + Sans + Mono) | ✅ Done | Cormorant Garamond, Inter, JetBrains Mono via `next/font/google` |
| Global styles (reset, base, animations) | ✅ Done | `globals.css` — scrollbar, selection, reduced motion, keyframes |
| Smooth scroll (Lenis) | ✅ Done | `components/animation/SmoothScroll.tsx` — duration 1.2, expo easing |
| Layout: Navbar | ✅ Done | Fixed, transparent→solid on scroll, smart hide/show, animated hamburger |
| Layout: MobileMenu | ✅ Done | Full-screen overlay, slide from right, staggered serif links |
| Layout: Footer | ✅ Done | Dark bg-inverse theme, 4-column grid, social links, copyright |
| Animation: ScrollReveal | ✅ Done | IntersectionObserver-based, configurable direction/delay/distance |
| Animation: ImageReveal | ✅ Done | Clip-path inset reveal with scale animation |
| WhatsApp floating button | ✅ Done | Fixed bottom-right, #25D366, pulse animation, pre-filled message |
| TypeScript types | ✅ Done | `lib/types.ts` — Project, Service, Testimonial, BlogPost interfaces |
| Mock data | ✅ Done | `lib/data.ts` — 6 projects, 5 services, 3 testimonials |
| Utility functions (cn) | ✅ Done | `lib/utils/cn.ts` — clsx + tailwind-merge |
| Site constants | ✅ Done | `lib/utils/constants.ts` — siteConfig, navLinks, projectCategories |
| `next.config.ts` | ✅ Done | Remote image patterns for Unsplash |
| Sanity CMS setup | ❌ Not started | Deferred to future phase |
| Component library (Button, Card, etc.) | ⚠️ Partial | Components exist inline in pages, not extracted as reusable primitives |

### Phase 2: Core Pages — ✅ COMPLETED

| Task | Status | Notes |
|---|---|---|
| Home page | ✅ Done | All 6 sections: Hero, StudioIntro, FeaturedProjects, ServicesOverview, Testimonials, ContactCTA |
| → Hero section | ✅ Done | Full-viewport, bg image with gradient overlay, scale animation, scroll indicator |
| → Studio Introduction | ✅ Done | Centered philosophy quote + body + CTA link |
| → Featured Projects | ✅ Done | Asymmetric editorial grid (7/5/5/7 cols), hover overlay |
| → Services Overview | ✅ Done | Numbered list with hover image preview |
| → Testimonials | ✅ Done | Auto-advancing carousel (8s), dark section, dot navigation |
| → Contact CTA | ✅ Done | Large serif headline + CTA button |
| → Awards section | ❌ Not started | Optional — logos + recognition strip |
| About page | ✅ Done | Header, founder portrait+bio, design philosophy (dark), stats, credentials |
| Projects listing | ✅ Done | Category filter (pill buttons), editorial grid, hover effects |
| Project detail `[slug]` | ✅ Done | Hero, metadata grid, design concept, gallery, materials, specs, next-project nav |
| Services page | ✅ Done | Numbered sections with images, included items, related projects link |
| Contact page | ✅ Done | Split layout (info left, form right), success state, social links |
| → Form fields | ✅ Done | Name, email, phone, project type, budget, timeline, message |
| → Form validation | ✅ Done | React Hook Form + Zod — full client-side validation with error messages |
| → Google Maps embed | ❌ Not started | Map placeholder exists but no actual embed |
| Blog/Journal page | ✅ Done | `/journal` listing + `/journal/[slug]` detail pages with 5 mock articles |

### Phase 3: Advanced Features — ✅ MOSTLY COMPLETE

| Task | Status | Notes |
|---|---|---|
| Image lightbox | ✅ Done | `ProjectGallery.tsx` — full lightbox with prev/next/close/counter/keyboard |
| Custom cursor | ✅ Done | `CustomCursor.tsx` — ring + dot, smooth follow, context-aware `data-cursor`, touch disabled |
| Blog/Journal pages | ✅ Done | `/journal` listing + `/journal/[slug]` detail — 5 mock articles with SEO-focused Nigerian content |
| Page transitions | ✅ Done | `PageTransition.tsx` — Framer Motion AnimatePresence, fade+slide |
| GSAP scroll animations | ✅ Done | `GSAPReveal.tsx` — ScrollTrigger-powered, configurable direction/stagger/scrub |
| GSAP parallax | ✅ Done | `ParallaxImage.tsx` — scroll-driven parallax with configurable speed |
| GSAP text reveal | ✅ Done | `TextReveal.tsx` — word-by-word split reveal with ScrollTrigger |
| 3D viewer (Three.js) | ❌ Not started | Optional — for project models |
| Before/After slider | ❌ Not started | Renovation project comparison tool |
| Search overlay (Cmd+K) | ❌ Not started | Full-text search across content |
| Hero parallax effect | ❌ Not started | Need to wire ParallaxImage into Hero component |

### Phase 4: Optimization & Polish — 🔶 PARTIALLY STARTED

| Task | Status | Notes |
|---|---|---|
| Performance optimization | ❌ Not started | Lighthouse audit, bundle analysis |
| SEO: Structured data (JSON-LD) | ✅ Done | `JsonLd.tsx` — Organization + LocalBusiness + Article + WebPage schemas |
| SEO: Sitemap.xml | ❌ Not started | Auto-generation needed |
| SEO: robots.txt | ❌ Not started | Configuration needed |
| Accessibility audit (WCAG 2.1 AA) | ❌ Not started | Keyboard nav, screen reader, aria labels |
| Dark mode | ✅ Done | `ThemeProvider.tsx` + `ThemeToggle.tsx` — system detection, localStorage persistence, full dark palette in CSS |
| Animation polish | ⚠️ Partial | Reduced motion media query exists; timing refinements needed |
| Cross-browser testing | ❌ Not started | Safari, Chrome, Firefox, Edge |
| Mobile testing | ❌ Not started | iOS Safari, Chrome Android |
| Custom `not-found.tsx` page | ✅ Done | Branded 404 page with CTA buttons |
| Custom `loading.tsx` states | ✅ Done | Logo + animated loading bar |
| API route: Contact form | ✅ Done | `/api/contact` — Zod server-side validation, ready for email service integration |

### Phase 5: Launch — ❌ NOT STARTED

| Task | Status | Notes |
|---|---|---|
| Domain setup | ❌ Not started | Custom domain on Vercel |
| Analytics (GA4 + Vercel) | ❌ Not started | — |
| OG images | ❌ Not started | Social sharing previews |
| Real content | ❌ Not started | Replace mock data with actual projects/images |
| Final QA | ❌ Not started | Complete walkthrough |
| Production deploy | ❌ Not started | — |

### Summary

| Phase | Completion |
|---|---|
| Phase 1: Foundation | **~90%** (missing Sanity, reusable primitives) |
| Phase 2: Core Pages | **~95%** (missing Maps embed) |
| Phase 3: Advanced Features | **~75%** (missing 3D viewer, before/after, search overlay) |
| Phase 4: Optimization & Polish | **~35%** (JSON-LD, dark mode, 404, loading, API done) |
| Phase 5: Launch | **0%** |

### Priority Items (Next Sprint)

1. **Wire ParallaxImage into Hero** — Apply GSAP parallax to the hero section image
2. **Sitemap.xml + robots.txt** — Auto-generated SEO essentials
3. **Search overlay (Cmd+K)** — Full-text search across projects, services, journal
4. **Before/After slider** — For renovation project comparisons
5. **Accessibility audit** — WCAG 2.1 AA compliance pass
6. **Performance optimization** — Lighthouse audit, code splitting review
7. **Cross-browser + mobile testing** — Safari, Firefox, iOS, Android
8. **Real content** — Replace mock data with actual project info and photography
9. **Email integration** — Connect API route to Resend/Nodemailer
10. **Deploy to Vercel** — Domain, analytics, OG images

---

*This documentation is a living document. Update as design decisions evolve and implementation progresses.*

**Last updated:** 10 March 2026  
**Version:** 1.2.0 — Phase 1-2 complete, Phase 3 ~75%, Phase 4 ~35%
