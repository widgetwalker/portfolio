import React, { useEffect, useState } from "react";
import Animate from "@/components/Animate";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
};

export default function Projects() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "https://api.github.com/users/widgetwalker/repos?per_page=100&sort=updated",
        );
        if (!res.ok) throw new Error(`GitHub API ${res.status}`);
        const data = (await res.json()) as any[];
        const filtered = data
          .filter((r) => !r.fork)
          .slice(0, 12)
          .map((r) => ({
            id: r.id,
            name: r.name,
            html_url: r.html_url,
            description: r.description,
            language: r.language,
            stargazers_count: r.stargazers_count,
          }));
        setRepos(filtered);
      } catch (e: any) {
        console.error(e);
        setError("Failed to load repositories");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="relative mx-auto mt-24 max-w-7xl px-4">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
          <p className="mt-2 text-muted-foreground">A selection of repos from GitHub ({"@widgetwalker"}).</p>
        </div>
        <a
          href="https://github.com/widgetwalker"
          target="_blank"
          rel="noreferrer noopener"
          className="hidden rounded-md border border-white/10 bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-muted/30 md:inline"
        >
          View on GitHub
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
        {loading &&
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-card/60 p-5 min-h-[160px]">
              <div className="h-6 w-40 animate-pulse rounded bg-muted/40" />
              <div className="mt-3 h-4 w-56 animate-pulse rounded bg-muted/40" />
              <div className="mt-4 flex items-center gap-2">
                <div className="h-6 w-16 animate-pulse rounded bg-muted/40" />
              </div>
            </div>
          ))}

        {error && <div className="text-destructive">{error}</div>}

        {repos &&
          repos.map((p) => (
            <Animate key={p.id} className="relative">
              <a
                href={p.html_url}
                target="_blank"
                rel="noreferrer noopener"
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-card/60 p-5 transition hover:bg-card/80 card-hover hover-glow hover-pop h-full flex flex-col justify-between"
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

                <div className="flex items-start justify-between gap-3">
                  <div className="pr-4">
                    <h3 className="text-lg font-semibold break-words">{p.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.description ?? "No description"}</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground flex-shrink-0">
                    <div className="inline-flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-muted-foreground">
                        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.92.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.36-3.88-1.36-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.99 0 1.99.13 2.9.39 2.21-1.5 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.09 0 4.41-2.7 5.39-5.27 5.67.42.36.8 1.1.8 2.22 0 1.61-.02 2.9-.02 3.3 0 .31.21.67.8.56A10.51 10.51 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
                      </svg>
                      <span>{p.stargazers_count}</span>
                    </div>
                    <div className="mt-2 text-xs">{p.language ?? "—"}</div>
                  </div>
                </div>

                <div className="mt-5 inline-flex items-center gap-2 text-sm text-gradient">
                  <span>View on GitHub</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                    <path d="M5 12h12m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </a>
            </Animate>
          ))}
      </div>
    </section>
  );
}
