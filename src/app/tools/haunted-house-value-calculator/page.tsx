
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Haunted House Value Calculator',
    description: 'Calculate how paranormal activity, murder history, or stigmatized events impact property value and resale potential.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { HauntedHouseValueCalculatorContent } from '@/content/tools/haunted-house-value-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HauntedHouseValueCalculatorPage = () => {
  return (
    <CalculatorLayout content={HauntedHouseValueCalculatorContent}>
      <EnhancedCalculator
        title={HauntedHouseValueCalculatorContent.title}
        slug="haunted-house-value-calculator"
        category="Additional Tools"
        description={HauntedHouseValueCalculatorContent.description}
        inputs={HauntedHouseValueCalculatorContent.calculator.fields}
        results={HauntedHouseValueCalculatorContent.calculator.results}
        calculation={HauntedHouseValueCalculatorContent.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HauntedHouseValueCalculatorPage;
