import React from "react";

export default function LoadingSpinner({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse shadow-lg" />
      <div className="text-sm text-muted-foreground">Loading…</div>
    </div>
  );
}
