import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto mt-24 max-w-7xl px-4">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-card to-background p-8">
        <h2 className="text-3xl font-bold tracking-tight">
          Let’s build something
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          I’m open to internships, collaborations, and open-source work. Reach
          out and say hi!
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:dheeraj5765483@gmail.com?subject=Hello%20Dheeraj"
            className="inline-flex items-center justify-center rounded-md border border-white/10 bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-primary-foreground shadow transition hover:opacity-90"
          >
            Email me
          </a>
          <a
            href={`https://github.com/${import.meta.env.VITE_GITHUB_USERNAME || "widgetwalker"}`}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center rounded-md border border-white/10 bg-card px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted/30"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pilli-dheeraj"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center rounded-md border border-white/10 bg-card px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted/30"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
