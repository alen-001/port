"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { galleryImages } from "@/lib/data";
import { SplitText } from "./split-text";
import { ScrollReveal } from "./scroll-reveal";
import { Lightbox } from "./lightbox";
import { ImageTrail } from "./image-trail";

export function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useState(() => {
    if (typeof window !== "undefined") {
      setIsDesktop(window.matchMedia("(min-width: 1024px)").matches);
    }
  });

  return (
    <section id="gallery" className="px-6 py-32 max-w-6xl mx-auto">
      <h2
        className="text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] mb-20"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        <SplitText text="things i've seen" />
      </h2>

      <div
        ref={containerRef}
        className="relative"
        onMouseMove={(e) => {
          const trail = containerRef.current?.querySelector(
            "[data-image-trail]"
          );
          if (trail) {
            trail.dispatchEvent(
              new MouseEvent("mousemove", {
                clientX: e.clientX,
                clientY: e.clientY,
              })
            );
          }
        }}
      >
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
          {galleryImages.map((image, i) => (
            <ScrollReveal key={image.src} delay={(i % 4) * 0.08}>
              <motion.button
                className="relative mb-4 w-full overflow-hidden rounded-xl break-inside-avoid group cursor-pointer"
                onClick={() => setLightboxIndex(i)}
                whileHover={{ scale: 1.03 }}
                transition={{
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <div className="transition-shadow duration-500 group-hover:shadow-[0_8px_30px_rgba(232,168,73,0.12)] rounded-xl overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.aspect === "landscape" ? 600 : 400}
                    height={
                      image.aspect === "portrait"
                        ? 600
                        : image.aspect === "square"
                          ? 400
                          : 300
                    }
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </motion.button>
            </ScrollReveal>
          ))}
        </div>

        {isDesktop && <ImageTrail images={galleryImages.slice(0, 8)} />}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}
