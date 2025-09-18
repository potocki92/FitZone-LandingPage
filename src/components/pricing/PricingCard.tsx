import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PricingBadge from "./PricingBadge";
import PricingFeatures from "./PricingFeatures";
import PricingButton from "./PricingButton";
import { PlanInterface } from "@/types/types";

type Props = PlanInterface & {
  onClick: () => void;
};
const PricingCard = ({
  name,
  price,
  period,
  description,
  features,
  popular,
  onClick,
}: Props) => {
  
  return (
    <Card
      className={`relative bg-card border-border flex flex-col ${
        popular ? "border-primary md:scale-105 shadow-2xl shadow-primary/20" : ""
      }`}
    >
      {popular && <PricingBadge />}
      <div className="flex-1 flex flex-col justify-between pt-6">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl font-bold text-card-foreground">
            {name}
          </CardTitle>
          <p className="text-muted-foreground">{description}</p>
          <div className="mt-4">
            <span className="text-4xl font-bold text-primary">{price} zł</span>
            <span className="text-muted-foreground">/{period}</span>
          </div>
        </CardHeader>

        <CardContent className="pt-0 flex flex-col flex-1 justify-between">
          <PricingFeatures features={features} />
          <PricingButton popular={popular} onClick={onClick} />
        </CardContent>
      </div>
    </Card>
  );
};

export default PricingCard;
