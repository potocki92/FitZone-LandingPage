import { Card, CardContent } from "@/components/ui/card";
import { AboutFeatureCardInterface } from "../../types/types";


const AboutFeatureCard = ({
  icon: Icon,
  title,
  description,
}: AboutFeatureCardInterface) => {
  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
      <CardContent className="p-6 text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-card-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground text-pretty">{description}</p>
      </CardContent>
    </Card>
  );
};
export default AboutFeatureCard;
