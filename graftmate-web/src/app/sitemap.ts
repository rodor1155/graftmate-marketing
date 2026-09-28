import type { MetadataRoute } from "next";
import { tradePageLinks } from "@/lib/tradePages";

const staticRoutes = [
  "",
  "/features",
  "/pricing",
  "/terms",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `https://graftmate.net${route}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...tradePageLinks.map((link) => ({
      url: `https://graftmate.net${link.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
