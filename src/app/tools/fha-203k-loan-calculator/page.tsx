
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'FHA 203k Loan Calculator',
    description: 'Calculate FHA renovation loan combining purchase and rehab costs. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { FHA_203K_LOAN_CALCULATOR_CONTENT } from '@/content/tools/fha-203k-loan-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const FHA203kLoanCalculatorPage = () => {
  return (
    <CalculatorLayout content={FHA_203K_LOAN_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={FHA_203K_LOAN_CALCULATOR_CONTENT.title}
        slug="fha-203k-loan-calculator"
        category="Basic Calculators"
        description={FHA_203K_LOAN_CALCULATOR_CONTENT.description}
        inputs={FHA_203K_LOAN_CALCULATOR_CONTENT.calculator.fields}
        results={FHA_203K_LOAN_CALCULATOR_CONTENT.calculator.results}
        calculation={FHA_203K_LOAN_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default FHA203kLoanCalculatorPage;
