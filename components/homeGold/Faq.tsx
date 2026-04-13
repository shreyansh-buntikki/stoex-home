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

const faqData = {
  getting_started: [
    {
      question: "What is STOEX Gold?",
      answer:
        "Stoex is a gold investment platform that lets you buy, sell, and verify fractional gold ownership starting from {PRICE_0.001g}. Your gold is physically stored in audited, insured vaults under independent trustee custody, and every gram is recorded on a tamper-proof digital ledger.",
    },
    {
      question: "How much do I need to start?",
      answer:
        "You can start with as little as {PRICE_0.001g}, which buys one gold token representing a fraction of a gram. There is no maximum limit.",
    },
    {
      question: "Do I need a demat account?",
      answer:
        "No. Stoex does not require a demat account, PAN card, or Aadhaar for basic account creation. You sign up with your email and mobile number.",
    },
    {
      question: "How do I pay?",
      answer:
        "You pay directly via UPI at the point of purchase — no need to pre-load a wallet or add funds first. Select the gold you want, pay with any UPI app, and your gold is purchased instantly in one step",
    },
  ],
  "safety_&_trust": [
    {
      question: "Is my gold safe on Stoex?",
      answer:
        "Your gold is stored in institutional-grade, independently audited, insured vaults with independent trustee custody. The gold is legally segregated from Stoex's assets. You can verify your holdings anytime on the Verify My Gold dashboard",
    },
    {
      question: "What did SEBI say about digital gold?",
      answer:
        "In November 2025, SEBI cautioned that digital gold products are not classified as securities and operate outside regulatory protection. Stoex was built to address these exact concerns: audited vaults, independent trustees, blockchain verification, and full insurance.",
    },
    {
      question: "What happens if Stoex shuts down?",
      answer:
        "Your gold is held by an independent trustee, legally separate from Stoex's assets. The trustee ensures your gold is returned to you or liquidated per your instructions.",
    },
    {
      question: "Is Stoex regulated?",
      answer:
        "Stoex gold tokens are not regulated securities. Stoex operates as a compliant platform following institutional-grade standards, with SEBI-licensed vault custody, independent trustees, and blockchain verification. Stoex is built for when regulation arrives — doing it right from day one",
    },
  ],
  "buying_&_selling": [
    {
      question: "How does the pricing work?",
      answer:
        "Gold prices on Stoex are linked to industry benchmarks and update in real time. The exact buy/sell spread is shown to you before you confirm any transaction. No hidden fees.",
    },
    {
      question: "What is a gold token?",
      answer:
        "A gold token is a digital representation of a fraction of physical gold. Each token is dynamically priced at {PRICE_0.001g} (the real-time cost of 0.001g gold) and represents a verified quantity of gold stored in insured vaults. You can own as many tokens as you like.",
    },
    {
      question: "Can I sell my gold anytime?",
      answer:
        "Yes. There is no lock-in period. You can sell your gold tokens anytime and receive the proceeds in your linked bank account.",
    },
    {
      question: "Can I get physical gold?",
      answer:
        "Yes. You can redeem your gold tokens for physical gold coins (1g, 5g) or bars (10g), delivered to your doorstep with insurance. Delivery timelines are 5–7 business days for coins and 7–10 business days for bars.",
    },
  ],
  technical: [
    {
      question: "Do I need to understand blockchain?",
      answer:
        "No. The blockchain technology runs invisibly in the background. It simply ensures your ownership records are tamper-proof and independently verifiable. You interact with Stoex like any other investment app.",
    },
    {
      question: "What is Polygon blockchain?",
      answer:
        "Polygon blockchain is the permissioned blockchain infrastructure that powers Stoex's tamper-proof record-keeping. It ensures that every gold ownership record is independently verifiable and cannot be altered by anyone.",
    },
    {
      question: "Are there any fees?",
      answer:
        "Zero storage fees. The only cost is the buy/sell spread, which is shown transparently before you confirm any transaction. No hidden charges, no annual fees, no exit fees.",
    },
  ],
};

const tabs = [
  { key: "getting_started" as const, label: "Getting Started" },
  { key: "safety_&_trust" as const, label: "Safety & Trust" },
  { key: "buying_&_selling" as const, label: "Buying & Selling" },
  { key: "technical" as const, label: "Technical" },
];

function FaqItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: (typeof faqData)["getting_started"][0];
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
      className="border-b border-[#E5E7EB] first:border-t-0 last:border-b-0"
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
        <div className="flex-shrink-0 flex items-center justify-center text-[#00007F]">
          <Plus
            className={`w-5 h-5  transition-transform duration-200 ${
              isOpen ? "rotate-45" : "rotate-0"
            } ${isOpen ? "text-[#00007F]" : "text-[#8A8FA8]"}`}
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
  const [tab, setTab] = useState<
    "getting_started" | "safety_&_trust" | "buying_&_selling" | "technical"
  >("getting_started");

  const items = faqData[tab];
  const twoColumns = items.length >= 6;

  const handleTabChange = (key: typeof tab, e: React.MouseEvent<HTMLButtonElement>) => {
    setTab(key);
    setOpenIndex(0);
    const button = e.currentTarget;
    button.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <section className="bg-white py-[60px] lg:py-[100px] px-6">
      <div className="container mx-auto max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2
            className="text-[26px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[46px] text-[#0A0A0A] mb-8"
            style={sansation}
          >
            FAQ about Stoex Digital Gold
          </h2>

          {/* Tabs */}
          <div className="flex items-center justify-start lg:justify-center gap-1 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={(e) => handleTabChange(t.key, e)}
                className={`shrink-0 px-3 lg:px-5 py-2 rounded-full text-[16px] lg:text-[24px] font-semibold transition-colors cursor-pointer ${
                  tab === t.key
                    ? " text-[#00007F] underline underline-[#00007F] underline-offset-4"
                    : "text-[#0A0A0A] "
                }`}
                style={sansation}
              >
                {t.label}
              </button>
            ))}
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
              <div className="grid grid-cols-2 gap-x-12">
                <div>
                  {items.slice(0, Math.ceil(items.length / 2)).map((item, index) => (
                    <FaqItem
                      key={item.question}
                      item={item}
                      index={index}
                      isOpen={openIndex === index}
                      onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                    />
                  ))}
                </div>
                <div>
                  {items.slice(Math.ceil(items.length / 2)).map((item, index) => {
                    const globalIndex = Math.ceil(items.length / 2) + index;
                    return (
                      <FaqItem
                        key={item.question}
                        item={item}
                        index={index}
                        isOpen={openIndex === globalIndex}
                        onToggle={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
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
                    onToggle={() => setOpenIndex(openIndex === index ? null : index)}
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
