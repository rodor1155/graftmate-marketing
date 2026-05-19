import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
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
  title: {
    default: "Graftmate — Business management for UK trades",
    template: "%s | Graftmate",
  },
  description:
    "Voice quotes, AI receipt scanning, and one-tap invoicing for UK sole traders. Plumbers, electricians, builders — £29.99/month, one simple plan.",
  keywords: [
    "trade business software UK",
    "sole trader invoicing",
    "voice quotes trades",
    "plumber software",
    "electrician invoicing",
  ],
  openGraph: {
    title: "Graftmate — Quote by speaking. Invoice in one tap.",
    description:
      "Business management built for UK sole traders. Voice quotes, AI receipts, £29.99/month.",
    type: "website",
    locale: "en_GB",
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
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
