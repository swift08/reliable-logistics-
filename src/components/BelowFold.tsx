import MissionBar from "@/components/MissionBar";
import FeatureBar from "@/components/FeatureBar";
import ServicesSection from "@/components/ServicesSection";
import StorySection from "@/components/StorySection";
import VisionValuesSection from "@/components/VisionValuesSection";
import ToolsSection from "@/components/ToolsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ClientsSection from "@/components/ClientsSection";
import StatsSection from "@/components/StatsSection";
import ImpactSection from "@/components/ImpactSection";
import LiveTrackingSection from "@/components/LiveTrackingSection";
import Footer from "@/components/Footer";

/**
 * Below-the-fold content loaded lazily so the initial page (Navbar + Hero) loads fast.
 */
const BelowFold = () => (
  <>
    <MissionBar />
    <FeatureBar />
    <div id="services" className="pt-4 scroll-mt-20">
      <ServicesSection />
    </div>
    <div id="story">
      <StorySection />
    </div>
    <VisionValuesSection />
    <div id="tools">
      <ToolsSection />
    </div>
    <WhyChooseSection />
    <TestimonialsSection />
    <ClientsSection />
    <StatsSection />
    <ImpactSection />
    <LiveTrackingSection />
    <Footer />
  </>
);

export default BelowFold;
