import { CommercialPage } from "@/components/sales/CommercialPage";
import { cisInvoiceTemplatePage } from "@/content/cis-invoice-template";
import { buildCommercialMetadata } from "@/lib/commercialPages";

export const metadata = buildCommercialMetadata(cisInvoiceTemplatePage);

export default function CisInvoiceTemplatePage() {
  return <CommercialPage content={cisInvoiceTemplatePage} />;
}
