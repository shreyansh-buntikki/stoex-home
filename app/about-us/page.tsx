import type { Metadata } from "next";
import { AboutUs } from "@/components/aboutUs";

const LOGO_URL =
  "https://dev-stoex-india-web.s3.ap-south-1.amazonaws.com/email-assets/logo-dark.png";

const TITLE = "About STOEX | Trusted Digital Gold Investment Platform";
const DESCRIPTION =
  "Learn about STOEX, a trusted digital gold investment platform delivering secure, transparent, and blockchain-powered digital gold ownership for modern investors.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  authors: [{ name: "STOEX" }],
  alternates: {
    canonical: "https://www.stoex.in/about-us",
  },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "https://stoex.in/about-us",
    siteName: "STOEX",
    locale: "en_IN",
    images: [{ url: LOGO_URL }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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
        "STOEX is a trusted digital gold investment platform providing secure, transparent, and blockchain-powered gold ownership for investors.",
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
      inLanguage: "en-IN",
    },
    {
      "@type": "AboutPage",
      "@id": "https://stoex.in/about-us#webpage",
      url: "https://stoex.in/about-us",
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

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutUs />
    </>
  );
}
