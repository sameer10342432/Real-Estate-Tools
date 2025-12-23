'use client';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Seller Closing Cost Calculator | How Much Will I Net From Home Sale?',
    description: 'Calculate seller closing costs including realtor commissions, title fees, taxes, and payoffs. Find out your net proceeds from selling your home after all expenses.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { CLOSING_COST_SELLER_CALCULATOR_CONTENT } from '@/content/tools/closing-cost-seller-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ClosingCostSellerCalculatorPage = () => {
  return (
    <CalculatorLayout content={CLOSING_COST_SELLER_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CLOSING_COST_SELLER_CALCULATOR_CONTENT.title}
        slug="closing-cost-seller-calculator"
        category="Real Estate"
        description={CLOSING_COST_SELLER_CALCULATOR_CONTENT.description}
        inputs={CLOSING_COST_SELLER_CALCULATOR_CONTENT.calculator.fields}
        results={CLOSING_COST_SELLER_CALCULATOR_CONTENT.calculator.results}
        calculation={CLOSING_COST_SELLER_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ClosingCostSellerCalculatorPage;
