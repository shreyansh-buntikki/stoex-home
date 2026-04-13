"use client";

import { Assets } from "./Assets";
import { Comparison } from "./Comparison";
import { EarlyAccess } from "./EarlyAccess";
import { FAQs } from "./Faq";
import { Footer } from "./Footer";
import { HeaderGold } from "./Header";
import { HeroGold } from "./Hero";
import { Protection } from "./Protection";
import { Redemption } from "./Redemption";
import Secure from "./Secure";
import { Steps } from "./Steps";

export function HomePageGold() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeaderGold />
      <main className="overflow-x-hidden">
        <HeroGold />
        <Secure />
        <Comparison />
        <Steps />
        <Protection />
        {/* <Divider /> */}
        {/* <PriceGraph /> */}
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
