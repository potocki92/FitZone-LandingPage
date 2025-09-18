import { Card, CardContent } from "@/components/ui/card"
import { TestimonialInterface } from "@/types/types"
import { Star } from "lucide-react"

export const TestimonialCard = ({ name, image, rating, comment }: TestimonialInterface) => (
  <Card className="bg-card border-border hover:border-accent/50 transition-all duration-300">
    <CardContent className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image || "/placeholder.svg?height=60&width=60&query=person portrait"}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-4 border-primary/20 shadow-lg"
        />
        <div>
          <h4 className="text-lg font-semibold text-card-foreground mb-1">{name}</h4>
          <div className="flex gap-1">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-muted-foreground text-sm text-pretty leading-relaxed">"{comment}"</p>
    </CardContent>
  </Card>
)
