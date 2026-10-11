import { TradeLandingPage } from "@/components/trades/TradeLandingPage";
import { forKitchenBathroomFittersPage } from "@/content/for-kitchen-bathroom-fitters";
import { buildTradePageMetadata } from "@/lib/tradePageMetadata";

export const metadata = buildTradePageMetadata(forKitchenBathroomFittersPage);

export default function ForKitchenBathroomFittersPage() {
  return <TradeLandingPage page={forKitchenBathroomFittersPage} />;
}
