import React from "react";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Timeline from "@/components/sections/Timeline";
import Contact from "@/components/sections/Contact";

export default function Index() {
  return (
    <main className="min-h-screen">
      <Hero />
      <section id="about" className="relative mx-auto mt-24 max-w-7xl px-4">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-card/60 p-6 backdrop-blur">
            <h2 className="text-2xl font-semibold tracking-tight">About</h2>
            <p className="mt-2 text-muted-foreground">
              I'm Dheeraj, a CS undergraduate with technical orientation, develops intuitive modern UIs and developer aids. Fascinated by core systems engineering, computational algorithms, and realizing prototypes via programming and aesthetics.
            </p>
            <p className="mt-2 text-muted-foreground">
              When not at the keyboard, I craft mind-altering stories and poems, analyze design evolutions, dispense amateur psychological insights as free therapy, and wield pencil sketches with expert precision.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-card/60 p-6 backdrop-blur">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Focus Areas</h3>
            <ul className="mt-3 grid list-disc grid-cols-1 gap-2 pl-5 text-sm sm:grid-cols-2">
              <li className="text-indigo-300 font-semibold">Frontend Engineering</li>
              <li className="text-rose-300 font-semibold">Design Systems</li>
              <li className="text-sky-300 font-semibold">Developer Experience</li>
              <li className="text-amber-300 font-semibold">Systems Programming</li>
              <li className="text-emerald-300 font-semibold">Machine Learning</li>
              <li className="text-violet-300 font-semibold">Open Source</li>
              <li className="text-pink-300 font-semibold">Creative Writing</li>
              <li className="text-orange-300 font-semibold">Pencil Sketching</li>
              <li className="text-lime-300 font-semibold">Amateur Psychology</li>
              <li className="text-fuchsia-300 font-semibold">Game Design</li>
              <li className="text-cyan-300 font-semibold">3D Modeling</li>
              <li className="text-yellow-300 font-semibold">Python Development</li>
            </ul>
          </div>
        </div>
      </section>

      <Projects />
      <Skills />
      <Timeline />
      <Contact />
    </main>
  );
}
