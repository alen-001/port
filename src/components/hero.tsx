"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SplitText } from "./split-text";
import { ScrollReveal } from "./scroll-reveal";

export function Hero({ visible }: { visible: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  if (!visible) return <section ref={ref} id="hero" className="min-h-screen" />;

  return (
    <section ref={ref} id="hero" className="relative px-6 pt-12 pb-24">
      {/* Name + intro */}
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-8 max-w-4xl w-full">
          <motion.p
            className="text-text-secondary text-[clamp(0.7rem,1vw,0.8rem)] tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ee by degree, swe by trade
          </motion.p>

          <h1
            className="text-[clamp(3rem,10vw,7rem)] leading-[0.9] tracking-tight text-center"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            <SplitText text="Alen Shaju" delay={0.1} />
          </h1>

          <ScrollReveal delay={0.6} className="w-full max-w-2xl">
            <motion.div
              className="relative overflow-hidden rounded-2xl"
              style={{ y: imageY }}
            >
              <Image
                src="/images/hero/forest-path.jpg"
                alt="Alen sitting on a leaf-covered forest path surrounded by lush greenery"
                width={1200}
                height={675}
                priority
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.9}>
            <div
              className="flex items-center gap-6 text-text-secondary text-[clamp(0.7rem,0.9vw,0.8rem)] tracking-wider"
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
          </ScrollReveal>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span
              className="text-text-secondary/50 text-[0.65rem] tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              scroll
            </span>
            <svg
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
              className="text-text-secondary/50"
            >
              <path
                d="M8 4V20M8 20L2 14M8 20L14 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* About blurb */}
      <div className="max-w-3xl mx-auto mt-32 grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
        <ScrollReveal className="md:col-span-2">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/hero/archway.jpg"
              alt="Alen"
              width={500}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="md:col-span-3">
          <div className="flex flex-col gap-4">
            <p className="text-[clamp(0.95rem,1.2vw,1.1rem)] leading-relaxed text-text-secondary">
              Electrical engineering student at NSUT Delhi who ended up writing
              software for a living. Currently building things at GoDaddy.
            </p>
            <p className="text-[clamp(0.95rem,1.2vw,1.1rem)] leading-relaxed text-text-secondary">
              Outside of work I{" "}
              <a
                href="https://soundcloud.com/neutraguy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary underline decoration-accent-warm/40 underline-offset-2 hover:decoration-accent-warm transition-colors duration-300"
              >
                make music
              </a>
              , play chess, and go to the gym. Philosophical lean is absurdist
              &mdash; the universe is indifferent and that&apos;s kind of
              freeing.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
