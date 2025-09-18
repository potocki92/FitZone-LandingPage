"use client";
import { MapPin, Phone, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

export const FooterContact = () => {
  const t = useTranslations();
  return (
    <div>
      <h3 className="text-lg font-semibold text-card-foreground mb-4">
        {t("footer.contact")}
      </h3>
      <div className="text-xs space-y-3">
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
          <span className="text-muted-foreground">{t("contact.info.address.street") + ", " + t("contact.info.address.city")}</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-primary flex-shrink-0" />
          <span className="text-muted-foreground">+48 123 456 789</span>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-accent flex-shrink-0" />
          <span className="text-muted-foreground">{t("contact.info.email.address")}</span>
        </div>
      </div>
    </div>
  );
};
