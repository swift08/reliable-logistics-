import WhyChooseSection from "@/components/WhyChooseSection";
import ToolsSection from "@/components/ToolsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrackRecordSection from "@/components/TrackRecordSection";
import PanIndiaSection from "@/components/PanIndiaSection";
import ClientsSection from "@/components/ClientsSection";
import StatsSection from "@/components/StatsSection";
import ImpactSection from "@/components/ImpactSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import LiveTrackingSection from "@/components/LiveTrackingSection";
import Footer from "@/components/Footer";

/**
 * Lazy-loaded tail of the home page so the initial BelowFold chunk stays small
 * (MissionBar, FeatureBar, Story stay eager above the fold).
 */
const HomePageRest = () => (
  <>
    <WhyChooseSection />
    <div id="tools" className="scroll-mt-20">
      <ToolsSection />
    </div>
    <TestimonialsSection />
    <TrackRecordSection />
    <PanIndiaSection />
    <ClientsSection />
    <StatsSection />
    <section className="grid w-full max-w-full grid-cols-1 gap-0 overflow-hidden md:grid-cols-2">
      <ImpactSection />
      <LiveTrackingSection />
    </section>
    <SustainabilitySection />
    <Footer />
  </>
);

export default HomePageRest;
