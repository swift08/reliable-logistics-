import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutBody = lazy(() =>
  Promise.all([import("@/components/VisionValuesSection"), import("@/components/CoreStrengthsSection")]).then(
    ([{ default: VisionValuesSection }, { default: CoreStrengthsSection }]) => ({
      default: function AboutBodyInner() {
        return (
          <>
            <VisionValuesSection />
            <CoreStrengthsSection />
          </>
        );
      },
    })
  )
);

const SectionSkeleton = () => (
  <div className="min-h-[900px] w-full bg-muted/30 animate-pulse" aria-hidden />
);

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-16">
      <Suspense fallback={<SectionSkeleton />}>
        <AboutBody />
      </Suspense>
    </main>
    <Footer />
  </div>
);

export default About;
