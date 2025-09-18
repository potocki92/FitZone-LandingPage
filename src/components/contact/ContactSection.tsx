"use client";

import ContactInfoCard from "./ContactInfoCard";
import ContactFormCard from "./ContactFormCard";
import SectionHeader from "../SectionHeader";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <SectionHeader translationNamespace="contact" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ContactInfoCard />
          <ContactFormCard />
        </div>
      </div>
    </section>
  );
}
