import { describe, expect, it } from "vitest";
import { indefiniteArticle } from "@/lib/indefiniteArticle";

describe("indefiniteArticle", () => {
  it("uses an before vowel-led trade names", () => {
    expect(indefiniteArticle("electrician")).toBe("an");
  });

  it("uses a before consonant-led trade names", () => {
    expect(indefiniteArticle("plumber")).toBe("a");
    expect(indefiniteArticle("heating & gas engineer")).toBe("a");
  });
});
