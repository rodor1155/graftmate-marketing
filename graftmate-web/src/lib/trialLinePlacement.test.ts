import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { TRIAL_LINE_SNIPPET } from "@/lib/promo";

const webRoot = join(import.meta.dirname, "..");

function readSrc(relativePath: string): string {
  return readFileSync(join(webRoot, relativePath), "utf8");
}

function countTrialMentions(source: string): number {
  const re = new RegExp(TRIAL_LINE_SNIPPET.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
  return [...source.matchAll(re)].length;
}

describe("trial line placement (max two visible mentions: banner + pricing card or closing CTA)", () => {
  it("does not repeat the trial line in the homepage hero, CTA, and pricing teaser", () => {
    expect(readSrc("components/home/Hero.tsx")).not.toContain("PricingHighlightLine");
    expect(readSrc("components/home/CtaBanner.tsx")).not.toMatch(/14-day free trial/i);

    expect(readSrc("components/home/PricingTeaser.tsx")).toContain(
      "PricingHighlightLine",
    );
  });

  it("keeps resource heroes free of PricingHighlightLine", () => {
    expect(readSrc("components/resources/ResourcePageLayout.tsx")).not.toContain(
      "PricingHighlightLine",
    );
  });

  it("limits tradify alternative mid-page copy to one plan blurb without a second trial line", () => {
    const content = readSrc("content/tradify-alternative.ts");
    expect(content).not.toContain("CONTENT_PRICING_COPY");
    expect(countTrialMentions(content)).toBeLessThanOrEqual(2);
  });
});
