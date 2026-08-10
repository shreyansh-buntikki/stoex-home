import type { CSSProperties } from "react";
import Image from "next/image";
import MMTCLogo from "@/public/assets/logos/mmtc.svg";
import GoldBars from "@/public/assets/images/gold-bars.webp";

const sansation: CSSProperties = { fontFamily: "Sansation, sans-serif" };
const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };

export const AboutMMTC = () => {
  return (
    <div className="flex flex-col max-w-[980px] self-center w-full px-6 lg:px-0">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
        <div className="flex flex-col gap-4 md:gap-6 flex-1 text-center md:text-left">
          <h1
            style={sansation}
            className="max-w-[620px] flex gap-4 mx-auto md:mx-0 text-[32px] sm:text-[40px] lg:text-[56px] leading-[1] font-semibold"
          >
            About
            <Image
              src={MMTCLogo}
              alt="MMTC-PAMP"
              className="w-[160px] sm:w-[250px] h-auto mx-auto md:mx-0"
            />
          </h1>
          <p
            style={mona}
            className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] font-normal text-[#3D3D3D]"
          >
            A joint venture between the world&apos;s leading bullion brand,
            PAMP, from Switzerland and MMTC Ltd, a Government of India
            Undertaking, MMTC-PAMP seamlessly marries Swiss excellence with
            Indian ingenuity. MMTC-PAMP India Pvt. Ltd. is internationally
            recognised as an industry leader for bringing global standards of
            excellence to the Indian precious metals industry. We are the only
            LBMA-accredited gold refinery in India and our gold is accepted
            across global commodity exchanges and central banks.
          </p>
        </div>
      </div>
    </div>
  );
};
