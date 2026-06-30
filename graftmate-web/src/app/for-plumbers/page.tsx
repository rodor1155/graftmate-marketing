import type { Metadata } from "next";
import { TradeLandingPage } from "@/components/trades/TradeLandingPage";
import { tradePages } from "@/lib/tradePages";

const page = tradePages.plumbers;

export const metadata: Metadata = {
  title: {
    absolute: page.title,
  },
  description: page.description,
  alternates: {
    canonical: "https://graftmate.net/for-plumbers",
  },
};

export default function ForPlumbersPage() {
  return <TradeLandingPage page={page} />;
}
