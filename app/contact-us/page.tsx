import type { Metadata } from "next";
import { ContactUs } from "@/components/contactUs";

const LOGO_URL =
  "https://dev-stoex-india-web.s3.ap-south-1.amazonaws.com/email-assets/logo-dark.png";

const TITLE = "Contact STOEX | Get in Touch for Digital Gold Investment";
const DESCRIPTION =
  "Contact STOEX for assistance with digital gold investment, account support, partnerships, and business inquiries. Our team is here to help you.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  authors: [{ name: "STOEX" }],
  alternates: {
    canonical: "https://www.stoex.in/contact-us",
  },
  openGraph: {
    type: "website",
    title: TITLE,
    description:
      "Contact STOEX for assistance with digital gold investment, account support, partnerships, and business inquiries.",
    url: "https://www.stoex.in/contact-us",
    siteName: "STOEX",
    locale: "en_IN",
    images: [{ url: LOGO_URL }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Contact STOEX for assistance with digital gold investment, account support, partnerships, and business inquiries.",
    images: [LOGO_URL],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://stoex.in/#organization",
      name: "STOEX",
      url: "https://stoex.in/",
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
      image: LOGO_URL,
      description:
        "STOEX is a secure and trusted digital gold investment platform offering transparent, blockchain-powered gold ownership.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        url: "https://stoex.in/contact-us",
        availableLanguage: ["English"],
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://stoex.in/#website",
      url: "https://www.stoex.in/",
      name: "STOEX",
      publisher: {
        "@id": "https://stoex.in/#organization",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "ContactPage",
      "@id": "https://stoex.in/contact-us#webpage",
      url: "https://stoex.in/contact-us",
      name: TITLE,
      isPartOf: {
        "@id": "https://stoex.in/#website",
      },
      about: {
        "@id": "https://stoex.in/#organization",
      },
      description: DESCRIPTION,
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
      inLanguage: "en-IN",
    },
  ],
};

export default function ContactUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactUs />
    </>
  );
}
