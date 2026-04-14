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

import { useEffect, useRef, useState } from "react";

const mona = { fontFamily: "Mona Sans, sans-serif" };

function MobileStickyBar({ footerRef }: { footerRef: React.RefObject<HTMLElement | null> }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [footerRef]);

  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 px-4 py-4 transition-transform duration-300 ${visible ? "translate-y-0" : "translate-y-full"}`}
      style={{ backgroundColor: "#F7F8FC" }}
    >
      <button
        type="button"
        className="w-full rounded-full py-3 text-[16px] font-bold text-white"
        style={{ backgroundColor: "#00007F", ...mona }}
      >
        Get Early Access
      </button>
      <p className="mt-2 text-center text-[13px] text-[#9CA3AF]" style={mona}>
        <span className="font-bold text-[20px]" style={{ color: "#B8943F" }}>
          4,827
        </span>{" "}
        people already on the waitlist
      </p>
    </div>
  );
}

export function HomePageGold() {
  const footerRef = useRef<HTMLElement>(null);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeaderGold />
      <main className="overflow-x-hidden pb-[88px] lg:pb-0">
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
      <footer ref={footerRef}>
        <Footer />
      </footer>
      <MobileStickyBar footerRef={footerRef} />
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
