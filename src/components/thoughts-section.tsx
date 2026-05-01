"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/lib/data";
import { SplitText } from "./split-text";
import { ScrollReveal } from "./scroll-reveal";

export function ThoughtsSection() {
  return (
    <section id="thoughts" className="px-6 py-32 max-w-4xl mx-auto">
      <h2
        className="text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] mb-20"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        <SplitText text="my thoughts on things..." />
      </h2>

      <div className="flex flex-col">
        {blogPosts.map((post, i) => (
          <ScrollReveal key={post.title} delay={i * 0.08}>
            <motion.a
              href={post.href}
              className="group flex items-baseline justify-between gap-4 py-6 border-b border-text-primary/5 cursor-pointer"
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h3
                className="text-[clamp(1.25rem,3vw,1.75rem)] leading-tight text-text-primary transition-colors duration-300 group-hover:text-accent-warm"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {post.title}
              </h3>
              <span
                className="text-text-secondary/50 text-[0.7rem] tracking-wider shrink-0 transition-colors duration-300 group-hover:text-accent-warm/50"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {post.date}
              </span>
            </motion.a>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
