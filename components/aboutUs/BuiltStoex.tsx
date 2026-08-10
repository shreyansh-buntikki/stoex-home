import type { CSSProperties } from "react";
import GirlBuyingGold from "@/public/assets/images/buying-gold.webp";
import CurveLine from "@/public/assets/images/curved-line.svg";
import Image from "next/image";

const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };

export const BuiltStoex = () => {
  return (
    <div
      className="relative flex items-center justify-center overflow-hidden py-16 md:py-20 lg:py-0 lg:h-[680px] w-full"
      style={{
        background:
          "linear-gradient(180deg, #00002E 0%, #00004A 60%, #000066 100%)",
        contain: "layout paint",
      }}
    >
      <Image
        src={CurveLine}
        alt="curved-line-bg"
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-0 top-0 h-full w-auto hidden lg:block lg:opacity-80"
      />
      <Image
        src={CurveLine}
        alt="curved-line-bg"
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-0 top-0 h-full w-auto rotate-180 hidden lg:block lg:opacity-80"
      />

      <div className="relative flex flex-col md:flex-row items-center px-6 w-full max-w-[900px] gap-8 md:gap-10 lg:gap-[58px] lg:w-[900px]">
        <Image
          src={GirlBuyingGold}
          alt="Girl buying gold"
          width={250}
          height={310}
          className="flex-shrink-0 rounded-[16px] object-cover w-[200px] md:w-[220px] lg:w-[250px] h-auto"
          priority
        />
        <div className="flex flex-col gap-4 md:gap-6 flex-1 min-w-0 text-center md:text-left">
          <h2
            style={mona}
            className="text-[20px] sm:text-[22px] md:text-[28px] font-bold leading-[1.3] text-[#F4C542]"
          >
            Stoex is built to address this - to make digital gold safe and
            verifiable, not assumed.
          </h2>
          <div className="space-y-5 flex flex-col gap-3">
            <p
              style={mona}
              className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] font-normal text-white"
            >
              Gold is refined by MMTC-PAMP — the only LBMA-accredited gold
              refinery in India — vaulted by Sequel, administered by Vistra,
              audited by RRBP, and recorded on world's most widely adopted
              tamper-proof ledgers.
            </p>
            <p
              style={mona}
              className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] font-normal text-white"
            >
              No single entity, including Stoex controls the full process and
              governance. The result: you don't need to trust a brand name -{" "}
              <span className="font-bold">You verify it yourself.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
