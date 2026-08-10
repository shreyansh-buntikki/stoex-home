"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import type { CSSProperties } from "react";
import { faqData } from "./FaqData";

const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };
const sansation: CSSProperties = {
  fontFamily: "Sansation, sans-serif",
  letterSpacing: "1px",
};

export type FaqEntry = { question: string; answer: string };
export type FaqTab =
  | "know_stoex"
  | "is_my_gold_safe"
  | "buying_&_selling"
  | "cost"
  | "verified";

const tabOrder: FaqTab[] = [
  "know_stoex",
  "is_my_gold_safe",
  "buying_&_selling",
  "cost",
  "verified",
];

const allItems: FaqEntry[] = tabOrder.flatMap((key) => faqData[key]);

function FaqItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: FaqEntry;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-[#ffecbf] first:border-t-0 "
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <h3
          className="text-[18px] leading-[24px]"
          style={{
            ...mona,
            color: isOpen ? "#00007F" : "#111111",
            fontWeight: isOpen ? "600" : "500",
          }}
        >
          {item.question}
        </h3>
        <div className="flex-shrink-0 flex items-center justify-center text-[#B8922A]">
          <Plus
            className={`w-5 h-5 transition-transform duration-200 ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
            strokeWidth={2.2}
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p
              className="text-[14px] lg:text-[16px] leading-[18px] lg:leading-[28px] text-[#3D3D3D] pb-5"
              style={mona}
            >
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const INITIAL_VISIBLE = 10;

export const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  const hasMore = allItems.length > INITIAL_VISIBLE;
  const displayItems =
    hasMore && !showAll ? allItems.slice(0, INITIAL_VISIBLE) : allItems;

  return (
    <section id="faqs" className="bg-white py-[80px] lg:py-[0px] lg:pt-20 px-6">
      <div className="container mx-auto max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4 lg:mb-10"
        >
          <h2
            className="text-[26px] lg:text-[48px] font-regular leading-[32px] lg:leading-[46px] text-[#0A0A0A] mb-6"
            style={sansation}
          >
            FAQs about <span className="text-[#B8943F] font-bold">STOEX Gold</span>
          </h2>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="max-w-[800px] mx-auto">
              {displayItems.map((item, index) => (
                <FaqItem
                  key={item.question}
                  item={item}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}

              {hasMore && (
                <button
                  type="button"
                  onClick={() => setShowAll(!showAll)}
                  className="text-[14px] cursor-pointer font-semibold underline text-[#B8943F] mt-6 text-center w-full"
                  style={{
                    ...mona,
                    letterSpacing: "5px",
                  }}
                >
                  {showAll ? "COLLAPSE" : "LOAD MORE"}
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
