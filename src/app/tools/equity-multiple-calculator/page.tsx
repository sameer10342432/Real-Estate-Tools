'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { EQUITY_MULTIPLE_CALCULATOR_CONTENT } from '@/content/tools/equity-multiple-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const EquityMultipleCalculatorPage = () => {
  return (
    <CalculatorLayout content={EQUITY_MULTIPLE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={EQUITY_MULTIPLE_CALCULATOR_CONTENT.title}
        slug="equity-multiple-calculator"
        category="Real Estate"
        description={EQUITY_MULTIPLE_CALCULATOR_CONTENT.description}
        inputs={EQUITY_MULTIPLE_CALCULATOR_CONTENT.calculator.fields}
        results={EQUITY_MULTIPLE_CALCULATOR_CONTENT.calculator.results}
        calculation={EQUITY_MULTIPLE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default EquityMultipleCalculatorPage;
