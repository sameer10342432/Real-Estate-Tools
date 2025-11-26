'use client'

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { LOT_PREMIUM_VALUE_CALCULATOR_CONTENT } from '@/content/tools/lot-premium-value-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const LotPremiumValueCalculatorPage = () => {
  return (
    <CalculatorLayout content={LOT_PREMIUM_VALUE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={LOT_PREMIUM_VALUE_CALCULATOR_CONTENT.title}
        slug="lot-premium-value-calculator"
        category="Construction & Development"
        description={LOT_PREMIUM_VALUE_CALCULATOR_CONTENT.description}
        inputs={LOT_PREMIUM_VALUE_CALCULATOR_CONTENT.calculator.fields}
        results={LOT_PREMIUM_VALUE_CALCULATOR_CONTENT.calculator.results}
        calculation={LOT_PREMIUM_VALUE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default LotPremiumValueCalculatorPage;
