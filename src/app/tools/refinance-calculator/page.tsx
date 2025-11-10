
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Refinance Calculator',
    description: 'Analyze refinancing options and potential savings. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { MORTGAGE_REFINANCE_CALCULATOR_CONTENT } from '@/content/tools/mortgage-refinance-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const RefinanceCalculatorPage = () => {
  return (
    <CalculatorLayout content={MORTGAGE_REFINANCE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={MORTGAGE_REFINANCE_CALCULATOR_CONTENT.title}
        slug="refinance-calculator"
        category="Mortgage"
        description={MORTGAGE_REFINANCE_CALCULATOR_CONTENT.description}
        inputs={MORTGAGE_REFINANCE_CALCULATOR_CONTENT.calculator.fields}
        results={MORTGAGE_REFINANCE_CALCULATOR_CONTENT.calculator.results}
        calculation={MORTGAGE_REFINANCE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default RefinanceCalculatorPage;