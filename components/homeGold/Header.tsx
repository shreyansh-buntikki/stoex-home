"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import EarlyAccessModal from "./EarlyAccessModal";
import { getImageUrl } from '@/config/images';

export const HeaderGold = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileOpenMenu, setMobileOpenMenu] = useState<string | null>(null);

  // Detect scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll for mobile menu
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const toggleMobileMenu = (label: string) => {
    setMobileOpenMenu(prev => (prev === label ? null : label));
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    {
      label: "Policies",
      submenu: [
        { label: "Cookie Policy", href: "/cookie-policy" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms & Conditions", href: "/terms-conditions" },
        { label: "Website Terms of Use", href: "/website-terms-of-use" },
      ],
    },
    {
      label: "Resources",
      submenu: [
        { label: "Regulatory Hub", href: "/regulatory-hub" },
      ],
    },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <>
      <header
        className={`w-full z-50 transition-all duration-300 ${
          scrolled
            ? "fixed top-0 bg-white shadow-md border-b border-gray-200"
            : "absolute top-0 bg-[#00007F]"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center">
          <Link href="/" className="flex-shrink-0">
            <img
              src={scrolled ? getImageUrl('mainlogo.png') : getImageUrl('logo1.png')}
              alt="STOEX"
              className="h-8 cursor-pointer"
            />
          </Link>

          <nav className="hidden md:flex items-center justify-center flex-1 gap-8 mx-8">
            {navLinks.map(item =>
              item.submenu ? (
                <div key={item.label} className="relative group">
                  <span
                    className={`cursor-pointer text-sm font-semibold flex items-center gap-1 transition-colors ${
                      scrolled
                        ? "text-[#1D1D1D] hover:text-[#00007F]"
                        : "text-white hover:text-gray-200"
                    }`}
                  >
                    {item.label}
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>

                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-lg bg-white shadow-2xl border border-gray-100 opacity-0 invisible scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100 transition-all duration-300 ease-out z-50">
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-l border-t border-gray-100" />

                    <ul className="py-2 relative z-10">
                      {item.submenu.map((sub, index) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                            className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#00007F] hover:bg-gray-50 transition-colors duration-200 font-medium"
                          >
                            {sub.label}
                          </Link>
                          {index < item.submenu.length - 1 && (
                            <div className="mx-3 border-b border-gray-100" />
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-semibold transition-colors ${
                    scrolled
                      ? "text-[#1D1D1D] hover:text-[#00007F]"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
              <div className="w-2 h-2 bg-[#1A9E5C] rounded-full animate-pulse"></div>
              <span className="text-[#0000000] text-[13px] font-semibold">₹9,846.98/g</span>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#86EA6B] hover:bg-[#7AD85E] text-black font-bold px-6 py-2.5 rounded-full shadow hover:scale-105 transition-all duration-200 text-[13px]"
            >
              Get Early Access
            </button>
          </div>

          <button
            className={`ml-auto md:hidden text-2xl ${
              scrolled ? "text-black" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="absolute top-0 right-0 w-80 h-full bg-gradient-to-br from-white via-gray-50 to-white shadow-2xl overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gradient-to-r from-[#1a237e] to-[#283593] p-6 shadow-lg z-10">
              <div className="flex items-center justify-between">
                <img src={getImageUrl('logo1.png')} alt="STOEX" className="h-7" />
                <button
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white text-xl transition-all duration-200 hover:rotate-90"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="p-6 border-b border-gray-200">
              <div className="bg-[#1a237e] rounded-full px-4 py-3 flex items-center gap-2 justify-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-white text-sm font-semibold">₹9,846.98/g</span>
              </div>
            </div>

            <nav className="p-6 space-y-2">
              {navLinks.map((item, idx) => (
                <div key={item.label} className="animate-fade-in-up" style={{ animationDelay: `${idx * 50}ms` }}>
                  {item.submenu ? (
                    <div className="rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100">
                      <button
                        onClick={() => toggleMobileMenu(item.label)}
                        className="w-full flex justify-between items-center px-5 py-4 text-lg font-bold text-[#1D1D1D] hover:bg-gradient-to-r hover:from-[#1a237e]/5 hover:to-transparent transition-all duration-200"
                      >
                        <span className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1a237e]"></span>
                          {item.label}
                        </span>
                        <svg
                          className={`w-5 h-5 transition-transform duration-300 text-[#1a237e] ${
                            mobileOpenMenu === item.label ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {mobileOpenMenu === item.label && (
                        <div className="bg-gradient-to-br from-gray-50 to-white border-t border-gray-100 px-5 py-3 space-y-1">
                          {item.submenu.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-[#1a237e] hover:bg-white rounded-lg transition-all duration-200"
                            >
                              <span className="flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-yellow-400"></span>
                                {sub.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-5 py-4 text-lg font-bold text-[#1D1D1D] rounded-xl bg-white shadow-sm border border-gray-100 hover:bg-gradient-to-r hover:from-[#1a237e]/5 hover:to-transparent transition-all duration-200"
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1a237e]"></span>
                        {item.label}
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="p-6 pt-0">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full bg-[#86EA6B] text-black font-bold px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Get Early Access</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PAGE OFFSET */}
      <div className="pt-20" />

      <EarlyAccessModal open={isModalOpen} setOpen={setIsModalOpen} />
    </>
  );
};