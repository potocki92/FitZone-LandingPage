"use client";

import { TestimonialsGrid } from "./TestimonialsGrid";
import { TestimonialsCarousel } from "./TestimonialsCarousel";
import { useTranslations } from "next-intl";
import { testimonialsSectionReview } from "@/data/api";
import SectionHeader from "../SectionHeader";

export function TestimonialsSection() {
  const t = useTranslations("testimonials");
  const testimonials = t
    .raw("reviews")
    .map((review: String, index: number) => ({
      name: testimonialsSectionReview[index]?.name || `Member ${index + 1}`,
      image: testimonialsSectionReview[index]?.image || "/default-avatar.png",
      rating: 5,
      comment: review,
    }));
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader translationNamespace="testimonials"/>
        <TestimonialsGrid testimonials={testimonials} />
        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
