import { TradeLandingPage } from "@/components/trades/TradeLandingPage";
import { buildTradePageMetadata } from "@/lib/tradePageMetadata";
import { tradePages } from "@/lib/tradePages";

const page = tradePages.heatingGas;

export const metadata = buildTradePageMetadata(page);

export default function ForHeatingGasEngineersPage() {
  return <TradeLandingPage page={page} />;
}
