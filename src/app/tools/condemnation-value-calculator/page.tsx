'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CONDEMNATION_VALUE_CALCULATOR_CONTENT } from '@/content/tools/condemnation-value-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CondemnationValueCalculatorPage = () => {
  return (
    <CalculatorLayout content={CONDEMNATION_VALUE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CONDEMNATION_VALUE_CALCULATOR_CONTENT.title}
        slug="condemnation-value-calculator"
        category={CONDEMNATION_VALUE_CALCULATOR_CONTENT.category}
        description={CONDEMNATION_VALUE_CALCULATOR_CONTENT.description}
        inputs={CONDEMNATION_VALUE_CALCULATOR_CONTENT.calculator.fields}
        results={CONDEMNATION_VALUE_CALCULATOR_CONTENT.calculator.results}
        calculation={CONDEMNATION_VALUE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CondemnationValueCalculatorPage;
