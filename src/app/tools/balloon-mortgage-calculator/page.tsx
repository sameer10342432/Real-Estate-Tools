'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { BALLOON_MORTGAGE_CALCULATOR_CONTENT } from '@/content/tools/balloon-mortgage-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const BalloonMortgageCalculatorPage = () => {
  return (
    <CalculatorLayout content={BALLOON_MORTGAGE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={BALLOON_MORTGAGE_CALCULATOR_CONTENT.title}
        slug="balloon-mortgage-calculator"
        category="Mortgage"
        description={BALLOON_MORTGAGE_CALCULATOR_CONTENT.description}
        inputs={BALLOON_MORTGAGE_CALCULATOR_CONTENT.calculator.fields}
        results={BALLOON_MORTGAGE_CALCULATOR_CONTENT.calculator.results}
        calculation={BALLOON_MORTGAGE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default BalloonMortgageCalculatorPage;
