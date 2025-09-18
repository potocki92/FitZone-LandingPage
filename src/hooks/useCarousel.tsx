import { useState } from "react";

const useCarousel = (length: number) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStart(e.targetTouches[0].clientX);

  const handleTouchMove = (e: React.TouchEvent) =>
    setTouchEnd(e.targetTouches[0].clientX);

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50 && currentSlide < length - 1)
      setCurrentSlide((prev) => prev + 1);
    if (distance < -50 && currentSlide > 0) setCurrentSlide((prev) => prev - 1);
  };

  return { currentSlide, handleTouchStart, handleTouchMove, handleTouchEnd };
};

export default useCarousel;
