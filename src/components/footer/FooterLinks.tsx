"use client";

import { footerLinks } from "@/data/api";

interface FooterLinksProps {
  t: (key: string) => string;
}

export const FooterLinks = ({ t }: FooterLinksProps) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-card-foreground mb-4">
        {t("quickLinks")}
      </h3>

      <ul className="text-xs space-y-2">
        {footerLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {t(link.key)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
