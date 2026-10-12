import type { Metadata } from "next";
import Link from "next/link";
import { loadGuideByPath } from "@/lib/guides/loadGuideContent";
import {
  getGuideRoute,
  guideRegistry,
} from "@/lib/guides/registry";

const ROUTE = "/guides";

export const metadata: Metadata = {
  title: { absolute: "Guides for UK Trades | GraftMate" },
  description:
    "Practical guides on quoting, CIS invoicing, and getting paid as a UK tradesperson.",
  alternates: { canonical: `https://graftmate.net${ROUTE}` },
  openGraph: {
    title: "Guides for UK Trades | GraftMate",
    description:
      "Practical guides on quoting, CIS invoicing, and getting paid as a UK tradesperson.",
    url: `https://graftmate.net${ROUTE}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GraftMate guides for UK trades",
      },
    ],
  },
};

function guideIndexTitle(body: string): string {
  const match = body.match(/^#\s+(.+)$/m);
  return match?.[1]?.trim() ?? "Guide";
}

export default function GuidesIndexPage() {
  const guides = guideRegistry.map((entry) => {
    const loaded = loadGuideByPath(entry.markdownPath);
    return {
      slug: entry.slug,
      href: getGuideRoute(entry.slug),
      title: entry.indexTitle ?? guideIndexTitle(loaded.body),
      description: loaded.metaDescription,
    };
  });

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Guides
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-muted">
        Step-by-step resources for UK tradespeople on quoting, invoicing, and
        CIS paperwork.
      </p>

      <ul className="mt-12 space-y-6">
        {guides.map((guide) => (
          <li key={guide.slug}>
            <article className="graftmate-card p-6 transition-colors hover:border-accent/30">
              <h2 className="font-display text-xl font-semibold text-foreground">
                <Link
                  href={guide.href}
                  className="text-secondary underline-offset-2 hover:text-accent hover:underline"
                >
                  {guide.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {guide.description}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
