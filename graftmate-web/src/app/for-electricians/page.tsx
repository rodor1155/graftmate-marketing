import type { Metadata } from "next";
import { TradeLandingPage } from "@/components/trades/TradeLandingPage";
import { tradePages } from "@/lib/tradePages";

const page = tradePages.electricians;

export const metadata: Metadata = {
  title: {
    absolute: page.title,
  },
  description: page.description,
};

export default function ForElectriciansPage() {
  return <TradeLandingPage page={page} />;
}
