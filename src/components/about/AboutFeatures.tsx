"use client";
import AboutFeatureCard from "./AboutFeatureCard";
import FitzoneApiComponent from "@/data/api";
import { prefixes } from "@/types/types";

const AboutFeatures = () => {
  const { getFeatures } = FitzoneApiComponent();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {getFeatures(prefixes.features).map((feature) => (
        <AboutFeatureCard
          key={feature.title}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default AboutFeatures;
