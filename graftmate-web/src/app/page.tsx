import type { Metadata } from "next";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Hero } from "@/components/home/Hero";
import { HomeFaq } from "@/components/home/HomeFaq";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PricingTeaser } from "@/components/home/PricingTeaser";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { TradesStrip } from "@/components/home/TradesStrip";

export const metadata: Metadata = {
  title: {
    absolute: "Quote & Invoice App for UK Tradesmen | GraftMate",
  },
  description:
    "Describe the job, send a professional quote in about two minutes, then invoice in one tap. AI quoting for UK trades. £29.99/month, first month free.",
  alternates: {
    canonical: "https://graftmate.net",
  },
  openGraph: {
    title: "Quote & Invoice App for UK Tradesmen | GraftMate",
    description:
      "Describe the job, send a professional quote in about two minutes, then invoice in one tap. AI quoting for UK trades. £29.99/month, first month free.",
    url: "https://graftmate.net",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TradesStrip />
      <HowItWorks />
      <ProductShowcase />
      <PricingTeaser />
      <HomeFaq />
      <CtaBanner />
    </>
  );
}
