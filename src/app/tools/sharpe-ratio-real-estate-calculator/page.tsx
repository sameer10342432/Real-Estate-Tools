'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { GenericCalculator } from '@/components/calculators/GenericCalculator';
import { SHARPE_RATIO_REAL_ESTATE_CALCULATOR_CONTENT } from '@/content/tools/sharpe-ratio-real-estate-calculator';

export default function SharpeRatioRealEstateCalculatorPage() {
  return (
    <CalculatorLayout content={SHARPE_RATIO_REAL_ESTATE_CALCULATOR_CONTENT}>
      <GenericCalculator content={SHARPE_RATIO_REAL_ESTATE_CALCULATOR_CONTENT} />
    </CalculatorLayout>
  );
}
