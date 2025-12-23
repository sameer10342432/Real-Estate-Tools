'use client';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Buyer Closing Cost Calculator | Complete Homebuyer Closing Costs Breakdown',
    description: 'Calculate all closing costs for home buyers including loan fees, title insurance, escrow, taxes, and hidden fees. Know exactly how much cash you need to close on your home purchase.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { CLOSING_COST_BUYER_CALCULATOR_CONTENT } from '@/content/tools/closing-cost-buyer-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ClosingCostBuyerCalculatorPage = () => {
  return (
    <CalculatorLayout content={CLOSING_COST_BUYER_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CLOSING_COST_BUYER_CALCULATOR_CONTENT.title}
        slug="closing-cost-buyer-calculator"
        category="Real Estate"
        description={CLOSING_COST_BUYER_CALCULATOR_CONTENT.description}
        inputs={CLOSING_COST_BUYER_CALCULATOR_CONTENT.calculator.fields}
        results={CLOSING_COST_BUYER_CALCULATOR_CONTENT.calculator.results}
        calculation={CLOSING_COST_BUYER_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ClosingCostBuyerCalculatorPage;
