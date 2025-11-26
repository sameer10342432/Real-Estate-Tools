'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { HARD_MONEY_LTV_CALCULATOR_CONTENT } from '@/content/tools/hard-money-ltv-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export default function HardMoneyLtvCalculatorClient() {
  return (
    <CalculatorLayout content={HARD_MONEY_LTV_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={HARD_MONEY_LTV_CALCULATOR_CONTENT.title}
        slug="hard-money-ltv-calculator"
        category="Investment Analysis"
        description={HARD_MONEY_LTV_CALCULATOR_CONTENT.description}
        inputs={HARD_MONEY_LTV_CALCULATOR_CONTENT.calculator.fields}
        results={HARD_MONEY_LTV_CALCULATOR_CONTENT.calculator.results}
        calculation={HARD_MONEY_LTV_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
}
