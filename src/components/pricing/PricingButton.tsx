import { Button } from "@/components/ui/button";
import { PricingButtonInterface } from "@/types/types";
import { useTranslations } from "next-intl";

const PricingButton = ({ popular, onClick }: PricingButtonInterface) => {
  const t = useTranslations("pricing");

  return (
    <Button
      onClick={onClick}
      className={`w-full ${
        popular
          ? "bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse-glow"
          : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
      } mt-auto cursor-pointer`}
      size="lg"
    >
      {t("cta")}
    </Button>
  );
};

export default PricingButton;
