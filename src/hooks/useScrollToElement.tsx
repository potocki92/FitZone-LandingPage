import { ScrollOptionsInterface } from "@/types/types";
import { useCallback } from "react";

const useScrollToElement = () => {
  const scrollToElement = useCallback(
    ({
      id,
      onScroll,
      behavior = "smooth",
      block = "start",
    }: ScrollOptionsInterface) => {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior, block });
      if (onScroll) onScroll();
    },
    []
  );

  return scrollToElement;
};
export default useScrollToElement;
