export type GuideRegistryEntry = {
  slug: string;
  markdownPath: string;
  /** Short title for the guides index (derived from content H1 when omitted). */
  indexTitle?: string;
};

export const guideRegistry: GuideRegistryEntry[] = [
  {
    slug: "how-to-write-a-quote",
    markdownPath: "guides/how-to-write-a-quote.md",
  },
  {
    slug: "cis-invoice-example",
    markdownPath: "guides/cis-invoice-example.md",
  },
];

export const CIS_INVOICE_TEMPLATE_MARKDOWN_PATH = "cis-invoice-template.md";

export function getGuideBySlug(slug: string): GuideRegistryEntry | undefined {
  return guideRegistry.find((entry) => entry.slug === slug);
}

export function getGuideRoute(slug: string): string {
  return `/guides/${slug}`;
}
