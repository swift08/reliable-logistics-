import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ServicesSection = lazy(() => import("@/components/ServicesSection"));

const SectionSkeleton = () => (
  <div className="min-h-[900px] w-full bg-muted/30 animate-pulse" aria-hidden />
);

const Services = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    return () => clearTimeout(t);
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <Suspense fallback={<SectionSkeleton />}>
          <ServicesSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
