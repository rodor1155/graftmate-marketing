import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PromoBanner } from "@/components/layout/PromoBanner";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://graftmate.net"),
  title: {
    default: "GraftMate — AI-powered job management for UK trades",
    template: "%s | GraftMate",
  },
  description:
    "AI quote generation, unified inbox, and client management for UK tradespeople. From £9.99/month.",
  keywords: [
    "trade business software UK",
    "sole trader invoicing",
    "AI quotes trades",
    "plumber software",
    "electrician invoicing",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GraftMate — AI-powered job management for UK trades",
    description:
      "AI quote generation, unified inbox, and client management for UK tradespeople. From £9.99/month.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "GraftMate — AI-powered job management for UK trades",
    description:
      "AI quote generation, unified inbox, and client management for UK tradespeople. From £9.99/month.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${outfit.variable} ${dmSans.variable} h-full`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z4N9PVFF88"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z4N9PVFF88');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <div className="sticky top-0 z-50">
          <PromoBanner />
          <Header />
        </div>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
