import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";
import BackgroundFX from "@/components/BackgroundFX";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import CursorFollower from "@/components/CursorFollower";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function setHeaderCssVar() {
  const header = document.querySelector("header");
  const h = header ? Math.ceil(header.getBoundingClientRect().height) : 88;
  document.documentElement.style.setProperty("--header-height", `${h}px`);
}

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    // set CSS var on load and on resize
    setHeaderCssVar();
    const ro = new ResizeObserver(() => setHeaderCssVar());
    const header = document.querySelector("header");
    if (header) ro.observe(header);
    window.addEventListener("resize", setHeaderCssVar);

    return () => {
      window.removeEventListener("resize", setHeaderCssVar);
      if (header) ro.unobserve(header);
    };
  }, []);

  useEffect(() => {
    const runScrollToHash = () => {
      // derive target id from hash or pathname
      let currentHash = window.location.hash || hash;
      if (!currentHash) {
        const pn = window.location.pathname;
        if (pn === "/projects") currentHash = "#projects";
        else if (pn === "/skills") currentHash = "#skills";
        else if (pn === "/timeline") currentHash = "#timeline";
        else if (pn === "/contact") currentHash = "#contact";
        else if (pn === "/about") currentHash = "#about";
      }
      if (!currentHash) return;
      const id = currentHash.replace("#", "");

      let attempts = 0;
      const maxAttempts = 12;

      const tryScroll = () => {
        attempts += 1;
        const el = document.getElementById(id);
        if (el) {
          const header = document.querySelector("header");
          const headerHeight = header
            ? header.getBoundingClientRect().height
            : 88;
          const rect = el.getBoundingClientRect();
          const top = window.scrollY + rect.top - headerHeight - 12;
          window.scrollTo({ top, behavior: "smooth" });
          return;
        }
        if (attempts < maxAttempts) {
          setTimeout(tryScroll, 80 + attempts * 30);
        }
      };

      // start after a short delay to let route render
      setTimeout(tryScroll, 40);
    };

    // run on location change and on hashchange
    runScrollToHash();
    window.addEventListener("hashchange", runScrollToHash);

    return () => {
      window.removeEventListener("hashchange", runScrollToHash);
    };
  }, [hash, pathname]);

  return null;
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BackgroundFX />
      <CursorFollower />
      <BrowserRouter>
        <SiteHeader />
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Index />} />
          <Route path="/projects/:name" element={<ProjectDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <SiteFooter />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const _container = document.getElementById("root")!;
// Reuse existing root when available (prevents createRoot being called twice during HMR)
if ((window as any).__root) {
  (window as any).__root.render(<App />);
} else {
  const _root = createRoot(_container);
  (window as any).__root = _root;
  _root.render(<App />);
}
