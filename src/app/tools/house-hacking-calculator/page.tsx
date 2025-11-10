
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'House Hacking Calculator',
    description: 'Calculate net housing costs by house hacking - live in one unit, rent the others. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { HOUSE_HACKING_CALCULATOR_CONTENT } from '@/content/tools/house-hacking-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HouseHackingCalculatorPage = () => {
  return (
    <CalculatorLayout content={HOUSE_HACKING_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={HOUSE_HACKING_CALCULATOR_CONTENT.title}
        slug="house-hacking-calculator"
        category="Rental & Income"
        description={HOUSE_HACKING_CALCULATOR_CONTENT.description}
        inputs={HOUSE_HACKING_CALCULATOR_CONTENT.calculator.fields}
        results={HOUSE_HACKING_CALCULATOR_CONTENT.calculator.results}
        calculation={HOUSE_HACKING_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HouseHackingCalculatorPage;
