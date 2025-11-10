
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Gross Rent Multiplier Calculator',
    description: 'Calculate GRM for quick property valuation. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { GROSS_RENT_MULTIPLIER_CALCULATOR_CONTENT } from '@/content/tools/gross-rent-multiplier-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const GrossRentMultiplierCalculatorPage = () => {
  return (
    <CalculatorLayout content={GROSS_RENT_MULTIPLIER_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={GROSS_RENT_MULTIPLIER_CALCULATOR_CONTENT.title}
        slug="gross-rent-multiplier-calculator"
        category="Real Estate"
        description={GROSS_RENT_MULTIPLIER_CALCULATOR_CONTENT.description}
        inputs={GROSS_RENT_MULTIPLIER_CALCULATOR_CONTENT.calculator.fields}
        results={GROSS_RENT_MULTIPLIER_CALCULATOR_CONTENT.calculator.results}
        calculation={GROSS_RENT_MULTIPLIER_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default GrossRentMultiplierCalculatorPage;