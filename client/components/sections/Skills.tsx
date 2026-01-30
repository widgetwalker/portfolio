import React from "react";
import Animate from "@/components/Animate";
import SpotlightCard from "@/components/SpotlightCard";

const groups = [
  {
    name: "Languages",
    items: ["TypeScript", "Python", "C/C++", "Rust", "SQL"],
  },
  {
    name: "Frameworks",
    items: ["React", "Next.js", "Node.js", "Express", "Tailwind"],
  },
  {
    name: "Tools",
    items: ["Git", "Zod", "Vitest", "Vite", "Docker"],
  },
  {
    name: "Interests",
    items: ["ML/AI", "Compilers", "Systems", "3D/WebGL", "Design"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto mt-24 max-w-7xl px-4">
      <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        A toolkit focused on building delightful, reliable experiences and
        developer tools.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
        {groups.map((g, i) => (
          <Animate key={g.name} className="relative">
            <SpotlightCard
              key={g.name}
              className="h-full p-5 hover-pop"
            >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                    {g.name}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((i) => (
                      <span
                        key={i}
                        className="rounded-full border border-white/10 bg-background/60 px-3 py-1 text-xs"
                      >
                        {i}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 text-xs text-muted-foreground">&nbsp;</div>
              </div>
            </SpotlightCard>
          </Animate>
        ))}
      </div>
    </section>
  );
}
