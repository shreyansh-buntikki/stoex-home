"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { CSSProperties } from "react";

import PassbookImage from "@/public/assets/images/passbook.webp";
import AmrapaliLogo from "@/public/assets/logos/amrapali-2.svg";
import SequelLogo from "@/public/assets/logos/sequel.svg";
import EYLogo from "@/public/assets/logos/ey.svg";
import VistraLogo from "@/public/assets/logos/vistara.svg";

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
    description: "All gold on STOEX is sourced exclusively through Amrapali Group. Every gram is certified 24-karat.",
  },
  {
    logo: SequelLogo,
    logoAlt: "Sequel",
    title: "Secured Vault Transfer",
    description: "Once sourced, gold is transported via and stored in Brink's institutional-grade vaults under 24/7 surveillance.",
  },
  {
    logo: EYLogo,
    logoAlt: "EY",
    title: "Independent Third-Party Audits",
    description: "EY (Ernst & Young) independently audits our gold reserves every quarter — verifying that every gold unit issued is matched 1:1 with physical gold.",
  },
  {
    logo: VistraLogo,
    logoAlt: "Vistra",
    title: "Vistra – Administrator",
    description: "Manages and administers gold holdings in line with regulatory requirements.",
  },
];

function SecurityFeatureItem({
  feature,
  index,
  isLast
}: {
  feature: typeof securityFeatures[0];
  index: number;
  isLast: boolean;
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="flex gap-4 items-start"
      >
        <div className="flex flex-col items-center justify-center w-[90px] pt-2">
          <div className="relative w-[70px] h-[54px] flex items-center justify-center">
            <Image
              src={feature.logo}
              alt={feature.logoAlt}
              width={70}
              height={54}
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex-1 space-y-2">
          <h3
            className="text-[20px] font-bold leading-[28px] text-[#0A0A0A]"
            style={sansation}
          >
            {feature.title}
          </h3>
          <p
            className="text-[16px] leading-[20px] text-[#3D3D3D]"
            style={mona}
          >
            {feature.description}
          </p>
        </div>
      </motion.div>

      {!isLast && (
        <div className="w-full h-px bg-gradient-to-r from-[#E5E7EB] via-[#D1D5DB] to-[#E5E7EB]" />
      )}
    </>
  );
}

function VerifiedOwnershipSection() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      className="flex flex-col h-full justify-between space-y-6"
    >
      <div className="space-y-2">
        <h3
          className="text-[20px] font-bold leading-[20px] text-[#0A0A0A]"
          style={sansation}
        >
          Verified Ownership
        </h3>
        <p
          className="text-[16px] leading-[20px] text-[#3D3D3D] max-w-[564px]"
          style={mona}
        >
          Recorded on a public ledger - publicly verifiable, permanently immutable
        </p>
      </div>

      <div className="relative w-full max-w-[582px]">
        <div
          className="relative w-full h-[450px] overflow-hidden"
        >
          <Image
            src={PassbookImage}
            alt="Digital Gold Passbook"
            fill
            className="object-cover"
          />

          
        </div>
      </div>
    </motion.div>
  );
}

export default function Secure() {
  return (
    <section className="bg-white py-[100px] px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-[60px] max-w-[686px] mx-auto"
        >
          <h2 className="text-[40px] font-semibold leading-[40px] text-[#0A0A0A]" style={sansation}>
            Your gold, <span className="text-[#B8943F]">secured</span> at every level
          </h2>
          <p
            className="text-[20px] leading-[28px] text-[#3D3D3D]"
            style={mona}
          >
            Every gram of gold is securely stored, independently audited, and fully backed—so you always know exactly what you own.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 max-w-[1400px] mx-auto">
          <div className="w-full lg:w-[580px] lg:flex-shrink-0">
            <VerifiedOwnershipSection />
          </div>

          <div className="hidden lg:flex items-center justify-center flex-shrink-0">
            <div
              className="w-px h-[550px]"
              style={{
                background: "linear-gradient(to bottom, transparent 0%, #CCA763 50%, transparent 100%)"
              }}
            />
          </div>

          <div className="w-full lg:w-[580px] lg:flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {securityFeatures.map((feature, index) => (
                <SecurityFeatureItem
                  key={feature.title}
                  feature={feature}
                  index={index}
                  isLast={index === securityFeatures.length - 1}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}