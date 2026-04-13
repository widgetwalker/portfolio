import React from "react";
import SpotlightCard from "../SpotlightCard";

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto mt-24 max-w-7xl px-4">
      <SpotlightCard className="p-8 hover-pop">
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
            className="inline-flex items-center justify-center rounded-md border border-white/20 bg-black/40 px-5 py-3 text-sm font-semibold text-foreground hover:bg-white/10 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pilli-dheeraj"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center rounded-md border border-white/20 bg-black/40 px-5 py-3 text-sm font-semibold text-foreground hover:bg-white/10 transition"
          >
            LinkedIn
          </a>
        </div>
      </SpotlightCard>
    </section>
  );
}
