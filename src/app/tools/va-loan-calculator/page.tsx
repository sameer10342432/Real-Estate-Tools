
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'VA Loan Calculator',
    description: 'Calculate VA loan payments with zero down for veterans and military. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { VA_LOAN_CALCULATOR_CONTENT } from '@/content/tools/va-loan-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const VALoanCalculatorPage = () => {
  return (
    <CalculatorLayout content={VA_LOAN_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={VA_LOAN_CALCULATOR_CONTENT.title}
        slug="va-loan-calculator"
        category="Basic Calculators"
        description={VA_LOAN_CALCULATOR_CONTENT.description}
        inputs={VA_LOAN_CALCULATOR_CONTENT.calculator.fields}
        results={VA_LOAN_CALCULATOR_CONTENT.calculator.results}
        calculation={VA_LOAN_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default VALoanCalculatorPage;
