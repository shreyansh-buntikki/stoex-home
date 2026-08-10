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
  imageFlushBottom?: boolean;
  textMinHeight?: string;
};

const AdvantageCard = ({
  title,
  description,
  image,
  delay,
  className = "",
  imageFlushBottom = false,
  textMinHeight,
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
      className={`flex flex-col items-center gap-6 lg:gap-10 bg-[rgba(241,236,230,0.9)] rounded-[24px] overflow-hidden px-6 cursor-default ${
        imageFlushBottom ? "pt-9" : "py-9"
      } ${className}`}
    >
      <div
        className="flex flex-col items-center justify-center gap-3 text-center"
        style={textMinHeight ? { minHeight: textMinHeight } : undefined}
      >
        <h3
          className="text-[22px] lg:text-[28px] text-[#0A0A0A]"
          style={sansation}
        >
          {title}
        </h3>
        {description ? (
          <p
            className="text-[16px] leading-normal text-[#111111] max-w-[386px]"
            style={mona}
          >
            {description}
          </p>
        ) : null}
      </div>
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`w-full flex justify-center ${
          imageFlushBottom ? "mt-auto" : ""
        }`}
      >
        <Image
          src={image}
          alt={title}
          className={`w-full h-auto max-w-[500px] object-contain ${
            imageFlushBottom ? "object-bottom" : ""
          }`}
        />
      </motion.div>
    </motion.div>
  );
};

export const Advantage = () => {
  return (
    <section
      className="relative py-[40px] lg:py-[60px] px-6"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #FFFBF2 0%, #FFF8E6 50%, #FFFBF2 100%)",
      }}
    >
      <div className="container mx-auto max-w-[1200px] flex flex-col items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h2
            className="text-[28px] flex gap-2 leading-[34px] lg:text-[56px] font-regular lg:leading-[48px] text-[#0A0A0A]"
            style={sansation}
          >
            The <span className="text-[#C0932A] font-bold">STOEX</span>{" "}
            Advantage
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <AdvantageCard
              title="Doorstep Delivery"
              description="Convert to MMTC-PAMP 24K coins in sealed, tamper-proof, camera-recorded dispatch."
              image={DeliveryImage}
              delay={0.15}
              imageFlushBottom
            />
            <AdvantageCard
              title="No Storage Fee"
              image={VaultImage}
              delay={0.2}
              className="justify-center"
              imageFlushBottom
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <AdvantageCard
              title="Live Market Pricing"
              description="Linked to international bullion rates. You always see the current rate, and the total, before you confirm."
              image={PricingImage}
              delay={0.25}
              textMinHeight="112px"
            />
            <AdvantageCard
              title="From ₹10"
              description="Own 24K gold for less than a bus ticket."
              image={AmountImage}
              delay={0.3}
              textMinHeight="122px"
            />
            <AdvantageCard
              title="Sell 24×7"
              description="Sell back to MMTC-PAMP at the live sell-back price."
              image={BuySellImage}
              delay={0.35}
              imageFlushBottom
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
          Gold prices can fall as well as rise, and there is a difference
          between buy and sell-back prices — you could get back less than you
          paid. See the full risk note in our FAQs.
        </motion.p>
      </div>
    </section>
  );
};
