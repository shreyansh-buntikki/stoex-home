"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { CSSProperties } from "react";
import { useState } from "react";
import Image from "next/image";
import StandardImage from "@/public/assets/images/standard.webp";

import ShadesIcon from "@/public/assets/icons/shades.svg";
import BuildingIcon from "@/public/assets/icons/building.svg";
import LockIcon from "@/public/assets/icons/lock.svg";
import CalendarIcon from "@/public/assets/icons/calendar.svg";
import CheckIcon from "@/public/assets/icons/check.svg";

const sansation: CSSProperties = {
  fontFamily: "Sansation, sans-serif",
  letterSpacing: "1px",
};

const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };

type TrustCard = {
  id: string;
  icon: string;
  label: string;
  tooltip: string;
  /** Anchored from the left or right artboard edge, per the design. */
  position: { top: string; left?: string; right?: string };
  tooltipAlign: "left" | "right";
};

/**
 * Positions are percentages of the image box the cards are layered over,
 * anchored at the card's top-left (or top-right) corner per the design.
 */
const trustCards: TrustCard[] = [
  {
    id: "independent-audits",
    icon: CalendarIcon,
    label: "Regular Independent Audits",
    tooltip:
      "An independent agency keeps checking the vault matches the record.",
    position: { top: "0%", left: "36%" },
    tooltipAlign: "left",
  },
  {
    id: "trustee-custody",
    icon: LockIcon,
    label: "Independent Trustee Custody",
    tooltip: "A separate trustee holds it, so it's legally yours.",
    position: { top: "28%", left: "4%" },
    tooltipAlign: "right",
  },
  {
    id: "insured-vaults",
    icon: BuildingIcon,
    label: "Insured Accredited Vaults",
    tooltip: "Standards-grade vaults, and the metal inside is insured.",
    position: { top: "37.8%", right: "8%" },
    tooltipAlign: "left",
  },
  {
    id: "physically-backed",
    icon: ShadesIcon,
    label: "100% Physically Backed",
    tooltip: "Real metal in a vault for every gram owned.",
    position: { top: "60.3%", left: "11%" },
    tooltipAlign: "right",
  },
  {
    id: "publicly-verifiable",
    icon: CheckIcon,
    label: "Publicly Verifiable",
    tooltip: "Check your own holding on a public record, any time.",
    position: { top: "65.5%", right: "10%" },
    tooltipAlign: "left",
  },
];


export default function Standard() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section className=" relative bg-white py-[40px] lg:py-[60px] px-6">
      <div className="container mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center justify-center gap-4 lg:gap-6">
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
              The{" "}
              <span className="text-[#B8943F] font-bold">STOEX Standard </span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 lg:space-y-6 text-center max-w-[500px]"
          >
            <p className="text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] text-[#0A0A0A]">
              Every gram is recorded on a public, tamper-proof ledger and
              reconciled against the vault.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-[500px] lg:max-w-[1040px] mt-4 lg:mt-4"

          >
           
            {/* Height comes from the image itself so the section keeps no dead
                space; the cards are layered on top of it. */}
            <div className="relative hidden lg:flex justify-center">
              <Image
                src={StandardImage}
                alt="Stoex Standard"
                className="w-[45.5%] h-auto"
              />

              <div className="absolute inset-0">
                {trustCards.map((card) => (
                  <div
                    key={card.id}
                    className="absolute"
                    style={{
                      top: card.position.top,
                      left: card.position.left,
                      right: card.position.right,
                    }}
                    onMouseEnter={() => setActiveCard(card.id)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    <div className="relative flex items-center">
                      <button
                        type="button"
                        className="flex items-center gap-2.5 whitespace-nowrap rounded-2xl bg-gradient-to-t from-white to-[#FFF7E5] p-5 py-3 shadow-sm"
                      >
                        <Image src={card.icon} alt="" width={24} height={24} />
                        <span
                          className="text-[16px] leading-[24px] font-bold text-[#B8943F]"
                          style={mona}
                        >
                          {card.label}
                        </span>
                      </button>

                      <AnimatePresence>
                        {activeCard === card.id ? (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.15 }}
                            className={`absolute z-10 top-1/2 -translate-y-1/2 ${
                              card.tooltipAlign === "right"
                                ? "left-full ml-2"
                                : "right-full mr-2"
                            }`}
                          >
                            <div className="relative w-[187px] rounded-2xl border border-[#FFCD57] bg-white px-3.5 py-3.5 drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)]">
                              {/* beak: rotated square, two borders showing, body
                                  colour covers the seam against the bubble */}
                              <div
                                className={`absolute top-1/2 -translate-y-1/2 size-3 rotate-45 bg-white ${
                                  card.tooltipAlign === "right"
                                    ? "-left-[7px] border-b border-l border-[#FFCD57]"
                                    : "-right-[7px] border-t border-r border-[#FFCD57]"
                                }`}
                              />
                              <div className="relative flex items-start gap-1">
                                <p
                                  className="flex-1 text-[12px] leading-[16px] text-[#373D3F]"
                                  style={mona}
                                >
                                  {card.tooltip}
                                </p>
                                <button
                                  type="button"
                                  aria-label="Close"
                                  onClick={() => setActiveCard(null)}
                                  className="shrink-0 -mr-1 -mt-0.5 text-[#98A2B3] hover:text-[#667085]"
                                >
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                  >
                                    <path d="M18 6 6 18M6 6l12 12" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: image stacked above a wrapped list of the same cards. */}
            <div className="lg:hidden">
              <Image src={StandardImage} alt="Stoex Standard" className="w-full" />

              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {trustCards.map((card) => (
                  <div
                    key={card.id}
                    className="flex items-center gap-2 whitespace-nowrap rounded-2xl bg-gradient-to-t from-white to-[#FFF7E5] px-4 py-3 shadow-sm"
                  >
                    <Image src={card.icon} alt="" width={18} height={18} />
                    <span
                      className="text-[13px] font-bold text-[#B8943F]"
                      style={mona}
                    >
                      {card.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              className="flex items-center gap-2 bg-[#00007F] text-white text-[18px] font-semibold px-6 py-3 rounded-full"
              style={mona}
            >
              Verify Your Gold
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
