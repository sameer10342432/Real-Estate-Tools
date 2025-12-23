'use client';


async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Cost of Moving Calculator (Buyer)',
    description: 'Calculate and analyze your rental/buyer options with our free online tool for real estate professionals, investors, and homebuyers.',
  };
}




import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { COST_OF_MOVING_BUYER_CALCULATOR_CONTENT } from '@/content/tools/cost-of-moving-buyer-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const Page = () => {
  return (
    <CalculatorLayout content={COST_OF_MOVING_BUYER_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={COST_OF_MOVING_BUYER_CALCULATOR_CONTENT.title}
        slug="cost-of-moving-buyer-calculator"
        category="Buyer Tools"
        description={COST_OF_MOVING_BUYER_CALCULATOR_CONTENT.description}
        inputs={COST_OF_MOVING_BUYER_CALCULATOR_CONTENT.calculator.fields}
        results={COST_OF_MOVING_BUYER_CALCULATOR_CONTENT.calculator.results}
        calculation={COST_OF_MOVING_BUYER_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default Page;
