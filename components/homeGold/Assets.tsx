"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Bell } from "lucide-react";
import type { CSSProperties } from "react";

import CoinIcon from "@/public/assets/icons/money.png";
import KeysImage from "@/public/assets/icons/keys.png";
import GraphImage from "@/public/assets/icons/graph.png";

const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };
const sansation: CSSProperties = {
  fontFamily: "Sansation, sans-serif",
  letterSpacing: "1px",
};

export const Assets = () => {
  return (
    <section className="bg-white py-[80px] pt-0 lg:py-[100px] px-6">
      <div className="container mx-auto max-w-[980px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2
            className="text-[26px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[46px] text-[#0A0A0A] mb-4 lg:mb-6"
            style={sansation}
          >
            More real assets coming to{" "}
            <span className="text-[#0A0A0A]">STOEX</span>
          </h2>
          <p
            className="text-[15px] lg:text-[16px] leading-[24px] text-[#6B7280] max-w-[640px] mx-auto"
            style={mona}
          >
            Gold is just the beginning. We're bringing fractional ownership of
            India's most valuable real-world assets — from real estate to
            private markets — all on one platform.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-[#CCA763] p-5 lg:p-7 mb-6 lg:mb-8 relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
            <div className="flex-1 min-w-0">
              {/* Live Now badge */}
              <div className="inline-flex items-center gap-2 border border-[#34C759] rounded-full px-4 py-1.5 mb-5">
                <span className="w-2 h-2 rounded-full bg-[#34C759]" />
                <span
                  className="text-[14px] font-medium text-[#34C759]"
                  style={mona}
                >
                  Live Now
                </span>
              </div>

              <h3
                className="text-[20px] lg:text-[24px] font-bold leading-[26px] lg:leading-[30px] text-[#00007F] mb-2 lg:mb-3"
                style={sansation}
              >
                Digital Gold
              </h3>
              <p
                className="text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] text-[#3D3D3D]"
                style={mona}
              >
                Own verified 24-karat gold starting from ₹10. Backed 1:1,
                independently verifiable, redeemable anytime.
              </p>
            </div>

            {/* Right - Coin image */}
            <div className="hidden md:flex items-start justify-end flex-shrink-0">
              <Image
                src={CoinIcon}
                alt="STOEX Digital Gold"
                width={130}
                height={130}
                className="h-auto w-auto max-h-[120px] object-contain object-right"
              />
            </div>
          </div>

          {/* Divider - full card width */}
          <div className="h-px w-full bg-[#E5E7EB] my-5" />

          {/* Stats */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <p
                className="text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] text-[#3D3D3D]"
                style={mona}
              >
                Min Investment
              </p>
              <p
                className="text-[18px] lg:text-[20px] font-bold leading-[24px] lg:leading-[28px] text-[#0A0A0A]"
                style={mona}
              >
                ₹ 15
              </p>
            </div>
            <div className="text-right">
              <p
                className="text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] text-[#3D3D3D]"
                style={mona}
              >
                Liquidity
              </p>
              <p
                className="text-[18px] lg:text-[20px] font-bold leading-[24px] lg:leading-[28px] text-[#0A0A0A]"
                style={mona}
              >
                Instant 24x7
              </p>
            </div>
          </div>

          {/* Buy Now Button */}
          <div className="flex justify-center mt-5 lg:mt-6">
            <button
              className="w-full max-w-[390px] bg-[#00007F] text-white rounded-full py-3.5 text-[15px] font-bold hover:bg-[#000066] transition-colors"
              style={mona}
            >
              Buy Now
            </button>
          </div>
        </motion.div>

        {/* Bottom two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Fractional Real Estate Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-[#E5E7EB] p-5 lg:p-7 relative overflow-hidden h-full"
          >
            {/* Coming Soon badge */}
            <div className="inline-flex items-center gap-2 border border-[#CCA763] rounded-full px-3 lg:px-4 py-1 lg:py-1.5 mb-4 lg:mb-5">
              <span className="w-2 h-2 rounded-full bg-[#CCA763]" />
              <span
                className="text-[12px] lg:text-[14px] font-medium text-[#CCA763]"
                style={mona}
              >
                Coming Q3 2026
              </span>
            </div>

            {/* Image */}
            <div className="absolute top-5 right-5 lg:top-6 lg:right-6">
              <Image
                src={KeysImage}
                alt="Fractional Real Estate"
                width={60}
                height={60}
                className="object-contain object-right-top w-[45px] h-[45px] lg:w-[60px] lg:h-[60px]"
              />
            </div>

            <h3
              className="text-[18px] lg:text-[22px] font-bold leading-[24px] lg:leading-[28px] text-[#0A0A0A] mb-2 lg:mb-3"
              style={sansation}
            >
              Fractional Real Estate
            </h3>
            <p
              className="text-[13px] lg:text-[15px] leading-[19px] lg:leading-[22px] text-[#6B7280] max-w-[300px] mb-6 lg:mb-8"
              style={mona}
            >
              Own a verified slice of premium commercial and residential
              properties across India's top metros — rental income included.
            </p>

            {/* Divider */}
            <div className="h-px bg-[#E5E7EB] mb-4 lg:mb-6" />

            {/* Notify Button */}
            <button
              className="w-full max-w-[340px] mx-auto flex items-center justify-center gap-2.5 bg-[#00007F] text-white rounded-full py-3 lg:py-3.5 text-[14px] lg:text-[15px] font-bold hover:bg-[#000066] transition-colors"
              style={mona}
            >
              <Bell className="w-4 h-4 lg:w-5 lg:h-5" />
              Notify Me at Launch
            </button>
          </motion.div>

          {/* Private Markets Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl border border-[#E5E7EB] p-5 lg:p-7 relative overflow-hidden h-full"
          >
            {/* Coming Soon badge */}
            <div className="inline-flex items-center gap-2 border border-[#CCA763] rounded-full px-3 lg:px-4 py-1 lg:py-1.5 mb-4 lg:mb-5">
              <span className="w-2 h-2 rounded-full bg-[#CCA763]" />
              <span
                className="text-[12px] lg:text-[14px] font-medium text-[#CCA763]"
                style={mona}
              >
                Coming Q3 2026
              </span>
            </div>

            {/* Image */}
            <div className="absolute top-5 right-5 lg:top-6 lg:right-6">
              <Image
                src={GraphImage}
                alt="Private Markets"
                width={90}
                height={90}
                className="object-contain object-right-top w-[65px] h-[65px] lg:w-[90px] lg:h-[90px]"
              />
            </div>

            <h3
              className="text-[18px] lg:text-[22px] font-bold leading-[24px] lg:leading-[28px] text-[#0A0A0A] mb-2 lg:mb-3"
              style={sansation}
            >
              Private Markets
            </h3>
            <p
              className="text-[13px] lg:text-[15px] leading-[19px] lg:leading-[22px] text-[#6B7280] max-w-[300px] mb-6 lg:mb-8"
              style={mona}
            >
              Access curated pre-IPO equity, private credit, and alternative
              funds previously available only to institutional <br/> investors.
            </p>

            {/* Divider */}
            <div className="h-px bg-[#E5E7EB] mb-4 lg:mb-6" />

            {/* Notify Button */}
            <button
              className="w-full max-w-[340px] mx-auto flex items-center justify-center gap-2.5 bg-[#00007F] text-white rounded-full py-3 lg:py-3.5 text-[14px] lg:text-[15px] font-bold hover:bg-[#000066] transition-colors"
              style={mona}
            >
              <Bell className="w-4 h-4 lg:w-5 lg:h-5" />
              Notify Me at Launch
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
