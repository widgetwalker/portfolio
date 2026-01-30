import React, { useState } from "react";
import Animate from "@/components/Animate";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

export default function SkillsVisualization() {
    // RPG-style stats data
    const statsData = [
        { subject: "Frontend", A: 95, fullMark: 100 },
        { subject: "Backend", A: 85, fullMark: 100 },
        { subject: "AI / ML", A: 75, fullMark: 100 },
        { subject: "System Design", A: 80, fullMark: 100 },
        { subject: "DevOps", A: 70, fullMark: 100 },
        { subject: "Creative", A: 85, fullMark: 100 },
    ];

    // Specific tech stack for the cloud below
    const techStack = [
        { name: "React", category: "frontend" },
        { name: "TypeScript", category: "frontend" },
        { name: "Python", category: "backend" },
        { name: "Node.js", category: "backend" },
        { name: "Tailwind", category: "frontend" },
        { name: "Next.js", category: "frontend" },
        { name: "PostgreSQL", category: "backend" },
        { name: "PyTorch", category: "ai" },
        { name: "Docker", category: "devops" },
        { name: "Figma", category: "creative" },
        { name: "Git", category: "devops" },
        { name: "Rust", category: "backend" },
        { name: "Flutter", category: "frontend" },
        { name: "Three.js", category: "creative" },
    ];

    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    // Custom Tick Component for the axis labels
    const renderCustomTick = ({ payload, x, y, textAnchor, stroke, radius }: any) => {
        return (
            <g className="recharts-layer recharts-polar-angle-axis-tick">
                <text
                    x={x}
                    y={y}
                    textAnchor={textAnchor}
                    fill="hsl(var(--muted-foreground))"
                    className="text-xs font-semibold uppercase tracking-wider"
                    dy={payload.value === "Frontend" ? -10 : 5}
                >
                    {payload.value}
                </text>
            </g>
        );
    };

    return (
        <section id="skills" className="relative mx-auto mt-24 max-w-7xl px-4">
            <Animate>
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold tracking-tight">
                        <span className="text-gradient">Technical Proficiency</span>
                    </h2>
                    <p className="mt-3 text-lg text-muted-foreground">
                        A visual overview of my engineering capabilities
                    </p>
                </div>
            </Animate>

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                {/* Left Column: Radar Chart */}
                <Animate delay={100} className="relative flex justify-center">
                    <div className="relative h-[350px] w-full max-w-[500px] rounded-2xl border border-white/10 bg-card/20 p-4 backdrop-blur-sm sm:h-[450px]">
                        {/* Background Glow Effect */}
                        <div className="absolute inset-0 -z-10 bg-primary/5 blur-3xl rounded-full opacity-50" />

                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={statsData}>
                                <PolarGrid stroke="hsl(var(--muted-foreground))" strokeOpacity={0.2} />
                                <PolarAngleAxis
                                    dataKey="subject"
                                    tick={renderCustomTick}
                                />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                <Radar
                                    name="Proficiency"
                                    dataKey="A"
                                    stroke="hsl(var(--primary))"
                                    strokeWidth={3}
                                    fill="hsl(var(--primary))"
                                    fillOpacity={0.3}
                                />
                                <Tooltip
                                    content={({ active, payload }) => {
                                        if (active && payload && payload.length) {
                                            return (
                                                <div className="rounded-lg border border-white/10 bg-popover px-3 py-2 text-sm shadow-xl backdrop-blur">
                                                    <span className="font-semibold text-primary">
                                                        {payload[0].payload.subject}
                                                    </span>
                                                    : <span className="text-foreground">{payload[0].value}%</span>
                                                </div>
                                            );
                                        }
                                        return null;
                                    }}
                                />
                            </RadarChart>
                        </ResponsiveContainer>

                        <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-muted-foreground opacity-60">
                            * Based on project experience & confidence level
                        </div>
                    </div>
                </Animate>

                {/* Right Column: Tech Stack Cloud & Details */}
                <div className="flex flex-col gap-8">
                    <Animate delay={200}>
                        <div className="rounded-xl border border-white/10 bg-card/40 p-6 backdrop-blur transition-all hover:bg-card/60">
                            <h3 className="mb-4 text-xl font-semibold">Core Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {techStack.map((tech) => (
                                    <span
                                        key={tech.name}
                                        className="cursor-default rounded-md border border-white/10 bg-background/50 px-3 py-1.5 text-sm font-medium transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:scale-105"
                                        onMouseEnter={() => setHoveredSkill(tech.name)}
                                        onMouseLeave={() => setHoveredSkill(null)}
                                    >
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Animate>

                    <Animate delay={300}>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-xl border border-white/10 bg-card/40 p-5 backdrop-blur">
                                <div className="mb-1 text-sm font-medium text-muted-foreground uppercase tracking-widest">
                                    Primary Stack
                                </div>
                                <div className="text-lg font-semibold text-foreground">
                                    TypeScript & Python
                                </div>
                                <div className="mt-2 text-sm text-muted-foreground">
                                    Specializing in type-safe full-stack web applications and data-heavy backends.
                                </div>
                            </div>
                            <div className="rounded-xl border border-white/10 bg-card/40 p-5 backdrop-blur">
                                <div className="mb-1 text-sm font-medium text-muted-foreground uppercase tracking-widest">
                                    Current Focus
                                </div>
                                <div className="text-lg font-semibold text-foreground">
                                    AI Systems & R&D
                                </div>
                                <div className="mt-2 text-sm text-muted-foreground">
                                    Exploring the intersection of cybersecurity, machine learning, and scalable systems.
                                </div>
                            </div>
                        </div>
                    </Animate>
                </div>
            </div>
        </section>
    );
}
