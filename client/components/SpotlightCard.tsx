import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, HTMLMotionProps } from "framer-motion";

interface SpotlightCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    spotlightColor?: string;
    tilt?: boolean;
}

export default function SpotlightCard({
    children,
    className = "",
    spotlightColor = "rgba(255, 255, 255, 0.1)",
    tilt = true,
    ...props
}: SpotlightCardProps) {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    // 3D Tilt values
    const xValue = useMotionValue(0);
    const yValue = useMotionValue(0);
    
    // Smooth, snapy spring physics
    const springConfig = { stiffness: 300, damping: 30, mass: 0.5 };
    const rotateX = useSpring(useTransform(yValue, [-0.5, 0.5], [10, -10]), springConfig);
    const rotateY = useSpring(useTransform(xValue, [-0.5, 0.5], [-10, 10]), springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        // Position for spotlight glow
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        
        // Position for 3D tilt calculation (-0.5 to 0.5)
        if (tilt) {
            xValue.set((e.clientX - rect.left) / rect.width - 0.5);
            yValue.set((e.clientY - rect.top) / rect.height - 0.5);
        }
    };

    const handleFocus = () => setOpacity(1);
    const handleBlur = () => setOpacity(0);
    const handleMouseEnter = () => setOpacity(1);

    const handleMouseLeave = () => {
        setOpacity(0);
        if (tilt) {
            xValue.set(0);
            yValue.set(0);
        }
    };

    return (
        <motion.div
            ref={divRef as any}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={tilt ? { rotateX, rotateY, transformPerspective: 1000 } : {}}
            className={`relative overflow-hidden rounded-xl border border-white/20 bg-black/75 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] card-hover ${className}`}
            {...props}
        >
            {/* Added a subtle white noise texture overlay for absolute premium glassmorphism feel */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')"}} />
            
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
                }}
            />
            <div className="relative h-full">{children}</div>
        </motion.div>
    );
}
