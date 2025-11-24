'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { BASIS_PROPERTY_CALCULATOR_CONTENT } from '@/content/tools/basis-property-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const BasisPropertyCalculatorPage = () => {
  return (
    <CalculatorLayout content={BASIS_PROPERTY_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={BASIS_PROPERTY_CALCULATOR_CONTENT.title}
        slug="basis-property-calculator"
        category="Tax Planning"
        description={BASIS_PROPERTY_CALCULATOR_CONTENT.description}
        inputs={BASIS_PROPERTY_CALCULATOR_CONTENT.calculator.fields}
        results={BASIS_PROPERTY_CALCULATOR_CONTENT.calculator.results}
        calculation={BASIS_PROPERTY_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default BasisPropertyCalculatorPage;
