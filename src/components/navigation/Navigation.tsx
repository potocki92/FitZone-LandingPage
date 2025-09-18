"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { NavigationLogo } from "./NavigationLogo";
import { NavigationMenu } from "./NavigationMenu";
import { MobileMenu } from "./MobileMenu";
import { SocialSidebar } from "./SocialSidebar";
import useScrollToElement from "@/hooks/useScrollToElement";
import FitzoneApiComponent from "@/data/api";
import { prefixes } from "@/types/types";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigationPrefix = prefixes.navigation;

  const scrollToElement = useScrollToElement();
  const { getNavigationItems } = FitzoneApiComponent();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    scrollToElement({ id, onScroll: () => setIsMenuOpen(false) });
  };
  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md shadow-lg shadow-black/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <NavigationLogo onClick={() => handleScrollToSection("home")} />
            <NavigationMenu
              items={getNavigationItems(navigationPrefix)}
              scrollToSection={handleScrollToSection}
            />

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden bg-orange-500/20 hover:bg-orange-500 text-white border border-orange-500/30 hover:border-orange-500 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  }`}
                />
                <X
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                  }`}
                />
              </div>
            </Button>
          </div>
        </div>

        <MobileMenu
          items={getNavigationItems(navigationPrefix)}
          isOpen={isMenuOpen}
          scrollToSection={handleScrollToSection}
        />
      </nav>

      <SocialSidebar />
    </>
  );
};
