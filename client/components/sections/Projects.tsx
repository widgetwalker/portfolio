import React from "react";

const projects = [
  {
    title: "Algorithm Visualizer",
    desc: "Interactive visualizations for graph, sorting, and pathfinding algorithms with step-by-step controls.",
    tech: ["TypeScript", "React", "D3.js"],
    href: "#",
  },
  {
    title: "Campus Connect",
    desc: "A student collaboration hub with realtime chat, event boards, and project teams.",
    tech: ["Next.js", "Supabase", "Tailwind"],
    href: "#",
  },
  {
    title: "ML Playground",
    desc: "In-browser ML demos exploring CNNs, transformers, and embeddings.",
    tech: ["Python", "PyTorch", "ONNX"],
    href: "#",
  },
  {
    title: "DevTools Kit",
    desc: "CLI + web tools for linting, formatting, and repo maintenance.",
    tech: ["Node.js", "Rust", "Zod"],
    href: "#",
  },
  {
    title: "3D Portfolio",
    desc: "Three.js powered portfolio with physics-based interactions and shaders.",
    tech: ["Three.js", "React Three Fiber"],
    href: "#",
  },
  {
    title: "Open Source PRs",
    desc: "Contributions to UI libraries, docs tooling, and DX improvements.",
    tech: ["OSS", "Docs", "DX"],
    href: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto mt-24 max-w-7xl px-4">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
          <p className="mt-2 text-muted-foreground">A selection of things I’ve built and explored.</p>
        </div>
        <a
          href="#contact"
          className="hidden rounded-md border border-white/10 bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-muted/30 md:inline"
        >
          Collaborate
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.href}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-card/60 p-5 transition hover:bg-card/80"
            onMouseMove={(e) => {
              const el = e.currentTarget as HTMLElement;
              const r = el.getBoundingClientRect();
              const x = e.clientX - r.left;
              const y = e.clientY - r.top;
              el.style.setProperty("--x", `${(x / r.width) * 100}%`);
              el.style.setProperty("--y", `${(y / r.height) * 100}%`);
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.removeProperty("--x");
              el.style.removeProperty("--y");
            }}
          >
            <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{
              background:
                "radial-gradient(800px circle at var(--x,50%) var(--y,50%), hsl(var(--primary) / 0.14), transparent 40%)",
            }} />
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-background/60 px-2 py-1 text-xs text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 inline-flex items-center gap-2 text-sm text-gradient">
              <span>View details</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path d="M5 12h12m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
