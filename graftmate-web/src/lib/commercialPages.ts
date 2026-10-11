import type { Metadata } from "next";

export type CommercialPageSection = {
  id: string;
  variant?: "default" | "surface";
  title?: string;
  body?: string[];
  bullets?: string[];
  downloads?: {
    label: string;
    href: string;
    placeholder?: boolean;
  }[];
  note?: string;
  comparisonRows?: {
    headers: [string, string, string];
    rows: {
      label: string;
      graftmate: string;
      other: string;
    }[];
  };
};

export type CommercialPageContent = {
  route: string;
  title: string;
  description: string;
  eyebrow?: string;
  heroTitle: string;
  heroSubtitle: string;
  primaryCtaLabel?: string;
  sections: CommercialPageSection[];
  faqs?: { question: string; answer: string }[];
  closingTitle?: string;
  closingCopy?: string;
};

export function buildCommercialMetadata(page: CommercialPageContent): Metadata {
  const canonical = `https://graftmate.net${page.route}`;
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical },
    openGraph: {
      title: page.title,
      description: page.description,
      url: canonical,
      type: "website" as const,
      locale: "en_GB",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: page.title,
      description: page.description,
      images: ["/og-image.png"],
    },
  };
}
