"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";

const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };
const sansation: CSSProperties = {
  fontFamily: "Sansation, sans-serif",
  letterSpacing: "1px",
};

const comparisonData = [
  {
    feature: "Minimum investment",
    traditional: "1 gram (₹9.8k+)",
    stoex: "₹15",
  },
  {
    feature: "Storage fees",
    traditional: "₹500-2000/year",
    stoex: "₹0",
  },
  {
    feature: "Liquidity",
    traditional: "2-7 days",
    stoex: "Instant, 24x7",
  },
  {
    feature: "Purity verification",
    traditional: "Manual testing",
    stoex: "Amrapali Hallmark",
  },
  {
    feature: "Physical redemption",
    traditional: "Not available",
    stoex: "Anytime",
  },
];

export const Comparison = () => {
  return (
    <section className="bg-white py-[80px] pt-0 lg:py-[0px] lg:pb-[100px] px-6">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 lg:gap-6items-center text-center lg:max-w-[800px]"
          >
            <h2
              className="text-[26px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[40px] text-[#0A0A0A]"
              style={sansation}
            >
              Gold you can understand <br />
              in <span className="text-[#B8943F]">plain language</span>
            </h2>
            <p
              className="text-[15px] lg:text-[20px] leading-[22px] lg:leading-[28px] text-[#3D3D3D] max-w-[609px]"
              style={mona}
            >
              We've stripped away the complexity of traditional gold investing.
              No hidden fees, no confusing paperwork, no minimum lock-ins.
            </p>
          </motion.div>

          {/* Desktop: 3 separate cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[1100px] hidden lg:block"
          >
            <div className="flex items-stretch gap-6">
              {/* Card 1: Feature — no border, no bg */}
              <div className="flex-1 flex flex-col">
                <div className="px-5 py-5 h-[58px] flex items-center">
                  <p
                    className="text-[14px] leading-[16px] text-[#8A8FA8] font-bold tracking-[0.525px] uppercase"
                    style={mona}
                  >
                    FEATURE
                  </p>
                </div>
                {comparisonData.map((row) => (
                  <div
                    key={row.feature}
                    className="px-5 py-5 h-[64px] flex items-center border-t border-[#E5E7EF]"
                  >
                    <p
                      className="text-[14px] leading-[20px] text-[#3D3D3D]"
                      style={mona}
                    >
                      {row.feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* Card 2: Traditional — border, #F7F8FC header */}
              <div className="flex-1 flex flex-col border border-[#E5E7EF] rounded-[14px] overflow-hidden">
                <div className="bg-[#F7F8FC] px-5 py-5 h-[58px] flex items-center justify-center">
                  <p
                    className="text-[14px] leading-[16px] text-[#8A8FA8] font-bold tracking-[0.525px] uppercase"
                    style={mona}
                  >
                    TRADITIONAL
                  </p>
                </div>
                {comparisonData.map((row) => (
                  <div
                    key={row.feature}
                    className="bg-white px-5 py-5 h-[64px] flex items-center justify-center border-t border-[#E5E7EF]"
                  >
                    <p
                      className="text-[14px] leading-[20px] text-[#3d3d3d] text-center"
                      style={mona}
                    >
                      {row.traditional}
                    </p>
                  </div>
                ))}
              </div>

              {/* Card 3: Stoex Gold — navy border+header, green values */}
              <div className="flex-1 flex flex-col rounded-[14px] overflow-hidden border-2 border-[#00007F] shadow-[0px_0px_16px_0px_rgba(191,155,103,0.4)]">
                <div className="bg-[#00007F] px-5 py-5 h-[58px] flex items-center justify-center">
                  <p
                    className="text-[14px] leading-[16px] text-white font-bold tracking-[0.525px] uppercase"
                    style={mona}
                  >
                    STOEX GOLD
                  </p>
                </div>
                {comparisonData.map((row) => (
                  <div
                    key={row.feature}
                    className="bg-white px-5 py-5 h-[64px] flex items-center justify-center border-t border-[#E5E7EF]"
                  >
                    <p
                      className="text-[14px] leading-[20px] text-[#1A9E5C] font-semibold text-center"
                      style={mona}
                    >
                      {row.stoex}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Mobile: single table card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:hidden rounded-2xl border border-[#E5E7EF] overflow-hidden shadow-[0px_0px_16px_0px_#BF9B6766]"
          >
            {/* Table header */}
            <div className="flex items-stretch bg-[#F7F8FC] border-b border-[#E5E7EF] divide-x divide-[#E5E7EF]">
              <div className="flex-1 px-4 py-5">
                <p
                  className="text-[11px] leading-[14px] text-[#8A8FA8] font-bold tracking-[0.5px] uppercase"
                  style={mona}
                >
                  FEATURE
                </p>
              </div>
              <div className="flex-1 px-4 py-5 text-center">
                <p
                  className="text-[11px] leading-[14px] text-[#8A8FA8] font-bold tracking-[0.5px] uppercase"
                  style={mona}
                >
                  TRADITIONAL
                </p>
              </div>
              <div className="flex-1 px-4 py-5 text-center">
                <p
                  className="text-[11px] leading-[14px] text-[#00007F] font-bold tracking-[0.5px] uppercase"
                  style={mona}
                >
                  STOEX GOLD
                </p>
              </div>
            </div>

            {/* Table rows */}
            {comparisonData.map((row) => (
              <div
                key={row.feature}
                className="flex items-stretch border-b border-[#E5E7EF] last:border-b-0 divide-x divide-[#E5E7EF]"
              >
                <div className="flex-1 px-4 py-5 flex items-center justify-center">
                  <p
                    className="text-[12px] leading-[18px] text-[#3D3D3D] font-medium text-center"
                    style={mona}
                  >
                    {row.feature}
                  </p>
                </div>
                <div className="flex-1 px-4 py-5 flex items-center justify-center">
                  <p
                    className="text-[12px] leading-[18px] text-[#8A8FA8] text-center"
                    style={mona}
                  >
                    {row.traditional}
                  </p>
                </div>
                <div className="flex-1 px-4 py-5 flex items-center justify-center">
                  <p
                    className="text-[14px] leading-[18px] text-[#00007F] font-semibold text-center"
                    style={mona}
                  >
                    {row.stoex}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
