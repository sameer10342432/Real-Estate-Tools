'use client';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { SBA_7A_LOAN_CALCULATOR_CONTENT } from '@/content/tools/sba-7a-loan-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export default function SBA7aLoanCalculatorPage() {
  return (
    <CalculatorLayout content={SBA_7A_LOAN_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={SBA_7A_LOAN_CALCULATOR_CONTENT.title}
        slug="sba-7a-loan-calculator"
        category="Commercial Real Estate"
        description={SBA_7A_LOAN_CALCULATOR_CONTENT.description}
        inputs={SBA_7A_LOAN_CALCULATOR_CONTENT.calculator.fields}
        results={SBA_7A_LOAN_CALCULATOR_CONTENT.calculator.results}
        calculation={SBA_7A_LOAN_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
}
