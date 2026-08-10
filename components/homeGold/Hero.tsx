"use client";

import BuySellIcon from "@/public/assets/icons/buy-sell.svg";
import GoldIcon from "@/public/assets/icons/gold.svg";
import TruckIcon from "@/public/assets/icons/truck.svg";
import StorageIcon from "@/public/assets/icons/storage.svg";
import HeroImageResponsive from "@/public/assets/images/hero-image-responsive.webp";
import HeroImage from "@/public/assets/images/hero-image.webp";
import { motion } from "framer-motion";
import Image from "next/image";
import { type CSSProperties } from "react";

const TRUST_ITEMS = [
  { label: "24K (999.9+) Purest Gold", icon: GoldIcon },
  {
    label: "Free Storage",
    icon: StorageIcon,
  },
  { label: "Buy & Sell 24x7", icon: BuySellIcon },
  { label: "Doorstep Delivery", icon: TruckIcon },
  // { label: "Independently verifiable on public ledger", icon: MagnifyIcon },
] as const;

const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };
const sansation: CSSProperties = { fontFamily: "Sansation, sans-serif" };

const HEADING_GRADIENT = "linear-gradient(to bottom, #B8943F 0%, #52421C 100%)";
const HERO_BG = "linear-gradient(180deg, #FFFFFF 0%, #FFFBF2 100%)";

export const HeroGold = () => {
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
                src={HeroImage}
                alt="Gold App"
                width={600}
                height={820}
                sizes="(max-width: 1280px) 560px, 590px"
                className="w-full h-auto max-h-[85dvh] object-contain object-bottom"
                priority
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
              Real Vaulted Gold
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
                Buy, sell and own verified 24-karat gold refined and safe-kept
                by MMTC-PAMP.
              </p>
              <div className="text-[10px] font-regular leading-[22px] text-[#B8AA8A]">
                *The figure subjects to the gold rate.
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
                width={280}
                height={435}
                sizes="280px"
                className="mx-auto h-auto object-contain object-bottom"
                style={{ maxWidth: "280px" }}
                priority
                fetchPriority="high"
              />
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2 lg:gap-8 items-start">
              {TRUST_ITEMS.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 + index * 0.05 }}
                  className="flex flex-col items-start"
                >
                  <div
                    className="flex gap-3"
                    style={{
                      alignItems: index === 10 ? "start" : "center",
                    }}
                  >
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={28}
                      height={28}
                      className="shrink-0 lg:pt-1"
                      style={{
                        filter:
                          "sepia(1) saturate(3) hue-rotate(5deg) brightness(0.7)",
                      }}
                    />
                    <span
                      className="text-[16px] font-[500] text-[#B8943F]"
                      style={mona}
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
              <div
                className="inline-flex items-center md:mt-4 rounded-full px-4 py-3 w-fit"
                style={{
                  background: "linear-gradient(to right, #CCA763, #8A6D2F)",
                }}
              >
                <span
                  className="text-[16px] font-semibold text-[#ffffff]"
                  style={mona}
                >
                  Get Early Access
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
