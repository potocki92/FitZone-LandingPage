"use client";

import { Facebook, Twitter, Instagram, Search } from "lucide-react";

const socialLinks = [
  { Icon: Facebook, href: "#" },
  { Icon: Twitter, href: "#" },
  { Icon: Instagram, href: "#" },
  { Icon: Search, href: "#" },
];

export const SocialSidebar = () => (
  <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-6">
    <div className="w-px h-16 bg-gradient-to-b from-transparent via-orange-500 to-transparent mb-4"></div>

    {socialLinks?.map(({ Icon, href }, index) => (
      <a
        key={index}
        href={href}
        className="p-3 text-gray-400 hover:text-orange-500 transition-all duration-300 hover:bg-orange-500/10 rounded-full hover-lift group"
      >
        <Icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
      </a>
    ))}

    <div className="w-px h-16 bg-gradient-to-b from-orange-500 via-transparent to-transparent mt-4"></div>
  </div>
);
