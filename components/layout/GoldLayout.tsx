"use client";

import type { ReactNode } from "react";
import { GoldRateProvider } from "@/hooks/useGoldRate";
import { HeaderGold } from "./Header";
import { Footer } from "./Footer";
import { MobileStickyBar } from "./MobileStickyBar";

export function GoldLayout({ children }: { children: ReactNode }) {
  return (
    <GoldRateProvider>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <HeaderGold />
        <main className="overflow-x-hidden pb-[40px] lg:pb-0">
          {children}
        </main>
        <footer id="site-footer">
          <Footer />
        </footer>
        <MobileStickyBar />
      </div>
    </GoldRateProvider>
  );
}
