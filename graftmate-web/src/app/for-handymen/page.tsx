import { TradeLandingPage } from "@/components/trades/TradeLandingPage";
import { forHandymenPage } from "@/content/for-handymen";
import { buildTradePageMetadata } from "@/lib/tradePageMetadata";

export const metadata = buildTradePageMetadata(forHandymenPage);

export default function ForHandymenPage() {
  return <TradeLandingPage page={forHandymenPage} />;
}
