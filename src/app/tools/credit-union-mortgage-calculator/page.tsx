'use client';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CREDIT_UNION_MORTGAGE_CALCULATOR_CONTENT } from '@/content/tools/credit-union-mortgage-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export default function CreditUnionMortgageCalculatorPage() {
  return (
    <CalculatorLayout content={CREDIT_UNION_MORTGAGE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CREDIT_UNION_MORTGAGE_CALCULATOR_CONTENT.title}
        slug="credit-union-mortgage-calculator"
        category="Basic Calculators"
        description={CREDIT_UNION_MORTGAGE_CALCULATOR_CONTENT.description}
        inputs={CREDIT_UNION_MORTGAGE_CALCULATOR_CONTENT.calculator.fields}
        results={CREDIT_UNION_MORTGAGE_CALCULATOR_CONTENT.calculator.results}
        calculation={CREDIT_UNION_MORTGAGE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
}
