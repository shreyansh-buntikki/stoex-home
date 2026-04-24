"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";
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

const tabs = [
  { key: "know_stoex" as const, label: "Know Stoex" },
  { key: "is_my_gold_safe" as const, label: "Is My Gold Really Safe" },
  {
    key: "buying_&_selling" as const,
    label: "Buying, Selling & Getting Physical Gold",
  },
  { key: "cost" as const, label: "Costs, Taxes & Returns" },
  { key: "verified" as const, label: "How Is My Gold Verified?" },
];

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
      className="border-b border-[#E5E7EB] first:border-t-0 "
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <h3
          className="text-[18px] font-semibold leading-[24px] text-[#00007F]"
          style={mona}
        >
          {item.question}
        </h3>
        <div className="flex-shrink-0 flex items-center justify-center text-[#B8922A]">
          <Plus
            className={`w-5 h-5  transition-transform duration-200 ${
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
              className="text-[14px] lg:text-[16px] leading-[18px] lg:leading-[22px] text-[#3D3D3D] pb-5"
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

export const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [tab, setTab] = useState<FaqTab>("know_stoex");

  const items = faqData[tab];
  const twoColumns = items.length >= 6;

  return (
    <section className="bg-white py-[80px] lg:py-[100px] px-6">
      <div className="container mx-auto max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4 lg:mb-10"
        >
          <h2
            className="text-[26px] lg:text-[40px] font-bold leading-[32px] lg:leading-[46px] text-[#0A0A0A] mb-6"
            style={sansation}
          >
            FAQs about Stoex Gold
          </h2>

          <div className="flex items-center justify-center gap-6">
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => {
                const idx = tabs.findIndex((t) => t.key === tab);
                setTab(tabs[(idx - 1 + tabs.length) % tabs.length].key);
                setOpenIndex(0);
              }}
              className="text-[#0A0A0A] cursor-pointer flex-shrink-0"
              aria-label="Previous tab"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
            </button>
            <span
              className="text-[16px] lg:text-[24px] font-semibold text-[#00007F] w-full lg:w-[500px] text-center"
              style={sansation}
            >
              {tabs.find((t) => t.key === tab)?.label}
            </span>
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => {
                const idx = tabs.findIndex((t) => t.key === tab);
                setTab(tabs[(idx + 1) % tabs.length].key);
                setOpenIndex(0);
              }}
              className="text-[#0A0A0A] cursor-pointer flex-shrink-0"
              aria-label="Next tab"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {twoColumns ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 max-w-[800px] lg:max-w-none mx-auto">
                <div>
                  {items
                    .slice(0, Math.ceil(items.length / 2))
                    .map((item, index) => (
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
                </div>
                <div>
                  {items
                    .slice(Math.ceil(items.length / 2))
                    .map((item, index) => {
                      const globalIndex = Math.ceil(items.length / 2) + index;
                      return (
                        <FaqItem
                          key={item.question}
                          item={item}
                          index={index}
                          isOpen={openIndex === globalIndex}
                          onToggle={() =>
                            setOpenIndex(
                              openIndex === globalIndex ? null : globalIndex,
                            )
                          }
                        />
                      );
                    })}
                </div>
              </div>
            ) : (
              <div className="max-w-[800px] mx-auto">
                {items.map((item, index) => (
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
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
