"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { CSSProperties } from "react";

import BeenhereIcon from "@/public/assets/icons/beenhere.svg";
import MMTCLogo from "@/public/assets/icons/mmtc.svg";
import AmpraLogo from "@/public/assets/logos/amrapali-col.svg";

const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };
const sansation: CSSProperties = {
  fontFamily: "Sansation, sans-serif",
  letterSpacing: "1px",
};

export default function Secure({ mode= 'gold' }: { mode?: "silver" | "gold" }) {
  const isSilver = mode === "silver";

  return (
    <section className=" relative bg-white py-[40px] lg:py-[60px] px-6">
      <div className="container mx-auto max-w-[1200px]">
        <div className="flex items-start justify-center gap-8 mb-8 lg:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-4 lg:space-y-6 text-center"
          >
            <h2
              className="text-[28px] flex gap-2  leading-[34px] lg:text-[56px] font-regular lg:leading-[48px] text-[#0A0A0A]"
              style={sansation}
            >
              Buy Real{" "}
              <span className={`font-bold ${isSilver ? "text-[#00007F]" : "text-[#B8943F]"}`}>
                Vaulted {isSilver ? "Silver" : "Gold"}
              </span>
            </h2>
          </motion.div>
        </div>
        <div className="flex flex-col gap-4 md:gap-6">
          <MMTCCard logo={MMTCLogo} isSilver={isSilver} />
          <MMTCCard logo={AmpraLogo} isSilver={isSilver} isBlurred={true} />
          <p className="text-center text-[#111111] text-[16px] font-regular md:text-[20px] leading-[28px]">
            More refineries/bullion providers are coming soon...
          </p>
        </div>
      </div>
    </section>
  );
}

const MMTCCard = ({
  logo,
  isBlurred = false,
  isSilver = false,
}: {
  logo: string;
  isBlurred?: boolean;
  isSilver?: boolean;
}) => {
  const cardBorder = isSilver ? "#C4CBD6" : "#FFD778";
  const cardShadow = isSilver
    ? "0px 4px 12px rgba(0, 0, 0, 0.08)"
    : "0px_1px_1.5px_0px_rgba(244,218,157,0.31),0px_1px_1px_0px_rgba(244,218,157,0.31)";
  const cardBackground = isSilver
    ? "linear-gradient(115.84deg, #FFFFFF 0%, #E4E9F0 16%, #FCFDFE 33%, #C9D0DB 55%, #EFF2F6 74%, #D7DDE5 87%)"
    : "linear-gradient(115.84deg, #FFFFFF 9.0909%, #FDF8EE 50%, #F5E9CE 90.909%)";
  const detailColor = isSilver ? "#2E333D" : "#52421C";
  const valueColor = isSilver ? "#2E333D" : "#101828";
  const dividerColor = isSilver ? "#E5E7EB" : "#FFD778";
  const priceUnitColor = "#667085";
  const ctaClass = isSilver
    ? "bg-[#00007F]"
    : "bg-gradient-to-r from-[#D3A558] to-[#916D21]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex items-center justify-center gap-8 p-5 lg:p-8 rounded-[24px] overflow-hidden"
      style={{
        backgroundImage: cardBackground,
        border: `1.5px solid ${cardBorder}`,
        boxShadow: cardShadow,
      }}
    >
      <div
        className={`flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 w-full ${
          isBlurred ? "blur-[9px]" : ""
        }`}
      >
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-center w-full lg:w-auto">
          <div className="relative flex items-center self-start justify-start size-[72px] shrink-0 rounded-full bg-white overflow-hidden shadow-[0px_1px_3px_0px_rgba(195,195,195,0.31),0px_1px_2px_-1px_rgba(71,71,71,0.31)]">
            <Image
              src={logo}
              alt="MMTC-PAMP"
              width={67}
              height={67}
              className="object-contain"
            />
          </div>

          <div className="flex flex-col items-start w-full">
            <div className="flex items-end">
              <div className="flex flex-col gap-1 items-start">
                <p
                  className="font-sans font-bold text-[20px] lg:text-[24px] leading-normal tracking-[-0.5px] whitespace-nowrap"
                  style={{ color: isSilver ? "#2E333D" : "#101828" }}
                >
                  MMTC-PAMP
                </p>
                <div className="flex gap-1 items-center">
                  <Image
                    src={BeenhereIcon}
                    alt=""
                    width={15}
                    height={24}
                    className="shrink-0"
                  />
                  <p
                    className="font-sans font-normal text-[12px] lg:text-[13px] leading-normal whitespace-nowrap"
                    style={{ color: detailColor }}
                  >
                    India&apos;s only LBMA-accredited{" "}
                    {isSilver ? "silver" : "gold"} refinery
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start pt-4">
              <div className="flex items-baseline pb-[6px]">
                <p
                  className="font-sans font-normal text-[12px] tracking-[0.5px] capitalize whitespace-pre"
                  style={{ color: detailColor }}
                >
                  Refiner-MMTC-PAMP
                </p>
              </div>
              <div className="flex items-baseline py-[6px]">
                <p
                  className="font-sans font-normal text-[12px] tracking-[0.5px] capitalize whitespace-pre"
                  style={{ color: detailColor }}
                >
                  Vault &amp; custody-MMTC-PAMP
                </p>
              </div>
              <div className="flex items-baseline py-[6px]">
                <p
                  className="font-sans font-normal text-[12px] tracking-[0.5px] capitalize w-[307px]"
                  style={{ color: detailColor }}
                >
                  Trustee- Universal Trusteeship Services Ltd
                </p>
              </div>
              <div className="flex items-baseline pt-[6px]">
                <p
                  className="font-sans font-normal text-[12px] tracking-[0.5px] capitalize w-[307px]"
                  style={{ color: detailColor }}
                >
                  Audit- Grant Thornton Bharat
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="hidden lg:block w-px h-[192px] shrink-0"
          style={{ backgroundColor: dividerColor, opacity: isSilver ? 1 : 0.4 }}
        />
        <div
          className="block lg:hidden w-full h-px shrink-0"
          style={{ backgroundColor: dividerColor, opacity: isSilver ? 1 : 0.4 }}
        />

        <div className="flex flex-col gap-[6px] items-start w-full lg:w-[206px] shrink-0">
          <div className="flex items-baseline justify-between py-[6px] w-full">
            <p
              className="font-sans font-medium text-[14px] capitalize whitespace-nowrap"
              style={{ color: detailColor }}
            >
              Buy Price
            </p>
            <p
              className="font-sans font-medium text-[16px] text-right whitespace-nowrap"
              style={{ color: valueColor }}
            >
              ₹4,076.25
            </p>
          </div>
          <div className="h-px w-full bg-[#EAECF0]" />
          <div className="flex items-baseline justify-between py-[6px] w-full">
            <p
              className="font-sans font-medium text-[14px] capitalize whitespace-nowrap"
              style={{ color: detailColor }}
            >
              Sell Price
            </p>
            <p
              className="font-sans font-medium text-[16px] text-right whitespace-nowrap"
              style={{ color: valueColor }}
            >
              ₹4,066.10
            </p>
          </div>
          <div className="h-px w-full bg-[#EAECF0]" />
          <div className="flex items-baseline justify-between py-[6px] w-full whitespace-nowrap">
            <p
              className="font-sans font-medium text-[14px] capitalize"
              style={{ color: detailColor }}
            >
              Premium
            </p>
            <div className="flex gap-[2px] items-center text-right">
              <p
                className="font-sans font-medium text-[16px]"
                style={{ color: valueColor }}
              >
                ₹10.15
              </p>
              <p
                className="font-sans font-normal text-[10px]"
                style={{ color: priceUnitColor }}
              >
                (0.80%)
              </p>
            </div>
          </div>
        </div>

        <div
          className="hidden lg:block w-px h-[192px] shrink-0"
          style={{ backgroundColor: dividerColor, opacity: isSilver ? 1 : 0.4 }}
        />
        <div
          className="block lg:hidden w-full h-px shrink-0"
          style={{ backgroundColor: dividerColor, opacity: isSilver ? 1 : 0.4 }}
        />

        <div className="flex flex-col gap-6 items-center lg:items-end justify-center shrink-0 w-full lg:w-auto">
          <div className="flex gap-2 items-center justify-center lg:justify-end whitespace-nowrap">
            <p
              className="font-sans font-extrabold text-[24px] lg:text-[28px] tracking-[-0.5px]"
              style={{ color: isSilver ? "#00007F" : "#52421C" }}
            >
              ₹4,076.25
            </p>
            <p
              className="font-sans font-medium text-[13px]"
              style={{ color: priceUnitColor }}
            >
              Per g
            </p>
          </div>
          <button
            className={`flex items-center justify-center px-5 pt-3 pb-[13px] h-[52px] w-full lg:w-auto rounded-full text-white text-[16px] lg:text-[18px] font-semibold whitespace-nowrap ${ctaClass}`}
            style={mona}
          >
            Get Early Access
          </button>
        </div>
      </div>
    </motion.div>
  );
};
