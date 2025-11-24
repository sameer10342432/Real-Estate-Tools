'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { RIGHT_OF_FIRST_REFUSAL_CALCULATOR_CONTENT } from '@/content/tools/right-of-first-refusal-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const RightOfFirstRefusalCalculatorPage = () => {
  return (
    <CalculatorLayout content={RIGHT_OF_FIRST_REFUSAL_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={RIGHT_OF_FIRST_REFUSAL_CALCULATOR_CONTENT.title}
        slug="right-of-first-refusal-calculator"
        category={RIGHT_OF_FIRST_REFUSAL_CALCULATOR_CONTENT.category}
        description={RIGHT_OF_FIRST_REFUSAL_CALCULATOR_CONTENT.description}
        inputs={RIGHT_OF_FIRST_REFUSAL_CALCULATOR_CONTENT.calculator.fields}
        results={RIGHT_OF_FIRST_REFUSAL_CALCULATOR_CONTENT.calculator.results}
        calculation={RIGHT_OF_FIRST_REFUSAL_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default RightOfFirstRefusalCalculatorPage;
