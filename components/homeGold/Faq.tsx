"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import type { CSSProperties } from "react";

const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };
const sansation: CSSProperties = {
  fontFamily: "Sansation, sans-serif",
  letterSpacing: "1px",
};

const faqData = [
  {
    question: "What is STOEX Gold?",
    answer:
      "STOEX Gold is a digital gold investment platform that lets you buy, sell, and redeem 24-karat gold starting from as low as ₹15. Every unit of gold you purchase is backed 1:1 by physical gold stored in Brink's institutional-grade vaults.",
  },
  {
    question: "How is my gold stored and secured?",
    answer:
      "Your gold is stored in Brink's institutional-grade vaults under 24/7 surveillance. It is sourced exclusively through Amrapali Group and independently audited by EY (Ernst & Young) every quarter to verify 1:1 backing.",
  },
  {
    question: "Can I redeem physical gold?",
    answer:
      "Yes, you can redeem your digital gold as physical gold anytime. Physical delivery is available in multiples of 1g, and certified gold will be delivered to your registered address.",
  },
  {
    question: "What are the fees involved?",
    answer:
      "There are zero storage fees on STOEX Gold. You only pay the live market price when you buy gold and a small spread when you sell. No hidden charges, no annual maintenance, no lock-in period.",
  },
  {
    question: "How do I sell my gold?",
    answer:
      "You can sell your gold instantly at live market rates, 24x7. The cash is credited directly to your linked bank account within seconds. No waiting period, no paperwork.",
  },
  {
    question: "Is my investment safe?",
    answer:
      "Absolutely. Your ownership is recorded on a public blockchain ledger — publicly verifiable and permanently immutable. Combined with quarterly EY audits and Brink's vault storage, your investment is protected at every level.",
  },
];

function FaqItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: (typeof faqData)[0];
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
      className="border-b border-[#E5E7EB] last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-6 text-left"
      >
        <h3
          className="text-[18px] font-semibold leading-[26px] text-[#00007F]"
          style={mona}
        >
          {item.question}
        </h3>
        <div className="flex-shrink-0 flex items-center justify-center text-[#00007F]">
          <Plus
            className={`w-6 h-6 transition-transform duration-200 ${
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
              className="text-[16px] leading-[24px] text-[#6B7280] pb-6 max-w-[800px]"
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

  return (
    <section className="bg-white py-[100px] px-6">
      <div className="container mx-auto max-w-[800px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2
            className="text-[40px] font-semibold leading-[46px] text-[#0A0A0A] mb-4"
            style={sansation}
          >
            FAQ about Safety and Ownership
          </h2>
         
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-t border-[#E5E7EB]"
        >
          {faqData.map((item, index) => (
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
        </motion.div>
      </div>
    </section>
  );
};
