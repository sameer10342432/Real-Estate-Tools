'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { LUMBER_PRICE_IMPACT_CALCULATOR_CONTENT } from '@/content/tools/lumber-price-impact-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const LumberPriceImpactCalculatorPage = () => {
  return (
    <CalculatorLayout content={LUMBER_PRICE_IMPACT_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={LUMBER_PRICE_IMPACT_CALCULATOR_CONTENT.title}
        slug="lumber-price-impact-calculator"
        category="Construction & Development"
        description={LUMBER_PRICE_IMPACT_CALCULATOR_CONTENT.description}
        inputs={LUMBER_PRICE_IMPACT_CALCULATOR_CONTENT.calculator.fields}
        results={LUMBER_PRICE_IMPACT_CALCULATOR_CONTENT.calculator.results}
        calculation={LUMBER_PRICE_IMPACT_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default LumberPriceImpactCalculatorPage;