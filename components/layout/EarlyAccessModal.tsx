"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { sendEarlyAccessEmail } from "@/app/early-access/actions";
import { CheckCircle, Loader2 } from "lucide-react";
import type { ModalType } from "./EarlyAccessProvider";

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
  prefilledEmail?: string | null;
  modalType?: ModalType;
  description?: string;
  buttonText?: string;
  header?: string;
  excludeFields?: string[];
  successMessage?: string;
};

export default function EarlyAccessModal({
  open,
  setOpen,
  prefilledEmail,
  modalType = "early_access",
  description,
  buttonText,
  header,
  excludeFields = [],
  successMessage,
}: Props) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: prefilledEmail || "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  }>({});
  const [touched, setTouched] = useState<{
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    message?: boolean;
  }>({});

  const validateField = (name: string, value: string) => {
    const errors: {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
    } = {};

    if (name === "name") {
      if (!value.trim()) {
        errors.name = "Name is required";
      } else if (value.trim().length < 2) {
        errors.name = "Name must be at least 2 characters";
      } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        errors.name = "Name can only contain letters and spaces";
      }
    }

    if (name === "email") {
      if (!value.trim()) {
        errors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errors.email = "Please enter a valid email address";
      }
    }

    if (name === "phone") {
      if (!value.trim()) {
        errors.phone = "Phone number is required";
      } else if (
        !/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/.test(
          value,
        )
      ) {
        errors.phone = "Please enter a valid phone number";
      }
    }

    return errors;
  };

  const show = (field: string) => !excludeFields.includes(field);

  const validateForm = () => {
    const errors: {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
    } = {};

    if (show("name")) Object.assign(errors, validateField("name", formData.name));
    Object.assign(errors, validateField("email", formData.email));
    if (show("phone")) Object.assign(errors, validateField("phone", formData.phone));
    if (show("message")) Object.assign(errors, validateField("message", formData.message));

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      ...(show("name") && { name: true }),
      email: true,
      ...(show("phone") && { phone: true }),
      ...(show("message") && { message: true }),
    });

    // Validate form
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
        body: JSON.stringify(
          Object.fromEntries(
            Object.entries({ ...formData, type: modalType }).filter(([, v]) => v !== "")
          )
        ),
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
      setTimeout(() => setOpen(false), 2000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate field on change if it's been touched
    if (touched[name as keyof typeof touched]) {
      const errors = validateField(name, value);
      setFieldErrors((prev) => ({
        ...prev,
        ...errors,
        ...(Object.keys(errors).length === 0 ? { [name]: undefined } : {}),
      }));
    }
  };

  const handleBlur = (fieldName: string) => {
    setTouched((prev) => ({ ...prev, [fieldName]: true }));
    const errors = validateField(
      fieldName,
      formData[fieldName as keyof typeof formData],
    );
    setFieldErrors((prev) => ({ ...prev, ...errors }));
  };

  // Update email when prefilledEmail changes
  useEffect(() => {
    if (prefilledEmail) {
      setFormData((prev) => ({ ...prev, email: prefilledEmail }));
    }
  }, [prefilledEmail]);

  // Lock scroll + focus management
  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";

    const firstInput = dialogRef.current?.querySelector<HTMLElement>(
      'input, textarea, button, [tabindex]:not([tabindex="-1"])',
    );
    firstInput?.focus();

    return () => {
      document.body.style.overflow = "";
      previouslyFocused.current?.focus();
    };
  }, [open]);

  // Close on ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, setOpen]);

  // Focus trap
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key !== "Tab") return;

    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
    );

    if (!focusable || focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  if (!open) return null;

  return createPortal(
    <div
      ref={overlayRef}
      aria-hidden={!open}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 pt-[72px] overflow-y-auto"
    >
      {/* Overlay (NO CLICK CLOSE) */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Centering wrapper */}
      <div className="relative z-10 w-full flex justify-center py-20">
      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="early-access-title"
        aria-describedby="early-access-desc"
        ref={dialogRef}
        onKeyDown={handleKeyDown}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg h-fit max-h-[calc(100dvh-10rem)] overflow-y-auto rounded-xl sm:rounded-2xl bg-white p-5 sm:p-6 md:p-8 shadow-2xl custom-scrollbar"
        style={{
          scrollbarWidth: "auto",
          // scrollbarColor: '#cbd5e1 #fff'
        }}
      >
        {/* Close Button */}
        <button
          aria-label="Close modal"
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 sm:right-4 sm:top-4 inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 transition-colors"
        >
          ✕
        </button>

        {/* Header */}
        <h3
          id="early-access-title"
          className="text-2xl sm:text-3xl font-bold text-[#0A0A0A] font-sansation pr-8"
        >
          {header ?? "Get Early Access!"}
        </h3>

        <p
          id="early-access-desc"
          className="mt-2 text-sm sm:text-base text-[#444]"
        >
          {description ?? "Be among the first to experience our upcoming release. Sign up to get early access, product updates, and exclusive insights before we launch publicly."}
        </p>

        <hr className="my-5" />

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {show("name") && (
          <div>
            <label className="block text-sm font-semibold mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={() => handleBlur("name")}
              placeholder="Enter Name"
              className={`w-full rounded-md bg-gray-100 px-3 py-2 text-sm focus:ring-2 outline-none transition-all ${
                fieldErrors.name && touched.name
                  ? "border border-red-500 focus:ring-red-500"
                  : "focus:ring-indigo-400"
              }`}
            />
            {fieldErrors.name && touched.name && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {fieldErrors.name}
              </p>
            )}
          </div>
          )}

          <div className={!show("name") && !show("phone") && !show("company") && !show("message") ? "sm:col-span-2" : ""}>
            <label className="block text-sm font-semibold mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => handleBlur("email")}
              placeholder="Enter Email"
              className={`w-full rounded-md bg-gray-100 px-3 py-2 text-sm focus:ring-2 outline-none transition-all ${
                fieldErrors.email && touched.email
                  ? "border border-red-500 focus:ring-red-500"
                  : "focus:ring-indigo-400"
              }`}
            />
            {fieldErrors.email && touched.email && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {fieldErrors.email}
              </p>
            )}
          </div>

          {show("phone") && (
          <div>
            <label className="block text-sm font-semibold mb-1">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={() => handleBlur("phone")}
              placeholder="Enter Phone"
              className={`w-full rounded-md bg-gray-100 px-3 py-2 text-sm focus:ring-2 outline-none transition-all ${
                fieldErrors.phone && touched.phone
                  ? "border border-red-500 focus:ring-red-500"
                  : "focus:ring-indigo-400"
              }`}
            />
            {fieldErrors.phone && touched.phone && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {fieldErrors.phone}
              </p>
            )}
          </div>
          )}

          {show("company") && (
          <div>
            <label className="block text-sm font-semibold mb-1">Company</label>
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter Company"
              className="w-full rounded-md bg-gray-100 px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>
          )}

          {show("message") && (
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={() => handleBlur("message")}
              rows={4}
              placeholder="Write Message"
              className={`w-full rounded-md bg-gray-100 px-3 py-2 text-sm resize-none focus:ring-2 outline-none transition-all ${
                fieldErrors.message && touched.message
                  ? "border border-red-500 focus:ring-red-500"
                  : "focus:ring-indigo-400"
              }`}
            />
            {fieldErrors.message && touched.message && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {fieldErrors.message}
              </p>
            )}
          </div>
          )}

          <div className="sm:col-span-2 pt-2 space-y-3">
            <button
              type="submit"
              disabled={isLoading}
              className="rounded-full bg-[#1a1a7f] px-6 py-2 text-sm font-semibold text-white shadow hover:bg-[#23239c] transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                buttonText ?? "Send Message"
              )}
            </button>

            {submitted && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-start gap-2 animate-fade-in">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-green-700 font-medium text-sm">
                  {successMessage ?? "Request sent successfully! Check your email for confirmation."}
                </span>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2 animate-fade-in">
                <svg
                  className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-red-700 font-medium text-sm">
                  {error}
                </span>
              </div>
            )}
          </div>
        </form>
      </div>

      </div>
      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
          margin: 8px 0;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
          border: 2px solid #f1f5f9;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>,
    document.body,
  );
}
