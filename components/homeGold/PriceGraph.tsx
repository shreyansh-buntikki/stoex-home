"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import type { CSSProperties } from "react";

const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };

const periods = ["24 H", "1 W", "1 M", "1 Y"] as const;
type Period = (typeof periods)[number];

const monthData = [
  { day: 1, price: 100200 },
  { day: 2, price: 101500 },
  { day: 3, price: 102800 },
  { day: 4, price: 103100 },
  { day: 5, price: 104500 },
  { day: 6, price: 105200 },
  { day: 7, price: 108900 },
  { day: 8, price: 110500 },
  { day: 9, price: 111200 },
  { day: 10, price: 112800 },
  { day: 11, price: 113500 },
  { day: 12, price: 115200 },
  { day: 13, price: 116800 },
  { day: 14, price: 118200 },
  { day: 15, price: 120500 },
  { day: 16, price: 125800 },
  { day: 17, price: 128500 },
  { day: 18, price: 131200 },
  { day: 19, price: 133800 },
  { day: 20, price: 140500 },
  { day: 21, price: 145200 },
  { day: 22, price: 147800 },
  { day: 23, price: 149500 },
  { day: 24, price: 150200 },
  { day: 25, price: 153800 },
  { day: 26, price: 155200 },
  { day: 27, price: 158500 },
  { day: 28, price: 160200 },
  { day: 29, price: 163165 },
  { day: 30, price: 159800 },
  { day: 31, price: 161500 },
];

const weekData = [
  { day: 25, price: 153800 },
  { day: 26, price: 155200 },
  { day: 27, price: 158500 },
  { day: 28, price: 160200 },
  { day: 29, price: 163165 },
  { day: 30, price: 159800 },
  { day: 31, price: 161500 },
];

const dayData = [
  { day: 0, price: 161000, label: "00:00" },
  { day: 2, price: 161200, label: "02:00" },
  { day: 4, price: 160800, label: "04:00" },
  { day: 6, price: 161500, label: "06:00" },
  { day: 8, price: 162000, label: "08:00" },
  { day: 10, price: 162800, label: "10:00" },
  { day: 12, price: 163165, label: "12:00" },
  { day: 14, price: 162500, label: "14:00" },
  { day: 16, price: 163000, label: "16:00" },
  { day: 18, price: 162200, label: "18:00" },
  { day: 20, price: 161800, label: "20:00" },
  { day: 22, price: 162100, label: "22:00" },
  { day: 24, price: 161500, label: "24:00" },
];

const yearData = [
  { day: 1, price: 92000, label: "Aug" },
  { day: 2, price: 95000, label: "Sep" },
  { day: 3, price: 98000, label: "Oct" },
  { day: 4, price: 102000, label: "Nov" },
  { day: 5, price: 105000, label: "Dec" },
  { day: 6, price: 110000, label: "Jan" },
  { day: 7, price: 118000, label: "Feb" },
  { day: 8, price: 125000, label: "Mar" },
  { day: 9, price: 132000, label: "Apr" },
  { day: 10, price: 140000, label: "May" },
  { day: 11, price: 150000, label: "Jun" },
  { day: 12, price: 163165, label: "Jul" },
];

function getDataForPeriod(period: Period) {
  switch (period) {
    case "24 H":
      return { data: dayData, xKey: "label" as const };
    case "1 W":
      return { data: weekData, xKey: "day" as const };
    case "1 M":
      return { data: monthData, xKey: "day" as const };
    case "1 Y":
      return { data: yearData, xKey: "label" as const };
  }
}

function getPeriodStats(period: Period) {
  switch (period) {
    case "24 H":
      return { change: "+0.3%", label: "24H" };
    case "1 W":
      return { change: "+5.0%", label: "1W" };
    case "1 M":
      return { change: "+12.4%", label: "1M" };
    case "1 Y":
      return { change: "+77.4%", label: "1Y" };
  }
}

function formatPrice(value: number) {
  return `₹${value.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function formatYAxis(value: number) {
  if (value >= 100000) {
    const lakhs = value / 100000;
    return `${lakhs.toFixed(1)}L`;
  }
  if (value >= 1000) {
    return `${(value / 1000).toFixed(0)}K`;
  }
  return value.toString();
}

function CustomTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ payload: { day: number; price: number; label?: string } }>;
  label?: string;
}) {
  if (!active || !payload || !payload.length) return null;

  const data = payload[0].payload;
  const price = data.price;
  const firstPrice = monthData[0].price;
  const change = (((price - firstPrice) / firstPrice) * 100).toFixed(1);

  return (
    <div
      className="bg-white/90 border border-[#f9f9f9] rounded-[10px] px-4 py-3 shadow-[0px_2.5px_5px_0px_rgba(0,0,0,0.04)]"
      style={mona}
    >
      <p className="text-[14px] text-[#5b5b5b]">
        {data.label || `${data.day} July 00:00`}
      </p>
      <div className="flex items-center gap-2 mt-0.5">
        <p className="text-[16px] font-semibold text-[#1d1d1d]">
          {formatPrice(price)}
        </p>
        <span className="text-[14px] font-semibold text-[#34C759] bg-[#34C759]/5 px-1.5 py-0.5 rounded-md">
          +{change}%
        </span>
      </div>
    </div>
  );
}

export const PriceGraph = () => {
  const [activePeriod, setActivePeriod] = useState<Period>("1 M");

  const { data, xKey } = getDataForPeriod(activePeriod);
  const stats = getPeriodStats(activePeriod);

  return (
    <section className="bg-white lg:py-[100px] py-[0px] px-6">
      <div className="container mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="relative flex flex-col gap-6 mb-8">
            {/* Period tabs - top center */}
            <div className="flex items-center justify-center gap-3.5 md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2" style={mona}>
              <p className="text-[16px] text-black hidden sm:block">
                Gold Price Past:
              </p>
              <div className="flex gap-2.5">
                {periods.map((period) => (
                  <button
                    key={period}
                    onClick={() => setActivePeriod(period)}
                    className={`px-5.5 py-2.5 rounded-[10px] text-[12px] lg:text-[16px] font-semibold transition-all ${
                      activePeriod === period
                        ? "border border-[#BF9B67]/40 text-[#BF9B67]"
                        : "bg-white border border-[#DFE0EB] text-[#5b5b5b]"
                    }`}
                    style={
                      activePeriod === period
                        ? {
                            ...mona,
                            background:
                              "linear-gradient(180deg, rgba(204,167,99,0.3) 21.2%, rgba(204,167,99,0) 108.37%)",
                          }
                        : mona
                    }
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-0 lg:gap-2" style={mona}>
              <p className="text-[14px] lg:text-[20px] leading-[36px] text-[#0A0A0A]">
                5g of 24k gold (99.99%)
              </p>
              <div className="flex mb-4 items-center gap-3">
                <p className="text-[26px] lg:text-[32px] font-bold leading-[36px] text-[#0A0A0A]">
                  ₹1,63,165.00
                </p>
                <span className="text-[16px] lg:text-[20px] font-semibold text-[#34C759] bg-[#34C759]/5 px-1.5 py-0.5 rounded-md">
                  {stats.change}
                </span>
                <p className="text-[16px] lg:text-[20px] leading-[36px] text-[#0A0A0A]">
                  {stats.label}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-[420px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="goldGreenGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#34C759" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="#34C759" stopOpacity={0.02} />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="6 4"
                  vertical={false}
                  stroke="#e5e7eb"
                />

                <XAxis
                  dataKey={xKey}
                  tick={{ fontSize: 16, fill: "#bcbcbc", fontWeight: 600 }}
                  axisLine={{ stroke: "#bcbcbc", strokeWidth: 1 }}
                  tickLine={false}
                  style={mona}
                />

                <YAxis
                  tick={{ fontSize: 16, fill: "#bcbcbc", fontWeight: 600 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={formatYAxis}
                  domain={["auto", "auto"]}
                  width={50}
                  style={mona}
                />

                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ stroke: "#34C759", strokeWidth: 1 }}
                />

                <Area
                  type="linear"
                  dataKey="price"
                  stroke="#34C759"
                  strokeWidth={2}
                  fill="url(#goldGreenGradient)"
                  activeDot={{
                    r: 6,
                    fill: "#fff",
                    stroke: "#34C759",
                    strokeWidth: 2,
                  }}
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
