'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { TEXAS_HOMESTEAD_CAP_LOSS_CALCULATOR_CONTENT } from '@/content/tools/texas-homestead-cap-loss-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const TexasHomesteadCapLossCalculatorPage = () => {
  return (
    <CalculatorLayout content={TEXAS_HOMESTEAD_CAP_LOSS_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={TEXAS_HOMESTEAD_CAP_LOSS_CALCULATOR_CONTENT.title}
        slug="texas-homestead-cap-loss-calculator"
        category="State-Specific"
        description={TEXAS_HOMESTEAD_CAP_LOSS_CALCULATOR_CONTENT.description}
        inputs={TEXAS_HOMESTEAD_CAP_LOSS_CALCULATOR_CONTENT.calculator.fields}
        results={TEXAS_HOMESTEAD_CAP_LOSS_CALCULATOR_CONTENT.calculator.results}
        calculation={TEXAS_HOMESTEAD_CAP_LOSS_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default TexasHomesteadCapLossCalculatorPage;