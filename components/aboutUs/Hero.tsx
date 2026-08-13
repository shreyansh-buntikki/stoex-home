import Image from "next/image";
import type { CSSProperties } from "react";
import GoldLocker from "@/public/assets/images/gold-locker.webp";
import Locker from "@/public/assets/images/locker.webp";
import AboutUsImage from "@/public/assets/images/about-col.webp";
import AboutUsBW from "@/public/assets/images/about-bw.webp";
import Logo1 from "@/public/assets/logos/logo-dark.svg";
import LogoBlue from "@/public/assets/logos/logo-blue.svg";

const sansation: CSSProperties = { fontFamily: "Sansation, sans-serif" };
const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };

export const AboutUsHero = ({ mode = "gold" }: { mode?: "gold" | "silver" }) => {
  const isSilver = mode === "silver";
  const accentColor = isSilver ? "#00007F" : "#B8922A";
  const dividerFrom = isSilver ? "rgba(0,0,127,0)" : "rgba(184,146,42,0)";
  const dividerTo = isSilver ? "rgba(0,0,127,1)" : "rgba(184,146,42,1)";

  return (
    <section className="relative bg-white flex items-center justify-center mt-20 lg:pt-12 ">
      <div className="container mx-auto px-6 items-center justify-center flex w-full">
        <div className="flex flex-col gap-10 max-w-2xl self-center lg:gap-20 items-start">
          {/* Left column */}
          <div className="flex flex-col gap-6 flex-1 w-full">
            <h1
              style={sansation}
              className="text-[32px] text-center sm:text-[44px] lg:text-[56px] font-bold leading-[1]"
            >
              <span className="text-[#0A0A0A]">
                The {isSilver ? "silver" : "gold"} may be real but
              </span>{" "}
              <span style={{ color: accentColor }}>
                the proof usually isn&apos;t.
              </span>
            </h1>

            <div className="flex flex-col flex-1 w-full space-y-5 lg:space-y-6">
              <p
                style={mona}
                className="text-[16px] text-center sm:text-[18px] lg:text-[20px] leading-[1.65] font-medium text-[#1D1D1D]"
              >
                Most digital {isSilver ? "silver" : "gold"} in India works on
                trust alone. You send money; the platform says you own{" "}
                {isSilver ? "silver" : "gold"}, and you take their word for
                it. There&apos;s no independent proof your{" "}
                {isSilver ? "silver" : "gold"} exists, no way to verify
                it&apos;s in a vault.
              </p>
              {/* <p
              style={mona}
              className="text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.65] font-medium text-[#1D1D1D]"
            >
              SEBI flagged this in November 2025 — most digital gold products
              operate outside regulatory protection, with no investor
              safeguards. The gold may be real. But the proof usually
              isn&apos;t.
            </p> */}
            </div>

            <div className="">
              {/* Row 1 — Other Platforms */}
              <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 py-6 lg:py-8">
                <Image
                  src={Locker}
                  alt="Locker"
                  width={106}
                  height={106}
                  className="w-[64px] sm:w-[80px] lg:w-[106px] h-auto flex-shrink-0 object-contain"
                />

                <div
                  className="flex-1 h-px min-w-[16px]"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(195,195,195,0) 0%, rgba(195,195,195,1) 100%)",
                  }}
                />

                <span
                  style={{ ...mona, letterSpacing: "4px" }}
                  className="text-[10px] sm:text-[12px] lg:text-[14px] tracking-[0.18em] text-[#0A0A0A] text-center whitespace-nowrap font-medium"
                >
                  OTHER
                  <br />
                  PLATFORMS
                </span>

                <div
                  className="flex-1 h-px min-w-[16px]"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(195,195,195,1) 0%, rgba(195,195,195,0) 100%)",
                  }}
                />

                <Image
                  src={AboutUsBW}
                  alt="Other platforms"
                  width={106}
                  height={106}
                  className="w-[64px] sm:w-[80px] lg:w-[106px] h-auto flex-shrink-0 object-cover rounded-md"
                />
              </div>

              <hr className="border-t border-[#E5E7EB]" />

              {/* Row 2 — STOEX */}
              <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 py-6 lg:py-8">
                <Image
                  src={isSilver ? Locker : GoldLocker}
                  alt={isSilver ? "Silver locker" : "Gold locker"}
                  width={106}
                  height={106}
                  className="w-[64px] sm:w-[80px] lg:w-[106px] h-auto flex-shrink-0 object-contain"
                  style={
                    isSilver
                      ? { filter: "grayscale(1) brightness(0.9)" }
                      : undefined
                  }
                />

                <div
                  className="flex-1 h-px min-w-[16px]"
                  style={{
                    background: `linear-gradient(90deg, ${dividerFrom} 0%, ${dividerTo} 100%)`,
                  }}
                />

                <Image
                  src={isSilver ? LogoBlue : Logo1}
                  alt="STOEX"
                  className="h-[20px] sm:h-[24px] lg:h-[28px] w-auto flex-shrink-0"
                />

                <div
                  className="flex-1 h-px min-w-[16px]"
                  style={{
                    background: `linear-gradient(90deg, ${dividerTo} 0%, ${dividerFrom} 100%)`,
                  }}
                />

                <Image
                  src={AboutUsImage}
                  alt="STOEX user"
                  width={106}
                  height={106}
                  className="w-[64px] sm:w-[80px] lg:w-[106px] h-auto flex-shrink-0 object-cover rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Right column */}
        </div>
      </div>
    </section>
  );
};
