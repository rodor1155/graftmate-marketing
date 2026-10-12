import { notFound } from "next/navigation";
import { GuideArticleLayout } from "@/components/guides/GuideArticleLayout";
import { loadGuideByPath } from "@/lib/guides/loadGuideContent";
import { buildGuidePageMetadata } from "@/lib/guides/metadata";
import {
  getGuideBySlug,
  getGuideRoute,
  guideRegistry,
} from "@/lib/guides/registry";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guideRegistry.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: GuidePageProps) {
  const { slug } = await params;
  const entry = getGuideBySlug(slug);
  if (!entry) {
    return {};
  }
  const guide = loadGuideByPath(entry.markdownPath);
  return buildGuidePageMetadata({
    route: getGuideRoute(slug),
    titleTag: guide.titleTag,
    metaDescription: guide.metaDescription,
  });
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const entry = getGuideBySlug(slug);
  if (!entry) {
    notFound();
  }

  const guide = loadGuideByPath(entry.markdownPath);
  const route = getGuideRoute(slug);

  const relatedLinks =
    slug === "cis-invoice-example"
      ? [
          {
            href: "/cis-invoice-template",
            label: "CIS invoice template for UK subcontractors",
            description:
              "Copyable template with UTR, labour and materials split, and reverse charge wording.",
          },
        ]
      : undefined;

  return (
    <GuideArticleLayout
      body={guide.body}
      titleTag={guide.titleTag}
      metaDescription={guide.metaDescription}
      canonicalPath={route}
      relatedLinks={relatedLinks}
    />
  );
}
