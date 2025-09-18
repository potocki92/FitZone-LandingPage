"use client";

import { NavigationMenuInterface } from "@/types/types";

export const MobileMenu = ({ items, isOpen, scrollToSection }: NavigationMenuInterface) => (
  <div
    className={`md:hidden transition-all duration-500 overflow-hidden ${
      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
    }`}
  >
    <div className="bg-black/95 backdrop-blur-md border-t border-orange-500/20">
      <div className="px-4 py-6 space-y-4">
        {items.map((item, index) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="block w-full text-left px-4 py-3 text-white hover:text-orange-500 hover:bg-orange-500/10 rounded-lg transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  </div>
);
