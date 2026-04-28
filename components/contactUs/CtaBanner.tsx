"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import EarlyAccessModal from "@/components/layout/EarlyAccessModal";
import RealAssetsBg from "@/public/assets/images/real-assets-bg.webp";

const sansation: CSSProperties = { fontFamily: "Sansation, sans-serif" };
const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };

export const CtaBanner = () => {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(180deg,#00007F_0%,#000019_100%)]"
      style={{
        backgroundImage: `url(${RealAssetsBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-28 text-center">
        <h2
          className="text-[28px] leading-[1.2] sm:text-[36px] lg:text-[48px] font-bold text-white"
          style={sansation}
        >
          Explore Real-World Assets with Confidence
        </h2>
        <p
          className="mt-5 mx-auto max-w-2xl text-[14px] sm:text-[16px] lg:text-[18px] text-[#DFE0EB] leading-relaxed"
          style={mona}
        >
          STOEX offers a thoughtful approach to digital investing – grounded in
          real assets, clear structures, and regulatory discipline.
        </p>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[#86EA6B] hover:bg-[#7AD85E] text-[#0B0B0B] font-bold px-8 py-3.5 text-[15px] shadow-lg transition-all duration-300 hover:scale-105"
          style={mona}
        >
          Get Early Access
        </button>
      </div>

      <EarlyAccessModal open={open} setOpen={setOpen} />
    </section>
  );
};
