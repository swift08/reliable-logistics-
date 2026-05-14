import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import heroLcpUrl from "@/assets/hero-truck-sunrise.jpg?url";

const BelowFold = lazy(() => import("@/components/BelowFold"));

const belowFoldFallback = (
  <div className="min-h-[1200px] w-full max-w-full bg-muted/20" aria-busy="true" aria-label="Loading content" />
);

const Index = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const scrollToEl = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    scrollToEl();
    const t = setTimeout(scrollToEl, 500);
    return () => clearTimeout(t);
  }, [hash]);

  useEffect(() => {
    if (document.querySelector('link[data-hero-lcp="1"]')) return;
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = heroLcpUrl;
    link.setAttribute("fetchpriority", "high");
    link.dataset.heroLcp = "1";
    document.head.appendChild(link);
    return () => {
      link.remove();
    };
  }, []);

  return (
    <div id="top" className="min-h-screen bg-background w-full overflow-x-hidden min-w-0">
      <Navbar />
      <ErrorBoundary>
        <HeroSection />
        <Suspense fallback={belowFoldFallback}>
          <BelowFold />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Index;
