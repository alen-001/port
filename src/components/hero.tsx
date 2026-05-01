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
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  if (!visible)
    return <section ref={ref} id="hero" className="min-h-screen" />;

  return (
    <section ref={ref} id="hero" className="relative pt-12 pb-24">
      {/* Name + intro */}
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
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
              style={{ y: imageY, scale: imageScale }}
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

      {/* About — wild typography + nature zoom + SoundCloud */}
      <div className="mt-40 overflow-hidden">
        {/* Giant italic serif text overlapping with nature */}
        <div className="relative">
          <ScrollReveal>
            <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden rounded-3xl mx-auto max-w-6xl">
              <Image
                src="/images/gallery/wildflowers.jpg"
                alt="Wildflowers in motion"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
              <div className="absolute bottom-8 left-6 md:left-12 right-6 md:right-12">
                <h2
                  className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.85] tracking-tight italic"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  <SplitText text="a little about me" />
                </h2>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Staggered asymmetric layout */}
        <div className="max-w-5xl mx-auto px-6 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-8">
            {/* Archway photo — offset left */}
            <ScrollReveal className="md:col-span-5 md:col-start-1">
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

            {/* Text — offset right, vertically centered */}
            <ScrollReveal
              delay={0.15}
              className="md:col-span-6 md:col-start-7 flex flex-col justify-center gap-6"
            >
              <p
                className="text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.15] tracking-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Electrical engineering student at{" "}
                <span className="italic text-text-secondary">NSUT Delhi</span>{" "}
                who ended up writing software for a living.
              </p>
              <p className="text-text-secondary text-[clamp(0.9rem,1.1vw,1.05rem)] leading-relaxed">
                Currently building things at GoDaddy. Before that, Mahindra
                Logistics and House Of EdTech.
              </p>
            </ScrollReveal>

            {/* Hobbies — wide, spanning full with big type */}
            <div className="md:col-span-12 mt-8">
              <ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col gap-3">
                    <span
                      className="text-[clamp(3rem,6vw,5rem)] leading-none tracking-tighter"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      music
                    </span>
                    <p className="text-text-secondary text-[0.85rem] leading-relaxed">
                      I produce stuff under{" "}
                      <a
                        href="https://soundcloud.com/neutraguy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-primary underline decoration-accent-warm/40 underline-offset-2 hover:decoration-accent-warm transition-colors duration-300"
                      >
                        neu
                      </a>
                      . Mostly beats, sometimes something weirder.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span
                      className="text-[clamp(3rem,6vw,5rem)] leading-none tracking-tighter"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      chess
                    </span>
                    <p className="text-text-secondary text-[0.85rem] leading-relaxed">
                      The only war where nobody dies and everyone overthinks.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span
                      className="text-[clamp(3rem,6vw,5rem)] leading-none tracking-tighter"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      gym
                    </span>
                    <p className="text-text-secondary text-[0.85rem] leading-relaxed">
                      The one thing that makes sense when nothing else does.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* SoundCloud embed */}
            <div className="md:col-span-10 md:col-start-2 mt-4">
              <ScrollReveal>
                <div className="rounded-2xl overflow-hidden bg-surface">
                  <iframe
                    width="100%"
                    height="300"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F186060683&visual=false&show_artwork=true&color=%23e8a849&auto_play=false&show_user=true&show_playcount=false&sharing=false&buying=false&download=false"
                    title="SoundCloud Player"
                    className="w-full"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Absurdist note — small, off to the side */}
            <div className="md:col-span-7 md:col-start-6 mt-8">
              <ScrollReveal>
                <p className="text-text-secondary/60 text-[clamp(0.8rem,1vw,0.9rem)] leading-relaxed italic">
                  &ldquo;The universe is indifferent and that&apos;s kind of
                  freeing.&rdquo;
                  <span
                    className="not-italic text-text-secondary/30 ml-3 text-[0.7rem] tracking-wider"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    — absurdist
                  </span>
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
