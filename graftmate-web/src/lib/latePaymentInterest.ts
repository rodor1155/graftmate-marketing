/**
 * Statutory interest on late commercial payments, per
 * https://www.gov.uk/late-commercial-payments-interest-debt-recovery
 */

/** Bank of England base rate used to prefill the calculator. Update the value and date when it changes. */
export const BOE_BASE_RATE = {
  ratePercent: 3.75,
  asOf: "2026-09-17",
};

export const STATUTORY_INTEREST_MARGIN_PERCENT = 8;

export function getStatutoryInterestRatePercent(baseRatePercent: number): number {
  return baseRatePercent + STATUTORY_INTEREST_MARGIN_PERCENT;
}

/** Fixed recovery sum GOV.UK allows once per invoice, based on the debt amount. */
export function getFixedRecoverySum(debtAmount: number): number {
  if (debtAmount < 1000) return 40;
  if (debtAmount < 10000) return 70;
  return 100;
}

/** Whole days between the due date and the payment date, floored at zero. */
export function getDaysLate(dueDate: Date, paymentDate: Date): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  const due = Date.UTC(dueDate.getUTCFullYear(), dueDate.getUTCMonth(), dueDate.getUTCDate());
  const paid = Date.UTC(
    paymentDate.getUTCFullYear(),
    paymentDate.getUTCMonth(),
    paymentDate.getUTCDate(),
  );
  return Math.max(0, Math.round((paid - due) / msPerDay));
}

function roundToPence(amount: number): number {
  return Math.round(amount * 100) / 100;
}

export type LatePaymentClaim = {
  daysLate: number;
  statutoryInterestRatePercent: number;
  dailyInterest: number;
  totalInterest: number;
  fixedRecoverySum: number;
  totalClaimable: number;
};

export function calculateLatePaymentClaim({
  debtAmount,
  baseRatePercent,
  daysLate,
}: {
  debtAmount: number;
  baseRatePercent: number;
  daysLate: number;
}): LatePaymentClaim {
  const statutoryInterestRatePercent = getStatutoryInterestRatePercent(baseRatePercent);
  const dailyInterest = (debtAmount * (statutoryInterestRatePercent / 100)) / 365;
  const totalInterest = dailyInterest * daysLate;
  const fixedRecoverySum = getFixedRecoverySum(debtAmount);

  return {
    daysLate,
    statutoryInterestRatePercent,
    dailyInterest: roundToPence(dailyInterest),
    totalInterest: roundToPence(totalInterest),
    fixedRecoverySum,
    totalClaimable: roundToPence(totalInterest + fixedRecoverySum),
  };
}
