"use client";

import Image from "next/image";
import { motion, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { GalleryImage } from "@/types";

const TRAIL_COUNT = 6;
const TRAIL_SIZE = 80;

export function ImageTrail({ images }: { images: GalleryImage[] }) {
  const [trail, setTrail] = useState<
    { x: number; y: number; img: GalleryImage; id: number }[]
  >([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const idCounter = useRef(0);
  const lastPos = useRef({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  function handleMouseMove(e: React.MouseEvent) {
    if (!isDesktop) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 60) return;
    lastPos.current = { x: e.clientX, y: e.clientY };

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const img = images[idCounter.current % images.length];

    setTrail((prev) => {
      const next = [
        ...prev,
        { x, y, img, id: idCounter.current++ },
      ];
      return next.slice(-TRAIL_COUNT);
    });
  }

  if (!isDesktop) return null;

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {trail.map((item, i) => (
        <TrailImage
          key={item.id}
          x={item.x}
          y={item.y}
          image={item.img}
          index={i}
        />
      ))}
    </div>
  );
}

function TrailImage({
  x,
  y,
  image,
  index,
}: {
  x: number;
  y: number;
  image: GalleryImage;
  index: number;
}) {
  const springX = useSpring(x, { stiffness: 200, damping: 25 });
  const springY = useSpring(y, { stiffness: 200, damping: 25 });

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        x: springX,
        y: springY,
        width: TRAIL_SIZE,
        height: TRAIL_SIZE,
        marginLeft: -TRAIL_SIZE / 2,
        marginTop: -TRAIL_SIZE / 2,
      }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 0.7, scale: 1 }}
      exit={{ opacity: 0, scale: 0.4 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="w-full h-full rounded-lg overflow-hidden"
        animate={{ opacity: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Image
          src={image.src}
          alt=""
          width={TRAIL_SIZE}
          height={TRAIL_SIZE}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
}
