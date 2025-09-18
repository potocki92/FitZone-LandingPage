import { HeroSection } from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import TrainersSection from "@/components/trainers/TrainersSection";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/footer/Footer";
import { Navigation } from "@/components/navigation/Navigation";

export default function HomePage() {
  return (
    <main className="relative">
      <Navigation />

      <HeroSection />
      <AboutSection />
      <PricingSection />
      <TrainersSection />
      <TestimonialsSection />
      <ContactSection />
      
      <Footer />
    </main>
  );
}
