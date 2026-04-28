"use client";

import { MapPin } from "lucide-react";
import dynamic from "next/dynamic";
import type { CSSProperties } from "react";

const LocationsMap = dynamic(() => import("./LocationsMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-[#E8EEF5] flex items-center justify-center text-[#5A5A5A] text-sm">
      Loading map…
    </div>
  ),
});

const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };

const offices = [
  {
    name: "Dubai Office",
    address:
      "#501-502, The Offices 3, One Central, World Trade Centre, Dubai, UAE",
  },
  {
    name: "Mumbai Office",
    address:
      "91 Springboard Business Hub Pvt. Ltd,74/II, “C” Cross Road, Opp Gate No. 2,Seepz, Andheri East, Mumbai,Maharashtra, 400093",
  },
  {
    name: "Delhi NCR",
    address:
      "FC-19, Film City, Sector 16A, Noida, 201301\n4, Bhagwan Das Road, Mandi House, Delhi 110001",
  },
];

export const Offices = () => {
  return (
    <section className="bg-[#f8f6f6] pb-10">
      <div className="container mx-auto px-6 flex flex-col gap-6 lg:gap-10">
        <div
          className="bg-white rounded-2xl shadow-sm p-6 lg:p-8 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#00000033]"
          style={mona}
        >
          {offices.map((office) => (
            <div
              key={office.name}
              className="flex flex-col items-center text-center px-6 py-8 md:py-4"
            >
              <div className="w-12 h-12 rounded-full bg-[#EEEEFB] flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-[#00007F]" />
              </div>
              <p className="text-[16px] font-semibold text-[#0A0A0A]">
                {office.name}
              </p>
              <p className="mt-3 text-[14px] text-[#3D3D3D] leading-relaxed whitespace-pre-line max-w-[300px]">
                {office.address}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden h-[500px] sm:h-[500px] lg:h-[500px]">
          <LocationsMap />
        </div>
      </div>
    </section>
  );
};
