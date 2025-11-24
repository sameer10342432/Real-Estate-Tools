'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { FLORIDA_SAVE_OUR_HOMES_CALCULATOR_CONTENT } from '@/content/tools/florida-save-our-homes-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const FloridaSaveOurHomesCalculatorPage = () => {
  return (
    <CalculatorLayout content={FLORIDA_SAVE_OUR_HOMES_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={FLORIDA_SAVE_OUR_HOMES_CALCULATOR_CONTENT.title}
        slug="florida-save-our-homes-calculator"
        category="State-Specific"
        description={FLORIDA_SAVE_OUR_HOMES_CALCULATOR_CONTENT.description}
        inputs={FLORIDA_SAVE_OUR_HOMES_CALCULATOR_CONTENT.calculator.fields}
        results={FLORIDA_SAVE_OUR_HOMES_CALCULATOR_CONTENT.calculator.results}
        calculation={FLORIDA_SAVE_OUR_HOMES_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default FloridaSaveOurHomesCalculatorPage;