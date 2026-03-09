import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const BelowFold = lazy(() => import("@/components/BelowFold"));

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

  return (
    <div id="top" className="min-h-screen bg-background">
      <Navbar />
      <ErrorBoundary>
        <HeroSection />
        <Suspense fallback={null}>
          <BelowFold />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Index;
