'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { GenericCalculator } from '@/components/calculators/GenericCalculator';
import { SORTINO_RATIO_REAL_ESTATE_CALCULATOR_CONTENT } from '@/content/tools/sortino-ratio-real-estate-calculator';

export default function SortinoRatioRealEstateCalculatorPage() {
  return (
    <CalculatorLayout content={SORTINO_RATIO_REAL_ESTATE_CALCULATOR_CONTENT}>
      <GenericCalculator content={SORTINO_RATIO_REAL_ESTATE_CALCULATOR_CONTENT} />
    </CalculatorLayout>
  );
}
