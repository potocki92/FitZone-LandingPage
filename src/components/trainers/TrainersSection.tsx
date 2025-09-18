"use client";
import { useTranslations } from "next-intl";
import HeadTrainerCard from "./HeadTrainerCard";
import TrainerCard from "./TrainerCard";
import TrainerCertifications from "./TrainerCertifications";
import SectionHeader from "../SectionHeader";
import FitzoneApiComponent from "@/data/api";

const TrainersSection = () => {
  const t = useTranslations("trainers");
  const { getTrainers } = FitzoneApiComponent();
  return (
    <section id="trainers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader translationNamespace="trainers" />
        <div className="max-w-6xl mx-auto space-y-8">
          <HeadTrainerCard trainer={getTrainers()[0]} />
          <div className="grid gap-6">
            {getTrainers()
              .slice(1)
              .map((trainer, index) => (
                <TrainerCard
                  key={trainer.name}
                  trainer={trainer}
                  isEven={index % 2 === 0}
                />
              ))}
          </div>
        </div>
        <TrainerCertifications />
      </div>
    </section>
  );
};
export default TrainersSection;
