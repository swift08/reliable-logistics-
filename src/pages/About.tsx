import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VisionValuesSection from "@/components/VisionValuesSection";
import OurTeamSection from "@/components/OurTeamSection";
import CoreStrengthsSection from "@/components/CoreStrengthsSection";

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-16">
      <VisionValuesSection />
      <OurTeamSection />
      <CoreStrengthsSection />
    </main>
    <Footer />
  </div>
);

export default About;
