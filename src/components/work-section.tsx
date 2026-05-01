"use client";

import { workExperiences } from "@/lib/data";
import { SplitText } from "./split-text";
import { WorkCard } from "./work-card";

export function WorkSection() {
  return (
    <section id="work" className="px-6 py-32 max-w-4xl mx-auto">
      <h2
        className="text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] mb-20"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        <SplitText text="what i do for work" />
      </h2>

      <div className="flex flex-col divide-y divide-text-primary/5">
        {workExperiences.map((exp, i) => (
          <WorkCard key={exp.company} experience={exp} index={i} />
        ))}
      </div>
    </section>
  );
}
