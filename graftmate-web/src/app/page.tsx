import type { Metadata } from "next";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Hero } from "@/components/home/Hero";
import { HomeFaq } from "@/components/home/HomeFaq";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PricingTeaser } from "@/components/home/PricingTeaser";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { TradesStrip } from "@/components/home/TradesStrip";
import { getSiteDescription } from "@/lib/promo";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const description = getSiteDescription();

  return {
    title: {
      absolute: "Quote & Invoice App for UK Tradesmen | GraftMate",
    },
    description,
    alternates: {
      canonical: "https://graftmate.net",
    },
    openGraph: {
      title: "Quote & Invoice App for UK Tradesmen | GraftMate",
      description,
      url: "https://graftmate.net",
    },
  };
}

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
