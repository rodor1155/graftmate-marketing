import { describe, expect, it } from "vitest";
import { homeSequenceQuote } from "@/content/homeQuoteSequence";
import { validateExampleQuote } from "@/lib/exampleQuote";

describe("home quote sequence mock", () => {
  it("has consistent UK VAT figures", () => {
    expect(validateExampleQuote(homeSequenceQuote)).toEqual([]);
  });
});
