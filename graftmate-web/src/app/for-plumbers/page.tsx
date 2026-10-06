import { TradeLandingPage } from "@/components/trades/TradeLandingPage";
import { buildTradePageMetadata } from "@/lib/tradePageMetadata";
import { tradePages } from "@/lib/tradePages";

const page = tradePages.plumbers;

export const metadata = buildTradePageMetadata(page);

export default function ForPlumbersPage() {
  return <TradeLandingPage page={page} />;
}
