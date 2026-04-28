"use client";

import { useEffect, useState } from "react";

const mona = { fontFamily: "Mona Sans, sans-serif" };

const HIDE_SECTIONS = ["hero-section", "early-access-section", "site-footer"];

export function MobileStickyBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const visibility = new Map<string, boolean>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(entry.target.id, entry.isIntersecting);
        });
        setHidden(Array.from(visibility.values()).some(Boolean));
      },
      { threshold: 0.1 },
    );

    const elements: Element[] = [];
    for (const id of HIDE_SECTIONS) {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        elements.push(el);
      }
    }

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`lg:hidden fixed inset-x-0 bottom-0 z-50 px-4 py-3 transition-transform duration-300 ${hidden ? "translate-y-full" : "translate-y-0"}`}
      style={{
        backgroundColor: "#fff",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <button
        type="button"
        className="w-full rounded-full py-3 text-[16px] font-bold text-white"
        style={{ backgroundColor: "#00007F", ...mona }}
      >
        Get Early Access
      </button>
      <p className="mt-2 text-center text-[13px] text-[#9CA3AF]" style={mona}>
        <span className="font-bold text-[20px]" style={{ color: "#B8943F" }}>
          4,827
        </span>{" "}
        people already on the waitlist
      </p>
    </div>
  );
}
