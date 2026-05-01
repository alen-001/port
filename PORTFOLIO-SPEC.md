# Portfolio Specification — Alen Shaju

## Overview

A personal portfolio website with a **Studio Ghibli-inspired, nature-forward, Awwwards-minimalist** aesthetic. White background, smooth Lenis scroll, interesting typography, fluid animations. The site should feel like stepping into a quiet, sun-dappled clearing — warm, personal, unhurried.

**Greeting:** "Hi, this is Alen, and welcome to my corner of the internet :)"

---

## Aesthetic Direction

### Visual DNA (derived from your photography)

Your photos tell a consistent story — these are the visual threads to pull into the site:

| Theme | Source Images | How It Translates |
|-------|-------------|-------------------|
| **Golden hour skies** | Multiple sunset shots — pink/lavender/peach gradients over tree silhouettes | Subtle warm gradient accents, ambient color shifts on scroll |
| **Lush Kerala greenery** | Tea plantations, hillside villages, palm trees, banana leaves, dense foliage | Green as an accent color, organic shapes, leaf/botanical motifs |
| **Water & reflection** | River rocks, koi pond reflections, mossy streams | Fluid motion, ripple-like animations, organic movement |
| **Flowers** | Daisies, orange lilies, pink blossoms, white wildflowers (the blurry Queen Anne's lace shot is gorgeous) | Soft, dreamy blur effects, floral micro-details |
| **Motion blur / train window** | Several shots from moving trains — palm trees, greenery rushing past | Parallax depth, motion-blur transitions, a sense of journey |
| **Animals in nature** | Puppy on river rocks, white cat in garden | Personality, warmth, a "lived-in" feeling |
| **Quiet moments** | You sitting on a leaf-covered forest path, the stone stairway in the rain | Contemplative pacing, generous whitespace |

### Color Palette

Based on your photos and the Katherine Le design reference:

```
--bg:            #FAFAF8     (warm off-white, not stark)
--text-primary:  #1A1A1A     (near-black, soft)
--text-secondary:#6B6B6B     (muted gray for body)
--accent-warm:   #E8A849     (golden hour amber — from the Katherine Le reference)
--accent-green:  #4A7C59     (muted forest green — from your Kerala photos)
--accent-blush:  #D4A0A0     (sunset pink/blush — from your sky photos)
--surface:       #F5F3EF     (slightly warmer off-white for cards/sections)
```

### Typography

Inspired by the Katherine Le reference (serif display + clean sans body):

- **Display/Headings:** A serif with character — candidates: `Playfair Display`, `Fraunces`, `Instrument Serif`, or `EB Garamond` (fluid clamp sizing, tight line-height ~0.9-1.1 for drama)
- **Body:** Clean sans — `Inter`, `Geist`, or `Satoshi` (weight 400-450, line-height 1.6)
- **Accent/Mono:** For labels, dates, tags — a monospace or condensed sans at small size

Type scale should be fluid (clamp-based) from ~14px body to ~80-100px display headings.

### Motion & Animation Principles

- **Smooth Lenis scroll** — buttery, slightly decelerated
- **Entrance animations:** Fade up + slight translate (200-400ms, ease-out)
- **Scroll-linked reveals:** Elements fade/slide in as they enter viewport
- **Transitions:** 250-350ms for UI, 500-800ms for page/section transitions
- **Loading screen:** Custom loader with horizontal progress + greeting text reveal
- **Easing:** Soft cubic beziers, never linear — `cubic-bezier(0.25, 0.46, 0.45, 0.94)` or similar
- **Philosophy:** "Like a breeze through tall grass" — nothing should snap, everything should flow

---

## Site Structure

### 0. Loader / Intro

Full-screen white loader on initial visit:
- Horizontal progress bar animation (thin, minimal)
- Once loaded, text reveals letter-by-letter or with a blur-in:
  - "Hi, this is Alen"
  - "welcome to my corner of the internet :)"
- Smooth transition (opacity + scale) into the main site
- Only shows on first visit (session-based)

**Interaction ideas from libraries:**
- `Blur Text` (ReactBits) for the greeting reveal
- `Scroll Float` for the transition out of loader into hero

---

### 1. Hero / Landing Section

A full-viewport introduction.

**Layout:**
- Large serif display heading with your name
- A personal photo of you (the forest path shot or the architectural one — both are great hero candidates)
- Minimal navigation — either a floating pill nav or subtle top-right links
- A small scroll indicator (arrow or "scroll" text) at the bottom

**Content:**
- "Alen Shaju"
- A one-liner like: "software engineer, builder of things, observer of sunsets"
- Links: GitHub, LinkedIn, Email

**Photos to use:**
- `me/WhatsApp Image 2026-05-01 at 16.37.20.jpeg` (you on the forest path — perfect hero, very Ghibli)
- `me/WhatsApp Image 2026-05-01 at 16.37.21.jpeg` (you at the archway — good for an about section)

**Interactions:**
- `Scroll Reveal` or `Blur Text` for name entrance
- Subtle parallax on the hero image
- Optional: `Ribbons` or `Silk` background (ReactBits) — very faint, barely visible, behind the hero for a wind/nature feel
- Optional: `Blob Cursor` or `Splash Cursor` for a playful touch

---

### 2. "What I Do For Work" Section

Your professional experience, presented not as a boring resume but as a narrative.

**Layout:**
- Section title in large serif: "what i do for work"
- Timeline or card-based layout for each role
- Each card expands or reveals details on interaction
- Work photos inline with the content

**Content (from portfolio-content.md):**

**GoDaddy** — SDE Intern (Jan 2026 - Jun 2026)
- Edge Gateway Services, Customer Experience team
- Built component library (BasePage, BaseTable, EmptyState)
- Owned HTTP Filters feature end-to-end (~1,970 lines of tests)
- Led E2E testing infrastructure from scratch
- 23 PRs, ~18,600 lines added, 15 Jira tickets
- Stack: Next.js, React, TypeScript, Zustand, Cypress, GitHub Actions, Vault, AWS
- Photos: `me/godaddy/WhatsApp Image 2026-05-01 at 16.41.23.jpeg` (you with GoDaddy sign), `me/godaddy/1768388645111.jpeg` (I joined GoDaddy graphic)

**Mahindra Logistics** — SDE Intern (May 2025 - Jul 2025)
- Full-stack Employee Transport Management System
- FastAPI microservice with Google OR-Tools for route optimization
- RSA JWT auth for inter-service communication
- Stack: TypeScript, Node.js, React, MySQL, Drizzle, Redis, Python, FastAPI, Docker
- Photos: `me/mahi/1754815243847.jpeg` (certificate ceremony), `me/mahi/1754815244019.jpeg` (Techathon winner trophy)

**House Of EdTech** — FullStack Developer Intern (Apr 2025 - May 2025)
- Migrated payment system from polling to webhooks
- Upgraded to Tailwind CSS v4 across 20+ pages
- Stack: Next.js, TypeScript, Hono, Cloudflare Workers, Drizzle, PostgreSQL

**Interactions:**
- Cards that slide in on scroll
- Hover to reveal more details / expand
- Work photos appear with a subtle tilt or parallax effect
- `Tilted Card` or `Spotlight Card` (ReactBits) for the experience cards

---

### 3. "Projects" Section

**Layout:**
- Section title: "projects"
- Bento grid or stacked cards layout
- Each project is a card with: name, one-liner, tech tags, link
- Hover reveals a brief description or expands the card

**Content:**

**Career Shepherds** (Jan 2025)
- Career guidance platform — resume analysis, job fit scoring, AI chat mentorship
- React.js, TailwindCSS, Framer Motion, Node.js, MongoDB, FastAPI, shadcn/ui

**Scalable WebSocket Chat App** (Jun 2025)
- Real-time chat with horizontal scaling via Redis Pub/Sub
- TypeScript, Node.js, Redis, React.js, Vite

**BrainShare** (Mar 2025)
- Knowledge management with TipTap rich text, tagging, document sharing
- Next.js 15, TypeScript, TailwindCSS, MongoDB, shadcn/ui, Clerk

**Interactions:**
- `Bounce Cards` or `Pixel Card` (ReactBits) for project cards
- Tags animate in with a stagger
- `Staggered Menu` style reveal on scroll

---

### 4. "Gallery" Section

A photo dump — your nature photography, travel, moments. This is where the Ghibli energy lives the most.

**Layout:**
- Section title: "gallery" (or "photo dumps" / "things i've seen")
- Masonry grid layout — mixed aspect ratios
- Lightbox on click for full-size view
- Optional: subtle parallax on individual images as you scroll

**Images to include (from aesthetics/):**

| Category | Images |
|----------|--------|
| **Sunsets/Skies** | 16.35.03 (2), (3), (4), (5), (6) — the sunset series is stunning |
| **Nature/Kerala** | 16.38.24, 16.38.24 (1), 16.38.24 (2), 16.38.25, 16.38.25 (1), 16.38.25 (2) — green hills, palm trees, train window views |
| **Flowers** | 16.26.59 (2) — orange lilies, f2c0342e — wildflowers, afe1c0ff — daisies |
| **Water** | 16.26.59 (1) — mossy rock, 16.39.49 — koi pond reflections |
| **Animals** | 16.26.59 — puppy on rocks, 16.38.26 — white cat in garden |
| **Places** | 16.38.46, 16.38.46 (1) — stone steps in rain, greenhouse stream |
| **Tropical** | 16.38.23 — banana leaves & mountains, 16.38.47 — tea plantations, 16.39.50 — palm trees at dusk |
| **Blooms** | 16.39.50 (1) — pink blossom tree against blue sky |
| **Dreamy** | 16.35.03 — riverside bridge at pink dusk |

**Interactions:**
- `Masonry` layout (ReactBits)
- Images fade in with stagger on scroll
- Hover: subtle scale + warm shadow
- Click: smooth lightbox expand
- Optional: `Image Trail` cursor effect within this section
- Optional: `Parallax Floating` (Fancy Components) for a dreamy depth effect

---

### 5. "My Thoughts On Things..." Section

A minimal blog/thoughts page. Placeholder content for now — just titles and dates to establish the layout and typography.

**Layout:**
- Section title: "my thoughts on things..."
- Simple list of blog post titles — large serif type, each on its own line
- Each title is a link (to a future blog post page)
- Dates in small monospace text alongside
- Hover: title shifts right slightly, color changes to accent

**Placeholder Posts:**
- "my views on religion..." — May 2026
- "on building things that matter" — Apr 2026
- "the case for slowing down" — Mar 2026
- "what i learned from my first real job" — Feb 2026
- "why i take pictures of skies" — Jan 2026

**Interactions:**
- `Scroll Reveal` per item
- Hover: `Variable Proximity` or simple translateX shift
- Clean, editorial feel — think literary magazine

---

### 6. Footer

Minimal, warm.

**Content:**
- "thanks for visiting :)"
- Links: GitHub, LinkedIn, Email
- "built with care, 2026"

**Interactions:**
- Fade in on scroll
- Optional: a small nature-themed SVG illustration (a leaf, a cloud, a small plant)

---

## Navigation

**Style:** Minimal floating pill nav or a side-docked nav.

**Items:**
- work
- projects
- gallery
- thoughts
- (home — clicking name/logo scrolls to top)

**Behavior:**
- Appears after scrolling past the hero
- Smooth scroll to sections on click
- Active section highlighted
- On mobile: hamburger or bottom sheet

---

## Technical Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | **Next.js 15** (App Router) | You know it well, great for SSR, image optimization |
| Styling | **Tailwind CSS v4** + CSS variables | Your recent experience, design token friendly |
| Scroll | **Lenis** | Smooth scroll, industry standard for Awwwards sites |
| Animations | **Framer Motion** | You have experience, pairs with React perfectly |
| Interactive components | **ReactBits** / **Fancy Components** | Cherry-pick specific effects (Blur Text, Masonry, Ribbons, etc.) |
| Images | **Next/Image** | Optimization, lazy loading, blur placeholders |
| Blog | **MDX** or just placeholder pages for now | Simple, extensible later |
| Fonts | **next/font** with Google Fonts or self-hosted | Performance, no layout shift |
| Deployment | **Vercel** | You've used it, zero-config for Next.js |

---

## Image Organization Plan

All images from `aesthetics/` need to be:
1. Renamed to semantic names (e.g., `sunset-bridge.jpg`, `kerala-tea-hills.jpg`, `me-forest-path.jpg`)
2. Optimized/compressed for web
3. Moved to `public/images/` with subdirectories: `gallery/`, `work/`, `hero/`
4. Blur placeholder data URLs generated for each

---

## Component Inventory

From the ReactBits / Fancy Components libraries, these are the specific components to evaluate and potentially integrate:

### Must-Have
- **Lenis** — smooth scroll (external, not from these libs)
- **Blur Text** (ReactBits) — for loader greeting reveal
- **Scroll Reveal** (ReactBits) — for section entrances
- **Masonry** (ReactBits) — for gallery layout

### Strong Candidates
- **Silk** or **Ribbons** (ReactBits backgrounds) — subtle hero background, wind/nature feel
- **Tilted Card** or **Spotlight Card** (ReactBits) — for work experience and project cards
- **Split Text** (ReactBits) — for heading animations
- **Breathing Text** (Fancy Components) — organic feel for section titles
- **Parallax Floating** (Fancy Components) — for gallery depth

### Nice-to-Have (evaluate during build)
- **Blob Cursor** or **Splash Cursor** (ReactBits) — playful cursor effect
- **Click Spark** (ReactBits) — micro-delight on click
- **Variable Proximity** (ReactBits) — cursor-reactive typography
- **Image Trail** (ReactBits) — cursor-following images in gallery
- **Floating Lines** or **Particles** (ReactBits backgrounds) — firefly/dust-mote ambience

---

## Content Source

All professional content is in `portfolio-content.md`:
- Education: NSUT Delhi, B.Tech EE, 8.38 CGPA
- 3 work experiences (GoDaddy, Mahindra, House Of EdTech)
- 3 projects (Career Shepherds, WebSocket Chat, BrainShare)
- Skills, Awards (Mahindra Techathon National Winner, IIT Bombay Finalist)

---

## Responsive Strategy

- **Desktop-first** design (the site is meant to be experienced on desktop)
- **Breakpoints:** 1440px (max content), 1024px (tablet), 768px (mobile)
- Gallery: masonry collapses from 3-4 cols to 2 to 1
- Navigation: pill nav becomes hamburger/bottom sheet on mobile
- Hero image: crops or repositions on smaller screens
- Heavy animations (cursor effects, parallax) disabled on mobile for performance
- Touch-friendly interactions on mobile (no hover-dependent features)

---

## Performance Targets

- Lighthouse: 90+ across all metrics
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Images: WebP/AVIF via Next/Image, lazy loaded with blur placeholders
- Fonts: subset, preloaded, `font-display: swap`
- Animations: GPU-accelerated (transform/opacity only), `will-change` where needed
- Bundle: tree-shake component libraries, only import what's used

---

## Open Questions (to decide during build)

1. **Cursor effect:** Blob cursor site-wide, or only in certain sections?
2. **Background animation:** Silk/Ribbons behind hero only, or a subtle ambient effect throughout?
3. **Gallery lightbox:** Custom built or use a library?
4. **Blog:** Just placeholder titles linking to `#`, or actually set up MDX pages?
5. **Sound:** The Katherine Le reference has "toggle site audio" — want ambient sound? (probably not for v1)
6. **Dark mode:** Start with light-only (white bg is core to the aesthetic) — add later?
7. **Hero photo:** The forest path shot (contemplative, Ghibli-perfect) vs. the archway shot (more formal)?
