import { GuideArticle } from "@/components/guides/GuideArticle";
import {
  ResourcePageLayout,
  ResourcePageSection,
} from "@/components/resources/ResourcePageLayout";
import {
  articleHeadlineFromBody,
  buildArticleJsonLd,
} from "@/lib/guides/metadata";
import { stripLeadingMarkdownH1 } from "@/lib/guides/stripLeadingMarkdownH1";
import { getResourceHeroVisual } from "@/lib/resourcePageVisuals";

type RelatedLink = {
  href: string;
  label: string;
  description?: string;
};

type GuideArticleLayoutProps = {
  body: string;
  titleTag: string;
  metaDescription: string;
  canonicalPath: string;
  relatedLinks?: RelatedLink[];
};

export function GuideArticleLayout({
  body,
  titleTag,
  metaDescription,
  canonicalPath,
  relatedLinks,
}: GuideArticleLayoutProps) {
  const canonicalUrl = `https://graftmate.net${canonicalPath}`;
  const headline = articleHeadlineFromBody(body) || titleTag;
  const articleBody = stripLeadingMarkdownH1(body);
  const jsonLd = buildArticleJsonLd({
    headline,
    description: metaDescription,
    url: canonicalUrl,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ResourcePageLayout
        eyebrow="Free template"
        title={headline}
        intro={metaDescription}
        heroVisual={getResourceHeroVisual(canonicalPath)}
      >
        <ResourcePageSection variant="narrow">
          <GuideArticle body={articleBody} relatedLinks={relatedLinks} />
        </ResourcePageSection>
      </ResourcePageLayout>
    </>
  );
}
