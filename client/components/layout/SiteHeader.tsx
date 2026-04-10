import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router-dom";
import Magnetic from "@/components/ui/Magnetic";
import TerminalOverlay from "@/components/TerminalOverlay";

const nav = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#timeline", label: "Timeline" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    
    // If not on home page, push to home page with the hash
    if (location.pathname !== "/") {
      navigate("/" + href);
      setOpen(false);
      return;
    }

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
    setOpen(false);
  };

  return (
    <>
      <TerminalOverlay isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
      <header className="fixed top-0 z-40 w-full">
        <div className="mx-auto max-w-7xl px-4">
          <div
            className={cn(
              "mt-4 flex items-center justify-between rounded-xl border bg-card/70 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-card/60",
              "border-white/10",
            )}
          >
            <a href="/" onClick={(e) => {
              e.preventDefault();
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} className="group inline-flex items-center gap-2">
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

            <nav className="hidden gap-2 text-sm font-medium sm:flex">
              {nav.map((item) => (
                <Magnetic key={item.href} strength={20}>
                  <a
                    href={`/${item.href}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="px-4 py-2 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </Magnetic>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Magnetic strength={20}>
                <button
                  onClick={() => setIsTerminalOpen(true)}
                  aria-label="Open Developer Mode"
                  className="hidden md:inline-flex items-center justify-center rounded-md border border-primary/30 bg-primary/10 px-3 py-2.5 text-sm font-mono font-bold text-primary shadow-[0_0_10px_rgba(var(--primary),0.2)] backdrop-blur-md transition-all hover:bg-primary/20 hover:shadow-[0_0_15px_rgba(var(--primary),0.4)]"
                >
                  &gt;_ DEV
                </button>
              </Magnetic>
              
              <Magnetic strength={30}>
                <a
                  href={`https://github.com/${import.meta.env.VITE_GITHUB_USERNAME || "widgetwalker"}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_15px_rgba(255,255,255,0.05)] backdrop-blur-md transition-all hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                  Connect
                </a>
              </Magnetic>

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
              <button
                 onClick={() => {
                   setOpen(false);
                   setIsTerminalOpen(true);
                 }}
                 className="flex w-full rounded-lg px-3 py-2 text-sm text-primary font-mono font-bold hover:bg-muted/30"
              >
                &gt;_ DEV MODE
              </button>
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={`/${item.href}`}
                  className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted/30 hover:text-foreground"
                  onClick={(e) => handleNavClick(e as any, item.href)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>
    </>
  );
}
