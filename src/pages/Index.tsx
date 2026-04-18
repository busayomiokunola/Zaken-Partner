import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ServicesSection from "@/components/ServicesSection";
import ValueSection from "@/components/ValueSection";
import AudienceSection from "@/components/AudienceSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <div id="services">
        <ServicesSection />
      </div>
      <ValueSection />
      <div id="about">
        <AudienceSection />
      </div>
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
