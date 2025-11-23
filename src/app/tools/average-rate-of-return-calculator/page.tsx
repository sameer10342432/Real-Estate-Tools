'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { GenericCalculator } from '@/components/calculators/GenericCalculator';
import { AVERAGE_RATE_OF_RETURN_CALCULATOR_CONTENT } from '@/content/tools/average-rate-of-return-calculator';

export default function AverageRateOfReturnCalculatorPage() {
  return (
    <CalculatorLayout content={AVERAGE_RATE_OF_RETURN_CALCULATOR_CONTENT}>
      <GenericCalculator content={AVERAGE_RATE_OF_RETURN_CALCULATOR_CONTENT} />
    </CalculatorLayout>
  );
}
