import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Stat {
    label: string;
    value: number;
    suffix?: string;
    prefix?: string;
}

export default function StatsCounter() {
    const [stats, setStats] = useState<Stat[]>([
        { label: "Projects Completed", value: 0, suffix: "+" },
        { label: "GitHub Repositories", value: 0, suffix: "" },
        { label: "Lines of Code", value: 0, suffix: "K+" },
        { label: "Years Experience", value: 0, suffix: "" },
    ]);

    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    useEffect(() => {
        // Fetch GitHub repo count
        const fetchGitHubStats = async () => {
            try {
                const response = await fetch(
                    "https://api.github.com/users/widgetwalker/repos?per_page=100"
                );
                const repos = await response.json();
                const repoCount = Array.isArray(repos)
                    ? repos.filter((r: any) => !r.fork).length
                    : 25;

                // Calculate years of experience (from May 2022)
                const startDate = new Date("2022-05-01");
                const yearsExp = Math.floor(
                    (Date.now() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365)
                );

                return { repoCount, yearsExp };
            } catch (error) {
                console.error("Failed to fetch GitHub stats:", error);
                return { repoCount: 25, yearsExp: 4 };
            }
        };

        if (inView) {
            fetchGitHubStats().then(({ repoCount, yearsExp }) => {
                const targetStats = [
                    { label: "Projects Completed", value: 25, suffix: "+" },
                    { label: "GitHub Repositories", value: repoCount, suffix: "" },
                    { label: "Lines of Code", value: 50, suffix: "K+" },
                    { label: "Years Experience", value: yearsExp, suffix: "" },
                ];

                // Animate counters
                const duration = 2000; // 2 seconds
                const steps = 60;
                const stepDuration = duration / steps;

                let currentStep = 0;

                const interval = setInterval(() => {
                    currentStep++;
                    const progress = currentStep / steps;

                    setStats(
                        targetStats.map((stat) => ({
                            ...stat,
                            value: Math.floor(stat.value * progress),
                        }))
                    );

                    if (currentStep >= steps) {
                        clearInterval(interval);
                        setStats(targetStats);
                    }
                }, stepDuration);

                return () => clearInterval(interval);
            });
        }
    }, [inView]);

    return (
        <div ref={ref} className="mt-8 mb-4">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-xl border border-white/10 bg-card/40 p-4 backdrop-blur transition-all hover:border-primary/50 hover:bg-card/60"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                        <div className="relative">
                            <div className="text-3xl font-bold tracking-tight text-primary">
                                {stat.prefix}
                                {stat.value}
                                {stat.suffix}
                            </div>
                            <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                {stat.label}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
