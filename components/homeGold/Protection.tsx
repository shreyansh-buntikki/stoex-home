"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { CSSProperties } from "react";

import InflationHedge from "@/public/assets/images/inflation-hedge.webp";
import PortfolioSafety from "@/public/assets/images/portfolio-safety.webp";
import CulturalValue from "@/public/assets/images/cultural-value.webp";
import GenerationalWealth from "@/public/assets/images/generational-wealth.webp";

const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };
const sansation: CSSProperties = {
  fontFamily: "Sansation, sans-serif",
  letterSpacing: "1px",
};

const protectionData = [
  {
    image: InflationHedge,
    title: "BEAT INFLATION",
    description:
      "When the price of everything rises, your gold rises with it - so your savings keep their real value, year after year.",
  },
  {
    image: PortfolioSafety,
    title: "STEADY WHEN MARKETS SHAKE",
    description:
      "When markets fall, gold tends to hold steady – it gives your savings a stable foundation.",
  },
  {
    image: CulturalValue,
    title: "PART OF YOUR STORY",
    description:
      "From weddings to Dhanteras, gold has always been how Indian families celebrate - protect what matters most.",
  },
  {
    image: GenerationalWealth,
    title: "A GIFT THAT LASTS",
    description:
      "The gold you buy today can be your children's tomorrow - fully verified, always valuable, and yours to pass on whenever you choose.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

function ProtectionCard({ item }: { item: (typeof protectionData)[0] }) {
  return (
    <div
      className="rounded-xl p-px h-full"
      style={{
        background: "linear-gradient(to bottom, transparent 0%, #FFCD57 70%)",
      }}
    >
      <motion.div
        variants={cardVariants}
        className="flex flex-col gap-3 p-5 pb-[36px] rounded-xl h-full"
        style={{ background: "linear-gradient(to top, #FFFFFF, #FFF8E6)" }}
      >
        <Image
          src={item.image}
          alt={item.title}
          width={300}
          height={300}
          sizes="(max-width: 1024px) 60vw, 256px"
          className="object-contain mb-3 mx-auto"
        />

        <h3
          className="text-[20px] font-semibold leading-[24px] text-[#0A0A0A]"
          style={mona}
        >
          {item.title}
        </h3>

        <p
          className="text-[16px] font-normal leading-[20px] text-[#111111]"
          style={mona}
        >
          {item.description}
        </p>
      </motion.div>
    </div>
  );
}

export const Protection = () => {
  return (
    <section className="bg-white lg:py-[0px] py-[80px] pt-0 px-6">
      <div className="container mx-auto max-w-[1340px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-[20px] mx-auto"
        >
          <div className="mb-4 lg:mb-6">
            
            <h2
              className="text-[26px] lg:text-[50px] font-regular leading-[32px] lg:leading-[46px]"
              style={sansation}
            >
              <span className="text-[#B8943F] font-bold">
                {" "}
               Add Shine
              </span> to Your Portfolio
            </h2>
          </div>
         
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-4 lg:gap-8 gap-4 mt-8 lg:mt-16"
        >
          {protectionData.map((item) => (
            <ProtectionCard key={item.title} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
