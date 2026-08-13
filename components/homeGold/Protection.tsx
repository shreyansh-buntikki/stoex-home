"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";

import InflationHedge from "@/public/assets/images/inflation-hedge.webp";
import InflationHedgeSilver from "@/public/assets/images/inflation-hedge-silver.webp";
import PortfolioSafety from "@/public/assets/images/portfolio-safety.webp";
import PortfolioSafetySilver from "@/public/assets/images/portfolio-safety-silver.webp";
import CulturalValue from "@/public/assets/images/cultural-value.webp";
import CulturalValueSilver from "@/public/assets/images/cultural-value-silver.webp";
import GenerationalWealth from "@/public/assets/images/generational-wealth.webp";
import GenerationalWealthSilver from "@/public/assets/images/generational-wealth-silver.webp";

const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };
const sansation: CSSProperties = {
  fontFamily: "Sansation, sans-serif",
  letterSpacing: "1px",
};

const protectionDataGold = [
  {
    image: InflationHedge,
    title: "BEAT INFLATION",
    description:
      "When the price of everything rises, your gold rises with it - so your savings keep their real value, year after year.",
  },
  {
    image: PortfolioSafety,
    title: "STEADY WHEN MARKETS SHAKE",
    description:
      "When markets fall, gold tends to hold steady – it gives your savings a stable foundation.",
  },
  {
    image: CulturalValue,
    title: "PART OF YOUR STORY",
    description:
      "From weddings to Dhanteras, gold has always been how Indian families celebrate - protect what matters most.",
  },
  {
    image: GenerationalWealth,
    title: "A GIFT THAT LASTS",
    description:
      "The gold you buy today can be your children's tomorrow - fully verified, always valuable, and yours to pass on whenever you choose.",
  },
];

const protectionDataSilver = [
  {
    image: InflationHedgeSilver,
    title: "THE EVERYDAY PRECIOUS METAL",
    description:
      "Silver has been Indian households' first store of value for generations: anklets, coins, utensils, gifts.",
  },
  {
    image: PortfolioSafetySilver,
    title: "POWERS THE MODERN WORLD",
    description:
      "Solar panels, EVs, electronics: silver is the working metal of the energy transition, with real industrial demand behind it.",
  },
  {
    image: CulturalValueSilver,
    title: "A LIGHTER WAY IN",
    description:
      "A fraction of gold's price per gram, so a young saver can build a meaningful holding sooner.",
  },
  {
    image: GenerationalWealthSilver,
    title: "A GIFT THAT LASTS",
    description:
      "Shubh for every occasion: births, housewarmings, Dhanteras — now verifiable and deliverable to a doorstep.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

function ProtectionCard({
  item,
  highlighted = false,
  mode = "gold",
}: {
  item: (typeof protectionDataGold)[0];
  highlighted?: boolean;
  mode?: "gold" | "silver";
}) {
  const isSilver = mode === "silver";
  return (
    <div
      className="rounded-xl p-px h-full transition-shadow duration-500"
      style={{
        background: isSilver
          ? "none"
          : highlighted
            ? "linear-gradient(to bottom, #FFCD57 0%, #B8943F 100%)"
            : "linear-gradient(to bottom, transparent 0%, #FFCD57 70%)",
        boxShadow: isSilver
          ? "0px 4px 16px -4px rgba(10,10,10,0.1)"
          : highlighted
            ? "0px 16px 36px -14px rgba(184,148,63,0.45)"
            : "none",
      }}
    >
      <motion.div
        variants={cardVariants}
        className="flex flex-col gap-3 p-5 pb-[36px] rounded-xl h-full"
        style={{
          background: isSilver
            ? "linear-gradient(to top, #FFFFFF, #ECEFF4)"
            : "linear-gradient(to top, #FFFFFF, #FFF8E6)",
        }}
      >
        <Image
          src={item.image}
          alt={item.title}
          width={300}
          height={300}
          sizes="(max-width: 1024px) 60vw, 256px"
          className="object-contain mb-3 mx-auto"
        />

        <h3
          className="text-[20px] font-semibold leading-[24px] text-[#0A0A0A]"
          style={mona}
        >
          {item.title}
        </h3>

        <p
          className="text-[16px] font-normal leading-[20px] text-[#111111]"
          style={mona}
        >
          {item.description}
        </p>
      </motion.div>
    </div>
  );
}

export const Protection = ({ mode = "gold" }: { mode?: "gold" | "silver" }) => {
  const isSilver = mode === "silver";
  const protectionData = isSilver ? protectionDataSilver : protectionDataGold;

  return (
    <section className="bg-white py-[40px] lg:py-[60px] px-6">
      <div className="container mx-auto max-w-[1340px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mx-auto"
        >
          <div>
            <h2
              className="text-[24px] min-[380px]:text-[26px] lg:text-[50px] font-regular leading-[32px] lg:leading-[46px] text-balance"
              style={sansation}
            >
              <span
                className={isSilver ? "text-[#00007F] font-bold" : "text-[#B8943F] font-bold"}
              >
                Add Shine
              </span>{" "}
              {isSilver ? "To" : "to"} Your Portfolio
            </h2>
          </div>
        </motion.div>

        {/* Desktop: static grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="hidden lg:grid lg:grid-cols-4 lg:gap-6 mt-8 lg:mt-10"
        >
          {protectionData.map((item) => (
            <ProtectionCard key={item.title} item={item} mode={mode} />
          ))}
        </motion.div>

        {/* Mobile: swipeable, auto-advancing carousel */}
        <ProtectionCarousel data={protectionData} mode={mode} />
      </div>
    </section>
  );
};

const AUTO_ADVANCE_MS = 4000;

const ProtectionCarousel = ({
  data,
  mode = "gold",
}: {
  data: typeof protectionDataGold;
  mode?: "gold" | "silver";
}) => {
  const isSilver = mode === "silver";
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const index = Math.round(track.scrollLeft / track.clientWidth);
    setActive(Math.min(Math.max(index, 0), data.length - 1));
  };

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
  };

  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => {
      goTo((active + 1) % data.length);
    }, AUTO_ADVANCE_MS);
    return () => clearTimeout(timer);
  }, [active, paused]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="lg:hidden mt-8"
    >
      <div
        ref={trackRef}
        onScroll={handleScroll}
        onPointerDown={() => setPaused(true)}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {data.map((item, index) => (
          <div key={item.title} className="w-full shrink-0 snap-center px-1">
            <ProtectionCard
              item={item}
              highlighted={active === index}
              mode={mode}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-5">
        {data.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => {
              setPaused(true);
              goTo(index);
            }}
            aria-label={`Go to ${item.title}`}
            className={`h-2 rounded-full transition-all ${
              active === index
                ? isSilver
                  ? "w-6 bg-[#00007F]"
                  : "w-6 bg-[#B8943F]"
                : isSilver
                  ? "w-2 bg-[#DCE1E9]"
                  : "w-2 bg-[#E5D9BC]"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};
