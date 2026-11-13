import { describe, expect, it } from "vitest";
import { getTestimonialsForTrade } from "@/lib/testimonials";

describe("getTestimonialsForTrade", () => {
  it("returns nothing when the testimonials file is empty", () => {
    expect(getTestimonialsForTrade()).toEqual([]);
    expect(getTestimonialsForTrade("plumbers")).toEqual([]);
  });
});
