'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { GenericCalculator } from '@/components/calculators/GenericCalculator';
import { TREYNOR_RATIO_REAL_ESTATE_CALCULATOR_CONTENT } from '@/content/tools/treynor-ratio-real-estate-calculator';

export default function TreynorRatioRealEstateCalculatorPage() {
  return (
    <CalculatorLayout content={TREYNOR_RATIO_REAL_ESTATE_CALCULATOR_CONTENT}>
      <GenericCalculator content={TREYNOR_RATIO_REAL_ESTATE_CALCULATOR_CONTENT} />
    </CalculatorLayout>
  );
}
