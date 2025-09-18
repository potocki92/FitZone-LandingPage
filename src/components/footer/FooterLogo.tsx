"use client";

import { footerSocials } from "@/data/api";
import FitZoneIcon from "../fitzone-icon";

export const FooterLogo = ({ t }: { t: (key: string) => string }) => (
  <div className="space-y-4">
    <div className="flex items-center gap-2">
      <FitZoneIcon />
      <span className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors duration-300">
        FITZONE
      </span>
    </div>

    <p className="text-xs text-muted-foreground text-pretty">
      {t("description")}
    </p>

    <div className="flex gap-4">
      {footerSocials.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  </div>
);
