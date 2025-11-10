
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Loan Eligibility Checker',
    description: 'Check your eligibility for different types of property loans. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { LOAN_ELIGIBILITY_CALCULATOR_CONTENT } from '@/content/tools/loan-eligibility-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const LoanEligibilityCheckerPage = () => {
  return (
    <CalculatorLayout content={LOAN_ELIGIBILITY_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={LOAN_ELIGIBILITY_CALCULATOR_CONTENT.title}
        slug="loan-eligibility-checker"
        category="Mortgage"
        description={LOAN_ELIGIBILITY_CALCULATOR_CONTENT.description}
        inputs={LOAN_ELIGIBILITY_CALCULATOR_CONTENT.calculator.fields}
        results={LOAN_ELIGIBILITY_CALCULATOR_CONTENT.calculator.results}
        calculation={LOAN_ELIGIBILITY_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default LoanEligibilityCheckerPage;