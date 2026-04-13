"use client";

import Image from "next/image";
import type { CSSProperties } from "react";

import Looper from "@/public/assets/images/Looper.svg";

const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };
const sansation: CSSProperties = {
  fontFamily: "Sansation, sans-serif",
  letterSpacing: "0.4px",
};

const benefits = [
  "Priority access to platform",
  "Receive gold reward points with first transaction",
  "Zero platform fees",
  "Exclusive community access",
];

export const EarlyAccess = () => {
  return (
    <section className="bg-white  py-[60px] lg:py-[90px] pb-0 px-0">
      <div className="mx-auto w-full max-w-none">
        <div className="relative w-full overflow-hidden bg-[#fff] px-6 py-12 md:px-12 md:py-16">
          {/* Looper — desktop: left/right full height; mobile: top-right & bottom-left corners */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[48%] hidden lg:block">
            <Image
              src={Looper}
              alt=""
              fill
              sizes="50vw"
              className="object-cover object-left opacity-80"
            />
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-[48%] hidden lg:block">
            <Image
              src={Looper}
              alt=""
              fill
              sizes="50vw"
              className="scale-x-[-1] scale-y-[-1] object-cover object-right opacity-80"
            />
          </div>
          {/* Mobile: top-right corner */}
          <div className="pointer-events-none absolute top-0 right-0 w-[70%] h-[40%] lg:hidden">
            <Image
              src={Looper}
              alt=""
              fill
              sizes="50vw"
              className="object-cover object-left-bottom opacity-80 rotate-180"
            />
          </div>
          {/* Mobile: bottom-left corner */}
          <div className="pointer-events-none absolute bottom-0 left-0 w-[70%] h-[40%] lg:hidden">
            <Image
              src={Looper}
              alt=""
              fill
              sizes="55vw"
              className="object-cover object-left-bottom opacity-80 scale-y-[-1] -rotate-90"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-[900px] pt-20 text-center">
            <h2
              className="text-[26px] leading-[36px] font-bold text-[#0A0A0A] lg:text-[40px] lg:leading-[48px]"
              style={sansation}
            >
              Be among the first to own publicly verifiable, permanently
              immutable gold - starting from ₹15
            </h2>

            <p
              className="mt-5 text-[15px] leading-[22px] text-[#616161]"
              style={mona}
            >
              Join the waitlist and get exclusive early access when we launch in
              April 2026
            </p>

            <div className="mx-auto mt-6 flex w-full max-w-[470px] flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-[52px] w-full rounded-full border border-[#D9D9D9] bg-white px-5 text-[15px] text-[#111827] outline-none placeholder:text-[#A1A1AA] focus:border-[#B6BBC7]"
                style={mona}
              />
              <button
                type="button"
                className="h-[52px] shrink-0 rounded-full bg-[#00007F] px-9 text-[18px] font-semibold text-white transition-colors hover:bg-[#000066]"
                style={mona}
              >
                Get Early Access
              </button>
            </div>

            <p className="mt-4 text-[16px] leading-none" style={mona}>
              <span className="font-bold text-[#B8943F]">4,827</span>{" "}
              <span className="text-[#767676]">
                people already on the waitlist
              </span>
            </p>

            <div className="mt-6 flex flex-wrap pb-20 items-center justify-center gap-x-5 gap-y-2">
              {benefits.map((item) => (
                <div key={item} className="inline-flex items-center gap-2">
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#E9FAEF] text-[#34C759] text-[10px] font-bold">
                    ✓
                  </span>
                  <span
                    className="text-[14px] leading-[20px] text-[#5A5A5A]"
                    style={mona}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
