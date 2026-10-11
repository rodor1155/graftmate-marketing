import { TradeLandingPage } from "@/components/trades/TradeLandingPage";
import { forPaintersDecoratorsPage } from "@/content/for-painters-decorators";
import { buildTradePageMetadata } from "@/lib/tradePageMetadata";

export const metadata = buildTradePageMetadata(forPaintersDecoratorsPage);

export default function ForPaintersDecoratorsPage() {
  return <TradeLandingPage page={forPaintersDecoratorsPage} />;
}
