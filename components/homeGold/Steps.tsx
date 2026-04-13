"use client";

import { cubicBezier, motion, type Variants } from "framer-motion";
import Background from "@/public/assets/images/steps-bg.webp";
import { Phone, Mail, CreditCard, CheckCircle, Check } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import type { CSSProperties } from "react";
import UPI from "@/public/assets/icons/upi.svg";
import Lottie from "lottie-react";
import CheckAnimation from "@/public/assets/animations/check.json";

const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };
const sansation: CSSProperties = {
  fontFamily: "Sansation, sans-serif",
  letterSpacing: "1px",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
    },
  },
};

const mobileContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const mobileStepVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const connectorVariants: Variants = {
  hidden: { width: "0%" },
  visible: {
    width: "100%",
    transition: {
      duration: 0.9,
      ease: cubicBezier(0.42, 0, 0.58, 1),
    },
  },
};

const mobileConnectorVariants: Variants = {
  hidden: { height: "0%" },
  visible: {
    height: "100%",
    transition: {
      duration: 0.9,
      ease: cubicBezier(0.42, 0, 0.58, 1),
    },
  },
};

function TypingAnimation() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "4965";

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined;
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      timer = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          if (timer) clearInterval(timer);
        }
      }, 200);
    }, 2200);

    return () => {
      clearTimeout(timeout);
      if (timer) clearInterval(timer);
    };
  }, []);

  return (
    <span className="inline-flex items-center font-medium">
      {displayText.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ opacity: 0, y: 6, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.12, ease: "easeOut" }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}

      <motion.span
        aria-hidden
        className="ml-0.5 inline-block h-[1em] w-px bg-white/90 align-middle"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
      />
    </span>
  );
}

const stepData = [
  {
    number: "01",
    title: "Sign Up in Minutes",
    description: "Email and mobile phone verification.\nNo demat account needed.\nNo paperwork.",
    icon: Phone,
    secondaryIcon: Mail,
    mockups: [
      { icon: Phone, label: "Phone numbers", bgColor: "bg-blue-500/20" },
      { icon: Mail, label: "Email address", bgColor: "bg-green-500/20" },
    ],
  },
  {
    number: "02",
    title: "Pay via UPI or Bank",
    description: "Link your bank. Pay with UPI,\nnet banking, or card.\nInstant credit.",
    icon: CreditCard,
    amount: "₹4965",
    upiId: "Johndow*344@hdfc",
  },
  {
    number: "03",
    title: "Buy Gold — Done",
    description: "Purchase gold from ₹15*. Your gold is vaulted and recorded securely and instantly.",
    icon: CheckCircle,
    amount: "₹4965",
  },
];

function StepMockup({ step, index }: { step: any; index: number }) {
  if (index === 0) {
    return (
      <div className="relative mt-4 lg:mt-8 w-full max-w-[300px] h-[110px] lg:min-h-fit">
        {/* Phone card - appears first, then gets pushed back */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 1 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: [1, 1, 0.95],
          }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            opacity: { delay: 0.3, duration: 0.6 },
            y: { delay: 0.3, duration: 0.6 },
            scale: { delay: 1.0, duration: 0.3 },
          }}
          className="absolute top-0 left-[19px] w-[calc(100%-19px)] lg:w-[263px] backdrop-blur-md border border-white/10 rounded-2xl bg-white/5 z-10"
        >
          <div className="flex items-center gap-4 p-4">
            <div className="p-2 rounded-xl bg-white/10 border border-white/20">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <span className="text-white text-[15px] flex-1" style={mona}>
              Phone numbers
            </span>
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 text-white" strokeWidth={2} />
            </div>
          </div>
        </motion.div>

        {/* Email card - slides in from below and stacks below phone card */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            delay: 1.0,
            duration: 0.5,
          }}
          className="absolute top-[50px] left-0 w-full lg:w-[300px] backdrop-blur-md border border-white/10 rounded-2xl bg-white/5 z-20"
        >
          <div className="flex items-center gap-4 p-4">
            <div className="p-2 rounded-xl bg-white/10 border border-white/20">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <span className="text-white text-[15px] flex-1" style={mona}>
              Email address
            </span>
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 text-white" strokeWidth={2} />
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.1, duration: 0.6 }}
        className="backdrop-blur-md border border-white/10 rounded-2xl bg-white/5 mt-8 w-full max-w-[293px] h-[122px] relative overflow-hidden"
      >
        <div className="absolute inset-0 p-4">
        <div className="text-start">
            <div className="text-[28px] font-bold text-white mb-4" style={mona}>
              <span className="text-[#5b5b5b] font-medium ">₹{" "}</span><TypingAnimation />
            </div>
          </div>
          <div className="flex items-center gap-3 mb-6">
           <Image src={UPI} alt="UPI" width={40} height={40} />
            <span className="text-white flex gap-2 items-center text-[15px]" style={mona}>
              {step.upiId || "Johndow*344@hdfc"}
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center ml-auto">
              <Check className="w-3 h-3 text-white" />
            </div>
            </span>
          </div>

          
        </div>
      </motion.div>
    );
  }

  if (index === 2) {
    const [playLottie, setPlayLottie] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setPlayLottie(true), 3500);
      return () => clearTimeout(timer);
    }, []);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.9, duration: 0.6 }}
        className="backdrop-blur-md border border-white/10 rounded-2xl bg-white/5 mt-8 w-full max-w-[284px] h-[161px] relative overflow-hidden"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center">
          <div className="w-16 h-16 flex-shrink-0">
            {playLottie && (
              <Lottie animationData={CheckAnimation} loop={false} initialSegment={[0, 50]} />
            )}
          </div>
          <div className="text-white text-[16px] space-y-0" style={mona}>
            <p>
              Your gold purchase of <span className="font-semibold">₹4965</span>
            </p>
            <p>has been successful.</p>
          </div>
        </div>
      </motion.div>
    );
  }

  return null;
}

export const Steps = () => {
  return (
    <section className="relative py-[90px] lg:py-[170px] px-6 overflow-hidden">
      <Image
        src={Background}
        alt="Background Image"
        fill
        className="absolute inset-0 object-cover"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#00007F]/40 to-[#000019]/20" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-[1160px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 max-w-[911px] mx-auto"
          >
            <h2 className="text-[26px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[40px] mb-6" style={sansation}>
              <span className="text-white">Three Steps. </span>
              <span className="text-[#B8943F]">Real Gold.</span>
            </h2>
            <p
              className="text-[15px] lg:text-[20px] leading-[22px] lg:leading-[28px] text-white"
              style={mona}
            >
              No demat. No brokers. No waiting. From signup to gold ownership in minutes.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="hidden lg:block">
              <div className="flex items-start relative w-full">
                <div className="flex-1 relative">
                  <motion.div variants={stepVariants} className="relative">
                    <div className="flex items-center mb-5 relative">
                      <div className="w-4 h-4 bg-white rounded-full border-2 border-white shadow-lg z-10" />
                      <div className="flex-1 h-px bg-transparent relative overflow-hidden">
                        <motion.div
                          variants={connectorVariants}
                          className="absolute top-0 left-0 h-full bg-white/[0.36]"
                        />
                      </div>
                    </div>

                    <div className="w-[300px]">
                      <div className="mb-5">
                        <div
                          className="text-[24px] leading-[30px] text-white/90 mb-4"
                          style={mona}
                        >
                          01
                        </div>
                        <h3
                          className="text-[24px] font-semibold leading-[30px] text-white mb-4"
                          style={sansation}
                        >
                          Sign Up in Minutes
                        </h3>
                        <p
                          className="text-[16px] leading-[24px] text-white/70 whitespace-pre-line max-w-[274px]"
                          style={mona}
                        >
                          {"Email and mobile phone verification.\nNo demat account needed.\nNo paperwork."}
                        </p>
                      </div>

                      <StepMockup step={{}} index={0} />
                    </div>
                  </motion.div>
                </div>

                <div className="flex-1 relative">
                  <motion.div
                    variants={stepVariants}
                    className="relative"
                  >
                    <div className="h-[16px] relative mb-5 w-full">
                      <div className="absolute left-[43px] w-4 h-4 bg-white rounded-full border-2 border-white shadow-lg z-10 top-[-1px]" />
                      <div className="absolute h-px left-[-2px] top-[7.5px] w-[calc(100%+2px)] bg-transparent overflow-hidden">
                        <motion.div
                          variants={connectorVariants}
                          className="absolute top-0 left-0 h-full bg-white/[0.36]"
                        />
                      </div>
                    </div>

                    <div className="w-[300px] mx-auto">
                      <div className="mb-5">
                        <div
                          className="text-[24px] leading-[30px] text-white/90 mb-4"
                          style={mona}
                        >
                          02
                        </div>
                        <h3
                          className="text-[24px] font-semibold leading-[30px] text-white mb-4"
                          style={sansation}
                        >
                          Pay via UPI or Bank
                        </h3>
                        <p
                          className="text-[16px] leading-[24px] text-white/70 whitespace-pre-line max-w-[274px]"
                          style={mona}
                        >
                          {"Link your bank. Pay with UPI,\nnet banking, or card.\nInstant credit."}
                        </p>
                      </div>

                      <StepMockup step={{ upiId: "Johndow*344@hdfc" }} index={1} />
                    </div>
                  </motion.div>
                </div>

                <div className="flex-1 relative">
                  <motion.div
                    variants={stepVariants}
                    className="relative"
                  >
                    <div className="h-[16px] relative mb-5 w-full">
                      <div className="absolute h-px left-[-2px] top-[8px] w-[389px] bg-transparent overflow-hidden">
                        <motion.div
                          variants={connectorVariants}
                          className="absolute top-0 left-0 h-full bg-white/[0.36]"
                        />
                      </div>
                      <div className="absolute left-[102px] w-4 h-4 bg-white rounded-full border-2 border-white shadow-lg z-10 top-[-1px]" />
                    </div>

                    <div className="w-[284px] ml-auto">
                      <div className="mb-5">
                        <div
                          className="text-[24px] leading-[30px] text-white/90 mb-4"
                          style={mona}
                        >
                          03
                        </div>
                        <h3
                          className="text-[24px] font-semibold leading-[30px] text-white mb-4"
                          style={sansation}
                        >
                          Buy Gold — Done
                        </h3>
                        <p
                          className="text-[16px] leading-[24px] text-white/70 max-w-[274px]"
                          style={mona}
                        >
                          Purchase gold from ₹15*. Your gold is vaulted and recorded securely and instantly.
                        </p>
                      </div>

                      <StepMockup step={{}} index={2} />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            <motion.div
              className="lg:hidden relative pl-6"
              variants={mobileContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {stepData.map((step, index) => (
                <motion.div
                  key={index}
                  variants={mobileStepVariants}
                  className="relative pb-12 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-6 top-[6px] w-3 h-3 bg-white rounded-full border-2 border-white shadow-lg z-10" />

                  {/* Vertical connector below dot */}
                  {index < stepData.length - 1 && (
                    <div className="absolute -left-[19.5px] top-[18px] bottom-0 w-px overflow-hidden">
                      <motion.div
                        variants={mobileConnectorVariants}
                        className="w-full bg-white/30"
                      />
                    </div>
                  )}

                  {/* Step number + title on same line */}
                  <div className="flex items-baseline gap-3 mb-2">
                    <span
                      className="text-[16px] leading-[20px] text-white/60"
                      style={mona}
                    >
                      {step.number}
                    </span>
                    <h3
                      className="text-[18px] font-semibold leading-[24px] text-white"
                      style={sansation}
                    >
                      {step.title}
                    </h3>
                  </div>

                  {/* Description — no forced line breaks on mobile */}
                  <p
                    className="text-[14px] leading-[20px] text-white/70 mb-4"
                    style={mona}
                  >
                    {step.description.replace(/\n/g, " ")}
                  </p>

                  {/* Mockup */}
                  <StepMockup step={step} index={index} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};