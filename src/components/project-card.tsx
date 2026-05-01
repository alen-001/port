"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import type { Project } from "@/types";
import { ScrollReveal } from "./scroll-reveal";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const spotlightRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotlightRef.current?.style.setProperty("--x", `${x}px`);
    spotlightRef.current?.style.setProperty("--y", `${y}px`);
  }

  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.div
        className="group relative overflow-hidden rounded-2xl bg-surface p-8 h-full flex flex-col"
        onMouseMove={handleMouseMove}
        whileHover={{ scale: 1.02, y: -2 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div
          ref={spotlightRef}
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(400px circle at var(--x, 50%) var(--y, 50%), rgba(232,168,73,0.08), transparent 60%)`,
          }}
        />

        <div className="flex items-start justify-between mb-4">
          <div>
            <h3
              className="text-[clamp(1.25rem,2vw,1.5rem)] leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {project.name}
            </h3>
            <p
              className="text-text-secondary text-[0.7rem] mt-1 tracking-wider"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {project.date}
            </p>
          </div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-text-secondary/30 transition-all duration-300 group-hover:text-accent-warm group-hover:rotate-45"
          >
            <path
              d="M5 15L15 5M15 5H8M15 5V12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <p className="text-text-secondary text-[0.9rem] leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-full bg-bg text-text-secondary text-[0.65rem] tracking-wide"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </ScrollReveal>
  );
}
