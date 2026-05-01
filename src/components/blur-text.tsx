"use client";

import { motion } from "framer-motion";

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export function BlurText({
  text,
  delay = 0,
  className,
  onComplete,
}: BlurTextProps) {
  const characters = text.split("");

  return (
    <span className={className} aria-label={text}>
      {characters.map((char, i) => (
        <motion.span
          key={`${i}-${char}`}
          initial={{ opacity: 0, filter: "blur(12px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.03,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          onAnimationComplete={
            i === characters.length - 1 ? onComplete : undefined
          }
          aria-hidden="true"
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  );
}
