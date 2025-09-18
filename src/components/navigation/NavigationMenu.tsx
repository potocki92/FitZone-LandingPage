"use client";

import { NavigationMenuInterface } from "@/types/types";

export const NavigationMenu = ({ items, scrollToSection }: NavigationMenuInterface) => (
  <div className="hidden md:flex items-center space-x-8">
    {items.map((item) => (
      <button
        key={item.id}
        onClick={() => scrollToSection(item.id)}
        className="relative text-white hover:text-orange-500 transition-all duration-300 font-medium group py-2 cursor-pointer"
      >
        {item.name}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
      </button>
    ))}
  </div>
);
