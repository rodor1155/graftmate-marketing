import { CommercialPage } from "@/components/sales/CommercialPage";
import { invoiceAppForTradesmenPage } from "@/content/invoice-app-for-tradesmen";
import { buildCommercialMetadata } from "@/lib/commercialPages";

export const metadata = buildCommercialMetadata(invoiceAppForTradesmenPage);

export default function InvoiceAppForTradesmenPage() {
  return <CommercialPage content={invoiceAppForTradesmenPage} />;
}
