'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CALIFORNIA_PROP_13_CALCULATOR_CONTENT } from '@/content/tools/california-prop-13-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CaliforniaProp13CalculatorPage = () => {
  return (
    <CalculatorLayout content={CALIFORNIA_PROP_13_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CALIFORNIA_PROP_13_CALCULATOR_CONTENT.title}
        slug="california-prop-13-calculator"
        category="State-Specific"
        description={CALIFORNIA_PROP_13_CALCULATOR_CONTENT.description}
        inputs={CALIFORNIA_PROP_13_CALCULATOR_CONTENT.calculator.fields}
        results={CALIFORNIA_PROP_13_CALCULATOR_CONTENT.calculator.results}
        calculation={CALIFORNIA_PROP_13_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CaliforniaProp13CalculatorPage;