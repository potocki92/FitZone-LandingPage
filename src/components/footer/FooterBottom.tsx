"use client";
export const FooterBottom = ({ t, currentYear }: { t: (key: string) => string; currentYear: number }) => (
  <div className="border-t border-border mt-8 pt-8 text-center">
    <p className="text-xs text-muted-foreground">
      © {currentYear} FitZone. {t("allRightsReserved")}
      <span className="mx-2">|</span>
      <a href="#" className="hover:text-primary transition-colors">{t("privacyPolicy")}</a>
      <span className="mx-2">|</span>
      <a href="#" className="hover:text-primary transition-colors">{t("terms")}</a>
    </p>
  </div>
)
