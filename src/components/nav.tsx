"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { useLenis } from "@/lib/lenis-provider";
import { useActiveSection } from "@/lib/use-active-section";

const NAV_ITEMS = [
  { id: "work", label: "work" },
  { id: "projects", label: "projects" },
  { id: "gallery", label: "gallery" },
  { id: "thoughts", label: "thoughts" },
];

export function Nav() {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection();
  const lenis = useLenis();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > window.innerHeight * 0.8);
  });

  function scrollTo(id: string) {
    lenis?.scrollTo(`#${id}`, { offset: -80 });
    setMobileOpen(false);
  }

  return (
    <>
      {/* Desktop nav */}
      <motion.nav
        className="fixed top-6 left-1/2 z-40 hidden md:flex -translate-x-1/2 items-center gap-1 rounded-full border border-text-primary/5 bg-bg/80 px-2 py-2 backdrop-blur-md"
        initial={{ y: -80, opacity: 0 }}
        animate={visible ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="relative rounded-full px-4 py-1.5 text-[0.8rem] tracking-wide transition-colors duration-300"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {active === item.id && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute inset-0 rounded-full bg-text-primary/5"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span
              className={`relative z-10 ${
                active === item.id
                  ? "text-accent-warm"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </motion.nav>

      {/* Mobile hamburger */}
      <motion.button
        className="fixed top-5 right-5 z-40 flex md:hidden h-10 w-10 items-center justify-center rounded-full border border-text-primary/5 bg-bg/80 backdrop-blur-md"
        initial={{ y: -80, opacity: 0 }}
        animate={visible ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={() => setMobileOpen(true)}
        aria-label="Open navigation"
      >
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
          <path
            d="M0 1H18M0 6H18M0 11H18"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </motion.button>

      {/* Mobile bottom sheet */}
      {mobileOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-text-primary/20 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <motion.div
            className="relative w-full rounded-t-3xl bg-bg px-6 pb-10 pt-6"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
          >
            <div className="mx-auto mb-6 h-1 w-10 rounded-full bg-text-primary/10" />
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`rounded-xl px-4 py-3 text-left text-lg transition-colors ${
                    active === item.id
                      ? "bg-surface text-accent-warm"
                      : "text-text-secondary hover:bg-surface"
                  }`}
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
