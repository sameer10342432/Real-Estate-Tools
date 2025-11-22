
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Concrete Price Impact on Home Cost',
    description: 'Calculate how concrete price changes affect foundation and construction costs for residential projects. Free online tool for builders and contractors.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { CONCRETE_PRICE_IMPACT_CALCULATOR_CONTENT } from '@/content/tools/concrete-price-impact-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ConcretePriceImpactCalculatorPage = () => {
  return (
    <CalculatorLayout content={CONCRETE_PRICE_IMPACT_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CONCRETE_PRICE_IMPACT_CALCULATOR_CONTENT.title}
        slug="concrete-price-impact-calculator"
        category="Construction & Development"
        description={CONCRETE_PRICE_IMPACT_CALCULATOR_CONTENT.description}
        inputs={CONCRETE_PRICE_IMPACT_CALCULATOR_CONTENT.calculator.fields}
        results={CONCRETE_PRICE_IMPACT_CALCULATOR_CONTENT.calculator.results}
        calculation={CONCRETE_PRICE_IMPACT_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ConcretePriceImpactCalculatorPage;