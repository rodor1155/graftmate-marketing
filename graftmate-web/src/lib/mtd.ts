export type MtdCheckResult =
  | { required: true; startDate: string; thresholdLabel: string }
  | { required: false };

/**
 * Thresholds follow HMRC's phased rollout of Making Tax Digital for Income Tax,
 * based on qualifying income (self-employment + property turnover, before expenses).
 */
export function checkMtdRequirement(qualifyingIncome: number): MtdCheckResult {
  if (qualifyingIncome > 50000) {
    return {
      required: true,
      startDate: "6 April 2026",
      thresholdLabel: "over £50,000",
    };
  }

  if (qualifyingIncome > 30000) {
    return {
      required: true,
      startDate: "6 April 2027",
      thresholdLabel: "over £30,000",
    };
  }

  if (qualifyingIncome > 20000) {
    return {
      required: true,
      startDate: "6 April 2028",
      thresholdLabel: "over £20,000",
    };
  }

  return { required: false };
}
