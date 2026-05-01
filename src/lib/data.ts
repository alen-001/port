import type {
  WorkExperience,
  Project,
  BlogPost,
  GalleryImage,
} from "@/types";

export const workExperiences: WorkExperience[] = [
  {
    company: "GoDaddy",
    role: "Software Development Engineer Intern",
    dates: "Jan 2026 - Jun 2026",
    description:
      "Worked across UI, API, and infrastructure on an internal edge gateway configuration tool within Edge Gateway Services.",
    bullets: [
      "Built reusable component library (BasePage, BaseTable, EmptyState) adopted across the entire application",
      "Owned the HTTP Filters feature end-to-end: full CRUD with changeset-aware state management and ~1,970 lines of tests",
      "Led E2E testing infrastructure from scratch — auth flows, secrets management, CI/CD pipeline",
      "23 PRs across 2 repos, ~18,600 lines added, 15 Jira tickets",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Zustand",
      "Cypress",
      "GitHub Actions",
      "Vault",
      "AWS",
    ],
    photo: "/images/work/godaddy-sign.jpg",
    photoAlt: "Alen at GoDaddy office with the GoDaddy sign",
  },
  {
    company: "Mahindra Logistics",
    role: "SDE Intern",
    dates: "May 2025 - Jul 2025",
    description:
      "Built and deployed a full-stack Employee Transport Management System with routing and rostering.",
    bullets: [
      "Developed a FastAPI microservice using Google OR-Tools for constraint-based route optimization",
      "Delivered secure, role-based portals with RSA JWT auth for inter-service communication",
      "National Winner — Mahindra Logistics Techathon 2.0",
    ],
    stack: [
      "TypeScript",
      "Node.js",
      "React",
      "MySQL",
      "Drizzle",
      "Redis",
      "Python",
      "FastAPI",
      "Docker",
    ],
    photo: "/images/work/mahindra-ceremony.jpg",
    photoAlt: "Alen receiving the Mahindra Techathon award",
  },
  {
    company: "House Of EdTech",
    role: "FullStack Developer Intern",
    dates: "Apr 2025 - May 2025",
    description:
      "Migrated payment systems and modernized the frontend across 20+ pages.",
    bullets: [
      "Migrated payment system from polling to webhook-based architecture, improving real-time order processing",
      "Upgraded front-end UI to Tailwind CSS v4, improving design consistency across 20+ pages",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Hono",
      "Cloudflare Workers",
      "Drizzle",
      "PostgreSQL",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Career Shepherds",
    date: "Jan 2025",
    description:
      "Career guidance platform with resume analysis, job fit scoring, AI chat mentorship, and course recommendations.",
    stack: [
      "React.js",
      "TailwindCSS",
      "Framer Motion",
      "Node.js",
      "MongoDB",
      "FastAPI",
    ],
  },
  {
    name: "Scalable WebSocket Chat",
    date: "Jun 2025",
    description:
      "Real-time chat system with horizontal scaling via Redis Pub/Sub across multiple server instances.",
    stack: ["TypeScript", "Node.js", "Redis", "React.js", "Vite"],
  },
  {
    name: "BrainShare",
    date: "Mar 2025",
    description:
      "Knowledge management platform with rich text editing, image uploads, tagging, and document sharing via unique links.",
    stack: ["Next.js 15", "TypeScript", "TailwindCSS", "MongoDB", "Clerk"],
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "my views on religion...",
    date: "May 2026",
    href: "#",
  },
  {
    title: "on building things that matter",
    date: "Apr 2026",
    href: "#",
  },
  {
    title: "the case for slowing down",
    date: "Mar 2026",
    href: "#",
  },
  {
    title: "what i learned from my first real job",
    date: "Feb 2026",
    href: "#",
  },
  {
    title: "why i take pictures of skies",
    date: "Jan 2026",
    href: "#",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/tea-plantations.jpg",
    alt: "Tea plantations in the misty hills",
    aspect: "landscape",
  },
  {
    src: "/images/gallery/sunset-sky-1.jpg",
    alt: "Pink and lavender sunset over trees",
    aspect: "portrait",
  },
  {
    src: "/images/gallery/wildflowers.jpg",
    alt: "White wildflowers with motion blur",
    aspect: "portrait",
  },
  {
    src: "/images/gallery/puppy-river-rocks.jpg",
    alt: "Puppy walking on river rocks at golden hour",
    aspect: "portrait",
  },
  {
    src: "/images/gallery/kerala-hills.jpg",
    alt: "Lush green hills and countryside in Kerala",
    aspect: "portrait",
  },
  {
    src: "/images/gallery/daisies.jpg",
    alt: "Field of white daisies in sunlight",
    aspect: "portrait",
  },
  {
    src: "/images/gallery/riverside-bridge-dusk.jpg",
    alt: "Riverside bridge at pink dusk",
    aspect: "landscape",
  },
  {
    src: "/images/gallery/stone-steps-rain.jpg",
    alt: "Stone stairway surrounded by green trees after rain",
    aspect: "portrait",
  },
  {
    src: "/images/gallery/sunset-sky-2.jpg",
    alt: "Lavender sunset sky over tree silhouettes",
    aspect: "portrait",
  },
  {
    src: "/images/gallery/train-window-palms.jpg",
    alt: "Palm trees and greenery through a train window",
    aspect: "square",
  },
  {
    src: "/images/gallery/orange-lilies.jpg",
    alt: "Vibrant orange lilies in a garden",
    aspect: "portrait",
  },
  {
    src: "/images/gallery/banana-leaves-mountains.jpg",
    alt: "Banana leaves with mountains in the background",
    aspect: "landscape",
  },
  {
    src: "/images/gallery/sunset-sky-3.jpg",
    alt: "Peach and purple sunset clouds",
    aspect: "portrait",
  },
  {
    src: "/images/gallery/mossy-stream.jpg",
    alt: "Moss-covered rock in a stream",
    aspect: "portrait",
  },
  {
    src: "/images/gallery/kerala-greenery-1.jpg",
    alt: "Green hills and countryside in Kerala",
    aspect: "portrait",
  },
  {
    src: "/images/gallery/white-cat-garden.jpg",
    alt: "White cat resting in a lush garden",
    aspect: "portrait",
  },
  {
    src: "/images/gallery/pink-blossom-tree.jpg",
    alt: "Pink blossom tree against blue sky",
    aspect: "portrait",
  },
  {
    src: "/images/gallery/sunset-sky-4.jpg",
    alt: "Golden pink sunset over tree line",
    aspect: "portrait",
  },
  {
    src: "/images/gallery/kerala-greenery-2.jpg",
    alt: "Vibrant green Kerala landscape with mountains",
    aspect: "portrait",
  },
  {
    src: "/images/gallery/koi-pond.jpg",
    alt: "Reflections in a koi pond",
    aspect: "landscape",
  },
  {
    src: "/images/gallery/sunset-sky-5.jpg",
    alt: "Wide sunset sky with purple clouds",
    aspect: "portrait",
  },
  {
    src: "/images/gallery/palms-at-dusk.jpg",
    alt: "Palm trees silhouetted at dusk",
    aspect: "portrait",
  },
  {
    src: "/images/gallery/kerala-palms.jpg",
    alt: "Coconut palms in Kerala countryside",
    aspect: "portrait",
  },
  {
    src: "/images/gallery/sunset-silhouette.jpg",
    alt: "Sunset with tree silhouettes and flower field",
    aspect: "portrait",
  },
  {
    src: "/images/gallery/greenhouse-stream.jpg",
    alt: "Stream flowing through green tropical foliage",
    aspect: "portrait",
  },
  {
    src: "/images/gallery/kerala-village.jpg",
    alt: "Kerala village landscape with hills",
    aspect: "portrait",
  },
];
