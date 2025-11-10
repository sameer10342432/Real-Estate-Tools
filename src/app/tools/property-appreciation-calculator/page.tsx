
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Property Appreciation Calculator',
    description: 'Calculate historical and projected property appreciation. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { PROPERTY_APPRECIATION_CALCULATOR_CONTENT } from '@/content/tools/property-appreciation-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const PropertyAppreciationCalculatorPage = () => {
  return (
    <CalculatorLayout content={PROPERTY_APPRECIATION_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={PROPERTY_APPRECIATION_CALCULATOR_CONTENT.title}
        slug="property-appreciation-calculator"
        category="Real Estate"
        description={PROPERTY_APPRECIATION_CALCULATOR_CONTENT.description}
        inputs={PROPERTY_APPRECIATION_CALCULATOR_CONTENT.calculator.fields}
        results={PROPERTY_APPRECIATION_CALCULATOR_CONTENT.calculator.results}
        calculation={PROPERTY_APPRECIATION_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PropertyAppreciationCalculatorPage;