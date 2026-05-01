"use client";

import { projects } from "@/lib/data";
import { SplitText } from "./split-text";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-32 max-w-5xl mx-auto">
      <h2
        className="text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] mb-20"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        <SplitText text="projects" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
