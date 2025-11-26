'use client'

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { SEASONED_FUNDS_CALCULATOR_CONTENT } from '@/content/tools/seasoned-funds-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const SeasonedFundsCalculatorPage = () => {
  return (
    <CalculatorLayout content={SEASONED_FUNDS_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={SEASONED_FUNDS_CALCULATOR_CONTENT.title}
        slug="seasoned-funds-calculator"
        category="Mortgage Qualification"
        description={SEASONED_FUNDS_CALCULATOR_CONTENT.description}
        inputs={SEASONED_FUNDS_CALCULATOR_CONTENT.calculator.fields}
        results={SEASONED_FUNDS_CALCULATOR_CONTENT.calculator.results}
        calculation={SEASONED_FUNDS_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default SeasonedFundsCalculatorPage;
