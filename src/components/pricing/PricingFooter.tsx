import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const PricingFooter = () => {
  const t = useTranslations("pricing");

  return (
    <div className="text-center mt-12">
      <p className="text-muted-foreground mb-4">{t("footerNote")}</p>
      <Button
        variant="outline"
        className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent cursor-pointer"
      >
        {t("compare")}
      </Button>
    </div>
  );
};

export default PricingFooter;
