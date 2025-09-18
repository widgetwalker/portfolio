import React from "react";

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dheeraj. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#projects" onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, "", "/#projects");
              const el = document.getElementById("projects");
              const header = document.querySelector("header");
              const headerHeight = header ? header.getBoundingClientRect().height : 88;
              if (el) {
                const rect = el.getBoundingClientRect();
                const top = window.scrollY + rect.top - headerHeight - 12;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }} className="hover:text-foreground">Projects</a>
            <a href="#skills" onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, "", "/#skills");
              const el = document.getElementById("skills");
              const header = document.querySelector("header");
              const headerHeight = header ? header.getBoundingClientRect().height : 88;
              if (el) {
                const rect = el.getBoundingClientRect();
                const top = window.scrollY + rect.top - headerHeight - 12;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }} className="hover:text-foreground">Skills</a>
            <a href="#contact" onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, "", "/#contact");
              const el = document.getElementById("contact");
              const header = document.querySelector("header");
              const headerHeight = header ? header.getBoundingClientRect().height : 88;
              if (el) {
                const rect = el.getBoundingClientRect();
                const top = window.scrollY + rect.top - headerHeight - 12;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }} className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
