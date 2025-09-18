import { ArrowRight, Play } from "lucide-react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

type HeroDescriptionProps = {
  scrollToContact: () => void;
};
const HeroDescription = ({ scrollToContact }: HeroDescriptionProps) => {
  const t = useTranslations("hero");
  return (
    <div className="max-w-xl text-center px-4 mb-10 flex flex-col gap-6 absolute left-0 bottom-20">
      <p className="text-gray-200 text-left text-base sm:text-lg md:text-sm leading-relaxed font-light tracking-wide animate-fade-in-up animate-delay-400">
        {t("description")}
      </p>
      <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up animate-delay-600">
        <Button
          onClick={scrollToContact}
          className="btn-premium text-white font-semibold px-10 py-4 rounded-full group text-lg cursor-pointer"
        >
          {t("explore")}
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
        </Button>
        <Button
          variant="ghost"
          className="text-white border-2 border-white/30 hover:border-orange-500/70 px-10 py-4 rounded-full transition-all duration-300 hover-lift group text-lg backdrop-blur-sm cursor-pointer"
        >
          <Play className="mr-2 h-5 w-5" />
          {t("watchDemo")}
        </Button>
      </div>
    </div>
  );
};
export default HeroDescription;
