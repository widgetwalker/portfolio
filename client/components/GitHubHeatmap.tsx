import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface ContributionDay {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
}

export default function GitHubHeatmap() {
    const [contributions, setContributions] = useState<ContributionDay[]>([]);
    const [loading, setLoading] = useState(true);
    const [totalContributions, setTotalContributions] = useState(0);

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            // Generate mock contribution data (last 365 days)
            // In production, you'd fetch this from GitHub GraphQL API
            const generateMockData = () => {
                const days: ContributionDay[] = [];
                const today = new Date();
                let total = 0;

                for (let i = 364; i >= 0; i--) {
                    const date = new Date(today);
                    date.setDate(date.getDate() - i);

                    // Generate random contribution count (weighted towards recent activity)
                    const recentBoost = i < 90 ? 1.5 : 1;
                    const count = Math.floor(Math.random() * 15 * recentBoost);
                    total += count;

                    // Determine level based on count
                    let level: 0 | 1 | 2 | 3 | 4 = 0;
                    if (count === 0) level = 0;
                    else if (count < 3) level = 1;
                    else if (count < 6) level = 2;
                    else if (count < 10) level = 3;
                    else level = 4;

                    days.push({
                        date: date.toISOString().split("T")[0],
                        count,
                        level,
                    });
                }

                return { days, total };
            };

            const { days, total } = generateMockData();
            setContributions(days);
            setTotalContributions(total);
            setLoading(false);
        }
    }, [inView]);

    const getLevelColor = (level: number) => {
        switch (level) {
            case 0:
                return "bg-muted/20";
            case 1:
                return "bg-primary/30";
            case 2:
                return "bg-primary/50";
            case 3:
                return "bg-primary/70";
            case 4:
                return "bg-primary";
            default:
                return "bg-muted/20";
        }
    };

    // Group contributions by week
    const weeks: ContributionDay[][] = [];
    for (let i = 0; i < contributions.length; i += 7) {
        weeks.push(contributions.slice(i, i + 7));
    }

    return (
        <div ref={ref} className="mb-8">
            <div className="rounded-xl border border-white/10 bg-card/40 p-6 backdrop-blur">
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">GitHub Activity</h3>
                    {!loading && (
                        <div className="text-sm text-muted-foreground">
                            <span className="font-semibold text-primary">
                                {totalContributions}
                            </span>{" "}
                            contributions in the last year
                        </div>
                    )}
                </div>

                {loading ? (
                    <div className="flex h-32 items-center justify-center">
                        <div className="text-sm text-muted-foreground">
                            Loading activity...
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="overflow-x-auto">
                            <div className="inline-flex gap-1">
                                {weeks.map((week, weekIndex) => (
                                    <div key={weekIndex} className="flex flex-col gap-1">
                                        {week.map((day, dayIndex) => (
                                            <div
                                                key={dayIndex}
                                                className={`group relative h-3 w-3 rounded-sm ${getLevelColor(day.level)} transition-all hover:ring-2 hover:ring-primary/50`}
                                                title={`${day.date}: ${day.count} contributions`}
                                            >
                                                <div className="pointer-events-none absolute -top-8 left-1/2 z-10 hidden -translate-x-1/2 whitespace-nowrap rounded bg-popover px-2 py-1 text-xs text-popover-foreground shadow-lg group-hover:block">
                                                    {day.count} on {day.date}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-4 flex items-center justify-end gap-2 text-xs text-muted-foreground">
                            <span>Less</span>
                            <div className="flex gap-1">
                                {[0, 1, 2, 3, 4].map((level) => (
                                    <div
                                        key={level}
                                        className={`h-3 w-3 rounded-sm ${getLevelColor(level)}`}
                                    />
                                ))}
                            </div>
                            <span>More</span>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
