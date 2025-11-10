
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'FHA Loan Calculator',
    description: 'Calculate FHA loan payments with low down payment (3.5%) and MIP costs. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { FHA_LOAN_CALCULATOR_CONTENT } from '@/content/tools/fha-loan-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const FHALoanCalculatorPage = () => {
  return (
    <CalculatorLayout content={FHA_LOAN_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={FHA_LOAN_CALCULATOR_CONTENT.title}
        slug="fha-loan-calculator"
        category="Basic Calculators"
        description={FHA_LOAN_CALCULATOR_CONTENT.description}
        inputs={FHA_LOAN_CALCULATOR_CONTENT.calculator.fields}
        results={FHA_LOAN_CALCULATOR_CONTENT.calculator.results}
        calculation={FHA_LOAN_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default FHALoanCalculatorPage;
