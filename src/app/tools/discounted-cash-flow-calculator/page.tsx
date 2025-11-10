
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Discounted Cash Flow Calculator',
    description: 'Calculate property value using DCF analysis. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}


'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { DCF_CALCULATOR_CONTENT } from '@/content/tools/discounted-cash-flow-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const DiscountedCashFlowCalculatorPage = () => {
  return (
    <CalculatorLayout content={DCF_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={DCF_CALCULATOR_CONTENT.title}
        slug="discounted-cash-flow-calculator"
        category="Real Estate"
        description={DCF_CALCULATOR_CONTENT.description}
        inputs={DCF_CALCULATOR_CONTENT.calculator.fields}
        results={DCF_CALCULATOR_CONTENT.calculator.results}
        calculation={DCF_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default DiscountedCashFlowCalculatorPage;