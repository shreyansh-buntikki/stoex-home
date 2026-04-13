"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { CSSProperties } from "react";

import PassbookImage from "@/public/assets/images/passbook.webp";
import AmrapaliLogo from "@/public/assets/logos/amrapali-2.svg";
import SequelLogo from "@/public/assets/logos/sequel.svg";
import RRBPLogo from "@/public/assets/logos/rrbp.webp";
import VistraLogo from "@/public/assets/logos/vistara.svg";
import CompaniesEllipse from "@/public/assets/images/companies-ellipse.png";

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
    <section className=" relative bg-white py-[100px] px-6">
      <Image
        src={CompaniesEllipse}
        alt="Partner Companies"
        width={150}
        height={150}
        className="object-contain absolute top-0 left-0"
      />
      <div className="container mx-auto max-w-[1200px]">
        <div className="flex items-start gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-3"
          >
            <h2
              className="text-[40px] font-semibold leading-[44px] text-[#0A0A0A]"
              style={sansation}
            >
              Your gold, <span className="text-[#B8943F]">secured</span> at
              every level
            </h2>
            <p
              className="text-[18px] leading-[28px] text-[#3D3D3D] max-w-[600px]"
              style={mona}
            >
              Every gram of gold is securely stored, independently audited, and
              fully backed—so you always know exactly what you own.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex-1 flex flex-col gap-3 p-5 py-8 text-center rounded-2xl border border-[#E5E7EB] max-w-[265px]"
              style={{
                background: "linear-gradient(to bottom, #FEFEFE, #FBF5E6)",
              }}
            >
              <div className="w-[70px] h-[54px] self-center flex items-center">
                <Image
                  src={feature.logo}
                  alt={feature.logoAlt}
                  width={60}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div className="space-y-1.5">
                <h3
                  className="text-[20px] font-bold leading-[24px] text-[#0A0A0A]"
                  style={sansation}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-[14px] leading-[20px] text-[#3D3D3D]"
                  style={mona}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-4 space-y-2 flex flex-col items-center justify-center mt-20 "
        >
          <h3
            className="text-[22px] text-center  font-bold leading-[28px] text-[#0A0A0A]"
            style={sansation}
          >
            Verifiable Ownership
          </h3>
          <p
            className="text-[15px] text-center leading-[22px] text-[#3D3D3D]"
            style={mona}
          >
            Recorded on a public ledger - publicly verifiable, permanently
            immutable
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative w-full flex justify-center rounded-2xl overflow-hidden"
        >
          <Image
            src={PassbookImage}
            alt="Digital Gold Passbook"
            className="object-contain w-[950px] max-w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
