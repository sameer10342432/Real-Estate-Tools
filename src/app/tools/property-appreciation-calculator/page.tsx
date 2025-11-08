'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
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