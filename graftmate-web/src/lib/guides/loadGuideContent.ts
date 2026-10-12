import fs from "fs";
import path from "path";
import { cache } from "react";
import { parseGuideMarkdown, type ParsedGuideMarkdown } from "@/lib/guides/parseGuideMarkdown";

export type LoadedGuide = ParsedGuideMarkdown & {
  markdownPath: string;
};

function readGuideFile(relativePath: string): LoadedGuide {
  const fullPath = path.join(process.cwd(), "src/content", relativePath);
  const raw = fs.readFileSync(fullPath, "utf8");
  const parsed = parseGuideMarkdown(raw);
  return { ...parsed, markdownPath: relativePath };
}

export const loadGuideByPath = cache(readGuideFile);
