"use client";

import { MapPin } from "lucide-react";
import MapWrapper from "./MapWrapper";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";

const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };

const offices = [
  // {
  //   name: "Dubai Office",
  //   address:
  //     "#501-502, The Offices 3, One Central, World Trade Centre, Dubai, UAE",
  // },
  // {
  //   name: "Mumbai",
  //   address:
  //     "91 Springboard Business Hub Pvt. Ltd,74/II, “C” Cross Road, Opp Gate No. 2,Seepz, Andheri East, Mumbai,Maharashtra, 400093",
  // },
  {
    name: "Delhi",
    address:
      "4 Bhagwan Das Road, Mandi House, Delhi 110001",
  },
  {
    name: "Noida",
    address: "FC-19, Film City, Sector 16A, Noida, 201301"
  }
];

export const Offices = () => {
  return (
    <section className="bg-[#f8f6f6] pb-10">
      <div className="container mx-auto px-6 flex flex-col gap-6 lg:gap-10">
        <motion.div
          className="bg-white rounded-2xl shadow-sm p-4 py-2 md:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#00000033]"
          style={mona}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {offices.map((office, i) => (
            <motion.div
              key={office.name}
              className="flex flex-col md:px-6 px-0 py-6 md:items-center md:text-center md:py-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.1 }}
            >
              <div className="flex items-center gap-3 md:flex-col md:gap-0 md:items-center">
                <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-[#EEEEFB] flex items-center justify-center flex-shrink-0 md:mb-4">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#00007F]" />
                </div>
                <p className="text-[16px] font-semibold text-[#0A0A0A]">
                  {office.name}
                </p>
              </div>
              <p className="mt-2 md:mt-3 text-[14px] text-[#3D3D3D] leading-relaxed whitespace-pre-line md:max-w-[300px]">
                {office.address}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* <motion.div
          className="bg-white rounded-2xl shadow-sm overflow-hidden h-[220px] sm:h-[300px] lg:h-[500px]"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <MapWrapper />
        </motion.div> */}
      </div>
    </section>
  );
};
