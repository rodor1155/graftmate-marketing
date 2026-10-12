import { GuideArticle } from "@/components/guides/GuideArticle";
import {
  articleHeadlineFromBody,
  buildArticleJsonLd,
} from "@/lib/guides/metadata";

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
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <GuideArticle body={body} relatedLinks={relatedLinks} />
      </div>
    </>
  );
}
