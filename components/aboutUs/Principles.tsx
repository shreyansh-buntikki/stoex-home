"use client";

import Image from "next/image";
import { CSSProperties, useEffect, useRef, useState } from "react";
import SecureBw from "@/public/assets/icons/secure-bw.svg";
import Secure from "@/public/assets/icons/secure.svg";
import PersonBw from "@/public/assets/icons/person-bw.svg";
import Person from "@/public/assets/icons/person-2.svg";
import MagnifyBw from "@/public/assets/icons/magnify-bw.svg";
import Magnify from "@/public/assets/icons/magnify.svg";

const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };
const sans: CSSProperties = { fontFamily: "Sansation, sans-serif" };

const PrinciplesData = [
  {
    label: "Verifiable Transparency",
    content:
      "Gold pricing on STOEX is directly derived from Bullion Refineries. Gold reserves are audited regularly with proof of reserve available on the platform. Fees are disclosed upfront. Every gram of gold is transparent, traceable, and auditable.",
    icon: Magnify,
    iconBw: MagnifyBw,
  },
  {
    label: "Investor Protection and Independence at every layer",
    content:
      "No single institution — including STOEX — controls the sourcing, storage, auditing, and administration of your gold. Each layer is handled by a separate, independent entity. Your gold is legally segregated from STOEX's assets, stored and protected in vault — structurally designed so that your holdings remain yours regardless of what happens to the platform.",
    icon: Secure,
    iconBw: SecureBw,
  },
  {
    label: "Accessible for Everyone",
    content:
      "Gold ownership has traditionally required jewellers, bank lockers, demat accounts, or large upfront commitments. STOEX removes those barriers — verified, 24K gold sourced directly from established suppliers, accessible to anyone with a smartphone.",
    icon: Person,
    iconBw: PersonBw,
  },
];

const RING_SIZE_DESKTOP = 460;
const ICON_SIZE_DESKTOP = 96;
const RING_SIZE_MOBILE = 300;
const ICON_SIZE_MOBILE = 80;
const BASE_ANGLES = [0, 240, 120];
const TRANSITION = "transform 1200ms cubic-bezier(0.65, 0, 0.35, 1)";
const AUTO_ROTATE_MS = 5000;

const computePositions = (ringSize: number, iconSize: number) => {
  const radius = ringSize / 2;
  return BASE_ANGLES.map((deg) => {
    const rad = (deg * Math.PI) / 180;
    return {
      left: Math.round(radius + radius * Math.cos(rad) - iconSize / 2),
      top: Math.round(radius + radius * Math.sin(rad) - iconSize / 2),
    };
  });
};

export const Principles = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const userInteracted = useRef(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const ringSize = isDesktop ? RING_SIZE_DESKTOP : RING_SIZE_MOBILE;
  const iconSize = isDesktop ? ICON_SIZE_DESKTOP : ICON_SIZE_MOBILE;
  const innerIconSize = isDesktop ? 48 : 44;
  const containerSize = ringSize + iconSize;
  const ringOffset = iconSize / 2;
  const iconPositions = computePositions(ringSize, iconSize);

  const activeOffset = isDesktop ? 0 : 90;

  useEffect(() => {
    setRotation((r) => {
      const targetBase = -BASE_ANGLES[activeIndex] + activeOffset;
      const delta = (((targetBase - r) % 360) + 360) % 360;
      return r + delta;
    });
    // align current active to new offset when viewport flips
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeOffset]);

  const goTo = (idx: number) => {
    setActiveIndex((prev) => {
      if (idx === prev) return prev;
      const targetBase = -BASE_ANGLES[idx] + activeOffset;
      setRotation((r) => {
        let delta = (((targetBase - r) % 360) + 360) % 360;
        return r + delta;
      });
      return idx;
    });
  };

  const handleSelect = (idx: number) => {
    userInteracted.current = true;
    goTo(idx);
  };

  useEffect(() => {
    if (!isVisible) return;
    const id = setInterval(() => {
      if (userInteracted.current) return;
      setActiveIndex((prev) => {
        const next = (prev + 1) % PrinciplesData.length;
        const targetBase = -BASE_ANGLES[next] + activeOffset;
        setRotation((r) => {
          let delta = (((targetBase - r) % 360) + 360) % 360;
          return r + delta;
        });
        return next;
      });
    }, AUTO_ROTATE_MS);
    return () => clearInterval(id);
  }, [isVisible, activeOffset]);

  const active = PrinciplesData[activeIndex];

  return (
    <div
      ref={rootRef}
      className="flex flex-col lg:flex-row items-center justify-center self-center w-full px-6 lg:px-0 gap-10 lg:gap-[80px] max-w-[1200px]"
    >
      <div
        className="relative flex-shrink-0"
        style={{ width: containerSize, height: containerSize }}
      >
        <div
          className="absolute rounded-full"
          style={{
            width: ringSize,
            height: ringSize,
            left: ringOffset,
            top: ringOffset,
            border: "1px solid #B8922A",
            transform: `rotate(${rotation}deg)`,
            transition: TRANSITION,
          }}
        >
          {PrinciplesData.map((item, idx) => {
            const pos = iconPositions[idx];
            const isActive = idx === activeIndex;
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => handleSelect(idx)}
                className="absolute rounded-full bg-white flex items-center justify-center"
                style={{
                  width: iconSize,
                  height: iconSize,
                  left: pos.left,
                  top: pos.top,
                  transform: `rotate(${-rotation}deg)`,
                  transition: TRANSITION,
                  border: "0.5px solid #B8922A",
                  cursor: "pointer",
                }}
              >
                <Image
                  src={isActive ? item.icon : item.iconBw}
                  alt={item.label}
                  style={{ width: innerIconSize, height: innerIconSize }}
                />
              </button>
            );
          })}
        </div>

        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none text-center px-4"
          style={{
            ...sans,
            fontWeight: 700,
            color: "#0A0A0A",
          }}
        >
          <span className="text-[24px] sm:text-[28px] lg:text-[32px]">
            Our Principles
          </span>
        </div>
      </div>

      <div
        key={activeIndex}
        className="flex flex-col principle-content flex-1 gap-4 lg:gap-6 text-center lg:text-left lg:max-w-[460px]"
      >
        <h3
          style={{
            ...mona,
            fontWeight: 600,
            color: "#00007F",
            lineHeight: 1.2,
          }}
          className="text-[22px] sm:text-[26px] lg:text-[28px]"
        >
          {active.label}
        </h3>
        <p
          style={{
            ...mona,
            fontWeight: 400,
            color: "#3D3D3D",
            lineHeight: 1.6,
          }}
          className="text-[15px] sm:text-[17px] lg:text-[17px]"
        >
          {active.content}
        </p>
      </div>

      <style jsx>{`
        .principle-content {
          animation: principleFade 600ms ease-out;
        }
        @keyframes principleFade {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
