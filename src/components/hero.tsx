"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SplitText } from "./split-text";
import { ScrollReveal } from "./scroll-reveal";

const zoomImages = [
  {
    src: "/images/hero/forest-path.jpg",
    alt: "Alen sitting on a leaf-covered forest path",
    scale: [1, 4],
    width: "25vw",
    height: "25vh",
    top: "50%",
    left: "50%",
    translate: "-50%, -50%",
  },
  {
    src: "/images/gallery/kerala-greenery-1.jpg",
    alt: "Kerala greenery",
    scale: [1, 5],
    width: "12vw",
    height: "20vh",
    top: "10%",
    left: "15%",
    translate: "-50%, -50%",
  },
  {
    src: "/images/gallery/sunset-sky-1.jpg",
    alt: "Sunset sky",
    scale: [1, 6],
    width: "10vw",
    height: "14vh",
    top: "15%",
    left: "80%",
    translate: "-50%, -50%",
  },
  {
    src: "/images/gallery/tea-plantations.jpg",
    alt: "Tea plantations",
    scale: [1, 5.5],
    width: "14vw",
    height: "18vh",
    top: "75%",
    left: "10%",
    translate: "-50%, -50%",
  },
  {
    src: "/images/gallery/mossy-stream.jpg",
    alt: "Mossy stream",
    scale: [1, 7],
    width: "10vw",
    height: "16vh",
    top: "80%",
    left: "75%",
    translate: "-50%, -50%",
  },
  {
    src: "/images/gallery/kerala-hills.jpg",
    alt: "Kerala hills",
    scale: [1, 9],
    width: "8vw",
    height: "10vh",
    top: "40%",
    left: "5%",
    translate: "-50%, -50%",
  },
  {
    src: "/images/gallery/wildflowers.jpg",
    alt: "Wildflowers",
    scale: [1, 6],
    width: "9vw",
    height: "12vh",
    top: "35%",
    left: "90%",
    translate: "-50%, -50%",
  },
];

export function Hero({ visible }: { visible: boolean }) {
  const heroRef = useRef<HTMLElement>(null);
  const zoomRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: zoomProgress } = useScroll({
    target: zoomRef,
    offset: ["start start", "end end"],
  });

  // Intro section parallax
  const introY = useTransform(heroProgress, [0, 0.3], [0, -80]);
  const introOpacity = useTransform(heroProgress, [0, 0.25], [1, 0]);

  // Zoom section: text color transitions as images fill viewport
  const textColor = useTransform(
    zoomProgress,
    [0, 0.3, 0.5],
    ["#1A1A1A", "#1A1A1A", "#FFFFFF"]
  );
  const overlayTextOpacity = useTransform(
    zoomProgress,
    [0.3, 0.5],
    [0, 1]
  );

  // Scale transforms for each zoom image
  const scale0 = useTransform(zoomProgress, [0, 1], zoomImages[0].scale as [number, number]);
  const scale1 = useTransform(zoomProgress, [0, 1], zoomImages[1].scale as [number, number]);
  const scale2 = useTransform(zoomProgress, [0, 1], zoomImages[2].scale as [number, number]);
  const scale3 = useTransform(zoomProgress, [0, 1], zoomImages[3].scale as [number, number]);
  const scale4 = useTransform(zoomProgress, [0, 1], zoomImages[4].scale as [number, number]);
  const scale5 = useTransform(zoomProgress, [0, 1], zoomImages[5].scale as [number, number]);
  const scale6 = useTransform(zoomProgress, [0, 1], zoomImages[6].scale as [number, number]);
  const scales = [scale0, scale1, scale2, scale3, scale4, scale5, scale6];

  return (
    <>
      {/* Original intro section */}
      <section
        ref={heroRef}
        id="hero"
        className={`relative ${visible ? "pt-12 pb-24" : "min-h-screen"}`}
      >
        {!visible ? null : (
        <div className="min-h-screen flex flex-col items-center justify-center px-6">
          <motion.div
            className="flex flex-col items-center gap-8 max-w-4xl w-full"
            style={{ y: introY, opacity: introOpacity }}
          >
            <motion.p
              className="text-text-secondary text-[clamp(0.7rem,1vw,0.8rem)] tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I&apos;m Alen :) welcome to a slice of my world on the internet.
            </motion.p>

            <h1
              className="text-[clamp(3rem,10vw,7rem)] leading-[0.9] tracking-tight text-center"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              <SplitText text="Alen Shaju" delay={0.1} />
            </h1>

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
                <span className="text-text-secondary/30">|</span>
                <a
                  href="https://www.linkedin.com/in/alen-shaju/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text-primary transition-colors duration-300"
                >
                  linkedin
                </a>
              </div>
            </ScrollReveal>
          </motion.div>

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
        )}
      </section>

      {/* Zoom parallax section */}
      <div ref={zoomRef} className="relative" style={visible ? { height: "300vh" } : undefined}>
        {!visible ? null : (
        <div className="sticky top-0 h-screen overflow-hidden">
          {zoomImages.map((img, i) => (
            <motion.div
              key={i}
              className="absolute flex items-center justify-center"
              style={{
                scale: scales[i],
                top: img.top,
                left: img.left,
                translate: img.translate,
                width: img.width,
                height: img.height,
              }}
            >
              <div className="relative w-full h-full overflow-hidden rounded-sm">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes={i === 0 ? "25vw" : "15vw"}
                  priority={i === 0}
                />
              </div>
            </motion.div>
          ))}

          {/* Overlay text that fades in as images zoom */}
          <motion.div
            className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none"
            style={{ opacity: overlayTextOpacity }}
          >
            <motion.h2
              className="text-[clamp(2rem,6vw,4.5rem)] leading-[0.9] tracking-tight text-center"
              style={{
                fontFamily: "var(--font-serif)",
                color: textColor,
              }}
            >
              a bit about me
            </motion.h2>
          </motion.div>
        </div>
        )}
      </div>

      {/* About section */}
      {!visible ? null : (
      <section className="relative pb-24">
        <div className="overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-8">
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

              <ScrollReveal
                delay={0.15}
                className="md:col-span-6 md:col-start-7 flex flex-col justify-center gap-6"
              >
                <p
                  className="text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.15] tracking-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  I love making things appear out of thin air—whether it&apos;s
                  software, music, or art. There&apos;s a certain magic in building,
                  tinkering, and experimenting. As someone once said, &ldquo;The human,
                  for once, felt like a god in his small world.&rdquo; I don&apos;t aim
                  to be one, but I do find joy in creating and reasoning about how
                  things work.
                </p>
                <p className="text-text-secondary text-[clamp(0.9rem,1.1vw,1.05rem)] leading-relaxed">
                  Professionally, I&apos;m a Software Engineer Intern at{" "}
                  <span className="italic text-text-secondary">GoDaddy</span>.
                  Previously, I interned at Mahindra Logistics and House Of EdTech. I
                  hold a degree in Electrical Engineering from{" "}
                  <span className="italic text-text-secondary">NSUT Delhi</span>
                  —though my curiosity soon led me to software engineering, thanks to a
                  lifelong itch to experiment and a bit of high school programming.
                </p>
                <p className="text-text-secondary text-[clamp(0.9rem,1.1vw,1.05rem)] leading-relaxed">
                  My main experience is in full-stack development, mostly in the
                  JavaScript/TypeScript ecosystem (sigh). Lately, I&apos;ve been
                  exploring Go and following the latest in AI and ML.
                </p>
              </ScrollReveal>

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
                        I produce music as{" "}
                        <a
                          href="https://soundcloud.com/neutraguy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-primary underline decoration-accent-warm/40 underline-offset-2 hover:decoration-accent-warm transition-colors duration-300"
                        >
                          neu
                        </a>
                        —mostly electronic, always experimental.
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
                        The only war where nobody dies and everyone overthinks. It keeps
                        my mind sharp and humble.
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
                        The one thing that always makes sense when nothing else does.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

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

              <div className="md:col-span-7 md:col-start-6 mt-8">
                <ScrollReveal>
                  <p className="text-text-secondary/60 text-[clamp(0.8rem,1vw,0.9rem)] leading-relaxed italic">
                    Philosophically, I find myself drawn to the school of
                    &ldquo;absurdism&rdquo;—the universe is indifferent, and that&apos;s
                    kind of freeing.
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
      )}
    </>
  );
}
