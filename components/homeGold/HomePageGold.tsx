"use client";

import { HeaderGold } from "./Header";
import { HeroGold } from "./Hero";
import Secure from "./Secure";
import { Comparison } from "./Comparison";
import { Steps } from "./Steps";
import { Protection } from "./Protection";
import { PriceGraph } from "./PriceGraph";
import { Redemption } from "./Redemption";
import { FAQs } from "./Faq";
import { Assets } from "./Assets";
import { EarlyAccess } from "./EarlyAccess";
import { Footer } from "./Footer";

export function HomePageGold() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeaderGold />
      <main className="overflow-x-hidden">
        <HeroGold />
        <Divider />
        <Secure />
        <Comparison />
        <Steps />
        <Protection />
        <Divider />
        <PriceGraph />
        <Redemption />
        <FAQs />
        <Assets />
        <EarlyAccess />
      </main>
      <Footer />
    </div>
  );
}

const Divider = () => {
  return (
    <div className="container mx-auto px-6 mt-8 mb-30">
      <hr
        className="border-none h-px w-full"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, #CCA763 50%, transparent 100%)",
        }}
      />
    </div>
  );
};
