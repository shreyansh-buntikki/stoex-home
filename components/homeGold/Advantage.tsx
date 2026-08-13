"use client";

import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import type { CSSProperties } from "react";

import DeliveryImage from "@/public/assets/images/delivery.webp";
import VaultImage from "@/public/assets/images/vault.webp";
import VaultSilverImage from "@/public/assets/images/vault-silver.webp";
import PricingImage from "@/public/assets/images/pricing.webp";
import AmountImage from "@/public/assets/images/amount.webp";
import BuySellImage from "@/public/assets/images/buy_sell.webp";

const sansation: CSSProperties = {
  fontFamily: "Sansation, sans-serif",
  letterSpacing: "1px",
};
const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };

type CardProps = {
  title: string;
  description?: string;
  image: StaticImageData;
  delay: number;
  className?: string;
  wide?: boolean;
  imageClassName?: string;
  imageBleed?: boolean;
  imageAlign?: "center" | "end";
  imagePinTop?: boolean;
};

const AdvantageCard = ({
  title,
  description,
  image,
  delay,
  className = "",
  wide = false,
  imageClassName = "",
  imageBleed = false,
  imageAlign = "center",
  imagePinTop = false,
}: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      whileHover={{
        y: -6,
        boxShadow: "0px 20px 40px -12px rgba(184,148,63,0.35)",
      }}
      whileTap={{ y: -2 }}
      className={`group relative flex overflow-hidden rounded-[24px] cursor-default border border-[#F0E7D6] ${
        wide
          ? "flex-col gap-4 p-5 lg:flex-row lg:items-stretch lg:p-7"
          : "flex-col gap-5 p-5 lg:p-7"
      } ${className}`}
    >
      <div
        className={`flex flex-col gap-2 text-left ${
          wide ? "lg:w-1/2 lg:shrink-0" : ""
        }`}
      >
        <h3
          className="text-[20px] leading-[26px] text-center lg:text-[28px] lg:leading-[34px] text-[#0A0A0A]"
          style={sansation}
        >
          {title}
        </h3>
        {description ? (
          <p
            className="text-[14px] leading-[20px] text-center self-center lg:text-[16px] lg:leading-normal text-[#5C5C5C] max-w-[386px]"
            style={mona}
          >
            {description}
          </p>
        ) : null}
      </div>
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={
          imagePinTop
            ? `absolute bottom-0 w-full ${
                imageAlign === "end" ? "right-0" : "left-1/2 -translate-x-1/2"
              }`
            : `flex mt-auto w-full items-end ${
                imageAlign === "end" ? "justify-end" : "justify-center"
              } ${imageBleed ? "-mb-5 lg:-mb-7" : ""} ${
                imageAlign === "end" ? "-mr-5 lg:-mr-7" : ""
              } ${wide ? "lg:w-auto lg:flex-1 lg:justify-end lg:-mr-7" : ""}`
        }
      >
        <Image
          src={image}
          alt=""
          aria-hidden="true"
          className={`h-auto w-full object-contain object-bottom ${imageClassName}`}
        />
      </motion.div>
    </motion.div>
  );
};

const advantageTheme = {
  gold: {
    sectionBg: "linear-gradient(180deg, #FFFBF2 0%, #FFF8E6 50%, #FFFBF2 100%)",
    heading: "text-[#C0932A] font-bold",
    cardBg: "bg-white",
    storageTitle: "No Storage Fee",
    storageDescription:
      "Your gold sits in an MMTC-PAMP vault — no storage charge, ever.",
    vaultImage: VaultImage,
    disclaimer:
      "Gold prices can fall as well as rise, and there is a difference between buy and sell-back prices — you could get back less than you paid. See the full risk note in our FAQs.",
  },
  silver: {
    sectionBg: "linear-gradient(180deg, #F5F7FA 0%, #F5F7FA 50%, #ECEFF4 100%)",
    heading: "text-[#00007F] font-bold",
    cardBg: "bg-[#DCE1E9E5]",
    storageTitle: "Free Storage for 5 Years",
    storageDescription:
      "",
    vaultImage: VaultSilverImage,
    disclaimer:
      "Silver prices can fall as well as rise, and there is a difference between buy and sell-back prices — you could get back less than you paid. See the full risk note in our FAQs.",
  },
} as const;

export const Advantage = ({ mode = "gold" }: { mode?: "gold" | "silver" }) => {
  const t = advantageTheme[mode];

  return (
    <section
      className="relative py-[40px] lg:py-[60px] px-4 lg:px-6"
      style={{ backgroundImage: t.sectionBg }}
    >
      <div className="container mx-auto max-w-[1200px] flex flex-col items-center gap-8 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h2
            className="text-[28px] text-center leading-[34px] lg:text-[56px] font-regular lg:leading-[48px] text-[#0A0A0A]"
            style={sansation}
          >
            The <span className={t.heading}>STOEX</span> Advantage
          </h2>
        </motion.div>

        {/* Groww-style bento: 2-up row, then a 3-up row */}
        <div className="flex flex-col w-full gap-3 lg:gap-6">
          <div className="grid grid-cols-2 min-h-[500px] gap-3 lg:gap-6">
            <AdvantageCard
              title="Doorstep Delivery"
              description="Convert to MMTC-PAMP 24K coins in sealed, tamper-proof, camera-recorded dispatch."
              image={DeliveryImage}
              delay={0.15}
              className={`col-span-2 min-h-[280px] lg:col-span-1 lg:min-h-[320px] ${t.cardBg}`}
              imageClassName="max-w-[420px] lg:max-w-[620px]"
              imagePinTop
            />
            <AdvantageCard
              title={t.storageTitle}
              description={t.storageDescription}
              image={t.vaultImage}
              delay={0.2}
              className={`col-span-2 min-h-[260px] lg:col-span-1 lg:min-h-[340px] ${t.cardBg}`}
              imageClassName="max-w-[620px]"
              imageBleed
              imageAlign="end"
            />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
            <AdvantageCard
              title="Live Market Pricing"
              description="Linked to international bullion rates. You always see the current rate, and the total, before you confirm."
              image={PricingImage}
              delay={0.25}
              className={`col-span-2 min-h-[260px] lg:col-span-1 lg:min-h-[300px] ${t.cardBg}`}
              imageClassName="max-w-[420px]"
            />
            <AdvantageCard
              title="From ₹10"
              description="Own 24K gold for less than a bus ticket."
              image={AmountImage}
              delay={0.3}
              className={`min-h-[220px] lg:min-h-[300px] ${t.cardBg}`}
              imageClassName="max-w-[300px]"
            />
            <AdvantageCard
              title="Sell 24×7"
              description="Sell back to MMTC-PAMP at the live sell-back price."
              image={BuySellImage}
              delay={0.35}
              className={`min-h-[220px] lg:min-h-[300px] ${t.cardBg}`}
              imageClassName="max-w-[320px]"
              imageBleed
            />
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[12px] text-center text-[#B8AA8A] max-w-[478px]"
          style={mona}
        >
          {t.disclaimer}
        </motion.p>
      </div>
    </section>
  );
};
