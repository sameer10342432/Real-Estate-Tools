'use client';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CREDIT_RE_AGE_CALCULATOR_CONTENT } from '@/content/tools/credit-re-age-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export default function CreditReAgeCalculatorPage() {
  return (
    <CalculatorLayout content={CREDIT_RE_AGE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CREDIT_RE_AGE_CALCULATOR_CONTENT.title}
        slug="credit-re-age-calculator"
        category="Financial Planning"
        description={CREDIT_RE_AGE_CALCULATOR_CONTENT.description}
        inputs={CREDIT_RE_AGE_CALCULATOR_CONTENT.calculator.fields}
        results={CREDIT_RE_AGE_CALCULATOR_CONTENT.calculator.results}
        calculation={CREDIT_RE_AGE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
}
