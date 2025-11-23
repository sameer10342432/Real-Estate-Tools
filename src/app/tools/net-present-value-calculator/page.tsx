'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { GenericCalculator } from '@/components/calculators/GenericCalculator';
import { NET_PRESENT_VALUE_CALCULATOR_CONTENT } from '@/content/tools/net-present-value-calculator';

export default function NetPresentValueCalculatorPage() {
  return (
    <CalculatorLayout content={NET_PRESENT_VALUE_CALCULATOR_CONTENT}>
      <GenericCalculator content={NET_PRESENT_VALUE_CALCULATOR_CONTENT} />
    </CalculatorLayout>
  );
}
