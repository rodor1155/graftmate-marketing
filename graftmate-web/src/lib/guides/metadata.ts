import type { Metadata } from "next";

const SITE_ORIGIN = "https://graftmate.net";

export function buildGuidePageMetadata(params: {
  route: string;
  titleTag: string;
  metaDescription: string;
}): Metadata {
  const canonical = `${SITE_ORIGIN}${params.route}`;
  return {
    title: { absolute: params.titleTag },
    description: params.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: params.titleTag,
      description: params.metaDescription,
      url: canonical,
      type: "article",
      locale: "en_GB",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: params.titleTag,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: params.titleTag,
      description: params.metaDescription,
      images: ["/og-image.png"],
    },
  };
}

export function articleHeadlineFromBody(body: string): string {
  const match = body.match(/^#\s+(.+)$/m);
  return match?.[1]?.trim() ?? "";
}

export function buildArticleJsonLd(params: {
  headline: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.headline,
    description: params.description,
    inLanguage: "en-GB",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": params.url,
    },
    author: {
      "@type": "Organization",
      name: "GraftMate",
    },
    publisher: {
      "@type": "Organization",
      name: "GraftMate",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_ORIGIN}/logo.png`,
      },
    },
  };
}
