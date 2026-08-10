"use client";

import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import type { CSSProperties } from "react";

import DeliveryImage from "@/public/assets/images/delivery.webp";
import VaultImage from "@/public/assets/images/vault.webp";
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
  /** Groww-style wide card: text left, illustration right. */
  wide?: boolean;
  imageClassName?: string;
};

const AdvantageCard = ({
  title,
  description,
  image,
  delay,
  className = "",
  wide = false,
  imageClassName = "",
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
      className={`group relative flex overflow-hidden rounded-[24px] bg-white cursor-default border border-[#F0E7D6] ${
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
          className="text-[20px] leading-[26px] lg:text-[28px] lg:leading-[34px] text-[#0A0A0A]"
          style={sansation}
        >
          {title}
        </h3>
        {description ? (
          <p
            className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-normal text-[#5C5C5C] max-w-[386px]"
            style={mona}
          >
            {description}
          </p>
        ) : null}
      </div>
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`flex ${
          wide
            ? "mt-auto w-full items-end justify-center -mb-5 lg:w-auto lg:flex-1 lg:justify-end lg:-mb-7 lg:-mr-7"
            : "mt-auto w-full items-end justify-center"
        }`}
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

export const Advantage = () => {
  return (
    <section
      className="relative py-[40px] lg:py-[60px] px-4 lg:px-6"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #FFFBF2 0%, #FFF8E6 50%, #FFFBF2 100%)",
      }}
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
            The <span className="text-[#C0932A] font-bold">STOEX</span> Advantage
          </h2>
        </motion.div>

        {/* Groww-style bento: wide hero card, then a 2-up and 3-up row */}
        <div className="grid w-full grid-cols-2 gap-3 lg:gap-6">
          <AdvantageCard
            title="Doorstep Delivery"
            description="Convert to MMTC-PAMP 24K coins in sealed, tamper-proof, camera-recorded dispatch."
            image={DeliveryImage}
            delay={0.15}
            wide
            className="col-span-2 min-h-[300px] lg:min-h-[320px]"
            imageClassName="max-w-[300px] lg:max-w-[360px]"
          />

          <AdvantageCard
            title="No Storage Fee"
            description="Your gold sits in an MMTC-PAMP vault — no storage charge, ever."
            image={VaultImage}
            delay={0.2}
            className="col-span-2 min-h-[260px] lg:col-span-1 lg:min-h-[340px]"
            imageClassName="max-w-[420px]"
          />
          <AdvantageCard
            title="Live Market Pricing"
            description="Linked to international bullion rates. You always see the current rate, and the total, before you confirm."
            image={PricingImage}
            delay={0.25}
            className="col-span-2 min-h-[260px] lg:col-span-1 lg:min-h-[340px]"
            imageClassName="max-w-[420px]"
          />

          <AdvantageCard
            title="From ₹10"
            description="Own 24K gold for less than a bus ticket."
            image={AmountImage}
            delay={0.3}
            className="min-h-[220px] lg:min-h-[300px]"
            imageClassName="max-w-[300px]"
          />
          <AdvantageCard
            title="Sell 24×7"
            description="Sell back to MMTC-PAMP at the live sell-back price."
            image={BuySellImage}
            delay={0.35}
            className="min-h-[220px] lg:min-h-[300px]"
            imageClassName="max-w-[300px]"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[12px] text-center text-[#B8AA8A] max-w-[478px]"
          style={mona}
        >
          Gold prices can fall as well as rise, and there is a difference
          between buy and sell-back prices — you could get back less than you
          paid. See the full risk note in our FAQs.
        </motion.p>
      </div>
    </section>
  );
};
