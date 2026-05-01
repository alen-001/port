"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BlurText } from "./blur-text";

type Phase = "loading" | "greeting" | "done";

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<Phase>("loading");

  useEffect(() => {
    const visited = sessionStorage.getItem("portfolio-visited");
    if (visited) {
      setPhase("done");
      onComplete();
      return;
    }

    const timer = setTimeout(() => setPhase("greeting"), 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  useEffect(() => {
    if (phase === "done") {
      sessionStorage.setItem("portfolio-visited", "true");
    }
  }, [phase]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {phase === "loading" && (
            <div className="absolute bottom-0 left-0 right-0 h-[2px]">
              <motion.div
                className="h-full bg-accent-warm"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </div>
          )}

          {phase === "greeting" && (
            <div className="flex flex-col items-center gap-3 px-6 text-center">
              <h1
                className="text-[clamp(1.5rem,4vw,2.5rem)] leading-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                <BlurText text="Hey there" delay={0} />
              </h1>
              <p className="text-text-secondary text-[clamp(0.875rem,1.5vw,1.125rem)]">
                <BlurText
                  text="let's take a look around, shall we?"
                  delay={0.6}
                  onComplete={() => {
                    setTimeout(() => {
                      setPhase("done");
                      onComplete();
                    }, 1200);
                  }}
                />
              </p>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
