"use client";

import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { useRef, useState } from "react";
import type { CSSProperties } from "react";

import Background from "@/public/assets/images/steps-bg.webp";
import SignupImage from "@/public/assets/images/signup.webp";
import TransactionImage from "@/public/assets/images/transaction.webp";
import OrderImage from "@/public/assets/images/order.webp";
import OrderSilverImage from "@/public/assets/images/order-silver.webp";

const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };
const sansation: CSSProperties = {
  fontFamily: "Sansation, sans-serif",
  letterSpacing: "1px",
};

type Step = { number: string; title: string; image: StaticImageData };

const stepData: Step[] = [
  { number: "01", title: "Sign Up in under 45 seconds", image: SignupImage },
  { number: "02", title: "Pay via UPI", image: TransactionImage },
  { number: "03", title: "Own and Verify It", image: OrderImage },
];

const StepCard = ({
  step,
  className = "",
  mode = "gold",
}: {
  step: Step;
  className?: string;
  mode?: "gold" | "silver";
}) => (
  <div
    className={`relative rounded-2xl border border-white/[0.16] bg-white/[0.07] backdrop-blur-[3px] overflow-hidden ${className}`}
  >
    <div className="pt-6 px-4 flex flex-col items-center text-center">
      <span className="text-[24px] leading-[30px] text-[#B8943F]" style={mona}>
        {step.number}
      </span>
      <h3
        className="text-[20px] lg:text-[24px] font-semibold leading-[26px] lg:leading-[30px] text-white mt-3 lg:mt-4"
        style={mona}
      >
        {step.title}
      </h3>
    </div>

    <div className="absolute bottom-0 left-0 right-0 flex justify-center">
      <Image
        src={mode === "silver" && step.number === "03" ? OrderSilverImage : step.image}
        alt={step.title}
        className="w-[200px] lg:w-[230px] h-auto rounded-t-[33px]"
      />
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-b from-transparent to-[#131339] pointer-events-none" />
  </div>
);

export const Steps = ({ mode = "gold" }: { mode?: "gold" | "silver" }) => {
  return (
    <section className="relative py-[40px] lg:py-[60px] px-6 overflow-hidden">
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
              className="text-[26px] lg:text-[48px] leading-[32px] lg:leading-[40px] mb-0 text-white"
              style={sansation}
            >
              No Demat, No Brokers, No Waiting
            </h2>
            <p
              className="text-[15px] mt-4 lg:mt-6 lg:text-[20px] leading-[22px] lg:leading-[28px] text-white"
              style={mona}
            >
              From signup to gold ownership in minutes.
            </p>
          </motion.div>

          {/* Desktop: three cards side by side */}
          <div className="hidden lg:flex gap-6 items-stretch justify-center">
            {stepData.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex-1 w-[397px] h-[440px]"
              >
                <StepCard mode={mode} step={step} className="w-full h-full" />
              </motion.div>
            ))}
          </div>

          {/* Mobile: swipeable carousel */}
          <StepsCarousel />
        </div>
      </div>
    </section>
  );
};

const StepsCarousel = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const index = Math.round(track.scrollLeft / track.clientWidth);
    setActive(Math.min(Math.max(index, 0), stepData.length - 1));
  };

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="lg:hidden">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {stepData.map((step) => (
          <div key={step.number} className="w-full shrink-0 snap-center px-1">
            <StepCard step={step} className="h-[380px]" />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-5">
        {stepData.map((step, index) => (
          <button
            key={step.number}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Go to step ${step.number}`}
            className={`h-2 rounded-full transition-all ${
              active === index ? "w-6 bg-[#B8943F]" : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
