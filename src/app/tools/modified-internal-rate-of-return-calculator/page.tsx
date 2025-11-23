'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { GenericCalculator } from '@/components/calculators/GenericCalculator';
import { MODIFIED_INTERNAL_RATE_OF_RETURN_CALCULATOR_CONTENT } from '@/content/tools/modified-internal-rate-of-return-calculator';

export default function ModifiedInternalRateOfReturnCalculatorPage() {
  return (
    <CalculatorLayout content={MODIFIED_INTERNAL_RATE_OF_RETURN_CALCULATOR_CONTENT}>
      <GenericCalculator content={MODIFIED_INTERNAL_RATE_OF_RETURN_CALCULATOR_CONTENT} />
    </CalculatorLayout>
  );
}
