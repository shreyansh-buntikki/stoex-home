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
    stoex: "Blockchain verified",
  },
  {
    feature: "Physical redemption",
    traditional: "Not available",
    stoex: "Anytime",
  },
];

function ComparisonRow({
  feature,
  traditional,
  stoex,
  index,
}: {
  feature: string;
  traditional: string;
  stoex: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-white border-t border-[#E5E7EF] flex items-center justify-between px-[18px] py-4 w-full"
    >
      <div className="flex-1 min-w-0">
        <p
          className="text-[14px] leading-[20px] text-[#3D3D3D]"
          style={mona}
        >
          {feature}
        </p>
      </div>
      <div className="flex-1 min-w-0 text-center">
        <p
          className="text-[14px] leading-[20px] text-[#8A8FA8]"
          style={mona}
        >
          {traditional}
        </p>
      </div>
      <div className="flex-1 min-w-0 text-right">
        <p
          className="text-[14px] leading-[20px] text-[#1A9E5C] font-semibold"
          style={mona}
        >
          {stoex}
        </p>
      </div>
    </motion.div>
  );
}

export const Comparison = () => {
  return (
    <section className="bg-white py-[100px] px-6">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 items-center text-center max-w-[800px]"
          >
            <h2 className="text-[40px] font-semibold leading-[40px] text-[#0A0A0A]" style={sansation}>
              Gold you can understand{" "}
              <br />
              in <span className="text-[#B8943F]">plain language</span>
            </h2>
            <p
              className="text-[20px] leading-[28px] text-[#3D3D3D] max-w-[609px]"
              style={mona}
            >
              We've stripped away the complexity of traditional gold investing. No hidden fees, no confusing paperwork, no minimum lock-ins.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[920px] shadow-[0px_0px_16px_0px_rgba(191,155,103,0.4)] rounded-[14px] overflow-hidden"
          >
            <div className="border border-[#E5E7EF] rounded-[14px] overflow-hidden">
              <div className="bg-[#F7F8FC] flex items-center justify-between px-[18px] py-5 w-full">
                <div className="flex-1 min-w-0">
                  <p
                    className="text-[14px] leading-[16px] text-[#8A8FA8] font-bold tracking-[0.525px] uppercase"
                    style={mona}
                  >
                    FEATURE
                  </p>
                </div>
                <div className="flex-1 min-w-0 text-center">
                  <p
                    className="text-[14px] leading-[16px] text-[#8A8FA8] font-bold tracking-[0.525px] uppercase"
                    style={mona}
                  >
                    TRADITIONAL
                  </p>
                </div>
                <div className="flex-1 min-w-0 text-right">
                  <p
                    className="text-[14px] leading-[16px] text-[#00007F] font-bold tracking-[0.525px] uppercase"
                    style={mona}
                  >
                    STOEX GOLD
                  </p>
                </div>
              </div>

              {comparisonData.map((row, index) => (
                <ComparisonRow
                  key={row.feature}
                  feature={row.feature}
                  traditional={row.traditional}
                  stoex={row.stoex}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};