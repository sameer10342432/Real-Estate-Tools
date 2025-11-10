
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Loan-to-Value (LTV) Calculator',
    description: 'Calculate your LTV ratio to determine equity and PMI requirements. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { LOAN_TO_VALUE_CALCULATOR_CONTENT } from '@/content/tools/loan-to-value-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const LoanToValueCalculatorPage = () => {
  return (
    <CalculatorLayout content={LOAN_TO_VALUE_CALCULATOR_CONTENT}>
            <EnhancedCalculator
        title={LOAN_TO_VALUE_CALCULATOR_CONTENT.title}
        slug="loan-to-value-calculator"
        category="Real Estate"
        description={LOAN_TO_VALUE_CALCULATOR_CONTENT.description}
        inputs={LOAN_TO_VALUE_CALCULATOR_CONTENT.calculator.fields}
        results={LOAN_TO_VALUE_CALCULATOR_CONTENT.calculator.results}
        calculation={LOAN_TO_VALUE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default LoanToValueCalculatorPage;