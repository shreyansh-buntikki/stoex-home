import { type ReactNode } from "react";
import { GoldRateProvider } from "@/hooks/useGoldRate";
import { HeaderGold } from "./Header";
import { Footer } from "./Footer";
import { MobileStickyBar } from "./MobileStickyBar";
import { EarlyAccessProvider } from "./EarlyAccessProvider";

export { useEarlyAccess } from "./EarlyAccessProvider";

export function GoldLayout({ children }: { children: ReactNode }) {
  return (
    <EarlyAccessProvider>
      <GoldRateProvider>
        <div className="min-h-screen bg-background" style={{ overflowX: "clip" }}>
          <HeaderGold />
          <main className="pb-[40px] lg:pb-0" style={{ overflowX: "clip" }}>
            {children}
          </main>
          <footer id="site-footer">
            <Footer />
          </footer>
          <MobileStickyBar />
        </div>
      </GoldRateProvider>
    </EarlyAccessProvider>
  );
}
