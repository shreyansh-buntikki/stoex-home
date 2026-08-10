"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGoldRate } from "@/hooks/useGoldRate";
import { useEarlyAccess } from "./GoldLayout";
import Logo1 from "@/public/assets/logos/logo1.svg";
import MainLogo from "@/public/assets/logos/mainlogo.svg";

export const HeaderGold = () => {
  const { goldRate } = useGoldRate();
  const { openModal } = useEarlyAccess();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: { href: string; sectionId?: string },
  ) => {
    if (!item.sectionId) return;
    if (pathname === item.href) {
      e.preventDefault();
      const el = document.getElementById(item.sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Detect scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "auto";
  }, [isMenuOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Blogs", href: "/blogs" },
    { label: "FAQs", href: "/", sectionId: "faqs" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <>
      <header
        className={`w-full z-150 fixed top-0 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md border-b border-gray-200"
            : "bg-[#00007F]"
        }`}
      >
        <div className="w-full max-w-[1600px] mx-auto px-6 py-4 flex items-center">
          <Link href="/" className="flex-shrink-0 w-[140px]">
            <img
              src={scrolled ? MainLogo.src : Logo1.src}
              alt="STOEX"
              width={161}
              height={36}
              className="lg:h-8 h-6 w-full max-w-fit cursor-pointer"
            />
          </Link>

          <nav className="hidden md:flex items-center justify-center flex-1 gap-5 lg:gap-8 xl:gap-14 mx-4 flex-nowrap overflow-visible">
            {navLinks.map((item) => {
              const href = item.sectionId
                ? `${item.href}#${item.sectionId}`
                : item.href;
              return (
                <div key={item.label} className="relative shrink-0">
                  <Link
                    href={href}
                    onClick={(e) => handleSectionClick(e, item)}
                    className={`text-[13px] lg:text-sm font-semibold transition-colors ${
                      scrolled
                        ? "text-[#1D1D1D] hover:text-[#00007F]"
                        : "text-white hover:text-gray-200"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {pathname === href && (
                    <div className="absolute -bottom-[23.5px] left-1/2 -translate-x-1/2 h-1.5 bg-[#BB943F] rounded-t w-20" />
                  )}
                </div>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-2 lg:gap-3 flex-shrink-0">
            <div className="bg-white rounded-full px-3 lg:px-4 py-1.5 lg:py-2 flex items-center gap-1.5 lg:gap-2 shadow-sm">
              <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#1A9E5C] rounded-full animate-pulse"></div>
              <span className="text-[#000000] text-[12px] lg:text-[13px] font-semibold whitespace-nowrap">
                ₹{goldRate}/g
              </span>
            </div>

            <div
              className="rounded-full p-px hover:scale-105 transition-all duration-200 shadow"
              style={{ background: "linear-gradient(to right, transparent, #CCA763)" }}
            >
              <button
                onClick={() => openModal()}
                style={{
                  letterSpacing: "2px",
                  background: "linear-gradient(to right, #B8943F, #52421C)",
                }}
                className="uppercase text-white font-bold px-3 lg:px-5 py-2 lg:py-2.5 rounded-full text-[10px] lg:text-[11px] whitespace-nowrap"
              >
                Get Early Access
              </button>
            </div>
          </div>

          <button
            className={`ml-auto md:hidden ${
              scrolled && !isMenuOpen ? "text-black" : "text-white"
            }`}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            )}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 right-0 z-[60] bg-[#00007F] md:hidden rounded-b-xl shadow-2xl pt-20 pb-8"
          style={{ fontFamily: "'Mona Sans', sans-serif" }}
        >
          <nav className="px-6">
            {navLinks.map((item) => {
              const href = item.sectionId
                ? `${item.href}#${item.sectionId}`
                : item.href;
              return (
                <div key={item.label} className="py-4">
                  <Link
                    href={href}
                    onClick={(e) => {
                      setIsMenuOpen(false);
                      handleSectionClick(e, item);
                    }}
                    className="block text-white"
                    style={{ fontSize: 16, fontWeight: 600 }}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </nav>
        </div>
      )}

      <div className="pt-14 lg:pt-18" />
    </>
  );
};
