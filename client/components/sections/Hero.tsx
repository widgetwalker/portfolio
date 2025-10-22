import React, { useEffect, useState } from "react";
import Animate from "@/components/Animate";

const TAGLINES = [
  "DHEERAJ doesn't build websites. He engineers digital adrenaline. Pixels obey. Code dances. The future watches.",
  "Forged in caffeine and chaos, DHEERAJ crafts worlds where design defies gravity and every scroll feels like a supernova.",
  "DHEERAJ: Architect of the impossible. Where web meets wow.",
];

export default function Hero() {
  const [tagIndex, setTagIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // fade out
      setVisible(false);
      setTimeout(() => {
        setTagIndex((i) => (i + 1) % TAGLINES.length);
        // fade in
        setVisible(true);
      }, 650);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderTagline = (text: string) => {
    // replace occurrences of DHEERAJ with a red gradient span
    const parts = text.split(/(DHEERAJ)/g);
    return parts.map((p, idx) => {
      if (p === "DHEERAJ") {
        return (
          <span key={idx} className="text-gradient-red font-extrabold">
            {p}
          </span>
        );
      }
      return <span key={idx}>{p}</span>;
    });
  };

  return (
    <section id="home" className="relative isolate">
      <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-10 px-4 pt-6 md:grid-cols-2 md:pt-10">
        <div>
          <Animate>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <span className="inline-block size-2 rounded-full bg-accent shadow-[0_0_12px_hsl(var(--accent))]" />
              Tech & Computer Science Student
            </p>

            <h1 className="text-balance text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
              <span className="text-gradient">DHEERAJ</span>
              <br />
              <span
                className={`text-lg sm:text-2xl text-muted-foreground block max-w-3xl tagline-fade ${visible ? "tagline-visible" : "tagline-hidden"}`}
              >
                {renderTagline(TAGLINES[tagIndex])}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              I craft performant game interfaces, dissect Python algorithms, and
              tinker with 3D modeling pipelines. Passionate about design
              systems, systems programming, and developer tooling.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (window.location.hash !== "#projects")
                    window.location.hash = "#projects";
                  else {
                    const el = document.getElementById("projects");
                    if (el)
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="inline-flex items-center justify-center rounded-md border border-white/10 bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-primary-foreground shadow transition hover:opacity-90"
              >
                View Projects
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (window.location.hash !== "#contact")
                    window.location.hash = "#contact";
                  else {
                    const el = document.getElementById("contact");
                    if (el)
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="inline-flex items-center justify-center rounded-md border border-white/10 bg-card px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted/30"
              >
                Get in touch
              </button>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-center text-sm">
              <Animate className="relative">
                <div className="rounded-xl border border-white/10 bg-card/60 p-4 backdrop-blur card-hover hover-glow">
                  <div className="text-2xl font-bold text-gradient">10+</div>
                  <div className="text-muted-foreground">Projects</div>
                </div>
              </Animate>

              <Animate className="relative" delay={80}>
                <div className="rounded-xl border border-white/10 bg-card/60 p-4 backdrop-blur card-hover hover-glow">
                  <div className="text-2xl font-bold text-gradient">5</div>
                  <div className="text-muted-foreground">Hackathons</div>
                </div>
              </Animate>

              <Animate className="relative" delay={140}>
                <div className="rounded-xl border border-white/10 bg-card/60 p-4 backdrop-blur card-hover hover-glow">
                  <div className="text-2xl font-bold text-gradient">8.7</div>
                  <div className="text-muted-foreground">GPA</div>
                </div>
              </Animate>
            </div>
          </Animate>
        </div>

        <div className="relative">
          <Animate>
            <div className="neon-border relative mx-auto aspect-square w-72 rounded-2xl border border-white/10 bg-gradient-to-br from-card to-background p-2 sm:w-80 md:w-96 card-hover hover-glow">
              <div className="relative flex h-full items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-background to-card overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7aa2766cafed47ac93c5e37e8c39eac3%2F0d2bfee87df649de8f30526e576768b3?format=webp&width=800"
                  alt="Dheeraj's Profile"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </Animate>

          <div className="mt-4 text-center md:mt-6">
            <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              Tech Enthusiast · Builder
            </div>
          </div>

          <div className="pointer-events-none absolute -right-6 top-10 hidden rotate-12 md:block">
            <div className="rounded-full border border-white/10 bg-card/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <span className="text-gradient font-semibold">Futuristic</span> ·
              Aesthetic · Dark
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
