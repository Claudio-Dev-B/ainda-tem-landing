import HeroSection from "@/components/HeroSection";
import AboutCourse from "@/components/AboutCourse";
import ModulesCarousel from "@/components/ModulesCarousel";
import ImagineSection from "@/components/ImagineSection";
import VideoSection from "@/components/VideoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InvestmentSection from "@/components/InvestmentSection";
import AboutEliene from "@/components/AboutEliene";
import FinalCTA from "@/components/FinalCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutCourse />
      <ModulesCarousel />
      <ImagineSection />
      <VideoSection />
      <TestimonialsSection />
      <InvestmentSection />
      <AboutEliene />
      <FinalCTA />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
