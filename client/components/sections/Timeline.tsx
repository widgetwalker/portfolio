import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
    title: "Hackathon Winner — PUDoCS",
    place: "Sustainable Healthcare and Wellbeing",
    details:
      "Won the Winner's Trophy with Team CRUSADERS at the Hackathon organized by the PUDoCS Pondicherry Footprints Alumni Association.",
  },
  {
    time: "Nov 2025 — Feb 2026",
    title: "Winter Intern — Project Head & Lead Developer",
    place: "Blend Vidya",
    details:
      "Orchestrated AI initiatives with Python and PyTorch to advance multimodal model capabilities. Deployed production-grade ML systems supporting real-time inference.",
  },
  {
    time: "Nov 2025 — Jan 2026",
    title: "Winter Intern — 5G, IoT, ML & AI",
    place: "Hyderabad Central University",
    details:
      "Architected edge-computing solutions on 5G MEC servers integrating IoT sensors, network protocols, ML, and NLP. Crafted low-latency pipelines for real-time data processing and predictive analytics.",
  },
  {
    time: "Oct 2024 — Nov 2025",
    title: "Student Intern",
    place: "Atal Incubation Centre - Pondicherry Engineering College Foundation",
    details:
      "Prototyped and validated emerging technologies for startup incubation. Collaborated on interdisciplinary AI and digital system innovations.",
  },
  {
    time: "2024 — 2025",
    title: "Regional Conclave Awards",
    place: "The Institution of Engineers (India)",
    details:
      "Secured 1st Prize in Project Competition and 2nd Prize in Model/Idea Competition at the 4th Regional Conclave.",
  },
  {
    time: "2024 — 2025",
    title: "Team Leader & System Software Developer",
    place: "Smart India Hackathon & Innovation in IoT",
    details:
      "Led a team at the Smart India Hackathon and delivered foundation system software for teams placing 1st and 2nd in 'Innovation in IoT'.",
  },
  {
    time: "2023 — Present",
    title: "BSc (Hons) Computer Science",
    place: "Pondicherry University",
    details:
      "Current CGPA: 8.6. Core focus on theoretical computer science, machine learning, systems architecture, and advanced mathematics.",
  },
  {
    time: "May 2022 — Present",
    title: "Freelance Content Writer",
    place: "Remote",
    details:
      "Authored technical documentation, research articles, poetry, story scripts, and educational content across fiction and CS domains with over 3 years of experience.",
  },
  {
    time: "2022 — 2023",
    title: "Class 12 — Computer Science",
    place: "Sainik School Korukonda",
    details:
      "Completed Class 12 with a focus on Computer Science and STEM subjects.",
  },
  {
    time: "2022",
    title: "Project Lead & Designer",
    place: "Indian Navy (Origins of Navy Comic Strip)",
    details:
      "Directed development and design of educational comic strip commissioned by the Indian Navy.",
  },
];

const TimelineItem = ({ item, index }: { item: typeof items[0], index: number }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
  // Track scroll specifically for each timeline item node
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 80%", "center center"]
  });

  // Scale and opacity of the glowing node indicator
  const circleScale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const circleOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const ringScale = useTransform(scrollYProgress, [0.8, 1], [0, 1.5]);
  const ringOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  // Slide up the card content based on scroll
  const cardY = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const cardOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={itemRef} className="relative pl-12 md:pl-0 w-full mb-12 last:mb-0 hidden-on-mobile group">
      
      {/* 
        On Desktop, we shift items side to side if desired.
        But for clean narrative, a left-aligned spine is sleekest. 
        The node circle:
      */}
      <div className="absolute left-[-5px] md:left-[3px] top-4 w-[11px] h-[11px] z-20 flex items-center justify-center">
        {/* Pulsing ring effect when scroll hits */}
        <motion.div 
          style={{ scale: ringScale, opacity: ringOpacity }}
          className="absolute w-[30px] h-[30px] rounded-full border border-primary/50 pointer-events-none" 
        />
        {/* Core Glowing Node */}
        <motion.div 
          style={{ scale: circleScale, opacity: circleOpacity }}
          className="absolute w-full h-full rounded-full bg-primary shadow-[0_0_15px_hsl(var(--primary))]"
        />
      </div>

      {/* The Animated Glass Card */}
      <motion.div style={{ y: cardY, opacity: cardOpacity }} className="w-full relative group">
        <SpotlightCard className="relative p-7 glossy-card hover-glow md:ml-12">
          
          {/* Neon connector line bridging node to card */}
          <div className="hidden md:block absolute left-[-48px] top-5 w-[48px] h-[2px] bg-gradient-to-r from-primary to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          
          <div className="grid gap-3">
            <div className="inline-flex max-w-fit rounded-full border border-primary/20 bg-primary/10 px-3 py-1text-xs font-semibold text-primary">
              {item.time}
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">{item.title}</div>
              <div className="text-sm font-medium text-muted-foreground mt-1 tracking-wide">
                {item.place}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground/80">
                {item.details}
              </p>
            </div>
          </div>
        </SpotlightCard>
      </motion.div>
    </div>
  );
}

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the entire timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end 80%"]
  });

  return (
    <section id="timeline" className="relative mx-auto mt-32 max-w-5xl px-4 z-10">
      <div className="mb-16">
        <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">Timeline</h2>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          A narrative of my journey in tech, plotted across time.
        </p>
      </div>

      <div ref={containerRef} className="relative pt-4 pb-12">
        {/* Background Track of the physical line */}
        <div className="absolute left-[0px] md:left-[8px] top-[20px] bottom-0 w-[1px] bg-white/10" />

        {/* Dynamic Drawn Path Effect using an SVG line or scaling Div */}
        <motion.div 
            style={{ scaleY: scrollYProgress }} 
            className="absolute left-[0px] md:left-[8px] top-[20px] bottom-0 w-[1px] md:w-[2px] bg-gradient-to-b from-primary via-accent to-secondary origin-top drop-shadow-[0_0_8px_hsl(var(--primary))]" 
        />

        <div className="relative">
          {items.map((item, idx) => (
            <TimelineItem key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
