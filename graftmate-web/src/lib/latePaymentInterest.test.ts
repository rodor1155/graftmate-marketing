import { describe, expect, it } from "vitest";
import {
  calculateLatePaymentClaim,
  getDaysLate,
  getFixedRecoverySum,
} from "@/lib/latePaymentInterest";

describe("getFixedRecoverySum", () => {
  it("is £40 for debts under £1,000", () => {
    expect(getFixedRecoverySum(999.99)).toBe(40);
  });

  it("is £70 from £1,000 up to £9,999.99", () => {
    expect(getFixedRecoverySum(1000)).toBe(70);
    expect(getFixedRecoverySum(9999.99)).toBe(70);
  });

  it("is £100 from £10,000", () => {
    expect(getFixedRecoverySum(10000)).toBe(100);
  });
});

describe("getDaysLate", () => {
  it("counts whole days between due date and payment date", () => {
    const due = new Date("2026-01-01T00:00:00Z");
    const paid = new Date("2026-01-31T00:00:00Z");
    expect(getDaysLate(due, paid)).toBe(30);
  });

  it("never goes below zero when paid on or before the due date", () => {
    const due = new Date("2026-01-31T00:00:00Z");
    const paid = new Date("2026-01-01T00:00:00Z");
    expect(getDaysLate(due, paid)).toBe(0);
  });
});

describe("calculateLatePaymentClaim", () => {
  it("matches the GOV.UK-style worked example: £1,000 at 4% base for 30 days", () => {
    const result = calculateLatePaymentClaim({
      debtAmount: 1000,
      baseRatePercent: 4,
      daysLate: 30,
    });

    expect(result.statutoryInterestRatePercent).toBe(12);
    expect(result.totalInterest).toBe(9.86);
    expect(result.fixedRecoverySum).toBe(70);
    expect(result.totalClaimable).toBe(79.86);
  });

  it("returns zero interest when not yet late", () => {
    const result = calculateLatePaymentClaim({
      debtAmount: 500,
      baseRatePercent: 4,
      daysLate: 0,
    });

    expect(result.totalInterest).toBe(0);
    expect(result.fixedRecoverySum).toBe(40);
    expect(result.totalClaimable).toBe(40);
  });
});
