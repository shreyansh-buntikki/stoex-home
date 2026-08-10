"use client";

import Image from "next/image";
import { Mail, Phone, AlertCircle, CheckCircle, Loader2 } from "lucide-react";
import { useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import ContactHero from "@/public/assets/images/contact-hero.webp";

const fadeIn = { hidden: { opacity: 0 }, show: { opacity: 1 } };

const mona: CSSProperties = { fontFamily: "Mona Sans, sans-serif" };
const sansation: CSSProperties = { fontFamily: "Sansation, sans-serif" };

type FieldErrors = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

type Touched = {
  name?: boolean;
  email?: boolean;
  phone?: boolean;
  message?: boolean;
};

const validateField = (name: string, value: string): FieldErrors => {
  const errors: FieldErrors = {};

  if (name === "name") {
    if (!value.trim()) errors.name = "Name is required";
    else if (value.trim().length < 2)
      errors.name = "Name must be at least 2 characters";
    else if (!/^[a-zA-Z\s]+$/.test(value))
      errors.name = "Name can only contain letters and spaces";
  }

  if (name === "email") {
    if (!value.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      errors.email = "Please enter a valid email address";
  }

  if (name === "phone") {
    if (!value.trim()) errors.phone = "Phone number is required";
    else if (
      !/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/.test(
        value,
      )
    )
      errors.phone = "Please enter a valid phone number";
  }

  return errors;
};

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Touched>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateForm = () => {
    const errors: FieldErrors = {
      ...validateField("name", formData.name),
      ...validateField("email", formData.email),
      ...validateField("phone", formData.phone),
    };
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name as keyof Touched]) {
      const errors = validateField(name, value);
      setFieldErrors((prev) => ({
        ...prev,
        ...errors,
        ...(Object.keys(errors).length === 0 ? { [name]: undefined } : {}),
      }));
    }
  };

  const handleBlur = (fieldName: keyof Touched) => {
    setTouched((prev) => ({ ...prev, [fieldName]: true }));
    const errors = validateField(
      fieldName,
      formData[fieldName as keyof typeof formData],
    );
    setFieldErrors((prev) => ({ ...prev, ...errors }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true });

    if (!validateForm()) {
      setError("Please fix the errors above before submitting");
      return;
    }

    setIsLoading(true);
    setError(null);
    setSubmitted(false);

    try {
      const response = await fetch(`/api/inquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, type: "contact" }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
        setFieldErrors({});
        setTouched({});
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(result.error || "Failed to send request");
      }
    } catch {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const inputBase =
    "w-full rounded-lg bg-[#F1F2F4] px-4 py-4 text-[16px] text-[#0A0A0A] outline-none transition-all placeholder:text-[#5B5B5B] focus:ring-2";

  return (
    <section className="bg-[#f8f6f6]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 items-stretch">
          <motion.div
            className="bg-white h-full rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm order-2 lg:order-none"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p
              className="text-[#00007F] text-[20px] md:text-[28px] font-regular leading-[100%] tracking-wider uppercase"
              style={mona}
            >
              GET IN TOUCH
            </p>
            <h1
              className="mt-3 text-[36px] leading-[1] lg:leading-[1.15] sm:text-[40px] lg:text-[48px] font-bold text-[#0A0A0A]"
              style={sansation}
            >
              Write us your query!
            </h1>
            <p
              className="mt-5 text-[14px] md:text-[16px] text-[#1D1D1D] leading-relaxed max-w-[520px]"
              style={mona}
            >
              Have a question or need more information? Fill out the form below
              and our team will get back to you as soon as possible.
            </p>

            <hr className="my-7 border-t border-[#E5E7EB]" />

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
              style={mona}
            >
              <div>
                <label className="block text-[16px] font-regular text-[#0A0A0A] mb-2">
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur("name")}
                  placeholder="Enter Name"
                  className={`${inputBase} ${
                    fieldErrors.name && touched.name
                      ? "border border-red-500 focus:ring-red-500"
                      : "focus:ring-[#00007F]/30"
                  }`}
                />
                {fieldErrors.name && touched.name && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {fieldErrors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-[16px] font-regular text-[#0A0A0A] mb-2">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur("email")}
                  placeholder="Enter Email"
                  className={`${inputBase} ${
                    fieldErrors.email && touched.email
                      ? "border border-red-500 focus:ring-red-500"
                      : "focus:ring-[#00007F]/30"
                  }`}
                />
                {fieldErrors.email && touched.email && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {fieldErrors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-[16px] font-regular text-[#0A0A0A] mb-2">
                  Phone<span className="text-red-500">*</span>
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={() => handleBlur("phone")}
                  placeholder="Enter Phone"
                  className={`${inputBase} ${
                    fieldErrors.phone && touched.phone
                      ? "border border-red-500 focus:ring-red-500"
                      : "focus:ring-[#00007F]/30"
                  }`}
                />
                {fieldErrors.phone && touched.phone && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {fieldErrors.phone}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-[16px] font-regular text-[#0A0A0A] mb-2">
                  Company
                </label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter Company"
                  className={`${inputBase} focus:ring-[#00007F]/30`}
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-[16px] font-regular text-[#0A0A0A] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur("message")}
                  rows={5}
                  placeholder="Write Message"
                  className={`${inputBase} resize-none ${
                    fieldErrors.message && touched.message
                      ? "border border-red-500 focus:ring-red-500"
                      : "focus:ring-[#00007F]/30"
                  }`}
                />
                {fieldErrors.message && touched.message && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {fieldErrors.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2 pt-2 space-y-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="rounded-full bg-[#00007F] px-8 py-3 text-[14px] font-semibold text-white shadow hover:bg-[#000066] transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {submitted && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-green-700 font-medium text-sm">
                      Message sent successfully! We'll get back to you soon.
                    </span>
                  </div>
                )}

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-red-700 font-medium text-sm">
                      {error}
                    </span>
                  </div>
                )}
              </div>
            </form>
          </motion.div>

          <div className="contents lg:flex lg:flex-col lg:gap-6 lg:h-full">
            <motion.div
              className="relative w-full order-1 lg:order-none lg:flex-1 min-h-[400px] sm:min-h-[460px] lg:min-h-[600px] rounded-2xl overflow-hidden shadow-sm"
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            >
              <Image
                src={ContactHero}
                alt="STOEX office skyline"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col gap-4 order-3 lg:order-none"
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              <div className="bg-[#f8f6f6] rounded-xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#EEEEFB] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#00007F]" />
                </div>
                <div style={mona}>
                  <p className="text-[18px] font-bold text-[#0A0A0A]">Email</p>
                  <a
                    href="mailto:connectus@stoex.in"
                    className="text-[16px] text-[#0A0A0A] hover:text-[#00007F] transition-colors"
                  >
                    connectus@stoex.in
                  </a>
                </div>
              </div>

              <div className="bg-[#f8f6f6] rounded-xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#EEEEFB] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#00007F]" />
                </div>
                <div style={mona}>
                  <p className="text-[18px] font-bold text-[#0A0A0A]">Phone</p>
                  <a
                    href="tel:+919319769194"
                    className="text-[16px] text-[#0A0A0A] hover:text-[#00007F] transition-colors"
                  >
                    +91 84483 58943
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
