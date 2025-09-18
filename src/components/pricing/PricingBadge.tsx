import { Star } from "lucide-react";
import { useTranslations } from "next-intl";

const PricingBadge = () => {
  const t = useTranslations("pricing");

  return (
    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
      <div className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 shadow-xl shadow-primary/30">
        <Star className="w-5 h-5" />
        {t("popular")}
      </div>
    </div>
  );
};

export default PricingBadge;
