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
import { GoldRateProvider } from "@/hooks/useGoldRate";

import { useEffect, useRef, useState } from "react";

const mona = { fontFamily: "Mona Sans, sans-serif" };

const GAP_ABOVE_FOOTER = 16;

function MobileStickyBar({
  footerRef,
  heroRef,
  earlyAccessRef,
}: {
  footerRef: React.RefObject<HTMLElement | null>;
  heroRef: React.RefObject<HTMLElement | null>;
  earlyAccessRef: React.RefObject<HTMLElement | null>;
}) {
  const [bottom, setBottom] = useState(0);
  const [heroVisible, setHeroVisible] = useState(true);
  const [earlyAccessVisible, setEarlyAccessVisible] = useState(false);

  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(heroEl);
    return () => observer.disconnect();
  }, [heroRef]);

  useEffect(() => {
    const earlyAccessEl = earlyAccessRef.current;
    if (!earlyAccessEl) return;
    const observer = new IntersectionObserver(
      ([entry]) => setEarlyAccessVisible(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(earlyAccessEl);
    return () => observer.disconnect();
  }, [earlyAccessRef]);

  useEffect(() => {
    const updateBottom = () => {
      const footer = footerRef.current;
      if (!footer) { setBottom(0); return; }
      const rect = footer.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.top < vh) {
        setBottom(Math.max(0, vh - rect.top + GAP_ABOVE_FOOTER));
      } else {
        setBottom(0);
      }
    };
    updateBottom();
    window.addEventListener("scroll", updateBottom, { passive: true });
    window.addEventListener("resize", updateBottom);
    return () => {
      window.removeEventListener("scroll", updateBottom);
      window.removeEventListener("resize", updateBottom);
    };
  }, [footerRef]);

  const show = !heroVisible && !earlyAccessVisible;

  return (
    <div
      className={`lg:hidden fixed inset-x-0 z-50 px-4 py-3 transition-transform duration-300 ${show ? "translate-y-0" : "translate-y-full"}`}
      style={{
        bottom: `${bottom}px`,
        backgroundColor: "#fff",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
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
  const heroRef = useRef<HTMLElement>(null);
  const earlyAccessRef = useRef<HTMLElement>(null);

  return (
    <GoldRateProvider>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <HeaderGold />
        <main className="overflow-x-hidden pb-[40px] lg:pb-0">
          <section ref={heroRef}>
            <HeroGold />
          </section>
          <Secure />
          <Comparison />
          <Steps />
          <Protection />
          {/* <Divider /> */}
          {/* <PriceGraph /> */}
          <Redemption />
          <FAQs />
          <Assets />
          <section ref={earlyAccessRef}>
            <EarlyAccess />
          </section>
        </main>
        <footer ref={footerRef}>
          <Footer />
        </footer>
        <MobileStickyBar
          footerRef={footerRef}
          heroRef={heroRef}
          earlyAccessRef={earlyAccessRef}
        />
      </div>
    </GoldRateProvider>
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
