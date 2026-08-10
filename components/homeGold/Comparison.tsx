"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import Image from "next/image";
import PaymentsIcon from "@/public/assets/icons/payments.svg";
import EncryptionIcon from "@/public/assets/icons/encrypted.svg";
import CompareArrowsIcon from "@/public/assets/icons/compare_arrows.svg";
import ReceiptIcon from "@/public/assets/icons/receipt_long.svg";
import BeenHereIcon from "@/public/assets/icons/beenhere.svg";
import RedeemIcon from "@/public/assets/icons/redeem.svg";
import FactCheckIcon from "@/public/assets/icons/fact_check.svg";
import ManageSearchIcon from "@/public/assets/icons/manage_search.svg";

const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };
const sansation: CSSProperties = {
  fontFamily: "Sansation, sans-serif",
  letterSpacing: "1px",
};

const B = "border-[#E0E0E0]";

const comparisonData = [
  {
    feature: "Minimum Purchase",
    icon: PaymentsIcon,
    traditional: { main: "0.1gm ~ ₹1500" },
    other: { main: "₹10" },
    stoex: { main: "₹10" },
    stoexOnly: false,
  },
  {
    feature: "Storage & Safety",
    icon: EncryptionIcon,
    traditional: { main: "₹2000-5000 p.a." },
    other: { main: "₹0", sub: "May vary by platform" },
    stoex: {
      main: "₹0",
      sub: "Guaranteed, with registered vault provider up to 5 years",
    },
    stoexOnly: false,
  },
  {
    feature: "Liquidity",
    icon: CompareArrowsIcon,
    traditional: { main: "2-7 days" },
    other: { main: "Some day", sub: "bought by bullion dealer/refinery" },
    stoex: {
      main: "Instant 24x7",
      sub: "72-hour cooling-off before proceeds release",
    },
    stoexOnly: false,
  },
  {
    feature: "Price Transparency",
    icon: ReceiptIcon,
    traditional: { main: "Wide spreads and making charges" },
    other: { main: "Hidden fees and spreads" },
    stoex: {
      main: "Live and upfront price",
      sub: "same from order to invoice",
    },
    stoexOnly: false,
  },
  {
    feature: "Purity Assurance",
    icon: BeenHereIcon,
    traditional: { main: "BIS Hallmark" },
    other: { main: "24K claimed" },
    stoex: { main: "24K LBMA verified" },
    stoexOnly: false,
  },
  {
    feature: "Physical Delivery",
    icon: RedeemIcon,
    traditional: { main: "Yes", sub: "you already own it" },
    other: { main: "Yes", sub: "Dependent on platform and reserves held" },
    stoex: {
      main: "Yes",
      sub: "Guaranteed, request anytime with min. weight threshold",
    },
    stoexOnly: false,
  },
  // {
  //   feature: "Proof of Service and Ownership",
  //   icon: FactCheckIcon,
  //   traditional: { main: "N.A." },
  //   other: { main: "N.A." },
  //   stoex: { main: "Live", sub: "On-chain public ledger" },
  //   stoexOnly: true,
  // },
  // {
  //   feature: "Independent Trustee and Audit",
  //   icon: ManageSearchIcon,
  //   traditional: { main: "N.A." },
  //   other: { main: "Yes", sub: "Dependent on the platform" },
  //   stoex: {
  //     main: "Yes",
  //     sub: "Guaranteed, and recorded On-chain public ledger",
  //   },
  //   stoexOnly: true,
  // },
];

const regularRows = comparisonData.filter((r) => !r.stoexOnly);
const stoexOnlyRows = comparisonData.filter((r) => r.stoexOnly);

export const Comparison = () => {
  return (
    <section className="bg-white py-[40px] lg:py-[60px] px-4 lg:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 lg:gap-6 items-center text-center lg:max-w-[800px]"
          >
            <h2
              className="text-[26px] lg:text-[48px] font-regular leading-[32px] lg:leading-[50px] text-[#0A0A0A]"
              style={sansation}
            >
             A Better Way to
              <span className="text-[#B8943F] font-bold">
                {" "}
                Buy Gold
              </span>
            </h2>
           
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[1100px] flex flex-col"
          >
            {/* Container 1: regular rows */}
            <div
              className={`border border-[#E0E0E0] rounded-[14px] overflow-hidden`}
            >
              {/* Header */}
              <div className="grid grid-cols-3 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
                <div className={`hidden lg:block border-r ${B}`} />
                <div
                  className={`px-3 py-3 lg:py-4 flex items-center justify-start border-b border-r ${B}`}
                >
                  <p
                    className="text-[10px] lg:text-[16px] text-[#B8B8B8] font-bold tracking-wider text-start"
                    style={mona}
                  >
                    Traditional Gold
                  </p>
                </div>
                <div
                  className={`px-3 py-3 lg:py-4 flex items-center justify-start border-b border-r lg:border-r-0 ${B}`}
                >
                  <p
                    className="text-[10px] lg:text-[16px] text-[#B8AA8A] font-bold tracking-wider text-start"
                    style={mona}
                  >
                    Other Digital Gold
                  </p>
                </div>
                <div
                  className={`px-3 py-3 lg:py-4 flex items-start justify-start border-b ${B}`}
                  style={{
                    background: "linear-gradient(to bottom, #FFCD57, #FFF7E5)",
                  }}
                >
                  <p
                    className="text-[10px] lg:text-[16px] text-[#52421C] font-bold tracking-wider text-start"
                    style={mona}
                  >
                    STOEX Platform
                  </p>
                </div>
              </div>

              {regularRows.map((row) => (
                <div key={row.feature}>
                  <div
                    className={`lg:hidden flex items-center justify-center gap-2 px-2 pt-2 pb-2 border-t ${B}`}
                  >
                    <Image
                      src={row.icon}
                      alt=""
                      width={16}
                      height={16}
                      className="w-4 h-4 flex-shrink-0 opacity-70"
                    />
                    <p
                      className="text-[12px] font-semibold text-[#1A1A1A] text-center"
                      style={mona}
                    >
                      {row.feature}
                    </p>
                  </div>

                  <div
                    className={`grid grid-cols-3 lg:grid-cols-[1.2fr_1fr_1fr_1fr] border-t ${B} min-h-[100px] lg:min-h-[120px]`}
                  >
                    <div
                      className={`hidden lg:flex items-center gap-3 px-4 py-4 lg:py-5 border-r ${B}`}
                    >
                      <Image
                        src={row.icon}
                        alt=""
                        width={20}
                        height={20}
                        className="w-6 h-6 flex-shrink-0 opacity-80"
                      />
                      <p
                        className="text-[14px] lg:text-[16px] font-semibold text-[#1A1A1A]"
                        style={mona}
                      >
                        {row.feature}
                      </p>
                    </div>

                    <div
                      className={`px-3 lg:px-5 py-4 lg:py-5 flex flex-col items-start justify-center border-r ${B}`}
                    >
                      <p
                        className="text-[13px] lg:text-[17px] text-[#B8B8B8] text-start"
                        style={mona}
                      >
                        {row.traditional.main}
                      </p>
                      {row.traditional.sub && (
                        <p
                          className="text-[10px] lg:text-[12px] text-[#B8B8B8] text-start mt-0.5"
                          style={mona}
                        >
                          {row.traditional.sub}
                        </p>
                      )}
                    </div>

                    <div
                      className={`px-3 lg:px-5 py-4 lg:py-5 flex flex-col items-start justify-center border-r lg:border-r-0 ${B}`}
                    >
                      <p
                        className="text-[13px] lg:text-[17px] text-[#B8AA8A] text-start"
                        style={mona}
                      >
                        {row.other.main}
                      </p>
                      {row.other.sub && (
                        <p
                          className="text-[10px] lg:text-[12px] text-[#B8AA8A] text-start mt-0.5"
                          style={mona}
                        >
                          {row.other.sub}
                        </p>
                      )}
                    </div>

                    <div
                      className="px-3 lg:px-5 py-4 lg:py-5 flex flex-col items-start justify-center"
                      style={{
                        background: "linear-gradient(to left, #FFFFFF, #FFF7E5)",
                      }}
                    >
                      <p
                        className="text-[13px] lg:text-[17px] font-semibold text-[#52421C] text-start"
                        style={mona}
                      >
                        {row.stoex.main}
                      </p>
                      {row.stoex.sub && (
                        <p
                          className="text-[10px] lg:text-[12px] text-[#8A7A50] text-start mt-0.5"
                          style={mona}
                        >
                          {row.stoex.sub}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider between containers */}
            {/* <div className="flex items-center gap-3 px-4 py-4 lg:py-10">
              <div
                className="flex-1 h-[1px]"
                style={{
                  background:
                    "linear-gradient(to right, transparent, #C8A84B)",
                }}
              />
              <p
                className="text-[16px] max-w-[150px] lg:max-w-none text-[#00007F] font-semibold text-center uppercase shrink-0"
                style={{ ...mona, letterSpacing: "4px" }}
              >
                Offered by STOEX only in India
              </p>
              <div
                className="flex-1 h-[1px]"
                style={{
                  background:
                    "linear-gradient(to left, transparent, #C8A84B)",
                }}
              />
            </div> */}

            {/* Container 2: STOEX-only rows */}
            {/* <div
              className={`ring-1 ring-[#E0E0E0] rounded-b-[14px] overflow-hidden`}
            >
              {stoexOnlyRows.map((row, idx) => (
                <div key={row.feature}>
                  <div
                    className={`lg:hidden flex items-center justify-center gap-2 px-2 pt-2 pb-2 ${idx !== 0 ? `border-t ${B}` : ""}`}
                  >
                    <Image
                      src={row.icon}
                      alt=""
                      width={16}
                      height={16}
                      className="w-4 h-4 flex-shrink-0 opacity-70"
                    />
                    <p
                      className="text-[12px] font-semibold text-[#1A1A1A] text-center"
                      style={mona}
                    >
                      {row.feature}
                    </p>
                  </div>

                  <div
                    className={`grid grid-cols-3 lg:grid-cols-[1.2fr_1fr_1fr_1fr] border-t ${B} min-h-[100px] lg:min-h-[120px]`}
                  >
                    <div
                      className={`hidden lg:flex items-center gap-3 px-4 py-5 border-r ${B}`}
                    >
                      <Image
                        src={row.icon}
                        alt=""
                        width={20}
                        height={20}
                        className="w-6 h-6 flex-shrink-0 opacity-80"
                      />
                      <p
                        className="text-[14px] lg:text-[16px] font-semibold text-[#1A1A1A]"
                        style={mona}
                      >
                        {row.feature}
                      </p>
                    </div>

                    <div
                      className={`px-3 lg:px-5 py-4 lg:py-6 flex flex-col items-start justify-center border-r ${B}`}
                    >
                      <p
                        className="text-[13px] lg:text-[17px] text-[#B8B8B8] text-start"
                        style={mona}
                      >
                        {row.traditional.main}
                      </p>
                      {row.traditional.sub && (
                        <p
                          className="text-[10px] lg:text-[12px] text-[#B8B8B8] text-start mt-0.5"
                          style={mona}
                        >
                          {row.traditional.sub}
                        </p>
                      )}
                    </div>

                    <div
                      className={`px-3 lg:px-5 py-4 lg:py-6 flex flex-col items-start justify-center border-r lg:border-r-0 ${B}`}
                    >
                      <p
                        className="text-[13px] lg:text-[17px] text-[#B8AA8A] text-start"
                        style={mona}
                      >
                        {row.other.main}
                      </p>
                      {row.other.sub && (
                        <p
                          className="text-[10px] lg:text-[12px] text-[#B8AA8A] text-start mt-0.5"
                          style={mona}
                        >
                          {row.other.sub}
                        </p>
                      )}
                    </div>

                    <div
                      className="px-3 lg:px-5 py-4 lg:py-6 flex flex-col items-start justify-center"
                      style={{
                        background: "linear-gradient(to right, #E6E6FF, #FFFFFF)",
                      }}
                    >
                      <p
                        className="text-[13px] lg:text-[17px] font-semibold text-[#52421C] text-start"
                        style={mona}
                      >
                        {row.stoex.main}
                      </p>
                      {row.stoex.sub && (
                        <p
                          className="text-[10px] lg:text-[12px] text-[#8A7A50] text-start mt-0.5"
                          style={mona}
                        >
                          {row.stoex.sub}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
