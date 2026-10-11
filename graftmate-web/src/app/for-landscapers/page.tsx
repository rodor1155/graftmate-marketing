import { TradeLandingPage } from "@/components/trades/TradeLandingPage";
import { forLandscapersPage } from "@/content/for-landscapers";
import { buildTradePageMetadata } from "@/lib/tradePageMetadata";

export const metadata = buildTradePageMetadata(forLandscapersPage);

export default function ForLandscapersPage() {
  return <TradeLandingPage page={forLandscapersPage} />;
}
