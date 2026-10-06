import type { Metadata } from "next";
import type { TradePageData } from "@/lib/tradePages";

export function buildTradePageMetadata(page: TradePageData): Metadata {
  const canonical = `https://graftmate.net${page.route}`;

  return {
    title: {
      absolute: page.title,
    },
    description: page.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: canonical,
      type: "website",
      locale: "en_GB",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${page.tradePlural} quoting software — GraftMate`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: ["/og-image.png"],
    },
  };
}
