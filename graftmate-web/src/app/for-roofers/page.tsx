import { TradeLandingPage } from "@/components/trades/TradeLandingPage";
import { forRoofersPage } from "@/content/for-roofers";
import { buildTradePageMetadata } from "@/lib/tradePageMetadata";

export const metadata = buildTradePageMetadata(forRoofersPage);

export default function ForRoofersPage() {
  return <TradeLandingPage page={forRoofersPage} />;
}
