"use client";

import { ScrollReveal } from "./scroll-reveal";

export function Footer() {
  return (
    <footer className="bg-surface px-6 py-20">
      <ScrollReveal>
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 text-center">
          <p
            className="text-[clamp(1.5rem,3vw,2rem)] leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            thanks for visiting :)
          </p>

          <div
            className="flex items-center gap-6 text-text-secondary text-[0.75rem] tracking-wider"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <a
              href="https://github.com/alen-001"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-primary transition-colors duration-300"
            >
              github
            </a>
            <span className="text-text-secondary/30">|</span>
            <a
              href="https://soundcloud.com/neutraguy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-primary transition-colors duration-300"
            >
              soundcloud
            </a>
            <span className="text-text-secondary/30">|</span>
            <a
              href="mailto:alenshaju201@gmail.com"
              className="hover:text-text-primary transition-colors duration-300"
            >
              email
            </a>
          </div>

          <p
            className="text-text-secondary/40 text-[0.7rem] tracking-wider"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            built with care, 2026
          </p>
        </div>
      </ScrollReveal>
    </footer>
  );
}
