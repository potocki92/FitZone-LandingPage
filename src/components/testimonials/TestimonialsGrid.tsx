import { TestimonialCard } from "./TestimonialCard"

export const TestimonialsGrid = ({ testimonials }: { testimonials: any[] }) => (
  <div className="hidden md:block">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {testimonials.map((t, i) => (
        <TestimonialCard key={i} {...t} />
      ))}
    </div>
  </div>
)
