"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { CSSProperties } from "react";

import GrowthIcon from "@/public/assets/icons/growth.svg";
import ShieldIcon from "@/public/assets/icons/shield.svg";
import CircleIcon from "@/public/assets/icons/circle.svg";
import PersonIcon from "@/public/assets/icons/person.svg";

const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };
const sansation: CSSProperties = {
  fontFamily: "Sansation, sans-serif",
  letterSpacing: "1px",
};

const protectionData = [
  {
    icon: GrowthIcon,
    title: "Inflation Hedge",
    description: "Gold historically outperforms inflation, protecting your purchasing power over time"
  },
  {
    icon: ShieldIcon,
    title: "Portfolio Safety",
    description: "Diversify beyond stocks and crypto with an asset that holds value in any economy"
  },
  {
    icon: CircleIcon,
    title: "Cultural Value",
    description: "Gold remains central to Indian traditions, festivals, and family wealth planning"
  },
  {
    icon: PersonIcon,
    title: "Generational Wealth",
    description: "Pass on verified, authenticated gold to your children without depreciation worries"
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

function ProtectionCard({ item }: { item: typeof protectionData[0] }) {
  return (
    <motion.div
      variants={cardVariants}
      className="flex flex-col gap-3 p-6 rounded-xl backdrop-blur min-h-[180px] border border-[#CCA763]"
    >
      <div className="w-14 h-10 flex items-center justify-start">
        <Image
          src={item.icon}
          alt={item.title}
          width={56}
          height={40}
          className="object-contain"
        />
      </div>

      <h3
        className="text-[18px] lg:text-[20px] font-bold leading-[20px] lg:leading-[22px] text-[#0A0A0A]"
        style={sansation}
      >
        {item.title}
      </h3>

      <p
        className="text-[14px] lg:text-[16px] leading-[20px] lg:leading-[21px] text-[#0A0A0A]/50"
        style={mona}
      >
        {item.description}
      </p>
    </motion.div>
  );
}

export const Protection = () => {
  return (
    <section className="bg-white lg:py-[100px] py-[80px] px-6">
      <div className="container mx-auto max-w-[1340px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-[60px] max-w-[550px] mx-auto"
        >
          <div className="mb-4 lg:mb-6">
            <h2 className="text-[26px] lg:text-[40px] font-bold leading-[32px] lg:leading-[46px] mb-1" style={sansation}>
              <span className="text-[#0A0A0A]">Gold isn't just jewellery.</span>
            </h2>
            <h2 className="text-[26px] lg:text-[40px] font-bold leading-[32px] lg:leading-[46px]" style={sansation}>
              <span className="text-[#0A0A0A]">It's </span>
              <span className="text-[#D4A843] italic font-bold">financial protection.</span>
            </h2>
          </div>
          <p
            className="text-[15px] leading-[22px] lg:leading-[25px] text-[#3D3D3D]"
            style={mona}
          >
            For centuries, Indians have trusted gold to protect wealth across generations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-4 lg:gap-8 gap-4 mt-8 lg:mt-10"
        >
          {protectionData.map((item) => (
            <ProtectionCard key={item.title} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};