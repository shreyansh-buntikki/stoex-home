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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
    {
      label: "Products",
      href: "/products",
      children: [
        { label: "Gold", href: "/products/gold" },
        { label: "Silver", href: "/products/silver" },
      ],
    },
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
              const href = item.href;
              const isActive = item.children
                ? pathname.startsWith(item.href)
                : pathname === href;

              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative shrink-0"
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onClick={() =>
                        setOpenDropdown((prev) =>
                          prev === item.label ? null : item.label,
                        )
                      }
                      className={`flex items-center gap-1.5 text-[13px] lg:text-sm font-semibold transition-colors cursor-pointer ${
                        scrolled
                          ? "text-[#1D1D1D] hover:text-[#00007F]"
                          : "text-white hover:text-gray-200"
                      }`}
                    >
                      {item.label}
                      <svg
                        className={`w-3 h-3 transition-transform duration-200 ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-10">
                      <div
                        className={`relative transition-all duration-150 origin-top ${
                          openDropdown === item.label
                            ? "opacity-100 scale-100 translate-y-0"
                            : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
                        }`}
                      >
                        <div className="relative min-w-52 rounded-xl bg-white border border-[#EBEBEB] shadow-lg overflow-hidden py-1.5">
                          {item.children.map((child) => {
                            const childActive = pathname === child.href;
                            const isGold = child.label === "Gold";
                            return (
                              <Link
                                key={child.label}
                                href={child.href}
                                onClick={() => setOpenDropdown(null)}
                                className={`flex items-center gap-3 px-4 py-2.5 mx-1.5 rounded-lg transition-colors ${
                                  childActive
                                    ? "bg-[#F5F5F7]"
                                    : "hover:bg-[#F5F5F7]"
                                }`}
                              >
                                <span
                                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                                    isGold ? "bg-[#B8943F]" : "bg-[#9AA1AC]"
                                  }`}
                                >
                                  <svg
                                    className="w-3 h-3"
                                    viewBox="0 0 36 36"
                                    fill="#FFFFFF"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M20.3187 24.8329C20.1728 23.5547 19.4609 22.4272 18.3666 21.7467L14.5101 19.341C11.8536 17.6836 10.1279 14.9515 9.7732 11.8451C9.4185 8.73884 10.4851 5.69029 12.7014 3.47796L16.1855 0H8.20848C7.57203 0 6.95822 0.253627 6.50792 0.703125L0.704375 6.49637C0.254078 6.94587 0 7.55608 0 8.19392V33.5993C0 34.9252 1.07669 36 2.40494 36H11.3782L19.1137 28.2782C20.0269 27.3666 20.4646 26.111 20.3187 24.8329Z" />
                                    <path d="M33.659 0H24.6858L16.9502 7.72182C16.0396 8.63086 15.5993 9.88895 15.7452 11.1671C15.8911 12.4453 16.6006 13.5703 17.6948 14.2533L21.5513 16.659C24.1977 18.3089 25.9209 21.0259 26.2857 24.1197C26.6555 27.2637 25.4933 30.3926 23.2519 32.63L19.8784 35.9975H27.8555C28.4919 35.9975 29.1057 35.7439 29.556 35.2944L35.3596 29.5011C35.8099 29.0516 36.0639 28.4414 36.0639 27.8036V2.40067C36.0639 1.07478 34.9873 0 33.659 0Z" />
                                  </svg>
                                </span>
                                <span
                                  className={`text-sm font-medium transition-colors ${
                                    childActive
                                      ? "text-[#00007F]"
                                      : "text-[#1D1D1D]"
                                  }`}
                                >
                                  {child.label}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    {isActive && (
                      <div className="absolute -bottom-[23.5px] left-1/2 -translate-x-1/2 h-1.5 bg-[#BB943F] rounded-t w-20 z-0" />
                    )}
                  </div>
                );
              }

              return (
                <div key={item.label} className="relative shrink-0">
                  <Link
                    href={href}
                    className={`text-[13px] lg:text-sm font-semibold transition-colors ${
                      scrolled
                        ? "text-[#1D1D1D] hover:text-[#00007F]"
                        : "text-white hover:text-gray-200"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {isActive && (
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
              const href = item.href;
              return (
                <div key={item.label} className="py-4">
                  <Link
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-white"
                    style={{ fontSize: 16, fontWeight: 600 }}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="mt-3 ml-4 border-l-2 border-[#BB943F]/60 pl-4 flex flex-col gap-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-white/80"
                          style={{ fontSize: 14, fontWeight: 500 }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
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
