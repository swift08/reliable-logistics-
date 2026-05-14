import { lazy, Suspense } from "react";
import MissionBar from "@/components/MissionBar";
import FeatureBar from "@/components/FeatureBar";
import StorySection from "@/components/StorySection";

const HomePageRest = lazy(() => import("@/components/HomePageRest"));

const belowRestFallback = (
  <div className="min-h-[min(70vh,900px)] w-full max-w-full bg-muted/15" aria-busy="true" aria-label="Loading section" />
);

const BelowFold = () => (
  <>
    <MissionBar />
    <FeatureBar />
    <section id="story" className="scroll-mt-20">
      <StorySection />
    </section>
    <Suspense fallback={belowRestFallback}>
      <HomePageRest />
    </Suspense>
  </>
);

export default BelowFold;
