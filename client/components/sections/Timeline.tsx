import React from "react";
import Animate from "@/components/Animate";

const items = [
  {
    time: "2024 — Present",
    title: "B.Tech in Computer Science",
    place: "University of Technology",
    details: "Coursework in algorithms, data structures, operating systems, and machine learning.",
  },
  {
    time: "2023",
    title: "Hackathon Finalist",
    place: "DevFest",
    details: "Built an AI-powered productivity assistant with realtime collaboration.",
  },
  {
    time: "2022",
    title: "Open Source",
    place: "Various",
    details: "Contributed PRs to UI libraries and docs tooling improving DX and accessibility.",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="relative mx-auto mt-24 max-w-7xl px-4">
      <h2 className="text-3xl font-bold tracking-tight">Timeline</h2>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        A few highlights from my journey in tech.
      </p>

      <div className="mt-8 space-y-6">
        {items.map((item, idx) => (
          <Animate key={idx} className="relative">
            <div className="relative grid gap-4 rounded-xl border border-white/10 bg-card/60 p-5 md:grid-cols-[160px_1fr] card-hover hover-glow hover-pop">
              <div className="text-sm text-muted-foreground">{item.time}</div>
              <div>
                <div className="text-lg font-semibold">{item.title}</div>
                <div className="text-sm text-muted-foreground">{item.place}</div>
                <p className="mt-2 text-sm text-muted-foreground">{item.details}</p>
              </div>
            </div>
          </Animate>
        ))}
      </div>
    </section>
  );
}
