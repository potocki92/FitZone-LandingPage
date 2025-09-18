"use client"

import { useState, useEffect } from "react"
import { TestimonialCard } from "./TestimonialCard"

export const TestimonialsCarousel = ({ testimonials }: { testimonials: any[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [testimonials.length, isAutoPlaying])

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX)
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX)
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > 50) {
      setIsAutoPlaying(false)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      setTimeout(() => setIsAutoPlaying(true), 5000)
    }
    if (distance < -50) {
      setIsAutoPlaying(false)
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
      setTimeout(() => setIsAutoPlaying(true), 5000)
    }
  }

  return (
    <div className="md:hidden relative max-w-lg mx-auto">
      <div
        className="overflow-hidden rounded-2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="w-full flex-shrink-0 px-4">
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
