'use client';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { FLOAT_DOWN_RATE_CALCULATOR_CONTENT } from '@/content/tools/float-down-rate-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export default function FloatDownRateCalculatorPage() {
  return (
    <CalculatorLayout content={FLOAT_DOWN_RATE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={FLOAT_DOWN_RATE_CALCULATOR_CONTENT.title}
        slug="float-down-rate-calculator"
        category="Mortgage & Financing"
        description={FLOAT_DOWN_RATE_CALCULATOR_CONTENT.description}
        inputs={FLOAT_DOWN_RATE_CALCULATOR_CONTENT.calculator.fields}
        results={FLOAT_DOWN_RATE_CALCULATOR_CONTENT.calculator.results}
        calculation={FLOAT_DOWN_RATE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
}
