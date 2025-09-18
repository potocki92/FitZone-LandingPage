import { useTranslations } from "next-intl";

const StatsCards = () => {
  const t = useTranslations("stats");
  const stats = [
    { label: t("members"), value: "500+" },
    { label: t("trainers"), value: "50+" },
    { label: t("access"), value: "24/7" },
  ];

  return (
    <div className="absolute bottom-8 right-8 hidden xl:flex space-x-6 animate-fade-in-up animate-delay-800">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="glass-effect p-4 rounded-xl hover-lift w-20"
        >
          <div className="text-lg font-bold text-orange-500 mb-1">
            {stat.value}
          </div>
          <div className="text-white text-xs font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
