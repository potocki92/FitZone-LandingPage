"use client";

import BackgroundLayer from "./BackgroundLayer";
import AnimateDots from "../animate-dots";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import StatsCards from "./StatsCards";
import ScrollIndicator from "./ScrollIndicator";

export function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative inset-0 flex items-center justify-center overflow-hidden bg-black z-0"
    >
      <BackgroundLayer />
      <AnimateDots />
      <div className="relative z-10 container mx-auto px-20 flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center max-w-4xl">
          <HeroTitle />
          <HeroDescription scrollToContact={scrollToContact} />
        </div>
        <StatsCards />
      </div>
      <ScrollIndicator />
    </section>
  );
}
