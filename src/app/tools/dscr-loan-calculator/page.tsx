'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { DSCR_LOAN_CALCULATOR_CONTENT } from '@/content/tools/dscr-loan-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import type { Metadata } from 'next';

export default function DSCRLoanCalculatorPage() {
  return (
    <CalculatorLayout content={DSCR_LOAN_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={DSCR_LOAN_CALCULATOR_CONTENT.title}
        slug="dscr-loan-calculator"
        category="Investment Analysis"
        description={DSCR_LOAN_CALCULATOR_CONTENT.description}
        inputs={DSCR_LOAN_CALCULATOR_CONTENT.calculator.fields}
        results={DSCR_LOAN_CALCULATOR_CONTENT.calculator.results}
        calculation={DSCR_LOAN_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
}
