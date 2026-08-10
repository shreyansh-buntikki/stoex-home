import type { Metadata, Viewport } from "next";
import { Mona_Sans, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { GoldLayout } from "@/components/layout/GoldLayout";

const mona = Mona_Sans({
  variable: "--font-mona",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://stoex.in"),
  title: "STOEX — Buy Digital Gold by MMTC-PAMP, from ₹10",
  description:
    "Buy, sell & save verified 24K digital gold refined by MMTC-PAMP on STOEX. Backed 1:1, independently audited, delivered to your door.",
  robots: { index: true, follow: true },
  icons: {
    icon: [
      {
        url: "/assets/logos/logo-blue.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/assets/icons/logo-icon.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    shortcut: "/assets/logos/logo-blue.svg",
    apple: "/assets/logos/logo-blue.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${mona.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="preload"
          href="/fonts/sansation-700.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XDFC2HKJEG"
          strategy="lazyOnload"
        />
        <Script id="gtag-init" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XDFC2HKJEG');`}
        </Script>
        <GoldLayout>{children}</GoldLayout>
      </body>
    </html>
  );
}
