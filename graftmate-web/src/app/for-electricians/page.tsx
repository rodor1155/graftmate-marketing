import { TradeLandingPage } from "@/components/trades/TradeLandingPage";
import { buildTradePageMetadata } from "@/lib/tradePageMetadata";
import { tradePages } from "@/lib/tradePages";

const page = tradePages.electricians;

export const metadata = buildTradePageMetadata(page);

export default function ForElectriciansPage() {
  return <TradeLandingPage page={page} />;
}
