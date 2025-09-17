import React from "react";
import BackgroundFX from "@/components/BackgroundFX";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Timeline from "@/components/sections/Timeline";
import Contact from "@/components/sections/Contact";

export default function Index() {
  return (
    <div className="min-h-screen">
      <BackgroundFX />
      <SiteHeader />
      <main>
        <Hero />
        <section id="about" className="relative mx-auto mt-24 max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-card/60 p-6 backdrop-blur">
              <h2 className="text-2xl font-semibold tracking-tight">About</h2>
              <p className="mt-2 text-muted-foreground">
                I’m Dheeraj, a tech-focused Computer Science student who loves building delightful, modern interfaces and tooling. I enjoy low-level systems, algorithms, and bringing ideas to life with code and design.
              </p>
              <p className="mt-2 text-muted-foreground">
                When I’m not coding, I explore new design trends, contribute to open-source, and experiment with ML projects.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card/60 p-6 backdrop-blur">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Focus Areas</h3>
              <ul className="mt-3 grid list-disc grid-cols-1 gap-2 pl-5 text-sm text-muted-foreground sm:grid-cols-2">
                <li>Frontend Engineering</li>
                <li>Design Systems</li>
                <li>Developer Experience</li>
                <li>Systems Programming</li>
                <li>Machine Learning</li>
                <li>Open Source</li>
              </ul>
            </div>
          </div>
        </section>

        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
