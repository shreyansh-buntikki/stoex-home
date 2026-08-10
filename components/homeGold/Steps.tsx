"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { CSSProperties } from "react";

import Background from "@/public/assets/images/steps-bg.webp";
import SignupImage from "@/public/assets/images/signup.webp";
import TransactionImage from "@/public/assets/images/transaction.webp";
import OrderImage from "@/public/assets/images/order.webp";

const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };
const sansation: CSSProperties = {
  fontFamily: "Sansation, sans-serif",
  letterSpacing: "1px",
};

const stepData = [
  { number: "01", title: "Sign Up in under 45 seconds", image: SignupImage },
  { number: "02", title: "Pay via UPI", image: TransactionImage },
  { number: "03", title: "Own and Verify It", image: OrderImage },
];

export const Steps = () => {
  return (
    <section className="relative py-[80px] lg:py-[150px] px-6 overflow-hidden">
      <Image
        src={Background}
        alt="Background Image"
        fill
        className="absolute inset-0 object-cover"
        priority
      />

      <div className="container mx-auto relative z-10">
        <div className="max-w-[1160px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 lg:mb-10 max-w-[911px] mx-auto"
          >
            <h2
              className="text-[26px] lg:text-[48px] leading-[32px] lg:leading-[40px] mb-3 lg:mb-4 text-white"
              style={sansation}
            >
              No Demat, No Brokers, No Waiting
            </h2>
            <p
              className="text-[15px] mt-6 lg:text-[20px] leading-[22px] lg:leading-[28px] text-white"
              style={mona}
            >
              From signup to gold ownership in minutes.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-stretch justify-center">
            {stepData.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex-1 lg:w-[397px] lg:h-[440px] rounded-2xl border border-white/[0.16] bg-white/[0.07] backdrop-blur-[3px] overflow-hidden"
              >
                <div className="pt-6 px-4 flex flex-col items-center text-center">
                  <span
                    className="text-[24px] leading-[30px] text-[#B8943F]"
                    style={mona}
                  >
                    {step.number}
                  </span>
                  <h3
                    className="text-[24px] font-semibold leading-[30px] text-white mt-4"
                    style={mona}
                  >
                    {step.title}
                  </h3>
                </div>

                <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                  <Image
                    src={step.image}
                    alt={step.title}
                    className="w-[230px] h-auto rounded-t-[33px]"
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-b from-transparent to-[#131339] pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
