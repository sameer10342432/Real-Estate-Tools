'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { FRACTIONAL_OWNERSHIP_CALCULATOR_CONTENT } from '@/content/tools/fractional-ownership-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const FractionalOwnershipCalculatorPage = () => {
  return (
    <CalculatorLayout content={FRACTIONAL_OWNERSHIP_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={FRACTIONAL_OWNERSHIP_CALCULATOR_CONTENT.title}
        slug="fractional-ownership-calculator"
        category="Real Estate"
        description={FRACTIONAL_OWNERSHIP_CALCULATOR_CONTENT.description}
        inputs={FRACTIONAL_OWNERSHIP_CALCULATOR_CONTENT.calculator.fields}
        results={FRACTIONAL_OWNERSHIP_CALCULATOR_CONTENT.calculator.results}
        calculation={FRACTIONAL_OWNERSHIP_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default FractionalOwnershipCalculatorPage;

