"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type SelectedPlanContextType = {
  selectedPlan: string | null;
  setSelectedPlan: (plan: string | null) => void;
};

const SelectedPlanContext = createContext<SelectedPlanContextType | undefined>(
  undefined
);

export function SelectedPlanProvider({ children }: { children: ReactNode }) {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <SelectedPlanContext.Provider value={{ selectedPlan, setSelectedPlan }}>
      {children}
    </SelectedPlanContext.Provider>
  );
}

export function useSelectedPlan() {
  const context = useContext(SelectedPlanContext);
  if (!context) {
    throw new Error("useSelectedPlan must be used inside SelectedPlanProvider");
  }
  return context;
}
