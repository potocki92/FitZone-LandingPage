"use client";

import FitZoneIcon from "../fitzone-icon";

interface NavigationLogoProps {
  onClick: () => void;
}

export const NavigationLogo = ({ onClick }: NavigationLogoProps) => {
  return (
    <div
      className="flex items-center space-x-3 group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative">
        <FitZoneIcon />
        <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
      </div>
      <span className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors duration-300">
        FITZONE
      </span>
    </div>
  );
};
