import { AdminPain } from "@/components/home/AdminPain";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Differentiators } from "@/components/home/Differentiators";
import { FeaturesOverview } from "@/components/home/FeaturesOverview";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PricingTeaser } from "@/components/home/PricingTeaser";
import { TradesStrip } from "@/components/home/TradesStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <TradesStrip />
      <AdminPain />
      <FeaturesOverview />
      <HowItWorks />
      <Differentiators />
      <PricingTeaser />
      <CtaBanner />
    </>
  );
}
