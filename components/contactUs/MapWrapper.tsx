"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const LocationsMap = dynamic(() => import("./LocationsMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-[#E8EEF5] flex items-center justify-center text-[#5A5A5A] text-sm">
      Loading map…
    </div>
  ),
});

export default function MapWrapper() {
  const [key, setKey] = useState(0);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <LocationsMap key={key} />
    </div>
  );
}
