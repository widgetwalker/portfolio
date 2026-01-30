import React, { useEffect, useState } from "react";

export default function CursorFollower() {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
            return;
        }

        // Check if device is mobile
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
            return;
        }

        let animationFrameId: number;
        let currentX = -100;
        let currentY = -100;

        const handleMouseMove = (e: MouseEvent) => {
            const targetX = e.clientX;
            const targetY = e.clientY;

            // Smooth easing animation
            const ease = () => {
                const easing = 0.15;

                currentX += (targetX - currentX) * easing;
                currentY += (targetY - currentY) * easing;

                setPosition({
                    x: currentX,
                    y: currentY,
                });

                animationFrameId = requestAnimationFrame(ease);
            };

            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }

            ease();
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        // Hide default cursor
        document.body.style.cursor = "none";

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseenter", handleMouseEnter);
        document.addEventListener("mouseleave", handleMouseLeave);

        setTimeout(() => setIsVisible(true), 500);

        return () => {
            document.body.style.cursor = "auto";
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("mouseleave", handleMouseLeave);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    return (
        <div
            className="cursor-follower"
            style={{
                position: "fixed",
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: "80px",
                height: "80px",
                pointerEvents: "none",
                zIndex: 9999,
                opacity: isVisible ? 0.9 : 0,
                transition: "opacity 0.3s ease",
                transform: "translate(-50%, -50%)",
            }}
        >
            <img
                src="/cursor_follow.webp"
                alt="Chibi cursor"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))",
                }}
            />
        </div>
    );
}
