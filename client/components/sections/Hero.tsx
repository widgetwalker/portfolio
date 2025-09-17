import React from "react";

export default function Hero() {
  return (
    <section id="home" className="relative isolate">
      <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-10 px-4 pt-28 md:grid-cols-2 md:pt-32">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="inline-block size-2 rounded-full bg-accent shadow-[0_0_12px_hsl(var(--accent))]" />
            Tech & Computer Science Student
          </p>
          <h1 className="text-balance text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            <span className="text-gradient">DHEERAJ</span>
            <br />
            builds bold, futuristic web experiences
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            I craft performant interfaces, explore algorithms, and tinker with ML. Passionate about design systems, systems programming, and developer tooling.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md border border-white/10 bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-primary-foreground shadow transition hover:opacity-90"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-white/10 bg-card px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted/30"
            >
              Get in touch
            </a>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-center text-sm">
            <div className="rounded-xl border border-white/10 bg-card/60 p-4 backdrop-blur">
              <div className="text-2xl font-bold text-gradient">15+</div>
              <div className="text-muted-foreground">Projects</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-card/60 p-4 backdrop-blur">
              <div className="text-2xl font-bold text-gradient">5</div>
              <div className="text-muted-foreground">Hackathons</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-card/60 p-4 backdrop-blur">
              <div className="text-2xl font-bold text-gradient">3.9</div>
              <div className="text-muted-foreground">GPA</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="neon-border relative mx-auto aspect-square w-72 rounded-2xl border border-white/10 bg-gradient-to-br from-card to-background p-2 sm:w-80 md:w-96">
            <div className="flex h-full items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-background to-card">
              <div className="text-center">
                <div className="mx-auto mb-4 size-24 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 p-1">
                  <div className="h-full w-full rounded-full border border-white/10 bg-background" />
                </div>
                <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Profile</p>
                <p className="text-xl font-semibold">Tech Enthusiast · Builder</p>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-6 top-10 hidden rotate-12 md:block">
            <div className="rounded-full border border-white/10 bg-card/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <span className="text-gradient font-semibold">Futuristic</span> · Aesthetic · Dark
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
