import React, { lazy, Suspense } from "react";

// Lazy-load WebGL so it doesn't block initial CSS render
const ParticleGalaxy = lazy(() => import("./ParticleGalaxy"));

export default function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Dynamic 3D Galaxy background */}
      <Suspense fallback={null}>
        <ParticleGalaxy />
      </Suspense>

      {/* Subtle grid layer on top */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px, 48px 48px",
          backgroundPosition: "-1px -1px",
        }}
      />
      
      {/* Glow blobs to maintain the neon aesthetic baseline */}
      <div className="absolute -top-24 -left-24 h-[36rem] w-[36rem] rounded-full blur-[120px] pointer-events-none z-0" style={{
        background:
          "radial-gradient(closest-side, hsl(var(--primary) / 0.25), transparent)",
      }} />
      <div className="absolute top-1/3 -right-24 h-[32rem] w-[32rem] rounded-full blur-[120px] pointer-events-none z-0" style={{
        background:
          "radial-gradient(closest-side, hsl(var(--accent) / 0.25), transparent)",
      }} />
      <div className="absolute -bottom-32 left-1/4 h-[28rem] w-[28rem] rounded-full blur-[120px] pointer-events-none z-0" style={{
        background:
          "radial-gradient(closest-side, hsl(var(--secondary) / 0.2), transparent)",
      }} />
    </div>
  );
}
