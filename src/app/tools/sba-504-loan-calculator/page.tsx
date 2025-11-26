'use client';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { SBA_504_LOAN_CALCULATOR_CONTENT } from '@/content/tools/sba-504-loan-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export default function SBA504LoanCalculatorPage() {
  return (
    <CalculatorLayout content={SBA_504_LOAN_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={SBA_504_LOAN_CALCULATOR_CONTENT.title}
        slug="sba-504-loan-calculator"
        category="Commercial Real Estate"
        description={SBA_504_LOAN_CALCULATOR_CONTENT.description}
        inputs={SBA_504_LOAN_CALCULATOR_CONTENT.calculator.fields}
        results={SBA_504_LOAN_CALCULATOR_CONTENT.calculator.results}
        calculation={SBA_504_LOAN_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
}
