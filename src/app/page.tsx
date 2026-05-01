"use client";

import { useState, useCallback } from "react";
import { Loader } from "@/components/loader";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { WorkSection } from "@/components/work-section";
import { ProjectsSection } from "@/components/projects-section";
import { GallerySection } from "@/components/gallery-section";
import { ThoughtsSection } from "@/components/thoughts-section";
import { Footer } from "@/components/footer";

export default function Home() {
  const [loaderDone, setLoaderDone] = useState(false);

  const handleLoaderComplete = useCallback(() => {
    setLoaderDone(true);
  }, []);

  return (
    <>
      <Loader onComplete={handleLoaderComplete} />
      <main>
        <Hero visible={loaderDone} />
        <Nav />
        <WorkSection />
        <ProjectsSection />
        <GallerySection />
        <ThoughtsSection />
        <Footer />
      </main>
    </>
  );
}
