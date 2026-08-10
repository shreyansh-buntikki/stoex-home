"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import EarlyAccessModal from "@/components/layout/EarlyAccessModal";
import RealAssetsBg from "@/public/assets/images/real-assets-bg.webp";

const sansation: CSSProperties = { fontFamily: "Sansation, sans-serif" };
const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };

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
        <motion.h2
          className="text-[28px] leading-[1.2] sm:text-[36px] lg:text-[48px] font-bold text-white"
          style={sansation}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Explore Real-World Assets with Confidence
        </motion.h2>
        <motion.p
          className="mt-5 mx-auto max-w-2xl text-[16px] sm:text-[16px] lg:text-[18px] text-[#DFE0EB] leading-relaxed"
          style={mona}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          STOEX offers a thoughtful approach to digital saving – grounded in
          real assets, clear structures, and regulatory discipline.
        </motion.p>

        <motion.button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-8 uppercase inline-flex items-center justify-center rounded-full text-white font-bold px-10 py-3 md:py-4 text-[15px] hover:scale-105 transition-all duration-300 shadow-lg"
          style={{ ...mona, background: "linear-gradient(to right, #B8943F, #52421C)", letterSpacing: "2px" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          Get Early Access
        </motion.button>
      </div>

      <EarlyAccessModal open={open} setOpen={setOpen} />
    </section>
  );
};
