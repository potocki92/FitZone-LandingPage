"use client";
import { SectionHeaderInterface } from "@/types/types";
import { useTranslations } from "next-intl";

const SectionHeader = ({
  translationNamespace,
  highlight,
}: SectionHeaderInterface) => {
  const t = useTranslations(translationNamespace);

  return (
    <div className="text-center mb-16 animate-fade-in-up">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
        {t("title")}{" "}
        <span className="text-primary">{highlight || t("highlight")}</span>
      </h2>
      {t("description") || t("subtitle") ? (
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
          {t("description") || t("subtitle")}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeader;
