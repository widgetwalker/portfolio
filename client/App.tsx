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
    if (!hash) return;
    const id = hash.replace("#", "");
    // small timeout to allow page render
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const header = document.querySelector("header");
      const headerHeight = header ? header.getBoundingClientRect().height : 88;
      const rect = el.getBoundingClientRect();
      const top = window.scrollY + rect.top - headerHeight - 12;
      window.scrollTo({ top, behavior: "smooth" });
    }, 60);
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
      <BrowserRouter>
        <SiteHeader />
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/:name" element={<ProjectDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <SiteFooter />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
