"use client";
import { useTranslations } from "next-intl";

const AboutStory = () => {
  const t = useTranslations("about.story");
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-3xl font-bold mb-6 text-card-foreground">
          {t("title")}
        </h3>
        <p className="text-muted-foreground mb-4 text-pretty">
          {t("p1")}
        </p>
        <p className="text-muted-foreground text-pretty">
          {t("p2")}
        </p>
      </div>
      <div className="relative">
        <div className="aspect-video bg-muted rounded-lg overflow-hidden">
          <img
            src="/modern-gym-training-area-with-people-exercising.jpg"
            alt="FitZone gym interior"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl" />
      </div>
    </div>
  );
};
export default AboutStory;
