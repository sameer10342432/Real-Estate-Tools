
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Hard Money Loan Calculator',
    description: 'Calculate hard money loan terms and costs. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { HARD_MONEY_LOAN_CALCULATOR_CONTENT } from '@/content/tools/hard-money-loan-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HardMoneyLoanCalculatorPage = () => {
  return (
    <CalculatorLayout content={HARD_MONEY_LOAN_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={HARD_MONEY_LOAN_CALCULATOR_CONTENT.title}
        slug="hard-money-loan-calculator"
        category="Investing"
        description={HARD_MONEY_LOAN_CALCULATOR_CONTENT.description}
        inputs={HARD_MONEY_LOAN_CALCULATOR_CONTENT.calculator.fields}
        results={HARD_MONEY_LOAN_CALCULATOR_CONTENT.calculator.results}
        calculation={HARD_MONEY_LOAN_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HardMoneyLoanCalculatorPage;