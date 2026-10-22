import { describe, expect, it } from "vitest";
import { calculateCisDeduction } from "./cisCalculator";

describe("calculateCisDeduction", () => {
  const base = { grossAmount: 2567, materialsCost: 367, vatAmount: 0 };

  it("deducts 20% for a CIS-registered subcontractor", () => {
    const result = calculateCisDeduction({ ...base, rate: 0.2 });

    expect(result.deductionBasis).toBe(2200);
    expect(result.deduction).toBe(440);
    expect(result.netPayment).toBe(2127);
  });

  it("deducts 30% for an unregistered subcontractor", () => {
    const result = calculateCisDeduction({ ...base, rate: 0.3 });

    expect(result.deduction).toBe(660);
    expect(result.netPayment).toBe(1907);
  });

  it("deducts nothing for gross payment status", () => {
    const result = calculateCisDeduction({ ...base, rate: 0 });

    expect(result.deduction).toBe(0);
    expect(result.netPayment).toBe(2567);
  });

  it("pays VAT on top without including it in the deduction", () => {
    const result = calculateCisDeduction({
      grossAmount: 1000,
      materialsCost: 0,
      vatAmount: 200,
      rate: 0.2,
    });

    expect(result.deduction).toBe(200);
    expect(result.netPayment).toBe(1000);
    expect(result.vatAmount).toBe(200);
  });
});
