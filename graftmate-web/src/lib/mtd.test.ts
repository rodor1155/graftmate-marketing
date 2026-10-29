import { describe, expect, it } from "vitest";
import { checkMtdRequirement } from "./mtd";

describe("checkMtdRequirement", () => {
  it("requires MTD from 6 April 2026 when qualifying income is £50,001", () => {
    expect(checkMtdRequirement(50001)).toEqual({
      required: true,
      startDate: "6 April 2026",
      thresholdLabel: "over £50,000",
    });
  });

  it("requires MTD from 6 April 2027 when qualifying income is exactly £50,000", () => {
    expect(checkMtdRequirement(50000)).toEqual({
      required: true,
      startDate: "6 April 2027",
      thresholdLabel: "over £30,000",
    });
  });

  it("requires MTD from 6 April 2027 when qualifying income is £30,001", () => {
    expect(checkMtdRequirement(30001)).toEqual({
      required: true,
      startDate: "6 April 2027",
      thresholdLabel: "over £30,000",
    });
  });

  it("requires MTD from 6 April 2028 when qualifying income is £20,001", () => {
    expect(checkMtdRequirement(20001)).toEqual({
      required: true,
      startDate: "6 April 2028",
      thresholdLabel: "over £20,000",
    });
  });

  it("does not require MTD when qualifying income is exactly £20,000", () => {
    expect(checkMtdRequirement(20000)).toEqual({ required: false });
  });
});
