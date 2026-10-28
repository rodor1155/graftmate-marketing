export type CisRate = 0 | 0.2 | 0.3;

export type CisCalculatorInput = {
  grossAmount: number;
  materialsCost: number;
  vatAmount: number;
  rate: CisRate;
};

export type CisCalculatorResult = {
  deductionBasis: number;
  deduction: number;
  netPayment: number;
  vatAmount: number;
};

/**
 * HMRC method: VAT and materials come off the gross amount before the CIS
 * rate is applied. VAT is never part of the deduction calculation and is
 * always paid on top. https://www.gov.uk/what-you-must-do-as-a-cis-contractor/make-deductions-and-pay-subcontractors
 */
export function calculateCisDeduction({
  grossAmount,
  materialsCost,
  vatAmount,
  rate,
}: CisCalculatorInput): CisCalculatorResult {
  const deductionBasis = Math.max(grossAmount - materialsCost, 0);
  const deduction = roundToPence(deductionBasis * rate);
  const netPayment = roundToPence(grossAmount - deduction + vatAmount);

  return {
    deductionBasis: roundToPence(deductionBasis),
    deduction,
    netPayment,
    vatAmount: roundToPence(vatAmount),
  };
}

function roundToPence(value: number): number {
  return Math.round(value * 100) / 100;
}
