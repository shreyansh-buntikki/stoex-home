"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { CSSProperties } from "react";

import PassbookImage from "@/public/assets/images/passbook.webp";
import AmrapaliLogo from "@/public/assets/logos/amrapali-2.webp";
import SequelLogo from "@/public/assets/logos/sequel.webp";
import RRBPLogo from "@/public/assets/logos/rrbp.webp";
import VistraLogo from "@/public/assets/logos/vistara.webp";
import StripLogo from "@/public/assets/logos/stoex-strip-logo.webp";

const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };
const sansation: CSSProperties = {
  fontFamily: "Sansation, sans-serif",
  letterSpacing: "1px",
};

const securityFeatures = [
  {
    logo: AmrapaliLogo,
    logoAlt: "Amrapali Group",
    title: "Amrapali Group Certified Gold",
    description:
      "All gold on STOEX is sourced exclusively through Amrapali Group. Every gram is certified 24-karat.",
  },
  {
    logo: SequelLogo,
    logoAlt: "Sequel",
    title: "Secured Vault Transfer",
    description:
      "Once sourced, gold is transported via and stored in Brink's institutional-grade vaults under 24/7 surveillance.",
  },
  {
    logo: RRBPLogo,
    logoAlt: "Independent Third-Party Audits",
    title: "Independent Third-Party Audits",
    description:
      "RRBP independently audits our gold reserves every quarter — verifying that every gold unit issued is matched 1:1 with physical gold.",
  },
  {
    logo: VistraLogo,
    logoAlt: "Vistra",
    title: "Vistra – Administrator",
    description:
      "Manages and administers gold holdings in line with regulatory requirements.",
  },
];

export default function Secure() {
  return (
    <section className=" relative bg-white py-[80px] lg:py-[100px] px-6">
      {/* CompaniesEllipse: desktop — absolute top-left; mobile — hidden here, shown inline below */}
      <div className="container mx-auto max-w-[1200px]">
        <div className="flex items-start justify-center gap-8 mb-6 lg:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-4 lg:space-y-6 text-center"
          >
            <h2
              className="text-[28px] leading-[34px] lg:text-[40px] font-semibold lg:leading-[44px] text-[#0A0A0A]"
              style={sansation}
            >
              Your gold, <span className="text-[#B8943F]">secured</span> at
              every level
            </h2>
            <p
              className="text-[15px] leading-[22px] lg:text-[18px] lg:leading-[28px] text-[#3D3D3D] max-w-[600px] mx-auto"
              style={mona}
            >
              Every gram of gold is securely stored, independently audited, and
              fully backed—so you always know exactly what you own.
            </p>

            {/* CompaniesEllipse: mobile only, rotated 90deg, centered */}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 self-center justify-center gap-3 sm:flex sm:flex-row sm:gap-4 mb-8 lg:mb-12">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex-1 flex flex-col gap-3 p-4 py-6 lg:p-5 lg:py-8 text-center rounded-2xl border border-[#E5E7EB] sm:max-w-[265px]"
              style={{
                background: "linear-gradient(to bottom, #FEFEFE, #FBF5E6)",
              }}
            >
              <div className="w-[80px] h-[60px] self-start flex items-end">
                <Image
                  src={feature.logo}
                  alt={feature.logoAlt}
                  className="object-contain"
                />
              </div>
              <div className="space-y-1.5">
                <h3
                  className="lg:text-[20px] text-start text-[16px] font-bold leading-[24px] text-[#0A0A0A]"
                  style={sansation}
                >
                  {feature.logoAlt === "Vistra" ? (
                    <>
                      <span className="hidden lg:inline">
                        Vistra –<br />
                        Administrator
                      </span>
                      <span className="lg:hidden">Vistra – Administrator</span>
                    </>
                  ) : (
                    feature.title
                  )}
                </h3>
                <p
                  className="text-[12px] text-start lg:text-[14px] leading-[20px] text-[#3D3D3D]"
                  style={mona}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col pt-[20px] lg:flex-col gap-2 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="mb-4 space-y-2 flex flex-col items-center justify-center mt-10 lg:mt-20"
          >
            <h3
              className="text-[26px] lg:text-[40px] text-center font-bold leading-[32px] text-[#0A0A0A]"
              style={sansation}
            >
              Your Digital Gold Passbook
            </h3>
            <p
              className="text-[15px] lg:text-[16px] mt-2 text-center leading-[22px] text-[#3D3D3D]"
              style={mona}
            >
             Every gram, every custodian, every audit - recorded on a tamper-proof ledger you can check anytime.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full flex justify-center"
          >
            <div className="relative inline-block w-[950px] max-w-full rounded-2xl overflow-hidden  shadow-[0px_4px_16px_0px_#BF9B6766]">
              <Image
                src={PassbookImage}
                alt="Digital Gold Passbook"
                className="object-contain w-full shadow-[0px_4px_16px_0px_#BF9B6766]"
              />
              <div
                className="absolute top-[95%] left-0 right-0 -translate-y-1/2 overflow-hidden pointer-events-none py-1 lg:py-1"
                style={{
                  background:
                    "linear-gradient(90deg, #F7EBC6 0%, #C3A662 6%, #F8EDC9 12%, #B98F5D 18%, #C5A06C 24%, #FBEAB1 30%, #C3A661 36%, #FEF6D9 42%, #BC9360 48%, #D8BA84 54%, #F4E2A7 60%, #D1B672 66%, #F6E8C4 72%, #B88E5B 78%, #FCEBB3 84%, #C3A662 90%, #F7EBC6 100%)",
                }}
              >
                <motion.div
                  className="flex whitespace-nowrap gap-5 lg:gap-8"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {Array.from({ length: 20 }).map((_, i) => (
                    <Image
                      key={i}
                      src={StripLogo}
                      alt=""
                      height={20}
                      className="h-[8px] lg:h-[18px] w-auto shrink-0"
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
