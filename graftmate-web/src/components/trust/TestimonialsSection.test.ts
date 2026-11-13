import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import {
  TestimonialsSection,
  TestimonialsSectionContent,
} from "@/components/trust/TestimonialsSection";

describe("TestimonialsSection", () => {
  it("renders nothing when testimonials are empty", () => {
    const markup = renderToStaticMarkup(createElement(TestimonialsSection));
    expect(markup).toBe("");
  });

  it("renders nothing when given an empty entries list", () => {
    const markup = renderToStaticMarkup(
      createElement(TestimonialsSectionContent, { entries: [] }),
    );
    expect(markup).toBe("");
  });

  it("renders entries when testimonials are present", () => {
    const markup = renderToStaticMarkup(
      createElement(TestimonialsSectionContent, {
        entries: [
          {
            body: "Quotes go out the same day now.",
            attribution: "Example Customer",
            detail: "Plumber, Leeds",
            trades: ["plumbers"],
          },
        ],
      }),
    );
    expect(markup).toContain("Quotes go out the same day now.");
    expect(markup).toContain("Example Customer");
    expect(markup).toContain("Trusted by UK trades");
  });
});
