import { CommercialPage } from "@/components/sales/CommercialPage";
import { tradifyAlternativePage } from "@/content/tradify-alternative";
import { buildCommercialMetadata } from "@/lib/commercialPages";

export const metadata = buildCommercialMetadata(tradifyAlternativePage);

export default function TradifyAlternativePage() {
  return <CommercialPage content={tradifyAlternativePage} />;
}
