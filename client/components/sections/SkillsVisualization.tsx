import React from "react";
import Animate from "@/components/Animate";

export default function SkillsSection() {
    const skillCategories = [
        {
            name: "Frontend",
            skills: [
                { name: "React/Next.js", level: 90 },
                { name: "TypeScript", level: 85 },
                { name: "Tailwind CSS", level: 95 },
                { name: "UI/UX Design", level: 80 },
            ],
            color: "from-blue-500 to-cyan-500",
        },
        {
            name: "Backend & Systems",
            skills: [
                { name: "Python", level: 90 },
                { name: "Node.js", level: 75 },
                { name: "PostgreSQL", level: 70 },
                { name: "System Design", level: 75 },
            ],
            color: "from-green-500 to-emerald-500",
        },
        {
            name: "AI & ML",
            skills: [
                { name: "Machine Learning", level: 80 },
                { name: "PyTorch", level: 75 },
                { name: "NLP", level: 70 },
                { name: "Computer Vision", level: 65 },
            ],
            color: "from-purple-500 to-pink-500",
        },
        {
            name: "Tools & DevOps",
            skills: [
                { name: "Git/GitHub", level: 95 },
                { name: "Docker", level: 70 },
                { name: "CI/CD", level: 65 },
                { name: "Linux", level: 80 },
            ],
            color: "from-orange-500 to-red-500",
        },
    ];

    return (
        <section id="skills" className="relative mx-auto mt-24 max-w-7xl px-4">
            <Animate>
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold tracking-tight">
                        <span className="text-gradient">Skills & Expertise</span>
                    </h2>
                    <p className="mt-3 text-lg text-muted-foreground">
                        Technologies and tools I work with
                    </p>
                </div>
            </Animate>

            <div className="grid gap-6 md:grid-cols-2">
                {skillCategories.map((category, categoryIndex) => (
                    <Animate key={category.name} delay={categoryIndex * 100}>
                        <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-card/40 p-6 backdrop-blur transition-all hover:border-primary/30 hover:bg-card/60">
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition-opacity group-hover:opacity-5`}
                            />
                            <div className="relative">
                                <h3 className="mb-4 text-xl font-semibold">{category.name}</h3>
                                <div className="space-y-4">
                                    {category.skills.map((skill) => (
                                        <div key={skill.name}>
                                            <div className="mb-2 flex items-center justify-between text-sm">
                                                <span className="font-medium">{skill.name}</span>
                                                <span className="text-muted-foreground">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div className="h-2 overflow-hidden rounded-full bg-muted/20">
                                                <div
                                                    className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                                                    style={{
                                                        width: `${skill.level}%`,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Animate>
                ))}
            </div>

            {/* Additional Skills Cloud */}
            <Animate delay={400}>
                <div className="mt-8 rounded-xl border border-white/10 bg-card/40 p-6 backdrop-blur">
                    <h3 className="mb-4 text-center text-lg font-semibold">
                        Also Experienced With
                    </h3>
                    <div className="flex flex-wrap justify-center gap-2">
                        {[
                            "Flutter",
                            "Firebase",
                            "Supabase",
                            "Vite",
                            "Express",
                            "REST APIs",
                            "GraphQL",
                            "Figma",
                            "Blender",
                            "Unity",
                            "IoT",
                            "Cybersecurity",
                            "Technical Writing",
                            "Agile",
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-white/10 bg-muted/20 px-3 py-1 text-sm font-medium transition-all hover:border-primary/50 hover:bg-primary/10"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </Animate>
        </section>
    );
}
