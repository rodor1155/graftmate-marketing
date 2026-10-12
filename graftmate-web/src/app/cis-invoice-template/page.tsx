import { GuideArticleLayout } from "@/components/guides/GuideArticleLayout";
import { loadGuideByPath } from "@/lib/guides/loadGuideContent";
import { buildGuidePageMetadata } from "@/lib/guides/metadata";
import {
  CIS_INVOICE_TEMPLATE_MARKDOWN_PATH,
  getGuideRoute,
} from "@/lib/guides/registry";

const ROUTE = "/cis-invoice-template";

const guide = loadGuideByPath(CIS_INVOICE_TEMPLATE_MARKDOWN_PATH);

export const metadata = buildGuidePageMetadata({
  route: ROUTE,
  titleTag: guide.titleTag,
  metaDescription: guide.metaDescription,
});

export default function CisInvoiceTemplatePage() {
  return (
    <GuideArticleLayout
      body={guide.body}
      titleTag={guide.titleTag}
      metaDescription={guide.metaDescription}
      canonicalPath={ROUTE}
      relatedLinks={[
        {
          href: getGuideRoute("cis-invoice-example"),
          label: "CIS invoice example: what to include and how deductions work",
          description:
            "A worked CIS invoice with labour vs materials and reverse charge notes.",
        },
      ]}
    />
  );
}
