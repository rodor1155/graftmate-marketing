import { TradeLandingPage } from "@/components/trades/TradeLandingPage";
import { forPlasterersPage } from "@/content/for-plasterers";
import { buildTradePageMetadata } from "@/lib/tradePageMetadata";

export const metadata = buildTradePageMetadata(forPlasterersPage);

export default function ForPlasterersPage() {
  return <TradeLandingPage page={forPlasterersPage} />;
}
