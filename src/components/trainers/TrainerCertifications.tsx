import { useTranslations } from "next-intl";

const TrainerCertifications = () => {
  const t = useTranslations("trainers");

  const speciality = t.raw("certification.speciality") as string[];
  return (
    <div className="text-center mt-12">
      <p className="text-muted-foreground mb-4">
        {t("certification.description")}
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        {speciality.map((specialty) => (
          <span
            key={specialty}
            className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium"
          >
            {specialty}
          </span>
        ))}
      </div>
    </div>
  );
};
export default TrainerCertifications;
