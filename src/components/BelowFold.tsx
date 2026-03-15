import MissionBar from "@/components/MissionBar";
import FeatureBar from "@/components/FeatureBar";
import PanIndiaSection from "@/components/PanIndiaSection";
import StorySection from "@/components/StorySection";
import ToolsSection from "@/components/ToolsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrackRecordSection from "@/components/TrackRecordSection";
import ClientsSection from "@/components/ClientsSection";
import StatsSection from "@/components/StatsSection";
import ImpactSection from "@/components/ImpactSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import LiveTrackingSection from "@/components/LiveTrackingSection";
import Footer from "@/components/Footer";

const BelowFold = () => (
  <>
    <MissionBar />
    <FeatureBar />
    <section id="story" className="scroll-mt-20">
      <StorySection />
    </section>
    <div id="tools" className="scroll-mt-20">
      <ToolsSection />
    </div>
    <WhyChooseSection />
    <TestimonialsSection />
    <TrackRecordSection />
    <PanIndiaSection />
    <ClientsSection />
    <StatsSection />
    <section className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full max-w-full overflow-hidden">
      <ImpactSection />
      <LiveTrackingSection />
    </section>
    <SustainabilitySection />
    <Footer />
  </>
);

export default BelowFold;
