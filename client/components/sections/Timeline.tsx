import React from "react";
import Animate from "@/components/Animate";
import SpotlightCard from "@/components/SpotlightCard";

const items = [
  {
    time: "Jan 2026 — Present",
    title: "Research And Development Intern",
    place: "SeraphGuard Labs",
    details:
      "Working on cutting-edge R&D projects in cybersecurity and AI-driven solutions. Contributing to innovative security technologies and research initiatives.",
  },
  {
    time: "Jan 2026",
    title: "Hackathon Winner — CareConnect Project",
    place: "PUDoCS Pondicherry Footprints Alumni Association",
    details:
      "Won Winner's Trophy at Hackathon on Sustainable Healthcare and Wellbeing. Developed CareConnect: an AI-powered healthcare platform with smart appointment booking, medical records management, and NLP-driven triage scoring system. Built with teammates Sravya Isukapalla and Sathwik M.",
  },
  {
    time: "Jan 2026",
    title: "FounderX Global Startup Summit",
    place: "IITM Research Park",
    details:
      "Attended intensive 2-day startup summit. Participated in idea pitching competition presenting SeraphGuard Labs concept. Networked with investors from BMW TechWorks India, Hindustan Group of Institutions, and Success Shipping. Gained insights on startup strategy, funding, and scaling.",
  },
  {
    time: "2023 — Present",
    title: "BSc (Hons) Computer Science",
    place: "Pondicherry University",
    details:
      "BSc Honors in Computer Science. Current CGPA: 8.6. Coursework includes DSA, OOP, systems programming and ML.",
  },
  {
    time: "Nov 2025 — Present",
    title: "Winter Intern — Project Head and Lead Developer",
    place: "Blend Vidya",
    details:
      "Remote internship focusing on project leadership and development. Working with Python, PyTorch, and other cutting-edge technologies.",
  },
  {
    time: "Nov 2025 — Jan 2026",
    title: "Winter Intern — IoT, Computer Networks, ML & AI",
    place: "Hyderabad Central University",
    details:
      "Full-time internship in Hyderabad, Telangana. Worked on IoT, Computer Networks, Machine Learning, and AI projects.",
  },
  {
    time: "Oct 2024 — Nov 2025",
    title: "Student Intern",
    place: "Atal Incubation Centre - BIMTECH",
    details:
      "Part-time hybrid internship in Puducherry. Gained hands-on experience in innovation and technology incubation.",
  },
  {
    time: "May 2022 — Present",
    title: "Content Writer",
    place: "Freelance",
    details:
      "Freelance content writing with over 3 years of experience. Creating technical documentation, articles, and creative content.",
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
            <SpotlightCard className="relative p-5 glossy-card hover-glow hover-pop overflow-hidden">
              <div className="grid gap-4 md:grid-cols-[160px_1fr]">
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
            </SpotlightCard>
          </Animate>
        ))}
      </div>
    </section>
  );
}
