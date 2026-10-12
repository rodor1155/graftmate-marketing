import type { MetadataRoute } from "next";
import { getGuideRoute, guideRegistry } from "@/lib/guides/registry";
import { resourcePageLinks, tradePageLinks } from "@/lib/tradePageCatalog";

const guideRoutes = guideRegistry.map((entry) => getGuideRoute(entry.slug));

const staticRoutes = [
  "",
  "/features",
  "/pricing",
  "/terms",
  "/privacy",
  ...resourcePageLinks.map((link) => link.href),
  ...guideRoutes.filter(
    (route) => !resourcePageLinks.some((link) => link.href === route),
  ),
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
