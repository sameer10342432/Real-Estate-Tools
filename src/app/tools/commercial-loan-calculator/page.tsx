'use client';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { COMMERCIAL_LOAN_CALCULATOR_CONTENT } from '@/content/tools/commercial-loan-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export default function CommercialLoanCalculatorPage() {
  return (
    <CalculatorLayout content={COMMERCIAL_LOAN_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={COMMERCIAL_LOAN_CALCULATOR_CONTENT.title}
        slug="commercial-loan-calculator"
        category="Commercial Real Estate"
        description={COMMERCIAL_LOAN_CALCULATOR_CONTENT.description}
        inputs={COMMERCIAL_LOAN_CALCULATOR_CONTENT.calculator.fields}
        results={COMMERCIAL_LOAN_CALCULATOR_CONTENT.calculator.results}
        calculation={COMMERCIAL_LOAN_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
}
