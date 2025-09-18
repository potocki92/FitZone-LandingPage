"use client";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "../ui/card";
import { TrainerInterface } from "@/types/types";
const TrainerCard = ({
  trainer,
  isEven,
}: {
  trainer: TrainerInterface;
  isEven: boolean;
}) => {
  const t = useTranslations("trainers");
  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 group cursor-pointer">
      <CardContent className="p-6">
        <div
          className={`flex flex-col ${
            isEven ? "md:flex-row" : "md:flex-row-reverse"
          } items-center gap-6`}
        >
          <div className="relative flex-shrink-0">
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-[150px] h-[150px] rounded-full object-cover border-4 border-primary/20 shadow-lg group-hover:border-primary/40 transition-all duration-300"
            />
            <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-semibold">
              PRO
            </div>
          </div>

          <div
            className={`flex-1 space-y-3 ${
              isEven ? "text-center md:text-left" : "text-center md:text-right"
            }`}
          >
            <h3 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">
              {trainer.name}
            </h3>
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
              {trainer.specialty}
            </div>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              {trainer.description}
            </p>
            <div
              className={`flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                isEven
                  ? "justify-center md:justify-start"
                  : "justify-center md:justify-end"
              }`}
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              {t("consultation")}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default TrainerCard;
