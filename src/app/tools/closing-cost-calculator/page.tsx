
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Closing Costs Calculator',
    description: 'Calculate all closing costs for property purchases. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { CLOSING_COST_CALCULATOR_CONTENT } from '@/content/tools/closing-cost-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ClosingCostCalculatorPage = () => {
  return (
    <CalculatorLayout content={CLOSING_COST_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CLOSING_COST_CALCULATOR_CONTENT.title}
        slug="closing-cost-calculator"
        category="Real Estate"
        description={CLOSING_COST_CALCULATOR_CONTENT.description}
        inputs={CLOSING_COST_CALCULATOR_CONTENT.calculator.fields}
        results={CLOSING_COST_CALCULATOR_CONTENT.calculator.results}
        calculation={CLOSING_COST_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ClosingCostCalculatorPage;