
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Private Island Affordability Calculator',
    description: 'Calculate if you can afford to buy a private island, including purchase price, development costs, maintenance, and operating expenses.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { PrivateIslandAffordabilityCalculatorContent } from '@/content/tools/private-island-affordability-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const PrivateIslandAffordabilityCalculatorPage = () => {
  return (
    <CalculatorLayout content={PrivateIslandAffordabilityCalculatorContent}>
      <EnhancedCalculator
        title={PrivateIslandAffordabilityCalculatorContent.title}
        slug="private-island-affordability-calculator"
        category="Additional Tools"
        description={PrivateIslandAffordabilityCalculatorContent.description}
        inputs={PrivateIslandAffordabilityCalculatorContent.calculator.fields}
        results={PrivateIslandAffordabilityCalculatorContent.calculator.results}
        calculation={PrivateIslandAffordabilityCalculatorContent.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PrivateIslandAffordabilityCalculatorPage;
