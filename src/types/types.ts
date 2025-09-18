import { LucideIcon } from "lucide-react";

export const plans = ["Basic", "Standard", "Premium"] as const;

export const prefixes = {
  plans: "pricing.plans",
  navigation: "navigation",
  features: "about.features",
  trainers: "trainers",
} as const;

export type PlanType = (typeof plans)[number];

export interface PlanInterface {
  name: PlanType;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}

export interface ScrollOptionsInterface {
  id: string;
  onScroll?: () => void;
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
}

export interface SectionHeaderInterface {
  translationNamespace: string;
  highlight?: string;
}

export interface AboutFeatureCardInterface {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TrainerInterface {
  name: string;
  specialty: string;
  image: string;
  description: string;
}

export interface PricingButtonInterface {
  popular?: boolean;
  onClick: () => void;
}

interface MenuItem {
  name: string;
  id: string;
}

export interface NavigationMenuInterface {
  items: MenuItem[];
  isOpen: boolean;
  scrollToSection: (id: string) => void;
}
export interface TestimonialInterface {
  name: string;
  image: string;
  rating: number;
  comment: string;
}

export interface ContactFormDataInterace {
  plan: string;
  name: string;
  email: string;
  message: string;
}
