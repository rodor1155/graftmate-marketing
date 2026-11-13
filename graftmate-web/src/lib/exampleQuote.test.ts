import { describe, expect, it } from "vitest";
import { allTradePages } from "@/lib/tradePageCatalog";
import { validateExampleQuote } from "@/lib/exampleQuote";

describe("trade example quotes", () => {
  it("each trade has unique quote titles", () => {
    const titles = allTradePages.map((page) => page.exampleQuote.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it("VAT and totals add up for every trade", () => {
    const failures: string[] = [];
    for (const page of allTradePages) {
      const errors = validateExampleQuote(page.exampleQuote);
      if (errors.length) {
        failures.push(`${page.slug}: ${errors.join("; ")}`);
      }
    }
    expect(failures).toEqual([]);
  });
});
