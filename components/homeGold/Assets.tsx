"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Bell } from "lucide-react";
import type { CSSProperties } from "react";

import CoinIcon from "@/public/assets/icons/money.png";
import KeysImage from "@/public/assets/icons/keys.png";
import GraphImage from "@/public/assets/icons/money-bag.png";
import { useEarlyAccess } from "../layout/EarlyAccessProvider";

const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };
const sansation: CSSProperties = {
  fontFamily: "Sansation, sans-serif",
  letterSpacing: "1px",
};

export const Assets = () => {
  const { openModal } = useEarlyAccess();

  return (
    <section className="bg-white py-[80px] pt-0 lg:py-[180px] px-6">
      <div className="container mx-auto max-w-[980px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center mb-8 lg:mb-12"
        >
          <h2
            className="text-[26px] max-w-[300px]  lg:max-w-none lg:text-[48px] font-regular leading-[32px] lg:leading-[46px] text-[#0A0A0A] mb-4 lg:mb-6"
            style={sansation}
          >
            More real assets coming to{" "}
            <span className="text-[#0A0A0A]">STOEX</span>
          </h2>
          <p
            className="text-[15px] lg:text-[20px] leading-[28px] text-[#3D3D3D] max-w-[550px] mx-auto"
            style={mona}
          >
            Gold is just the beginning. We're bringing fractional ownership of
            India's most valuable real-world assets — from real estate to
            private markets — all on one platform.
          </p>
        </motion.div>
        <div className="max-w-[800px] mx-auto">
          <div
            className="rounded-2xl p-px mb-6 lg:mb-8"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, #FFCD57 70%)",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl p-5 lg:p-7 relative overflow-hidden"
              style={{
                background: "linear-gradient(to bottom, #FFF7E5, #FFFFFF)",
              }}
            >
              {/* Top-right coin image */}
              <div className="absolute top-5 right-5 lg:top-10 lg:right-8">
                <Image
                  src={CoinIcon}
                  alt="STOEX Digital Gold"
                  width={80}
                  height={80}
                  className="object-contain object-right-top w-[50px] h-[50px] lg:w-[80px] lg:h-[80px]"
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                <div className="flex-1 min-w-0">
                  {/* Live Now badge */}
                  <div className="inline-flex bg-[#86EA6B] items-center gap-2 rounded-full px-4 py-1.5 mb-5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00007F] opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00007F]" />
                    </span>
                    <span
                      className="text-[12px] font-semibold text-[#00007F]"
                      style={mona}
                    >
                      COMING SOON
                    </span>
                  </div>

                  <h3
                    className="text-[20px] lg:text-[24px] font-bold leading-[26px] lg:leading-[30px] text-[#B8943F] mb-2 lg:mb-3"
                    style={sansation}
                  >
                    Gold
                  </h3>
                  <p
                    className="text-[14px] lg:text-[16px] max-w-[450px] leading-[20px] lg:leading-[24px] text-[#3D3D3D]"
                    style={mona}
                  >
                    Own verified 24-karat gold starting from ₹10. Backed 1:1,
                    independently verifiable, delivered at your doorstep.
                  </p>
                </div>
              </div>

              {/* Divider - full card width */}
              <div className="h-px w-full bg-[#ffecbf] my-5" />

              {/* Stats */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p
                    className="text-[12px] leading-[20px] lg:leading-[24px] text-[#B8AA8A]"
                    style={{ ...mona, letterSpacing: "2px" }}
                  >
                    MIN PURCHASE
                  </p>
                  <p
                    className="text-[16px] font-semibold leading-[24px] lg:leading-[28px] text-[#52421c]"
                    style={mona}
                  >
                    From ₹10
                  </p>
                </div>
                <div className="text-right">
                  <p
                    className="text-[12px] leading-[20px] lg:leading-[24px] text-[#B8AA8A]"
                    style={{ ...mona, letterSpacing: "2px" }}
                  >
                    LIQUIDITY
                  </p>
                  <p
                    className="text-[16px] font-semibold leading-[24px] lg:leading-[28px] text-[#52421c]"
                    style={mona}
                  >
                    Instant 24x7
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom two cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fractional Real Estate Card */}
            <div
              className="rounded-2xl p-px h-full"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, #FFCD57 70%)",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl p-5 lg:p-7 relative overflow-hidden h-full bg-white flex flex-col"
              >
                <div className="flex-1 mb-4 lg:mb-6">
                  {/* Coming Soon badge */}
                  <div className="inline-flex items-center gap-2 border border-[#CCA763] rounded-full px-3 lg:px-4 py-1 lg:py-1.5 mb-4 lg:mb-5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CCA763] opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#CCA763]" />
                    </span>
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
                    className="text-[18px] lg:text-[22px] font-medium leading-[24px] lg:leading-[28px] text-[#B8AA8A] mb-2 lg:mb-3"
                    style={mona}
                  >
                    Fractional Real Estate
                  </h3>
                  <p
                    className="text-[14px] lg:text-[15px] leading-[19px] lg:leading-[22px] text-[#6B7280] max-w-[300px]"
                    style={mona}
                  >
                    Own a verified slice of premium commercial and residential
                    properties across India's top metros — rental income included.
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-[#ffecbf] mb-4 lg:mb-6" />

                {/* Notify Button */}
                <button
                  onClick={() => openModal("")}
                  className="w-full uppercase max-w-[340px] mx-auto flex items-center justify-center border border-[#00007F]  gap-2.5 bg-transparent text-[#00007F] rounded-full py-3 lg:py-3.5 text-[14px] lg:text-[14px] font-medium cursor-pointer transition-colors"
                  style={{ ...mona, letterSpacing: "2px" }}
                >
                  <Bell className="w-4 h-4 lg:w-5 lg:h-5" />
                  Notify Me at Launch
                </button>
              </motion.div>
            </div>

            {/* Private Markets Card */}
            <div
              className="rounded-2xl p-px h-full"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, #FFCD57 70%)",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-2xl p-5 lg:p-7 relative overflow-hidden h-full bg-white flex flex-col"
              >
                <div className="flex-1 mb-4 lg:mb-6">
                  {/* Coming Soon badge */}
                  <div className="inline-flex items-center gap-2 border border-[#CCA763] rounded-full px-3 lg:px-4 py-1 lg:py-1.5 mb-4 lg:mb-5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CCA763] opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#CCA763]" />
                    </span>
                    <span
                      className="text-[12px] lg:text-[14px] font-medium text-[#CCA763]"
                      style={mona}
                    >
                      Coming Q4 2026
                    </span>
                  </div>

                  {/* Image */}
                  <div className="absolute top-5 right-5 lg:top-6 lg:right-6">
                    <Image
                      src={GraphImage}
                      alt="Private Markets"
                      width={90}
                      height={90}
                      className="object-contain object-right-top w-[45px] h-[45px] lg:w-[70px] lg:h-[70px]"
                    />
                  </div>

                  <h3
                    className="text-[18px] lg:text-[22px] font-medium leading-[24px] lg:leading-[28px] text-[#B8AA8A] mb-2 lg:mb-3"
                    style={mona}
                  >
                    Private Markets
                  </h3>
                  <p
                    className="text-[14px] lg:text-[15px] leading-[19px] lg:leading-[22px] text-[#6B7280] max-w-[300px]"
                    style={mona}
                  >
                    Access curated pre-IPO equity, private credit, and alternative
                    funds previously available only to institutional investors.
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-[#ffecbf] mb-4 lg:mb-6" />

                {/* Notify Button */}
                <button
                  onClick={() => openModal("")}
                  className="w-full uppercase max-w-[340px] mx-auto flex items-center justify-center border border-[#00007F]  gap-2.5 bg-transparent text-[#00007F] rounded-full py-3 lg:py-3.5 text-[14px] lg:text-[14px] font-medium cursor-pointer transition-colors"
                  style={{ ...mona, letterSpacing: "2px" }}
                >
                  <Bell className="w-4 h-4 lg:w-5 lg:h-5" />
                  Notify Me at Launch
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
