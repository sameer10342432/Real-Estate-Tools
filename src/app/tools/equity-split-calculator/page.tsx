'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { EQUITY_SPLIT_CALCULATOR_CONTENT } from '@/content/tools/equity-split-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const EquitySplitCalculatorPage = () => {
  return (
    <CalculatorLayout content={EQUITY_SPLIT_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={EQUITY_SPLIT_CALCULATOR_CONTENT.title}
        slug="equity-split-calculator"
        category="Investment"
        description={EQUITY_SPLIT_CALCULATOR_CONTENT.description}
        inputs={EQUITY_SPLIT_CALCULATOR_CONTENT.calculator.fields}
        results={EQUITY_SPLIT_CALCULATOR_CONTENT.calculator.results}
        calculation={EQUITY_SPLIT_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default EquitySplitCalculatorPage;
