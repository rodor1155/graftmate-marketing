import type { Metadata } from "next";
import { TradeLandingPage } from "@/components/trades/TradeLandingPage";
import { tradePages } from "@/lib/tradePages";

const page = tradePages.builders;

export const metadata: Metadata = {
  title: {
    absolute: page.title,
  },
  description: page.description,
  alternates: {
    canonical: "https://graftmate.net/for-builders",
  },
};

export default function ForBuildersPage() {
  return <TradeLandingPage page={page} />;
}
