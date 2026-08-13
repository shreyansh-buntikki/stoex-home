"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import type { CSSProperties } from "react";

import MobileImage from "@/public/assets/images/mobile.webp";
import CoinImage from "@/public/assets/images/coin-2.webp";
import CoinIcon from "@/public/assets/images/coin.webp";
import Gold1gm from "@/public/assets/images/gold-1g.png";
import Gold5gm from "@/public/assets/images/gold-5g.png";
import Gold10gm from "@/public/assets/images/gold-10g.png";
import { useGoldRate } from "@/hooks/useGoldRate";

const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };
const sansation: CSSProperties = {
  fontFamily: "Sansation, sans-serif",
  letterSpacing: "1px",
};

type RedeemMode = "cash" | "physical";

const QUICK_GRAMS_CASH = [0.01, 0.5, 1, 2];
const QUICK_AMOUNTS = [15, 100, 500, 1000, 5000] as const;
const CARD_GAP = 55;
const swapDuration = 0.45;
const swapEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
const GOLD_WEIGHTS = [
  { weight: "1g", icon: Gold1gm },
  { weight: "5g", icon: Gold5gm },
  { weight: "10g", icon: Gold10gm },
];

const redemptionTheme = {
  gold: {
    metal: "gold" as const,
    Metal: "Gold" as const,
    sectionBg: "linear-gradient(180deg, #FFFBF2 0%, #FFFFFF 100%)",
    heading: "text-[#B8943F]",
    unselectedCardBg: "bg-[#FFF7E5]",
    activeTitle: "text-[#B8943F]",
    unselectedTitle: "text-[#B8AA8A]",
    unselectedText: "text-[#C8BC9A]",
    unselectedTextHex: "#C8BC9A",
    cardBorder: "border-[#E8D9B8]",
    bannerBg: "bg-[#EDE0C4]",
    bannerText: "text-[#C8BC9A]",
    disabledButtonBorder: "border-[#B8AA8A]",
  },
  silver: {
    metal: "silver" as const,
    Metal: "Silver" as const,
    sectionBg: "linear-gradient(180deg, #ECEFF4 0%, #FFFFFF 100%)",
    heading: "text-[#00007F]",
    unselectedCardBg: "bg-[#DCE1E9]",
    activeTitle: "text-[#00007F]",
    unselectedTitle: "text-[#8A96A8]",
    unselectedText: "text-[#8A96A8]",
    unselectedTextHex: "#8A96A8",
    cardBorder: "border-[#C7CDD4]",
    bannerBg: "bg-[#DCE1E9]",
    bannerText: "text-[#6C7484]",
    disabledButtonBorder: "border-[#8A96A8]",
  },
} as const;

function AvailableGoldBar({
  greyed,
  themeMode = "gold",
}: {
  greyed: boolean;
  themeMode?: "gold" | "silver";
}) {
  const greyedBg = themeMode === "silver" ? "bg-[#ECEFF4]" : "bg-[#FFFBF2]";
  return (
    <div
      className={`flex items-center justify-between rounded-xl border px-4 py-3 ${
        greyed ? `border-[#E5E7EB] ${greyedBg}` : "border-[#E5E7EB] bg-white"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={CoinIcon}
            alt={themeMode === "silver" ? "Silver Coin" : "Gold Coin"}
            width={65}
            height={65}
            className={`object-cover ${
              themeMode === "silver" ? "grayscale brightness-125" : ""
            } ${greyed ? "opacity-40 grayscale" : ""}`}
          />
        </div>
        <span
          className={`text-[13px] font-inter lg:text-[14px] ${greyed ? "text-[#BCBCBC]" : "text-[#3D3D3D]"}`}
        >
          Available Balance
        </span>
      </div>
      <span
        className={`text-[16px] font-inter lg:text-[18px] font-medium ${greyed ? "text-[#BCBCBC]" : "text-[#0A0A0A]"}`}
      >
        56.82g
      </span>
    </div>
  );
}

function parseInrDigits(raw: string): number {
  const digits = raw.replace(/\D/g, "");
  if (digits === "") return 0;
  const n = parseInt(digits, 10);
  if (Number.isNaN(n)) return 0;
  return Math.min(n, 999_999_999_999);
}

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

function CashCard({
  active,
  themeMode = "gold",
}: {
  active: boolean;
  themeMode?: "gold" | "silver";
}) {
  const t = redemptionTheme[themeMode];
  const { goldRate } = useGoldRate();
  const cashPricePerGram = parseFloat(String(goldRate));
  const [goldGrams, setGoldGrams] = useState(0.01);
  const [amountInr, setAmountInr] = useState(0);
  const [gramsEdit, setGramsEdit] = useState("0.01");
  const [goldFirst, setGoldFirst] = useState(true);
  const goldRef = useRef<HTMLDivElement>(null);
  const amountRef = useRef<HTMLDivElement>(null);
  const [h, setH] = useState({ gold: 180, amount: 130 });
  const greyed = !active;
  const valueInputClass =
    "min-w-0 flex-1 border-none bg-transparent p-0 text-[28px] font-bold leading-none tracking-tight outline-none ring-0 focus:ring-0";

  useEffect(() => {
    if (cashPricePerGram > 0) {
      setAmountInr(Math.round(0.01 * cashPricePerGram));
    }
  }, [cashPricePerGram]);

  const setFromGrams = (grams: number) => {
    const nextGrams = Math.max(0, grams);
    setGoldGrams(nextGrams);
    setAmountInr(Math.round(nextGrams * cashPricePerGram));
    setGramsEdit(formatGramsInputDisplay(nextGrams));
  };

  const setFromAmount = (amount: number) => {
    const nextAmount = Math.max(0, amount);
    setAmountInr(nextAmount);
    const nextGrams = nextAmount / cashPricePerGram;
    setGoldGrams(nextGrams);
    setGramsEdit(formatGramsInputDisplay(nextGrams));
  };

  useLayoutEffect(() => {
    const measure = () => {
      const gold = goldRef.current?.offsetHeight ?? 180;
      const amount = amountRef.current?.offsetHeight ?? 130;
      setH({ gold, amount });
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (goldRef.current) ro.observe(goldRef.current);
    if (amountRef.current) ro.observe(amountRef.current);
    return () => ro.disconnect();
  }, [goldFirst, goldGrams, amountInr]);

  const goldTop = goldFirst ? 0 : h.amount + CARD_GAP;
  const amountTop = goldFirst ? h.gold + CARD_GAP : 0;
  const stackMinH = h.gold + CARD_GAP + h.amount;
  const swapSeamY = goldFirst
    ? h.gold + CARD_GAP * 1.1
    : h.amount + CARD_GAP * 1.1;

  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 ${
        active
          ? `${t.cardBorder} bg-white shadow-[0px_0px_24px_0px_rgba(191,155,103,0.35)]`
          : `${t.cardBorder} ${t.unselectedCardBg}`
      }`}
    >
      <h3
        className={`text-center text-[18px] lg:text-[22px] font-semibold mb-1 lg:mb-2 ${
          active ? t.activeTitle : t.unselectedTitle
        }`}
        style={{ ...mona, letterSpacing: "1px" }}
      >
        SELL {t.Metal.toUpperCase()} FOR CASH
      </h3>
      <p
        className={`text-center text-[12px] lg:text-[12px] leading-[17px] lg:leading-[18px] mb-4 lg:mb-6 max-w-[320px] mx-auto ${
          greyed ? t.unselectedText : "text-[#111111]"
        }`}
        style={mona}
      >
        Sell your {t.metal} instantly at live market rates. Funds are
        credited to your bank account within seconds.
      </p>

      <AvailableGoldBar greyed={greyed} themeMode={themeMode} />
      <p
        className="text-[13px] lg:text-[15px] font-regular tracking-wide mt-3"
        style={{
          ...mona,
          color: greyed ? t.unselectedTextHex : "#111111",
        }}
      >
        SELECT DENOMINATION
      </p>

      <div
        className="relative mt-4 mb-9 w-full"
        style={{ minHeight: stackMinH }}
      >
        <motion.div
          className={`absolute left-0 right-0 w-full ${goldFirst ? "z-[30]" : "z-[10]"}`}
          initial={false}
          animate={{ top: goldTop }}
          transition={{ duration: swapDuration, ease: swapEase }}
        >
          <div
            ref={goldRef}
            className={`relative rounded-xl border p-6 overflow-visible ${
              goldFirst
                ? greyed
                  ? `${t.cardBorder} ${
                      themeMode === "silver" ? "bg-[#ECEFF4]" : "bg-[#FFFBF2]"
                    }`
                  : `${t.cardBorder} bg-white`
                : `${t.cardBorder} bg-white`
            }`}
          >
            <label
              className={`block text-[16px] lg:text-[18px] font-medium mb-2 ${
                goldFirst && !greyed ? "text-[#B8943F]" : "text-[#111111]"
              }`}
              style={mona}
            >
              {t.Metal} (grams)
            </label>
            <div className="flex items-baseline gap-0" style={mona}>
              <input
                type="text"
                name="redeem-cash-gold-grams"
                inputMode="decimal"
                autoComplete="off"
                aria-label="Gold in grams"
                pattern="[0-9]*[.]?[0-9]*"
                className={`min-w-0 border-none bg-transparent p-0 text-[28px] leading-none tracking-tight outline-none ring-0 focus:ring-0 ${goldFirst && !greyed ? "text-[#0A0A0A] font-semibold" : "text-[#BCBCBC] font-medium"}`}
                style={{ ...mona, fieldSizing: "content" } as CSSProperties}
                value={gramsEdit}
                onChange={(e) => {
                  const cleaned = sanitizeGramsInput(e.target.value);
                  setGramsEdit(cleaned);
                  if (cleaned === "" || cleaned === ".") {
                    setGoldGrams(0);
                    setAmountInr(0);
                    return;
                  }
                  const parsed = parseFloat(cleaned);
                  if (!Number.isNaN(parsed) && parsed >= 0) {
                    setGoldGrams(parsed);
                    setAmountInr(Math.round(parsed * cashPricePerGram));
                  }
                }}
                onBlur={() => setGramsEdit(formatGramsInputDisplay(goldGrams))}
              />
              <span
                className={`shrink-0 text-[28px] leading-none ${goldFirst && !greyed ? "text-[#0A0A0A] font-semibold" : "text-[#BCBCBC] font-medium"}`}
              >
                g
              </span>
            </div>

            <div
              className={`flex gap-2 transition-all ${
                goldFirst
                  ? "opacity-100 mt-4 h-auto"
                  : "opacity-0 pointer-events-none h-0 overflow-hidden mt-0"
              }`}
            >
              {QUICK_GRAMS_CASH.map((g) => {
                const selected = Math.abs(goldGrams - g) < 0.0001;
                return (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setFromGrams(g)}
                    className={`flex-1 rounded-lg py-2 text-[13px] font-medium border transition-colors ${
                      greyed
                        ? "border-[#E5E7EB] bg-[#F3F4F6] text-[#BCBCBC] cursor-default"
                        : selected
                          ? "border-[#FFF7E5] bg-[#FFF7E5] text-[#1D1D1D]"
                          : "border-[#FFF7E5] bg-white text-[#6B7280] hover:bg-[#F9FAFB]"
                    }`}
                    style={mona}
                    disabled={greyed || !goldFirst}
                  >
                    {g}
                  </button>
                );
              })}
            </div>
            {goldFirst && (
              <p
                className={`absolute -bottom-9 z-[-1] left-0 right-0 flex w-full items-end justify-center rounded-b-xl px-4 pt-4 pb-2 text-center text-[13px] leading-[18px] ${
                  greyed
                    ? `${t.bannerBg} ${t.bannerText}`
                    : "bg-[#B8943F] text-white"
                }`}
                style={mona}
              >
                Fractional selling supported
              </p>
            )}
          </div>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute left-1/2 z-[40] -translate-x-1/2 -translate-y-1/2"
          initial={false}
          animate={{ top: swapSeamY }}
          transition={{ duration: swapDuration, ease: swapEase }}
        >
          <div
            className={`pointer-events-auto rounded-[10px] border-2 ${
              greyed
                ? "border-[#F0F0F0] bg-[#FAFAFA]"
                : "border-[#F5F5F7] bg-white shadow-sm"
            }`}
          >
            <button
              type="button"
              onClick={() => !greyed && setGoldFirst((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-[10px] border-none"
              disabled={greyed}
              aria-label="Swap gold and amount cards"
            >
              <svg
                className={`h-4 w-4 ${greyed ? "text-[#CDCDCD]" : "text-[#64748B]"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                />
              </svg>
            </button>
          </div>
        </motion.div>

        <motion.div
          className={`absolute left-0 right-0 w-full ${goldFirst ? "z-[10]" : "z-[30]"}`}
          initial={false}
          animate={{ top: amountTop }}
          transition={{ duration: swapDuration, ease: swapEase }}
        >
          <div
            ref={amountRef}
            className={`relative rounded-xl border p-6 overflow-visible ${t.cardBorder} ${
              greyed
                ? themeMode === "silver"
                  ? "bg-[#ECEFF4]"
                  : "bg-[#FFFBF2]"
                : "bg-white"
            }`}
          >
            <label
              className={`block text-[14px] font-medium mb-2 ${
                !goldFirst && !greyed ? "text-[#3D3D3D]" : "text-[#111111]"
              }`}
              style={mona}
            >
              Amount you receive (INR)
            </label>
            <p
              className={`text-[28px] font-medium leading-none ${
                !goldFirst && !greyed ? "text-[#0A0A0A]" : "text-[#BCBCBC]"
              }`}
              style={mona}
            >
              {!goldFirst && !greyed ? (
                <span className="flex min-w-0 items-baseline gap-0.5">
                  <span className="shrink-0 text-[28px] font-semibold leading-none">
                    ₹
                  </span>
                  <input
                    type="text"
                    name="redeem-cash-amount-inr"
                    inputMode="numeric"
                    autoComplete="off"
                    aria-label="Redeem amount in Indian rupees"
                    className={`${valueInputClass} font-semibold text-[#0A0A0A]`}
                    style={mona}
                    value={String(amountInr)}
                    onChange={(e) =>
                      setFromAmount(parseInrDigits(e.target.value))
                    }
                  />
                </span>
              ) : (
                `₹${Math.round(amountInr).toLocaleString("en-IN")}`
              )}
            </p>

            <div
              className={`flex flex-nowrap items-center justify-between gap-1.5 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden transition-all ${
                !goldFirst
                  ? "opacity-100 mt-4 pb-1.5 h-auto"
                  : "opacity-0 pointer-events-none h-0 overflow-hidden mt-0 pb-0"
              }`}
            >
              {QUICK_AMOUNTS.map((qa) => (
                <button
                  key={qa}
                  type="button"
                  onClick={() => setFromAmount(qa)}
                  className={`shrink-0 flex-1 rounded-lg px-4 py-2 text-[12px] font-medium transition-colors ${
                    greyed
                      ? "border border-[#E5E7EB] bg-[#F3F4F6] text-[#BCBCBC] cursor-default"
                      : amountInr === qa
                        ? "border border-[#C5CAD3] bg-[#E8EAEF] text-[#1D1D1D]"
                        : "border border-[#E5E7EB] bg-white text-[#6B7280] hover:bg-[#F9FAFB]"
                  }`}
                  style={mona}
                  disabled={greyed || goldFirst}
                >
                  ₹{qa.toLocaleString("en-IN")}
                </button>
              ))}
            </div>
            {!goldFirst && (
              <p
                className={`absolute -bottom-9 z-[-1] left-0 right-0 flex w-full items-end justify-center rounded-b-xl px-4 pt-4 pb-2 text-center text-[13px] leading-[18px] ${
                  greyed
                    ? `${t.bannerBg} ${t.bannerText}`
                    : "bg-[#B8943F] text-white"
                }`}
                style={mona}
              >
                Fractional selling supported
              </p>
            )}
          </div>
        </motion.div>
      </div>

      <div className="-mt-3 lg:mt-auto flex justify-center">
        <button
          className={`w-full px-4 self-center border flex items-center justify-center gap-2 rounded-full py-3 text-[14px] font-bold transition-colors ${
            active
              ? "bg-transparent text-[#00007F] border-[#00007F]"
              : `bg-transparent text-[#A0A0A0] ${t.disabledButtonBorder} cursor-default`
          }`}
          style={{ ...mona, letterSpacing: "1px" }}
          disabled={!active}
        >
          SELL {t.Metal.toUpperCase()} FOR CASH
        </button>
      </div>
    </div>
  );
}

function PhysicalCard({
  active,
  themeMode = "gold",
}: {
  active: boolean;
  themeMode?: "gold" | "silver";
}) {
  const t = redemptionTheme[themeMode];
  const greyed = !active;
  const [selectedWeight, setSelectedWeight] = useState("1g");
  const greyedBg = themeMode === "silver" ? "bg-[#ECEFF4]" : "bg-[#FFFBF2]";

  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 ${
        active
          ? `${t.cardBorder} bg-white shadow-[0px_0px_24px_0px_rgba(191,155,103,0.35)]`
          : `${t.cardBorder} ${t.unselectedCardBg}`
      }`}
    >
      {/* Title */}
      <h3
        className={`text-center text-[18px] lg:text-[22px] font-semibold mb-1 lg:mb-2 ${
          active ? t.activeTitle : t.unselectedTitle
        }`}
        style={{
          ...mona,
          letterSpacing: "1px",
        }}
      >
        GET PHYSICAL {t.Metal.toUpperCase()}
      </h3>
      <p
        className={`text-center text-[12px] lg:text-[12px] leading-[17px] lg:leading-[18px] mb-4 lg:mb-6 max-w-[450px] mx-auto ${
          greyed ? t.unselectedText : "text-[#111111]"
        }`}
        style={mona}
      >
        Get a certified MMTC-PAMP {t.metal} coin or bar — sealed,
        signed,individually serial-numbered and assay-certified — securely
        delivered to your doorstep.
      </p>

      {/* Available balance */}
      <AvailableGoldBar greyed={greyed} themeMode={themeMode} />
      <p
        className="text-[13px] lg:text-[15px] font-regular tracking-wide mt-3"
        style={{
          ...mona,
          color: greyed ? t.unselectedTextHex : "#111111",
        }}
      >
        SELECT DENOMINATION
      </p>

      {/* Metal (grams) */}
      <div
        className={`mt-4 mb-12 z-10 lg:mb-9 relative rounded-xl border ${t.cardBorder} overflow-visible`}
      >
        <div
          className={`relative z-10 rounded-xl p-4 ${greyed ? greyedBg : "bg-[#ffffff]"}`}
        >
          <label
            className={`block text-[18px] font-medium mb-2 ${
              greyed ? "text-[#BCBCBC]" : "text-[#B8943F]"
            }`}
            style={mona}
          >
            {t.Metal} (grams)
          </label>
          <p
            className={`text-[28px] font-medium leading-none mb-4 ${
              greyed ? "text-[#BCBCBC]" : "text-[#0A0A0A]"
            }`}
            style={mona}
          >
            {selectedWeight}
          </p>

          <div className="flex gap-3">
            {GOLD_WEIGHTS.map((item) => {
              const selected = selectedWeight === item.weight;
              return (
                <button
                  key={item.weight}
                  type="button"
                  onClick={() => !greyed && setSelectedWeight(item.weight)}
                  className={`flex-1 flex flex-col items-center gap-2 rounded-xl border py-3 transition-colors ${
                    greyed
                      ? `border-[#E5E7EB] ${greyedBg} cursor-default`
                      : selected
                        ? "border-[#C08514] bg-[#FAF3E8]"
                        : "border-[#E5E7EB] bg-[#F9FAFB] hover:bg-[#F3F4F6]"
                  }`}
                  disabled={greyed}
                >
                  <div className="w-10 h-15 flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.weight}
                      width={32}
                      height={32}
                      className={`object-contain ${
                        themeMode === "silver" ? "grayscale brightness-125" : ""
                      } ${greyed ? "opacity-40 grayscale" : ""}`}
                    />
                  </div>
                  <span
                    className={`text-[13px] font-semibold ${
                      greyed
                        ? "text-[#BCBCBC]"
                        : selected
                          ? "text-[#C08514]"
                          : "text-[#3D3D3D]"
                    }`}
                    style={mona}
                  >
                    {item.weight}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        <p
          className={`absolute -bottom-7 lg:-bottom-6.5 z-0 left-0 right-0 flex w-full items-end justify-center rounded-b-xl px-1 pt-4 pb-2 text-center text-[11px] leading-[12px] ${
            greyed ? `${t.bannerBg} ${t.bannerText}` : "bg-[#B8943F] text-white"
          }`}
          style={mona}
        >
          Physical delivery available in multiples of 1g
        </p>
      </div>

      <div
        className={`relative z-10 mt-4 rounded-xl border p-4 ${t.cardBorder} ${greyed ? greyedBg : "bg-white"}`}
      >
        <label
          className={`block text-[14px] font-semibold mb-2 ${
            greyed ? "text-[#BCBCBC]" : "text-[#3D3D3D]"
          }`}
          style={mona}
        >
          Select delivery address
        </label>
        <div className="flex items-center justify-between">
          <p
            className={`text-[14px] truncate mr-2 ${
              greyed ? "text-[#BCBCBC]" : "text-[#6B7280]"
            }`}
            style={mona}
          >
            Building Number: 14 Street Name: Salt Lake City Secto...
          </p>
          <ChevronDown
            className={`w-5 h-5 flex-shrink-0 ${
              greyed ? "text-[#D9D9D9]" : "text-[#6B7280]"
            }`}
          />
        </div>
      </div>

      {/* Redeem Button */}
      <div className="mt-6 lg:mt-auto lg:pt-8 flex justify-center">
        <button
          className={`w-full px-4 self-center border flex items-center justify-center gap-2 rounded-full py-3 text-[14px] font-bold transition-colors ${
            active
              ? "bg-transparent text-[#00007F] border-[#00007F]"
              : `bg-transparent text-[#A0A0A0] ${t.disabledButtonBorder} cursor-default`
          }`}
          style={{ ...mona, letterSpacing: "1px" }}
          disabled={!active}
        >
          GET PHYSICAL {t.Metal.toUpperCase()}
        </button>
      </div>
    </div>
  );
}

export const Redemption = ({
  themeMode = "gold",
}: {
  themeMode?: "gold" | "silver";
}) => {
  const [mode, setMode] = useState<RedeemMode>("cash");
  const t = redemptionTheme[themeMode];

  return (
    <section
      className="py-[40px] lg:py-[60px] px-6"
      style={{ backgroundImage: t.sectionBg }}
    >
      <div className="container mx-auto max-w-[1240px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 lg:mb-10"
        >
          <h2
            className="lg:text-[56px] text-[26px] lg:text-[46px] font-regular leading-[46px] text-[#0A0A0A] block"
            style={sansation}
          >
            Your {t.Metal},{" "}
            <span className={`font-bold ${t.heading}`}>Your Choice</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-0"
        >
          {/* Mobile tabs */}
          <div className="lg:hidden flex items-center justify-center gap-0 mb-6 max-w-[960px] mx-auto">
            <button
              type="button"
              onClick={() => setMode("cash")}
              className={`flex-1 py-3 text-[16px] font-bold text-center transition-colors ${
                mode === "cash"
                  ? "text-[#00007F] border-b-2 border-[#00007F]"
                  : "text-[#8A8FA8] border-b border-[#E5E7EB]"
              }`}
              style={sansation}
            >
              Sell {t.metal} for cash
            </button>
            <button
              type="button"
              onClick={() => setMode("physical")}
              className={`flex-1 py-3 text-[16px] font-bold text-center transition-colors ${
                mode === "physical"
                  ? "text-[#00007F] border-b-2 border-[#00007F]"
                  : "text-[#8A8FA8] border-b border-[#E5E7EB]"
              }`}
              style={sansation}
            >
              Get physical {t.metal}
            </button>
          </div>

          {/* Mobile: active card only */}
          <div className="lg:hidden max-w-[960px] mx-auto">
            {/* Active card */}
            <AnimatePresence mode="wait">
              {mode === "cash" ? (
                <motion.div
                  key="cash-card"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <CashCard active themeMode={themeMode} />
                </motion.div>
              ) : (
                <motion.div
                  key="physical-card"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <PhysicalCard active themeMode={themeMode} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop: both cards side by side */}
          <div className="hidden lg:grid grid-cols-2 gap-6 max-w-[960px] mx-auto relative z-10">
            <div
              onMouseEnter={() => setMode("cash")}
              className="cursor-pointer h-full"
            >
              <CashCard active={mode === "cash"} themeMode={themeMode} />
            </div>

            <div
              onMouseEnter={() => setMode("physical")}
              className="cursor-pointer h-full"
            >
              <PhysicalCard
                active={mode === "physical"}
                themeMode={themeMode}
              />
            </div>
          </div>

          {/* Desktop: Mobile image - bottom left when cash is selected */}
          <AnimatePresence>
            {mode === "cash" && (
              <motion.div
                key="mobile"
                initial={{ x: 60 }}
                animate={{ x: 0 }}
                exit={{ x: 120 }}
                transition={{ duration: 0.5 }}
                className="hidden lg:flex flex-col items-start absolute -bottom-[30px] left-[0px] z-0 w-[250px]"
              >
                <Image
                  src={MobileImage}
                  alt="Mobile showing bank credit"
                  width={250}
                  height={480}
                  className="object-contain"
                />
                <p
                  className="text-[10px] text-[#3D3D3D] text-left w-full mt-1"
                  style={mona}
                >
                  This is just a visual representation
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {mode === "physical" && (
              <motion.div
                key="coin"
                initial={{ x: -60 }}
                animate={{ x: 0 }}
                exit={{ x: -120 }}
                transition={{ duration: 0.5 }}
                className="hidden lg:flex flex-col items-end absolute -bottom-[30px] right-[20px] z-0 w-[240px]"
              >
                <Image
                  src={CoinImage}
                  alt="Gold Coin"
                  width={180}
                  height={180}
                  className="object-contain"
                />
                <p
                  className="text-[10px] text-[#3D3D3D] text-right w-full mt-4"
                  style={mona}
                >
                  This is just a visual representation
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
