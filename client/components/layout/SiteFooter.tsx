import React from "react";
import { useNavigate } from "react-router-dom";

export default function SiteFooter() {
  const navigate = useNavigate();

  const navTo = (hash: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/${hash}`);
  };

  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dheeraj. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#projects" onClick={navTo("#projects")} className="hover:text-foreground">Projects</a>
            <a href="#skills" onClick={navTo("#skills")} className="hover:text-foreground">Skills</a>
            <a href="#contact" onClick={navTo("#contact")} className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
