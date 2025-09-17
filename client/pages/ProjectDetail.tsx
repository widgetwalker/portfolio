import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

type RepoDetail = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  topics?: string[];
  owner?: { avatar_url?: string; login?: string };
};

export default function ProjectDetail() {
  const { name } = useParams();
  const [repo, setRepo] = useState<RepoDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!name) return;
    const fetchDetail = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://api.github.com/repos/widgetwalker/${name}`);
        if (!res.ok) throw new Error(`GitHub repo ${res.status}`);
        const data = await res.json();
        setRepo(data);
      } catch (e: any) {
        console.error(e);
        setError("Could not load repository details.");
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [name]);

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-28">
        <div className="h-6 w-48 animate-pulse rounded bg-muted/40" />
        <div className="mt-4 h-4 w-72 animate-pulse rounded bg-muted/40" />
        <div className="mt-8 space-y-3">
          <div className="h-4 w-full animate-pulse rounded bg-muted/40" />
          <div className="h-4 w-full animate-pulse rounded bg-muted/40" />
          <div className="h-4 w-full animate-pulse rounded bg-muted/40" />
        </div>
      </div>
    );
  }

  if (error || !repo) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-28 text-destructive">
        {error ?? "Repository not found."}
        <div className="mt-6">
          <Link to="/" className="text-primary underline">Return home</Link>
        </div>
      </div>
    );
  }

  const imageUrl = repo.owner?.avatar_url;
  const excerpt = repo.description ?? "";

  return (
    <main className="mx-auto max-w-4xl px-4 py-20">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{repo.name}</h1>
          <p className="mt-2 text-muted-foreground">{repo.description}</p>
          <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="inline-flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.92.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.36-3.88-1.36-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.99 0 1.99.13 2.9.39 2.21-1.5 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.09 0 4.41-2.7 5.39-5.27 5.67.42.36.8 1.1.8 2.22 0 1.61-.02 2.9-.02 3.3 0 .31.21.67.8.56A10.51 10.51 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
              </svg>
              <span>{repo.stargazers_count}</span>
            </div>
            <div className="text-xs">{repo.language ?? "—"}</div>
            {repo.topics && repo.topics.length > 0 && (
              <div className="ml-2 flex gap-2">{repo.topics.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-background/60 px-2 py-1 text-xs text-muted-foreground">{t}</span>
              ))}</div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2 text-sm font-semibold text-primary-foreground shadow-md hover:opacity-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.92.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.36-3.88-1.36-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.99 0 1.99.13 2.9.39 2.21-1.5 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.09 0 4.41-2.7 5.39-5.27 5.67.42.36.8 1.1.8 2.22 0 1.61-.02 2.9-.02 3.3 0 .31.21.67.8.56A10.51 10.51 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
            </svg>
            View on GitHub
          </a>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="rounded-xl border border-white/10 bg-card/60 p-6">
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="mt-3 text-muted-foreground">{excerpt}</p>
          </div>
        </div>

        <aside>
          <div className="rounded-xl border border-white/10 bg-card/60 p-4 text-center">
            {imageUrl ? (
              <img src={imageUrl} alt={repo.name} className="mx-auto mb-3 h-40 w-40 rounded-md object-cover" />
            ) : (
              <div className="mx-auto mb-3 h-40 w-40 rounded-md bg-muted/30" />
            )}

            <div className="text-sm text-muted-foreground">Repository</div>
            <div className="mt-2 text-sm text-muted-foreground">{repo.owner?.login ?? ''}</div>
          </div>
        </aside>
      </div>

      <div className="mt-8">
        <Link to="/projects" className="text-muted-foreground underline">Back to projects</Link>
      </div>
    </main>
  );
}
