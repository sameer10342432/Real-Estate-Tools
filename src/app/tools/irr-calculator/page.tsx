'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { IRR_CALCULATOR_CONTENT } from '@/content/tools/irr-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const IRRCalculatorPage = () => {
  return (
    <CalculatorLayout content={IRR_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={IRR_CALCULATOR_CONTENT.title}
        slug="irr-calculator"
        category="Commercial Real Estate"
        description={IRR_CALCULATOR_CONTENT.description}
        inputs={IRR_CALCULATOR_CONTENT.calculator.fields}
        results={IRR_CALCULATOR_CONTENT.calculator.results}
        calculation={IRR_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default IRRCalculatorPage;
