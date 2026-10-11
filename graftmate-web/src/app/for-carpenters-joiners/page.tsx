import { TradeLandingPage } from "@/components/trades/TradeLandingPage";
import { forCarpentersJoinersPage } from "@/content/for-carpenters-joiners";
import { buildTradePageMetadata } from "@/lib/tradePageMetadata";

export const metadata = buildTradePageMetadata(forCarpentersJoinersPage);

export default function ForCarpentersJoinersPage() {
  return <TradeLandingPage page={forCarpentersJoinersPage} />;
}
