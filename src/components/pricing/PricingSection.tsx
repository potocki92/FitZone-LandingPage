"use client";

import type React from "react";
import PricingCard from "./PricingCard";
import PricingFooter from "./PricingFooter";
import FitzoneApiComponent from "@/data/api";
import useScrollToElement from "@/hooks/useScrollToElement";
import { useSelectedPlan } from "@/hooks/useSelectedPlan";
import { prefixes } from "@/types/types";
import SectionHeader from "../SectionHeader";

export const PricingSection = () => {
  const { getPlans } = FitzoneApiComponent();
  const plansPrefix = prefixes.plans;
  const { setSelectedPlan } = useSelectedPlan();
  const scrollToElement = useScrollToElement();
  const hadlePlanClick = (planName: string) => {
    scrollToElement({
      id: "contact",
      onScroll: () => setSelectedPlan(planName),
    });
  };
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader translationNamespace="pricing"/>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {getPlans(plansPrefix).map((plan, i) => (
            <PricingCard
              key={i}
              {...plan}
              onClick={() => hadlePlanClick(plan.name)}
            />
          ))}
        </div>

        <PricingFooter />
      </div>
    </section>
  );
};
