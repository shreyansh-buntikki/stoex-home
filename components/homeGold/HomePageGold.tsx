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

function MobileStickyBar({
  footerRef,
  heroRef,
}: {
  footerRef: React.RefObject<HTMLElement | null>;
  heroRef: React.RefObject<HTMLElement | null>;
}) {
  const [footerVisible, setFooterVisible] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);
  const [scrollingDown, setScrollingDown] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const footerEl = footerRef.current;
    if (!footerEl) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(footerEl);
    return () => observer.disconnect();
  }, [footerRef]);

  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(heroEl);
    return () => observer.disconnect();
  }, [heroRef]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (Math.abs(currentY - lastScrollY.current) > 4) {
        setScrollingDown(currentY > lastScrollY.current);
        lastScrollY.current = currentY;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const show = !footerVisible && !heroVisible && scrollingDown;

  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pt-4 transition-transform duration-300 ${show ? "translate-y-0" : "translate-y-full"}`}
      style={{
        backgroundColor: "#F7F8FC",
        paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
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

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeaderGold />
      <main className="overflow-x-hidden pb-[88px] lg:pb-0">
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
        <EarlyAccess />
      </main>
      <footer ref={footerRef}>
        <Footer />
      </footer>
      <MobileStickyBar footerRef={footerRef} heroRef={heroRef} />
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
