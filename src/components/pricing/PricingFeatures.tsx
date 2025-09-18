import { Check } from "lucide-react";

type Props = {
  features: string[];
};

const PricingFeatures = ({ features }: Props) => {
  return (
    <ul className="space-y-3 mb-6">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-3">
          <Check className="w-5 h-5 text-primary flex-shrink-0" />
          <span className="text-card-foreground text-sm">{feature}</span>
        </li>
      ))}
    </ul>
  );
};

export default PricingFeatures;
