'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { FORECLOSURE_RATE_CALCULATOR_CONTENT } from '@/content/tools/foreclosure-rate-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ForeclosureRateCalculatorPage = () => {
  return (
    <CalculatorLayout content={FORECLOSURE_RATE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={FORECLOSURE_RATE_CALCULATOR_CONTENT.title}
        slug="foreclosure-rate-calculator"
        category="Market Analysis"
        description={FORECLOSURE_RATE_CALCULATOR_CONTENT.description}
        inputs={FORECLOSURE_RATE_CALCULATOR_CONTENT.calculator.fields}
        results={FORECLOSURE_RATE_CALCULATOR_CONTENT.calculator.results}
        calculation={FORECLOSURE_RATE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ForeclosureRateCalculatorPage;