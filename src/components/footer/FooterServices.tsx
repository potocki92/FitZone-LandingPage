"use client";

import { footerServices } from "@/data/api";

export const FooterServices = ({ t }: { t: (key: string) => string }) => (
  <div>
    <h3 className="text-lg font-semibold text-card-foreground mb-4">
      {t("services")}
    </h3>
    <ul className="text-xs space-y-2">
      {footerServices.map(({ key }) => (
        <li key={key} className="text-muted-foreground">
          {t(key)}
        </li>
      ))}
    </ul>
  </div>
);
