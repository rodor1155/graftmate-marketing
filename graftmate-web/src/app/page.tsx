import type { Metadata } from "next";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Hero } from "@/components/home/Hero";
import { HomeFaq } from "@/components/home/HomeFaq";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PricingTeaser } from "@/components/home/PricingTeaser";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { TradesStrip } from "@/components/home/TradesStrip";

export const metadata: Metadata = {
  title: "GraftMate — Professional quotes from your phone in two minutes",
  description:
    "Describe a job and get a professional quote you can review and send from your phone in about two minutes. £29.99/month, first month free. Built for UK sole traders.",
  alternates: {
    canonical: "https://graftmate.net",
  },
  openGraph: {
    title: "GraftMate — Professional quotes from your phone in two minutes",
    description:
      "Describe a job and get a professional quote you can review and send from your phone in about two minutes. £29.99/month, first month free.",
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
