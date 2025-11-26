'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { HARD_MONEY_INTEREST_CALCULATOR_CONTENT } from '@/content/tools/hard-money-interest-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export default function HardMoneyInterestCalculatorClient() {
  return (
    <CalculatorLayout content={HARD_MONEY_INTEREST_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={HARD_MONEY_INTEREST_CALCULATOR_CONTENT.title}
        slug="hard-money-interest-calculator"
        category="Investment Analysis"
        description={HARD_MONEY_INTEREST_CALCULATOR_CONTENT.description}
        inputs={HARD_MONEY_INTEREST_CALCULATOR_CONTENT.calculator.fields}
        results={HARD_MONEY_INTEREST_CALCULATOR_CONTENT.calculator.results}
        calculation={HARD_MONEY_INTEREST_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
}
