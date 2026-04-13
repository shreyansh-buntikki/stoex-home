"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import Coin from "@/public/assets/images/coin.webp";
import AmprapaliLogo from "@/public/assets/logos/amprapali-logo.svg";
import GoldBars from "@/public/assets/images/gold-bars.webp";
import BackgroundCircles from "@/public/assets/images/hero-circles.webp";

const GOLD_PRICE_PER_GRAM = 4762;
const GOLD_WIDGET_SHADOW =
  "0 4px 4px 0 rgba(0, 0, 0, 0.08), 0 0 16px 0 rgba(191, 155, 103, 0.4)";
const HERO_GOLD_GLOW =
  "radial-gradient(ellipse 75% 90% at 90% 50%, rgba(191, 155, 103, 0.22) 0%, rgba(245, 232, 205, 0.1) 40%, rgba(255, 255, 255, 0) 68%)";
const DIVIDER_GRADIENT_GOLD =
  "linear-gradient(to bottom, #CCA763 0%, #F1D592 50%, #CCA763 100%)";

const QUICK_AMOUNTS = [15, 100, 500, 1000, 5000] as const;
const QUICK_GRAMS = [0.1, 0.5, 1, 2, 5] as const;
const TRUST_ITEMS = [
  "100% Gold-Backed",
  "Independently Verifiable",
  "Insured Custody",
  "Zero Locker Fees",
] as const;

const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };
const sansation: CSSProperties = {
  fontFamily: "Sansation, sans-serif",
  letterSpacing: "1px",
};

function HeroGoldBackdrop() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden
        style={{ background: HERO_GOLD_GLOW }}
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] hidden w-1/2 lg:flex items-center justify-end pr-8">
        <div className="relative w-full max-w-[440px] h-full overflow-visible">
          <Image
            src={BackgroundCircles}
            alt=""
            height={720}
            width={720}
            sizes="(min-width: 1280px) 42vw, 56vw"
            className="absolute left-1/2 top-1/2 h-auto w-[145%] max-w-none -translate-x-[73%] -translate-y-1/2 select-none rounded-[28px] opacity-85"
          />
        </div>
      </div>
    </>
  );
}

function GoldHeroLead() {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h1 className="text-5xl font-[700] text-[56px] leading-[55px]">
          <span className="block text-[#B8860B]" style={sansation}>
            Gold at live price.
          </span>
          <span
            className="block font-[700] text-[#0A0A0A] text-[56px] leading-[55px]"
            style={{ ...mona, letterSpacing: "1px" }}
          >
            Yours in 3 clicks.
          </span>
        </h1>

        <div
          className="space-y-2 text-[18px] leading-[24px] text-[#3D3D3D]"
          style={mona}
        >
          <p>
            Buy, sell, and own verified 24-karat gold starting from just ₹15*.
          </p>
          <p>Backed by real gold, digitally secured, and redeemable anytime.</p>
        </div>

        <p className="text-[10px] text-[#8A8FA8]" style={mona}>
          *The figure is subject to the gold rate.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <button
          type="button"
          className="rounded-full bg-[#00007F] px-8 py-3 text-[16px] font-medium text-white transition-colors hover:bg-[#0f0f3a]"
          style={mona}
        >
          Reserve Your Gold
        </button>
        <button
          type="button"
          className="rounded-full border border-[#00007F] px-8 py-3 text-[16px] font-medium text-[#00007F] transition-colors hover:bg-[#1a1a5c] hover:text-white"
          style={mona}
        >
          Learn how it works
        </button>
      </div>

      <div className="flex flex-nowrap gap-0 overflow-x-auto pt-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {TRUST_ITEMS.map((item, index) => (
          <div className="flex shrink-0" key={item}>
            {index > 0 && (
              <div
                aria-hidden
                className="mx-3 h-3 w-px sm:mx-5 sm:h-4"
                style={{ background: DIVIDER_GRADIENT_GOLD }}
              />
            )}
            <div className="text-center">
              <div
                className="text-[12px] font-medium text-[#8A8FA8]"
                style={mona}
              >
                {item}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

type Tab = "Buy" | "Sell";

function GoldBuySellToggle({
  active,
  onSelect,
}: {
  active: Tab;
  onSelect: (t: Tab) => void;
}) {
  return (
    <div
      className="rounded-full bg-white p-2"
      style={{ boxShadow: GOLD_WIDGET_SHADOW }}
    >
      <div className="flex gap-2">
        {(["Buy", "Sell"] as const).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onSelect(item)}
            className={`flex-1 cursor-pointer rounded-full py-2.5 text-[15px] font-semibold transition-all ${
              active === item
                ? "bg-[#B59449] text-white shadow-md"
                : "bg-white text-[#00007F]"
            }`}
            style={mona}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

const swapEase = [0.22, 1, 0.36, 1] as const;
const swapDuration = 0.42;
const CARD_GAP = 20;

function formatGramsInputDisplay(g: number): string {
  if (g <= 0 || !Number.isFinite(g)) return "";
  return g.toFixed(3).replace(/\.?0+$/, "");
}

function sanitizeGramsInput(raw: string): string {
  const cleaned = raw.replace(/[^\d.]/g, "");
  const dot = cleaned.indexOf(".");
  if (dot === -1) return cleaned;
  return `${cleaned.slice(0, dot + 1)}${cleaned.slice(dot + 1).replace(/\./g, "")}`;
}

function parseInrDigits(raw: string): number {
  const digits = raw.replace(/\D/g, "");
  if (digits === "") return 0;
  const n = parseInt(digits, 10);
  if (Number.isNaN(n)) return 0;
  return Math.min(n, 999_999_999_999);
}

function GoldInvestCard({
  mode,
  amount,
  goldGrams,
  youGetLabel,
  onAmountChange,
}: {
  mode: Tab;
  amount: number;
  goldGrams: number;
  youGetLabel: string;
  onAmountChange: (n: number) => void;
}) {
  const goldFirst = mode === "Sell";
  const gramsFocusedRef = useRef(false);
  const [gramsEdit, setGramsEdit] = useState("");

  useLayoutEffect(() => {
    if (!goldFirst || gramsFocusedRef.current) return;
    setGramsEdit(formatGramsInputDisplay(goldGrams));
  }, [goldFirst, goldGrams]);

  const footerRows: {
    k: string;
    line: string;
    sub: string;
    node: ReactNode;
  }[] = [
    { k: "purity", line: "24 Karat", sub: "PURITY", node: null },
    {
      k: "vault",
      line: "Live",
      sub: "VAULT STATUS",
      node: (
        <span className="mr-1 inline-block h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
      ),
    },
    { k: "audit", line: "28 Feb", sub: "LAST AUDIT", node: null },
  ];

  const setFromGrams = (g: number) => {
    onAmountChange(Math.round(g * GOLD_PRICE_PER_GRAM));
  };

  const applyGramsFromString = (sanitized: string) => {
    if (sanitized === "" || sanitized === ".") {
      onAmountChange(0);
      return;
    }
    const g = parseFloat(sanitized);
    if (!Number.isNaN(g) && g >= 0) {
      setFromGrams(g);
    }
  };

  const valueInputClass =
    "min-w-0 flex-1 border-none bg-transparent p-0 text-[24px] font-medium leading-none tracking-tight outline-none ring-0 focus:ring-0 sm:text-[28px]";

  return (
    <div
      className="relative overflow-visible rounded-[20px] border border-[#E5E7EB] bg-white p-5"
      style={{
        boxShadow: GOLD_WIDGET_SHADOW,
        backgroundImage: "url(/assets/hero-circles.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E8E8E8] bg-white shadow-sm">
            <Image
              src={AmprapaliLogo}
              alt="Amrapali Gold"
              width={28}
              height={18}
              className="object-contain"
            />
          </div>
          <div className="min-w-0">
            <div
              className="text-[14px] font-semibold leading-tight text-[#00007F]"
              style={mona}
            >
              Amrapali Gold
            </div>
            <div
              className="mt-0.5 text-[11px] leading-snug text-[#8A8FA8]"
              style={mona}
            >
              AG · Sponsored by Amrapali Group
            </div>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-[#C08514] bg-[#FAF3E8] px-3.5 py-1">
          <Image src={GoldBars} alt="Gold Bars" width={18} height={18} />
          <span
            className="text-[12px] font-semibold text-[#C08514]"
            style={mona}
          >
            Gold
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {mode === "Buy" ? (
          <div className="rounded-2xl border border-[#F3F4F6] bg-white px-4 py-3">
            <label
              className="mb-1 block text-[14px] font-medium text-[#101828]"
              style={mona}
            >
              Amount (INR)
            </label>
            <div
              className="mb-1 flex min-w-0 items-baseline gap-0.5"
              style={mona}
            >
              <span className="shrink-0 text-[28px] font-medium leading-none tracking-tight text-[#111827] sm:text-[28px]">
                ₹
              </span>
              <input
                type="text"
                name="gold-invest-amount-inr"
                inputMode="numeric"
                autoComplete="off"
                aria-label="Amount in Indian rupees"
                className={`${valueInputClass} text-[#111827]`}
                style={mona}
                value={amount === 0 ? "" : String(amount)}
                onChange={(e) => onAmountChange(parseInrDigits(e.target.value))}
              />
            </div>
            <div className="mt-2 flex flex-nowrap items-center justify-between gap-1.5 overflow-x-auto pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {QUICK_AMOUNTS.map((qa) => (
                <button
                  key={qa}
                  type="button"
                  onClick={() => onAmountChange(qa)}
                  className={`shrink-0 rounded-lg flex-1 px-1.5 py-1.5 text-[11px] font-medium transition-colors sm:px-2 sm:text-[12px] sm:py-2 md:text-[13px] ${
                    amount === qa
                      ? "border border-[#C5CAD3] bg-[#E8EAEF] text-[#1D1D1D]"
                      : "border border-[#E5E7EB] bg-white text-[#6B7280] hover:bg-[#F9FAFB]"
                  }`}
                  style={mona}
                >
                  ₹{qa.toLocaleString("en-IN")}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-[#F3F4F6] bg-white px-4 py-3">
            <label
              className="mb-1 block text-[14px] font-medium text-[#101828]"
              style={mona}
            >
              Gold (grams)
            </label>
            <div
              className="mt-1 flex min-w-0 items-baseline gap-1"
              style={mona}
            >
              <input
                type="text"
                name="gold-invest-grams"
                inputMode="decimal"
                autoComplete="off"
                aria-label="Gold in grams"
                pattern="[0-9]*[.]?[0-9]*"
                className={`${valueInputClass} text-[#111827]`}
                style={mona}
                value={gramsEdit}
                onChange={(e) => {
                  const cleaned = sanitizeGramsInput(e.target.value);
                  setGramsEdit(cleaned);
                  applyGramsFromString(cleaned);
                }}
                onFocus={() => {
                  gramsFocusedRef.current = true;
                }}
                onBlur={() => {
                  gramsFocusedRef.current = false;
                  setGramsEdit(formatGramsInputDisplay(goldGrams));
                }}
              />
              <span className="shrink-0 text-[28px] font-bold leading-none tracking-tight text-[#111827] sm:text-28px]">
                g
              </span>
            </div>
            <div className="mt-2 flex flex-nowrap items-center justify-between gap-1.5 overflow-x-auto pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {QUICK_GRAMS.map((g) => {
                const selected =
                  goldGrams > 0 && Math.abs(goldGrams - g) < 0.02;
                return (
                  <button
                    key={g}
                    type="button"
                    onClick={() => {
                      setFromGrams(g);
                      setGramsEdit(formatGramsInputDisplay(g));
                    }}
                    className={`shrink-0 flex-1 rounded-lg px-1.5 py-1.5 text-[11px] font-medium transition-colors sm:px-2 sm:text-[12px] sm:py-2 md:text-[13px] ${
                      selected
                        ? "border border-[#C5CAD3] bg-[#E8EAEF] text-[#1D1D1D]"
                        : "border border-[#E5E7EB] bg-white text-[#6B7280] hover:bg-[#F9FAFB]"
                    }`}
                    style={mona}
                  >
                    {g}g
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div className="mt-3 space-y-3">
        <div className="relative overflow-hidden rounded-xl border border-[#B8922A33] bg-[#FFF6E8] px-4 py-4 pb-4">
          <div
            className="mb-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#B8860B]"
            style={mona}
          >
            {mode === "Sell" ? "YOU ARE SELLING" : "YOU GET"}
          </div>
          <div className="flex items-end justify-between gap-2 pr-10">
            <div
              className="text-[18px] font-bold leading-tight text-[#00007F] sm:text-[20px]"
              style={mona}
            >
              {youGetLabel}
            </div>
          </div>
          <div className="pointer-events-none absolute -bottom-4 -right-10 h-[6rem] w-[6rem] sm:h-[7.5rem] sm:w-[7.5rem]">
            <Image
              src={Coin}
              alt="Coin"
              width={240}
              height={240}
              className="h-full w-full object-contain object-right"
            />
          </div>
        </div>

        <button
          type="button"
          className={`mt-1 w-full rounded-4xl py-3.5 text-[15px] font-bold uppercase tracking-wide text-white transition-colors ${
            mode === "Sell"
              ? "bg-[#C62828] hover:bg-[#B71C1C]"
              : "bg-[#00007F] hover:bg-[#000066]"
          }`}
          style={mona}
        >
          {mode === "Sell" ? "SELL" : "INVEST"}
        </button>

        <div className=" flex pt-1">
          {footerRows.map((col, i) => (
            <div
              key={col.k}
              className={`flex min-w-0 flex-1 flex-col items-center justify-center px-1 text-center ${
                i > 0 ? "border-l border-[#E5E7EB]" : ""
              }`}
            >
              <div
                className="flex items-center justify-center gap-0.5 text-[13px] font-bold text-[#00007F] sm:text-[14px]"
                style={mona}
              >
                {col.node}
                {col.line}
              </div>
              <div
                className="mt-1 text-[9px] uppercase tracking-wide text-[#8A8FA8] sm:text-[10px]"
                style={mona}
              >
                {col.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const HeroGold = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Buy");
  const [amount, setAmount] = useState(5000);

  const goldGrams = amount / GOLD_PRICE_PER_GRAM;
  const youGetLabel =
    goldGrams >= 0.01 ? `${goldGrams.toFixed(2)}g gold` : "0.00g gold";

  return (
    <div className="relative flex min-h-[calc(100dvh-5rem)] items-center overflow-hidden bg-white">
      <HeroGoldBackdrop />
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <GoldHeroLead />

          <div className="relative flex w-full justify-center lg:justify-end">
            <div className="w-full max-w-[440px] space-y-4">
              <GoldBuySellToggle active={activeTab} onSelect={setActiveTab} />
              <GoldInvestCard
                mode={activeTab}
                amount={amount}
                goldGrams={goldGrams}
                youGetLabel={youGetLabel}
                onAmountChange={setAmount}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
