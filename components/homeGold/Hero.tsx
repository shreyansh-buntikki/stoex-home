"use client";

import BuySellIcon from "@/public/assets/icons/buy-sell.svg";
import GoldIcon from "@/public/assets/icons/gold.svg";
import TruckIcon from "@/public/assets/icons/truck.svg";
import StorageIcon from "@/public/assets/icons/storage.svg";
import HeroImageGoldResponsive from "@/public/assets/images/hero-image-responsive.webp";
import HeroImageSilverResponsive from "@/public/assets/images/hero-image-silver-responsive.webp";
import HeroImageGold from "@/public/assets/images/hero-image.webp";
import HeroImageSilver from "@/public/assets/images/hero-image-silver.webp";
import { useEarlyAccess } from "@/components/layout/GoldLayout";
import { motion } from "framer-motion";
import Image from "next/image";
import { type CSSProperties } from "react";

const TRUST_ITEMS_GOLD = [
  { label: "24K (999.9+) Purest Gold", icon: GoldIcon },
  {
    label: "Free Storage",
    icon: StorageIcon,
  },
  { label: "Buy & Sell 24x7", icon: BuySellIcon },
  { label: "Doorstep Delivery", icon: TruckIcon },
  // { label: "Independently verifiable on public ledger", icon: MagnifyIcon },
] as const;

const TRUST_ITEMS_SILVER = [
  { label: "999+ fine silver", icon: GoldIcon },
  { label: "From ₹10", icon: StorageIcon },
  { label: "Buy & Sell 24x7", icon: BuySellIcon },
  { label: "Doorstep Delivery", icon: TruckIcon },
] as const;

const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };
const sansation: CSSProperties = { fontFamily: "Sansation, sans-serif" };

const HEADING_GRADIENT_GOLD =
  "linear-gradient(to bottom, #B8943F 0%, #52421C 100%)";
const HEADING_GRADIENT_SILVER =
  "linear-gradient(to bottom, #2E333D 0%, #8B94A4 33%, #A7AFBE 66%, #2E333D 100%)";
const HERO_BG_GOLD = "linear-gradient(180deg, #FFFFFF 0%, #FFFBF2 100%)";
const HERO_BG_SILVER = "linear-gradient(180deg, #FFFFFF 0%, #ECEFF4 100%)";
const ICON_FILTER_GOLD = "sepia(1) saturate(3) hue-rotate(5deg) brightness(0.7)";
const ICON_FILTER_SILVER =
  "grayscale(1) brightness(0.4) contrast(1.2)";

export const HeroGold = ({ mode = "gold" }: { mode?: "gold" | "silver" }) => {
  const { openModal } = useEarlyAccess();
  const isSilver = mode === "silver";
  const HERO_BG = isSilver ? HERO_BG_SILVER : HERO_BG_GOLD;
  const HEADING_GRADIENT = isSilver
    ? HEADING_GRADIENT_SILVER
    : HEADING_GRADIENT_GOLD;
  const ICON_FILTER = isSilver ? ICON_FILTER_SILVER : ICON_FILTER_GOLD;
  const TRUST_ITEMS = isSilver ? TRUST_ITEMS_SILVER : TRUST_ITEMS_GOLD;
  const TEXT_COLOR = isSilver ? "#2E333D" : "#B8943F";
  const HeroImageResponsive = isSilver ? HeroImageSilverResponsive : HeroImageGoldResponsive;

  return (
    <div
      className="relative flex min-h-[calc(100dvh-4.5rem)] overflow-hidden"
      style={{ background: HERO_BG }}
    >
      <div className="relative z-10 container mx-auto px-6 lg:px-0 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-[calc(100dvh-4.5rem)]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="hidden lg:flex justify-start items-end order-1 self-end"
          >
            <div className="relative w-full lg:w-[560px] xl:w-[590px]">
              <Image
                src={mode === "gold" ? HeroImageGold : HeroImageSilver}
                alt="Gold App"
                sizes="(max-width: 1280px) 560px, 590px"
                className="w-full h-auto max-h-[85dvh] object-contain object-bottom"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </motion.div>

          <div className="flex flex-col gap-6 lg:gap-7 order-2 py-10 lg:py-16 lg:self-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="font-bold text-[42px] leading-[46px] lg:text-[62px] lg:leading-[66px] text-center lg:text-left"
              style={{
                ...sansation,
                background: HEADING_GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Real Vaulted {isSilver ? "Silver" : "Gold"}
              <br />
              at Live Price.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="text-center lg:text-left"
            >
              <p
                className="text-[16px] leading-[26px] md:max-w-[450px] lg:text-[20px] lg:leading-[32px] text-[#111111]"
                style={{ ...mona, fontWeight: 400 }}
              >
                {isSilver
                  ? "Buy, sell and own verified 999+ fine silver refined and safe-kept by MMTC-PAMP."
                  : "Buy, sell and own verified 24-karat gold refined and safe-kept by MMTC-PAMP."}
              </p>
              <div className="text-[10px] font-regular leading-[22px] text-[#B8AA8A]">
                *The figure subjects to the {isSilver ? "silver" : "gold"} rate.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="block lg:hidden"
            >
              <Image
                src={HeroImageResponsive}
                alt="Gold App"
                sizes="(max-width: 380px) 300px, 340px"
                className="mx-auto h-auto w-full max-w-[300px] min-[380px]:max-w-[340px] object-contain object-bottom"
                loading="eager"
                fetchPriority="high"
              />
            </motion.div>
            <div className="grid grid-cols-2 gap-3 pt-2 lg:gap-8 items-stretch">
              {TRUST_ITEMS.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 + index * 0.05 }}
                  className={`flex h-full flex-col items-start rounded-[14px] border ${
                    isSilver ? "border-[#E5E7EB]" : "border-[#EFE3C8]"
                  } bg-white/70 px-3 py-3 lg:border-0 lg:bg-transparent lg:p-0`}
                >
                  <div className="flex h-full items-center gap-2 lg:gap-3">
                    <Image
                      src={item.icon}
                      alt=""
                      width={28}
                      height={28}
                      aria-hidden="true"
                      className="size-6 shrink-0 lg:size-7"
                      style={{ filter: ICON_FILTER }}
                    />
                    <span
                      className="text-[14px] leading-[18px] font-[500] lg:text-[16px]"
                      style={{ ...mona, color: TEXT_COLOR }}
                    >
                      {item.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <div className="flex justify-center lg:justify-start">
                <button
                  type="button"
                  onClick={() => openModal()}
                  className="inline-flex items-center justify-center md:mt-4 rounded-full px-10 py-4 lg:px-8 lg:py-3.5 w-full max-w-[360px] lg:w-fit lg:max-w-none transition-transform active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(to right, #CCA763, #8A6D2F)",
                  }}
                >
                  <span
                    className="text-[18px] lg:text-[16px] font-semibold text-[#ffffff]"
                    style={mona}
                  >
                    Get Early Access
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
