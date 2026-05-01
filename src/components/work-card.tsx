"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { WorkExperience } from "@/types";
import { ScrollReveal } from "./scroll-reveal";

export function WorkCard({
  experience,
  index,
}: {
  experience: WorkExperience;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <ScrollReveal delay={index * 0.15}>
      <motion.div
        className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-12"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className={`flex flex-col gap-4 ${!isEven ? "md:order-2" : ""}`}>
          <div>
            <h3
              className="text-[clamp(1.75rem,3vw,2.5rem)] leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {experience.company}
            </h3>
            <p
              className="text-text-secondary text-[0.75rem] mt-1 tracking-wider"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {experience.role} &middot; {experience.dates}
            </p>
          </div>

          <p className="text-text-secondary text-[0.95rem] leading-relaxed">
            {experience.description}
          </p>

          <ul className="flex flex-col gap-2">
            {experience.bullets.map((bullet, i) => (
              <li
                key={i}
                className="text-text-secondary text-[0.85rem] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent-warm/40"
              >
                {bullet}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mt-2">
            {experience.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-full bg-surface text-text-secondary text-[0.7rem] tracking-wide"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className={`${!isEven ? "md:order-1" : ""}`}>
          {experience.photo ? (
            <div className="relative overflow-hidden rounded-2xl transition-shadow duration-500 group-hover:shadow-[0_12px_40px_rgba(232,168,73,0.12)]">
              <Image
                src={experience.photo}
                alt={experience.photoAlt || experience.company}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          ) : (
            <div className="flex items-center justify-center rounded-2xl bg-surface aspect-[3/2] p-8">
              <span
                className="text-[clamp(2rem,4vw,3rem)] leading-tight text-text-secondary/30 text-center"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {experience.company}
              </span>
            </div>
          )}
        </div>
      </motion.div>
    </ScrollReveal>
  );
}
