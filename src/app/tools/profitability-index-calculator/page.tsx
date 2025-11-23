'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { GenericCalculator } from '@/components/calculators/GenericCalculator';
import { PROFITABILITY_INDEX_CALCULATOR_CONTENT } from '@/content/tools/profitability-index-calculator';

export default function ProfitabilityIndexCalculatorPage() {
  return (
    <CalculatorLayout content={PROFITABILITY_INDEX_CALCULATOR_CONTENT}>
      <GenericCalculator content={PROFITABILITY_INDEX_CALCULATOR_CONTENT} />
    </CalculatorLayout>
  );
}
