"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

interface GoldRateContextValue {
  goldRate: string | number;
  getGoldRate: () => Promise<void>;
  goldRateFormatted: string;
}

const GoldRateContext = createContext<GoldRateContextValue | null>(null);

export function GoldRateProvider({ children }: { children: ReactNode }) {
  const [goldRate, setGoldRate] = useState(0);

  const getGoldRate = async () => {
    try {
     const response = await fetch("/api/gold-rate", { cache: "no-store" });
      const data = await response.json();
      setGoldRate(data?.data?.gold_rate || 0);
    } catch (error) {
      setGoldRate(0);
      console.error(error);
    }
  };

  useEffect(() => {
    getGoldRate();
  }, []);

  return (
    <GoldRateContext.Provider
      value={{
        goldRate: (goldRate / 10)?.toFixed(2) || 0,
        getGoldRate,
        goldRateFormatted: (goldRate / 10).toFixed(2).toLocaleString(),
      }}
    >
      {children}
    </GoldRateContext.Provider>
  );
}

export const useGoldRate = () => {
  const context = useContext(GoldRateContext);
  if (!context) {
    throw new Error("useGoldRate must be used within a GoldRateProvider");
  }
  return context;
};
