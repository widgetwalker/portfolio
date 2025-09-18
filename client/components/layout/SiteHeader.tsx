import React, { useState } from "react";
import { cn } from "@/lib/utils";
const nav = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#timeline", label: "Timeline" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (window.location.hash !== href) {
      // update hash which ScrollToHash listens to
      window.location.hash = href;
    } else {
      // already on same hash, still trigger scroll
      const el = document.getElementById(href.replace("#", ""));
      if (el) {
        const header = document.querySelector("header");
        const headerHeight = header
          ? header.getBoundingClientRect().height
          : 88;
        const rect = el.getBoundingClientRect();
        const top = window.scrollY + rect.top - headerHeight - 12;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 z-40 w-full">
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={cn(
            "mt-4 flex items-center justify-between rounded-xl border bg-card/70 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-card/60",
            "border-white/10",
          )}
        >
          <a href="/" className="group inline-flex items-center gap-2">
            <div className="relative">
              <span className="text-gradient text-xl font-bold tracking-wider">
                DHEERAJ
              </span>
              <span className="absolute -right-4 -top-2 h-2 w-2 rounded-full bg-primary shadow-[0_0_18px_hsl(var(--primary))]" />
            </div>
            <span className="hidden text-sm text-muted-foreground sm:inline">
              Tech & CS
            </span>
          </a>

          <nav className="hidden gap-6 text-sm font-medium sm:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-muted-foreground transition hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/widgetwalker"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center rounded-md border border-white/10 bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md transition hover:opacity-90"
            >
              Connect
            </a>
            <button
              aria-label="Toggle menu"
              className="sm:hidden inline-flex size-9 items-center justify-center rounded-md border border-white/10 text-foreground"
              onClick={() => setOpen((v) => !v)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeWidth="2"
                  stroke="currentColor"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-2 overflow-hidden rounded-xl border border-white/10 bg-card/90 p-2 backdrop-blur sm:hidden">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted/30 hover:text-foreground"
                onClick={(e) => {
                  handleNavClick(e as any, item.href);
                  setOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
