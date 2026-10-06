import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Outfit } from "next/font/google";
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

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: "500",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://graftmate.net"),
  title: {
    default: "GraftMate — Professional quotes from your phone in two minutes",
    template: "%s | GraftMate",
  },
  description:
    "Describe a job and get a professional quote you can review and send from your phone in about two minutes. £29.99/month, first month free. Built for UK sole traders.",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    siteName: "GraftMate",
    title: "GraftMate — Professional quotes from your phone in two minutes",
    description:
      "GraftMate — AI quote generation, unified inbox, and client management for UK tradespeople. £29.99/month, first month free.",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GraftMate — job management for UK trades",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GraftMate — Professional quotes from your phone in two minutes",
    description:
      "GraftMate — AI quote generation, unified inbox, and client management for UK tradespeople. £29.99/month, first month free.",
    images: ["/og-image.png"],
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
      className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable} h-full`}
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
      <body className="min-h-full flex flex-col bg-plus-pattern font-sans antialiased">
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
