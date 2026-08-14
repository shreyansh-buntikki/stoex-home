"use client";

import { useEarlyAccess } from "@/components/layout/GoldLayout";
import type { CSSProperties } from "react";
import { useState } from "react";

const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };
const sansation: CSSProperties = {
  fontFamily: "Sansation, sans-serif",
  letterSpacing: "0.4px",
};
const manrope: CSSProperties = {
  fontFamily: "Manrope, sans-serif",
  fontWeight: 700,
};

export const EarlyAccess = ({ mode = 'gold'}: { mode?: "gold" | "silver" }) => {
  const isSilver = mode === "silver";
  const [email, setEmail] = useState("");
  const { openModal } = useEarlyAccess();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      openModal(email.trim());
    }
  };
  return (
    <section
      id="early-access-section"
      className={
        isSilver
          ? "bg-gradient-to-b from-[#FFFFFF] to-[#ECEFF4] py-[40px] lg:py-[60px] px-0"
          : "bg-gradient-to-b from-[#FFFFFF] to-[#FFFBF2] py-[40px] lg:py-[60px] px-0"
      }
    >
      <div className="mx-auto w-full max-w-none">
        <div className="relative w-full overflow-hidden px-6 py-0 md:px-12">
          <div className="relative z-10 mx-auto max-w-[1000px] text-center">
            <h2
              className="text-[26px] leading-[36px] font-bold lg:text-[40px] lg:leading-[48px]"
              style={{
                ...manrope,
                background: isSilver
                  ? "linear-gradient(to right, #2E333D 0%, #8B94A4 33%, #A7AFBE 66%, #2E333D 100%)"
                  : "linear-gradient(to right, #52421C 0%, #B8943F 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Be among the first to own publicly verifiable{" "}
              {isSilver ? "silver" : "gold"} <br />
              Starting from ₹10
            </h2>

            <p
              className="mt-4 lg:mt-6 text-[16px] lg:text-[20px] leading-[22px] text-[#3D3D3D]"
              style={mona}
            >
              Join the waitlist and get exclusive early access.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-6 flex-col w-full gap-3 items-center sm:flex sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="h-[52px] w-full sm:flex-1 sm:min-w-0 rounded-full border border-[#D9D9D9] bg-transparent px-5 text-[15px] text-[#111827] outline-none placeholder:text-[#A1A1AA] focus:border-[#B6BBC7]"
                style={mona}
                required
              />
              <button
                type="submit"
                className="h-[52px] w-full sm:w-auto shrink-0 rounded-full bg-[#00007F] px-5 text-[14px] mt-4 sm:mt-0 lg:text-[18px] font-semibold text-white transition-colors hover:bg-[#000066]"
                style={mona}
              >
                Get Early Access
              </button>
            </form>

            <p className="mt-4 text-[16px] leading-none" style={mona}>
              <span
                className={`font-bold text-[20px] ${
                  isSilver ? "text-[#2E333D]" : "text-[#B8943F]"
                }`}
              >
                4,827
              </span>{" "}
              <span
                className={`text-[12.5px] ${
                  isSilver ? "text-[#2E333D]" : "text-[#8a8fa8]"
                }`}
              >
                people already on the waitlist
              </span>
            </p>

            {/* <div className="mt-6 mx-auto flex flex-wrap lg:max-w-none max-w-[220px] pb-15 items-center lg:justify-center justify-start gap-x-5 gap-y-2">
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
