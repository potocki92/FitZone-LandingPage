"use client";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "../ui/card";
type Trainer = {
  name: string;
  specialty: string;
  image: string;
  description: string;
};
const HeadTrainerCard = ({ trainer }: { trainer: Trainer }) => {
  const t = useTranslations("trainers.headTrainer");
  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 group cursor-pointer">
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative">
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-[150px] h-[150px] rounded-full object-cover border-6 border-primary/20 shadow-2xl group-hover:border-primary/40 transition-all duration-300"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground text-sm px-4 py-2 rounded-full uppercase font-bold shadow-lg">
              {t("badge")}
            </div>
          </div>

          <div className="flex-1 text-center md:text-left space-y-4">
            <h3 className="text-3xl font-bold text-card-foreground group-hover:text-primary transition-colors">
              {trainer.name}
            </h3>
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-lg font-semibold">
              {trainer.specialty}
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed text-pretty max-w-2xl">
              {trainer.description}
            </p>
            <div className="flex items-center gap-3 justify-center md:justify-start text-primary font-medium">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              {t("consultation")}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default HeadTrainerCard;
