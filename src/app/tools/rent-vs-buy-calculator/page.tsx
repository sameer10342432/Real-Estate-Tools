
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Rent vs Buy Calculator',
    description: 'Compare the costs of renting versus buying. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { RENT_VS_BUY_CALCULATOR_CONTENT } from '@/content/tools/rent-vs-buy-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const RentVsBuyCalculatorPage = () => {
  return (
    <CalculatorLayout content={RENT_VS_BUY_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={RENT_VS_BUY_CALCULATOR_CONTENT.title}
        slug="rent-vs-buy-calculator"
        category="Buying"
        description={RENT_VS_BUY_CALCULATOR_CONTENT.description}
        inputs={RENT_VS_BUY_CALCULATOR_CONTENT.calculator.fields}
        results={RENT_VS_BUY_CALCULATOR_CONTENT.calculator.results}
        calculation={RENT_VS_BUY_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default RentVsBuyCalculatorPage;