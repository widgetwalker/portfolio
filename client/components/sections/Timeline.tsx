import React from "react";
import Animate from "@/components/Animate";

const items = [
  {
    time: "2023 — Present",
    title: "BSc (Hons) Computer Science",
    place: "Pondicherry University",
    details:
      "BSc Honors in Computer Science. Current CGPA: 8.6. Coursework includes DSA, OOP, systems programming and ML.",
  },
  {
    time: "Present",
    title: "Intern — AICPECF",
    place: "AICPECF",
    details:
      "Currently interning at AICPECF working on software and 3D modelling related tasks.",
  },
  {
    time: "2023",
    title: "Class 12 — Sainik School Korukonda",
    place: "Sainik School Korukonda",
    details:
      "Completed Class 12 with focus on Computer Science and STEM subjects.",
  },
  {
    time: "2023",
    title: "Regional Conclave — Awards",
    place: "The Institution of Engineers (India)",
    details:
      "4th Regional Conclave: 1st Prize — Project Competition; 2nd Prize — Model/Idea Competition.",
  },
  {
    time: "2022 — 2023",
    title: "Hackathons & Competitions",
    place: "Smart India Hackathon & others",
    details:
      "Led a team at the Smart India Hackathon; acted as system software developer for teams that placed in Innovation in IoT.",
  },
  {
    time: "2021 — 2024",
    title: "Projects & Certifications",
    place: "Personal / Internship",
    details:
      "Notable projects: low-poly games, 3D Viewer, image-caption generator, personal financer, task automation, SQL-Python based card mechanics, web-scraper. Internship at AICPECF.",
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
            <div className="relative grid gap-4 rounded-xl glossy-card p-5 md:grid-cols-[160px_1fr] card-hover hover-glow hover-pop overflow-hidden">
              <div className="text-sm text-muted-foreground text-gradient">
                {item.time}
              </div>
              <div>
                <div className="text-lg font-semibold">{item.title}</div>
                <div className="text-sm text-muted-foreground">
                  {item.place}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.details}
                </p>
              </div>
            </div>
          </Animate>
        ))}
      </div>
    </section>
  );
}
