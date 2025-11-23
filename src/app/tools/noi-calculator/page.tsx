'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { NOI_CALCULATOR_CONTENT } from '@/content/tools/noi-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const NOICalculatorPage = () => {
  return (
    <CalculatorLayout content={NOI_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={NOI_CALCULATOR_CONTENT.title}
        slug="noi-calculator"
        category="Commercial Real Estate"
        description={NOI_CALCULATOR_CONTENT.description}
        inputs={NOI_CALCULATOR_CONTENT.calculator.fields}
        results={NOI_CALCULATOR_CONTENT.calculator.results}
        calculation={NOI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default NOICalculatorPage;