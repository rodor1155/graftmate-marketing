import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CtaBanner } from "@/components/home/CtaBanner";
import { PROMO_STRIP_TEXT } from "@/lib/promo";

const articleProseClassName =
  "prose-custom text-muted [&_a]:text-secondary [&_a]:underline [&_a]:underline-offset-2 [&_h1]:font-display [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:tracking-tight [&_h1]:text-foreground [&_h1]:sm:text-5xl [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-foreground [&_h2]:sm:text-3xl [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_p]:leading-relaxed [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_li]:leading-relaxed [&_strong]:font-semibold [&_strong]:text-foreground [&_blockquote]:mt-6 [&_blockquote]:border-l-4 [&_blockquote]:border-accent/40 [&_blockquote]:pl-4 [&_blockquote]:text-sm [&_pre]:mt-6 [&_pre]:overflow-x-auto [&_pre]:rounded-md [&_pre]:border [&_pre]:border-border-subtle [&_pre]:bg-surface [&_pre]:p-4 [&_pre]:font-mono [&_pre]:text-sm [&_pre]:leading-relaxed [&_table]:mt-6 [&_table]:w-full [&_table]:min-w-[28rem] [&_table]:border-collapse [&_table]:text-left [&_table]:text-sm [&_th]:border-b [&_th]:border-border-subtle [&_th]:px-3 [&_th]:py-3 [&_th]:font-display [&_th]:font-semibold [&_th]:text-foreground [&_td]:border-b [&_td]:border-border-subtle [&_td]:px-3 [&_td]:py-3";

type RelatedLink = {
  href: string;
  label: string;
  description?: string;
};

type GuideArticleProps = {
  body: string;
  relatedLinks?: RelatedLink[];
};

export function GuideArticle({ body, relatedLinks }: GuideArticleProps) {
  return (
    <div>
      {relatedLinks?.length ? (
        <aside className="mb-10 rounded-md border border-border-subtle bg-surface p-5">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            Related
          </p>
          <ul className="mt-3 space-y-2">
            {relatedLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-display text-base font-semibold text-secondary underline underline-offset-2 hover:text-accent"
                >
                  {link.label}
                </Link>
                {link.description ? (
                  <p className="mt-1 text-sm text-muted-dim">{link.description}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </aside>
      ) : null}

      <div className={articleProseClassName}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            a: ({ href, children, ...props }) => {
              if (href?.startsWith("/")) {
                return (
                  <Link href={href} {...props}>
                    {children}
                  </Link>
                );
              }
              return (
                <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                  {children}
                </a>
              );
            },
          }}
        >
          {body}
        </ReactMarkdown>
      </div>

      <div className="mt-16">
        <CtaBanner
          title="Try GraftMate on your next job"
          description={PROMO_STRIP_TEXT}
          showBrowserNote={false}
        />
      </div>
    </div>
  );
}
