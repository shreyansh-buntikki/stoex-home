"use client";

import MMTCLogo from "@/public/assets/logos/mmtc.svg";
import RRBPLogo from "@/public/assets/logos/rrbp-col.svg";
import SequelLogo from "@/public/assets/logos/sequel-col.svg";
import VistraLogo from "@/public/assets/logos/vistra-col.svg";
import Image from "next/image";
import { CSSProperties, useState } from "react";

const sansation: CSSProperties = { fontFamily: "Sansation, sans-serif" };
const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };
const goldDivider: CSSProperties = {
  height: "1px",
  background: "linear-gradient(90deg, #B8922A 0%, rgba(184,146,42,0) 100%)",
};

const InstitutionsData = [
  {
    label: "Refinery/Bullion Provider",
    icon: MMTCLogo,
    content: "Every gram is 999.9+ purity, assay-certified 24-karat.",
    imageHeight: "50px",
    mobileImageHeight: "32px",
  },
  {
    label: "Vault and Logistics",
    content:
      "Gold is stored in institutional-grade vaults under 24/7 surveillance and also provides the logistics service with comprehensive insurance coverage — the same facilities used by well known banks.",
    imageHeight: "30px",
    mobileImageHeight: "20px",
  },
  {
    label: "Administration",
    content:
      "Manages and administers all gold transactions and holdings as an independent fiduciary. Legally segregated from STOEX's assets, and remains protected under independent custody of Sequel.",
  },
  {
    label: "Independent Audit",
    content:
      "Audits the gold reserves regularly, confirming that every unit sold is matched one-to-one with physical gold in the vault. This is third-party independent verification, not a self-reported number.  ",
    imageHeight: "60px",
    mobileImageHeight: "38px",
  },

  // {
  //   label: "On-Chain Verification",
  //   icon: DigitalPublicLedgerLogo,
  //   imageHeight: "60px",
  //   mobileImageHeight: "38px",
  //   content:
  //     "Every holding is recorded on a blockchain-based public ledger — the same technology infrastructure used by global financial institutions, governments, and Fortune 500 companies. It's a permanent record that exists outside STOEX, cannot be altered by anyone, and can be verified by any person at any time.",
  // },
];

export const Institutions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <div
      className="institutions-wrap flex flex-col max-w-[980px] self-center w-full px-6 lg:px-0"
      style={{ gap: "35px" }}
    >
      <h1
        style={sansation}
        className="institutions-heading max-w-[760px] text-[32px] sm:text-[40px] lg:text-[56px] leading-[1] font-semibold"
      >
        Four independent institutions, designed for
        <span style={{ color: "#B8922A" }}>
          {" "}
          safe and verifiable ownership.
        </span>
      </h1>
      <div
        style={mona}
        className="text-[16px] sm:text-[18px] max-w-[780px] lg:text-[24px] font-semibold"
      >
        Every gram of gold on Stoex passes through four independent institutions
        before it reaches your account. Each one is responsible for a single
        layer — so trust is never concentrated in one name.{" "}
      </div>

      <div className="flex flex-col pt-8 lg:pt-15">
        <div style={goldDivider} />
        {InstitutionsData.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={item.label} className="cursor-pointer">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex cursor-pointer h-[100px] items-center justify-between gap-4  sm:py-6 lg:py-0  text-left"
              >
                <span
                  style={{
                    ...mona,
                    transition: "color 200ms, font-weight 200ms",
                  }}
                  className={`text-[18px] sm:text-[22px] lg:text-[28px] leading-[1.2] ${
                    isOpen
                      ? "font-bold text-[#00007F]"
                      : "font-medium text-[#0A0A0A]"
                  }`}
                >
                  {item.label}
                </span>
                {item.icon && (
                <Image
                  src={item.icon}
                  alt={item.label}
                  className="flex-shrink-0 institution-icon w-auto"
                  data-mobile-h={item.mobileImageHeight ?? "14px"}
                  data-desktop-h={item.imageHeight ?? "20px"}
                  style={
                    {
                      "--mobile-h": item.mobileImageHeight ?? "14px",
                      "--desktop-h": item.imageHeight ?? "20px",
                    } as CSSProperties
                  }
                />
                )}
              </button>
              <div
                className="grid transition-all duration-300 ease-in-out"
                style={{
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                }}
              >
                <div className="overflow-hidden">
                  {item.content && (
                    <p
                      style={mona}
                      className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[1.6] text-[#3D3D3D] pb-5 sm:pb-6 lg:pb-8"
                    >
                      {item.content}
                    </p>
                  )}
                </div>
              </div>
              <div style={goldDivider} />
            </div>
          );
        })}
      </div>

      <style jsx>{`
        :global(.institution-icon) {
          height: var(--mobile-h);
        }
        @media (min-width: 1024px) {
          :global(.institution-icon) {
            height: var(--desktop-h);
          }
        }
      `}</style>
    </div>
  );
};
