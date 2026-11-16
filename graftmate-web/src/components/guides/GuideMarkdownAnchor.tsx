"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { isAppStoreHref } from "@/lib/appStoreLink";
import { trackAppStoreClick } from "@/lib/trackAppStoreClick";

type GuideMarkdownAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
  children?: ReactNode;
};

export function GuideMarkdownAnchor({
  href,
  children,
  onClick,
  ...props
}: GuideMarkdownAnchorProps) {
  if (href?.startsWith("/")) {
    return (
      <Link href={href} onClick={onClick} {...props}>
        {children}
      </Link>
    );
  }

  const appStore = isAppStoreHref(href);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => {
        if (appStore) {
          trackAppStoreClick("guide-content");
        }
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </a>
  );
}