'use client';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { RATE_LOCK_IN_CALCULATOR_CONTENT } from '@/content/tools/rate-lock-in-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export default function RateLockInCalculatorPage() {
  return (
    <CalculatorLayout content={RATE_LOCK_IN_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={RATE_LOCK_IN_CALCULATOR_CONTENT.title}
        slug="rate-lock-in-calculator"
        category="Mortgage & Financing"
        description={RATE_LOCK_IN_CALCULATOR_CONTENT.description}
        inputs={RATE_LOCK_IN_CALCULATOR_CONTENT.calculator.fields}
        results={RATE_LOCK_IN_CALCULATOR_CONTENT.calculator.results}
        calculation={RATE_LOCK_IN_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
}
