"use client";
import { useState } from "react";
import Link from "next/link";
import EarlyAccessModal from "./EarlyAccessModal";
import MainLogo from "@/public/assets/logos/mainlogo.webp"

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

/**
 * NOTE:
 * - Each item has a unique `id`
 * - No javascript:void(0)
 * - Keys are stable and unique
 */


export function Footer() {

    const [open, setOpen] = useState(false);
  return (
 <footer className="rksfooter">
    {/* <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-[linear-gradient(180deg,#00007F_0%,#000019_100%)]" />


        <div
          className="absolute inset-y-0 left-0 w-1/2 bg-no-repeat bg-left bg-cover opacity-70"
          style={{
            backgroundImage: `url(${getImageUrl('Looper-left.png')})`
          }}
        />


        <div
          className="absolute inset-y-0 right-0 w-1/2 bg-no-repeat bg-right bg-cover opacity-70 hidden md:block"
          style={{
            backgroundImage: `url(${getImageUrl('Looper-right.png')})`
          }}
        />


        <div className="absolute inset-0 bg-black/30" />


        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-30 py-25 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-sansation">
            Explore Real-World Assets with Confidence
          </h2>

          <p className="text-sm sm:text-base lg:text-xl text-[#DFE0EB] max-w-2xl mx-auto mb-10">
            STOEX offers a thoughtful approach to digital investing – grounded in
            real assets, clear structures, and regulatory discipline.
          </p>

          <button onClick={() => setOpen(true)} className="bg-lime-400 hover:bg-lime-500 text-[#0B0B0B] font-semibold px-8 py-3.5 rounded-full transition shadow-lg cursor-pointer  transition-all duration-300 transform hover:scale-105">
            Get Early Access
          </button>
        </div>

      </section> */}
    <section className="bg-[#fff] pt-16 pb-10">

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

          {/* LEFT SECTION */}
          <div className="lg:col-span-5">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-5">
              <a href="/">
              <img src={MainLogo.src} alt="STOEX" className="h-10" />
              </a>
              {/* <span className="text-xl font-bold tracking-wide">STOEX</span> */}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mb-6">
              <a href="https://www.youtube.com/@STOEX_official" target="_blank" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                <YoutubeIcon />
              </a>
              <a href="https://www.linkedin.com/company/stoex/" target="_blank" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                <LinkedinIcon />
              </a>
              <a href="https://x.com/Stoex_official" target="_blank" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                <XIcon />
              </a>
            </div>

            {/* Disclaimer */}
            <p className="text-md text-[#3D3D3D] leading-relaxed max-w-lg">
              STOEX operates in accordance with applicable regulatory
              frameworks. Investments involve risk and may not be suitable
              for all investors. Past performance is not indicative of future
              results. Please review all disclosures carefully before investing.
            </p>
          </div>

          {/* RIGHT LINKS */}
       <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 relative">

  {/* Column 1 */}
  <div className="sm:pl-6 ">
    <h4 className="font-semibold text-[#0A0A0A] text-xl mb-4">About</h4>
    <ul className="space-y-3 text-md text-[#3D3D3D] pl-6 border-l border-[#d8dbe5]">
      <li>
        <Link href="/about-us" className="hover:text-[#00007F] transition-colors">
          Why STOEX?
        </Link>
      </li>
      <li>
        <Link href="/contact-us" className="hover:text-[#00007F] transition-colors">
          Contact Us
        </Link>
      </li>
      
    </ul>
  </div>

  {/* Column 2 */}
  <div className="sm:pl-6 ">
    <h4 className="font-semibold text-[#0A0A0A] text-xl mb-4">Resources</h4>
    <ul className="space-y-3 text-md text-[#3D3D3D] pl-6 border-l border-[#d8dbe5]">
      {/* <li>
        <Link href="/blog" className="hover:text-[#00007F] transition-colors">
          Blog
        </Link>
      </li> */}
     
      <li>
        <Link href="/regulatory-hub" className="hover:text-[#00007F] transition-colors">
          Regulatory Hub
        </Link>
      </li>
    </ul>
  </div>

  {/* Column 3 */}
  <div className="sm:pl-6">
    <h4 className="font-semibold text-[#0A0A0A] text-xl mb-4">
      Policy & Guidelines
    </h4>
    <ul className="space-y-3 text-md text-[#3D3D3D] pl-6 border-l border-[#d8dbe5]">
      
      <li>
        <Link href="/privacy-policy" className="hover:text-[#00007F] transition-colors">
         Privacy Policy 
        </Link>
      </li>
       <li>
        <Link href="/terms-conditions" className="hover:text-[#00007F] transition-colors">
          Terms and Conditions
        </Link>
      </li>
       <li>
        <Link href="/cookie-policy" className="hover:text-[#00007F] transition-colors">
          Cookie Policy
        </Link>
      </li>
      
     
      <li>
        <Link href="/website-terms-of-use" className="hover:text-[#00007F] transition-colors">
          Website Terms of Use
        </Link>
      </li>
    </ul>
  </div>

</div>
        </div>
      </div>
    </section>
      <EarlyAccessModal open={open} setOpen={setOpen} />
  </footer>
  );
}