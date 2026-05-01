"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
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
    z: 3,
    float: { y: [0, -6, 0], rotate: [0, 0.5, 0], duration: 7 },
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
    z: 5,
    float: { y: [0, 8, 0], rotate: [0, -1.5, 0], duration: 6 },
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
    z: 4,
    float: { y: [0, -10, 0], rotate: [0, 2, 0], duration: 8 },
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
    z: 6,
    float: { y: [0, 7, 0], rotate: [0, 1, 0], duration: 9 },
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
    z: 3,
    float: { y: [0, -8, 0], rotate: [0, -1, 0], duration: 7.5 },
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
    z: 2,
    float: { y: [0, 6, 0], rotate: [0, 2.5, 0], duration: 6.5 },
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
    z: 3,
    float: { y: [0, -5, 0], rotate: [0, -2, 0], duration: 8.5 },
  },
  {
    src: "/images/gallery/koi-pond.jpg",
    alt: "Koi pond",
    scale: [1, 5],
    width: "11vw",
    height: "15vh",
    top: "25%",
    left: "25%",
    translate: "-50%, -50%",
    z: 4,
    float: { y: [0, 5, 0], rotate: [0, -1, 0], duration: 7.2 },
  },
  {
    src: "/images/gallery/sunset-silhouette.jpg",
    alt: "Sunset silhouette",
    scale: [1, 7.5],
    width: "10vw",
    height: "13vh",
    top: "60%",
    left: "88%",
    translate: "-50%, -50%",
    z: 2,
    float: { y: [0, -7, 0], rotate: [0, 1.5, 0], duration: 8.2 },
  },
  {
    src: "/images/gallery/stone-steps-rain.jpg",
    alt: "Stone steps in rain",
    scale: [1, 6.5],
    width: "9vw",
    height: "14vh",
    top: "65%",
    left: "30%",
    translate: "-50%, -50%",
    z: 5,
    float: { y: [0, 9, 0], rotate: [0, -2, 0], duration: 6.8 },
  },
  {
    src: "/images/gallery/pink-blossom-tree.jpg",
    alt: "Pink blossom tree",
    scale: [1, 8],
    width: "8vw",
    height: "11vh",
    top: "20%",
    left: "60%",
    translate: "-50%, -50%",
    z: 3,
    float: { y: [0, -4, 0], rotate: [0, 2, 0], duration: 9.5 },
  },
];

export function Hero({ visible }: { visible: boolean }) {
  const heroRef = useRef<HTMLElement>(null);
  const zoomRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const [musicOpen, setMusicOpen] = useState(false);
  const [chessOpen, setChessOpen] = useState(false);
  const [miscOpen, setMiscOpen] = useState(false);

  const { scrollYProgress: zoomProgress } = useScroll({
    target: zoomRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutRef,
    offset: ["start start", "end end"],
  });

  // Scale transforms for zoom parallax
  const scale0 = useTransform(zoomProgress, [0, 1], zoomImages[0].scale as [number, number]);
  const scale1 = useTransform(zoomProgress, [0, 1], zoomImages[1].scale as [number, number]);
  const scale2 = useTransform(zoomProgress, [0, 1], zoomImages[2].scale as [number, number]);
  const scale3 = useTransform(zoomProgress, [0, 1], zoomImages[3].scale as [number, number]);
  const scale4 = useTransform(zoomProgress, [0, 1], zoomImages[4].scale as [number, number]);
  const scale5 = useTransform(zoomProgress, [0, 1], zoomImages[5].scale as [number, number]);
  const scale6 = useTransform(zoomProgress, [0, 1], zoomImages[6].scale as [number, number]);
  const scale7 = useTransform(zoomProgress, [0, 1], zoomImages[7].scale as [number, number]);
  const scale8 = useTransform(zoomProgress, [0, 1], zoomImages[8].scale as [number, number]);
  const scale9 = useTransform(zoomProgress, [0, 1], zoomImages[9].scale as [number, number]);
  const scale10 = useTransform(zoomProgress, [0, 1], zoomImages[10].scale as [number, number]);
  const scales = [scale0, scale1, scale2, scale3, scale4, scale5, scale6, scale7, scale8, scale9, scale10];

  // "a bit about me" text — gentle scale: starts small, ends a bit bigger than default
  const aboutTextScale = useTransform(zoomProgress, [0, 1], [0.6, 1.15]);

  // "a bit about me" text color
  const aboutTextColor = useTransform(
    zoomProgress,
    [0, 0.3, 0.5],
    ["#1A1A1A", "#1A1A1A", "#FFFFFF"]
  );

  // "a bit about me" text vertical drift: center → bottom
  const aboutTextY = useTransform(zoomProgress, [0, 1], ["0%", "80%"]);

  // Horizontal scroll for about section (2 panels)
  const horizontalX = useTransform(aboutProgress, [0, 1], ["0%", "-50%"]);

  if (!visible)
    return (
      <>
        <section ref={heroRef} id="hero" className="min-h-screen" />
        <div ref={zoomRef} />
        <div ref={aboutRef} />
      </>
    );

  return (
    <>
      {/* Hero — clean dark text, same as original */}
      <section ref={heroRef} id="hero" className="relative pt-12 pb-24">
        <div className="min-h-screen flex flex-col items-center justify-center px-6">
          <div className="flex flex-col items-center gap-8 max-w-4xl w-full">
            <motion.p
              className="text-text-secondary text-[clamp(0.7rem,1vw,0.8rem)] tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I&apos;m Alen :) welcome to a slice of my world on the
              internet.
            </motion.p>

            <h1
              className="text-[clamp(3rem,10vw,7rem)] leading-[0.9] tracking-tight text-center"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              <SplitText text="Alen Shaju" delay={0.1} />
            </h1>

            <ScrollReveal delay={0.6}>
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
      </section>

      {/* Zoom parallax — replaces the old wildflowers "a bit about me" section */}
      <div ref={zoomRef} className="relative" style={{ height: "300vh" }}>
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
                zIndex: img.z,
              }}
            >
              <motion.div
                className="relative w-full h-full overflow-hidden rounded-sm"
                animate={{
                  y: img.float.y,
                  rotate: img.float.rotate,
                }}
                transition={{
                  duration: img.float.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes={i === 0 ? "25vw" : "15vw"}
                />
              </motion.div>
            </motion.div>
          ))}

          {/* "a bit about me" — starts centered, drifts to bottom on scroll */}
          <div className="absolute top-1/2 left-0 right-0 z-20 flex justify-center pointer-events-none" style={{ transform: "translateY(-50%)" }}>
            <motion.h2
              className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.85] tracking-tight italic text-center"
              style={{
                fontFamily: "var(--font-serif)",
                color: aboutTextColor,
                scale: aboutTextScale,
                y: aboutTextY,
              }}
              animate={{
                rotate: [0, -0.5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              a bit about me
            </motion.h2>
          </div>
        </div>
      </div>

      {/* About content — horizontal scroll, 2 panels */}
      <div ref={aboutRef} className="relative" style={{ height: "300vh" }}>
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div
            className="flex items-center gap-24 px-16"
            style={{ x: horizontalX }}
          >
            {/* Panel 1: Photo + Bio + Philosophy */}
            <div className="flex gap-12 items-center shrink-0" style={{ width: "90vw" }}>
              <div className="relative overflow-hidden rounded-2xl shrink-0" style={{ width: "35%", height: "70vh" }}>
                <Image
                  src="/images/hero/archway.jpg"
                  alt="Alen"
                  fill
                  className="object-cover"
                  sizes="35vw"
                />
              </div>
              <div className="flex flex-col justify-center gap-6" style={{ width: "55%" }}>
                <p
                  className="text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.15] tracking-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  I love making things appear out of thin air—whether it&apos;s
                  software, music, or art. There&apos;s a certain magic in
                  building, tinkering, and experimenting. As someone once said,
                  &ldquo;The human, for once, felt like a god in his small
                  world.&rdquo; I don&apos;t aim to be one, but I do find joy in
                  creating and reasoning about how things work.
                </p>
                <p className="text-text-secondary text-[clamp(0.9rem,1.1vw,1.05rem)] leading-relaxed">
                  Professionally, I&apos;m a Software Engineer Intern at{" "}
                  <span className="italic text-text-secondary">GoDaddy</span>.
                  Previously, I interned at Mahindra Logistics and House Of
                  EdTech. I hold a degree in Electrical Engineering from{" "}
                  <span className="italic text-text-secondary">NSUT Delhi</span>
                  —though my curiosity soon led me to software engineering, thanks
                  to a lifelong itch to experiment and a bit of high school
                  programming.
                </p>
                <p className="text-text-secondary text-[clamp(0.9rem,1.1vw,1.05rem)] leading-relaxed">
                  My main experience is in full-stack development, mostly in the
                  JavaScript/TypeScript ecosystem (sigh). Lately, I&apos;ve been
                  exploring Go and following the latest in AI and ML.
                </p>
                <p className="text-text-secondary/60 text-[clamp(0.8rem,1vw,0.9rem)] leading-relaxed italic mt-2">
                  Philosophically, I find myself drawn to the school of
                  &ldquo;absurdism&rdquo;—the universe is indifferent, and
                  that&apos;s kind of freeing.
                  <span
                    className="not-italic text-text-secondary/30 ml-3 text-[0.7rem] tracking-wider"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    — absurdist
                  </span>
                </p>
              </div>
            </div>

            {/* Panel 2: Hobbies (music expands SoundCloud on hover/click) */}
            <div className="flex gap-16 items-start shrink-0" style={{ width: "90vw" }}>
              <div
                className="flex flex-col gap-3 cursor-pointer"
                onMouseEnter={() => setMusicOpen(true)}
                onMouseLeave={() => setMusicOpen(false)}
                onClick={() => setMusicOpen((v) => !v)}
              >
                <span
                  className="text-[clamp(3rem,6vw,5rem)] leading-none tracking-tighter"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  music
                </span>
                <p className="text-text-secondary text-[0.85rem] leading-relaxed max-w-xs">
                  I produce music as{" "}
                  <a
                    href="https://soundcloud.com/neutraguy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-primary underline decoration-accent-warm/40 underline-offset-2 hover:decoration-accent-warm transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    neu
                  </a>
                  —mostly electronic, always experimental.
                </p>
                <motion.div
                  initial={false}
                  animate={{
                    height: musicOpen ? 166 : 0,
                    opacity: musicOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="overflow-hidden rounded-xl"
                  style={{ width: "clamp(280px, 30vw, 400px)" }}
                >
                  <iframe
                    width="100%"
                    height="166"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F186060683&color=%23e8a849&auto_play=false&show_user=true&show_playcount=false&show_artwork=true&sharing=false&buying=false&download=false"
                    title="SoundCloud Player"
                    className="w-full"
                  />
                </motion.div>
              </div>
              <div
                className="flex flex-col gap-3 cursor-pointer"
                onMouseEnter={() => setChessOpen(true)}
                onMouseLeave={() => setChessOpen(false)}
                onClick={() => setChessOpen((v) => !v)}
              >
                <span
                  className="text-[clamp(3rem,6vw,5rem)] leading-none tracking-tighter"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  chess
                </span>
                <p className="text-text-secondary text-[0.85rem] leading-relaxed max-w-xs">
                  Add me on{" "}
                  <a
                    href="https://www.chess.com/member/alen26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-primary underline decoration-accent-warm/40 underline-offset-2 hover:decoration-accent-warm transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    chess.com
                  </a>{" "}
                  XD
                </p>
                <motion.div
                  initial={false}
                  animate={{
                    height: chessOpen ? 400 : 0,
                    opacity: chessOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="overflow-hidden rounded-xl"
                  style={{ width: "clamp(280px, 30vw, 280x)" }}
                >
                  <iframe
                    src="https://images.chesscomfiles.com/uploads/game-gifs/90px/green/neo/0/cc/0/0/68db9ca482246615396bff7f158609691c5dae5ab5d125505f21c4d299bf02d5.gif"
                    width="100%"
                    height="400"
                    frameBorder="no"
                    scrolling="no"
                    title="Chess.com Profile"
                    className="w-full"
                  />
                </motion.div>
              </div>
              <div
                className="flex flex-col gap-3 cursor-pointer"
                onMouseEnter={() => setMiscOpen(true)}
                onMouseLeave={() => setMiscOpen(false)}
                onClick={() => setMiscOpen((v) => !v)}
              >
                <span
                  className="text-[clamp(3rem,6vw,5rem)] leading-none tracking-tighter"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  misc
                </span>
                <p className="text-text-secondary text-[0.85rem] leading-relaxed max-w-xs">
                  I occasionally draw, cook, and workout—whatever catches my
                  attention that week.
                </p>
                <motion.div
                  initial={false}
                  animate={{
                    height: miscOpen ? 200 : 0,
                    opacity: miscOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="overflow-hidden rounded-xl"
                  style={{ width: "clamp(280px, 30vw, 400px)" }}
                >
                  <div className="flex gap-2">
                    <div className="relative w-1/3 h-[200px] rounded-lg overflow-hidden bg-surface">
                      <Image
                        src="/images/gallery/kerala-greenery-1.jpg"
                        alt="Drawing"
                        fill
                        className="object-cover"
                        sizes="10vw"
                      />
                    </div>
                    <div className="relative w-1/3 h-[200px] rounded-lg overflow-hidden bg-surface">
                      <Image
                        src="/images/gallery/tea-plantations.jpg"
                        alt="Cooking"
                        fill
                        className="object-cover"
                        sizes="10vw"
                      />
                    </div>
                    <div className="relative w-1/3 h-[200px] rounded-lg overflow-hidden bg-surface">
                      <Image
                        src="/images/gallery/mossy-stream.jpg"
                        alt="Workout"
                        fill
                        className="object-cover"
                        sizes="10vw"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
