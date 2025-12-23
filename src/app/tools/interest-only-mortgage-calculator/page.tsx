'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { INTEREST_ONLY_MORTGAGE_CALCULATOR_CONTENT } from '@/content/tools/interest-only-mortgage-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const InterestOnlyMortgageCalculatorPage = () => {
  return (
    <CalculatorLayout content={INTEREST_ONLY_MORTGAGE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={INTEREST_ONLY_MORTGAGE_CALCULATOR_CONTENT.title}
        slug="interest-only-mortgage-calculator"
        category="Mortgage"
        description={INTEREST_ONLY_MORTGAGE_CALCULATOR_CONTENT.description}
        inputs={INTEREST_ONLY_MORTGAGE_CALCULATOR_CONTENT.calculator.fields}
        results={INTEREST_ONLY_MORTGAGE_CALCULATOR_CONTENT.calculator.results}
        calculation={INTEREST_ONLY_MORTGAGE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default InterestOnlyMortgageCalculatorPage;
