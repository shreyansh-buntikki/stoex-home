import type { Metadata } from "next";
import { HomePageGold } from "@/components/homeGold";
import { faqData } from "@/components/homeGold/FaqData";

const LOGO_URL =
  "https://dev-stoex-india-web.s3.ap-south-1.amazonaws.com/email-assets/logo-dark.png";

const TITLE =
  "Buy Digital Gold Online | Secure, Verifiable & Trusted Investment | STOEX";
const DESCRIPTION =
  "Buy digital gold online with STOEX, a secure and trusted platform for verifiable gold investment. Enjoy transparent ownership, blockchain-powered security, and a seamless digital gold investment experience.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  authors: [{ name: "STOEX" }],
  alternates: {
    canonical: "https://www.stoex.in/",
  },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "https://stoex.in/",
    siteName: "STOEX",
    images: [{ url: LOGO_URL }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Buy digital gold online with STOEX, a secure and trusted platform for verified gold investment.",
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
        "STOEX is a secure and trusted platform to buy digital gold online with transparent ownership and blockchain-powered security.",
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://stoex.in/#website",
      url: "https://stoex.in/",
      name: "STOEX",
      publisher: {
        "@id": "https://stoex.in/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://stoex.in/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "WebPage",
      "@id": "https://stoex.in/#webpage",
      url: "https://stoex.in/",
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
    {
      "@type": "Service",
      "@id": "https://stoex.in/#service",
      name: "Digital Gold Investment",
      provider: {
        "@id": "https://stoex.in/#organization",
      },
      serviceType: "Digital Gold Investment Platform",
      description:
        "Buy verified digital gold online through STOEX with secure blockchain-powered ownership and a seamless investment experience.",
      areaServed: "India",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.know_stoex.map((item) => ({
    "@type": "Question",
    name: item.question.trim(),
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer.replace(/\s+/g, " ").trim(),
    },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HomePageGold />
    </>
  );
}
