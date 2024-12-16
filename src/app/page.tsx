import React from "react";
import Index from "./index";
import HeroSection from "./hero/page";
import AboutSection from "./about/page";
import PortfolioSection from "./portfolio/page";
import SkillsSection from "./skills/page";
import ServicesSection from "./services/page";
import TestimonialsSection from "./testimonial/page";
import ContactSection from "./contact/page";

const HomePage: React.FC = () => {
  return (
    <Index>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </Index>
  );
};

export default HomePage;
