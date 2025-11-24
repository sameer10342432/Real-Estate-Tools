'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { PASSIVE_ACTIVITY_LOSS_CALCULATOR_CONTENT } from '@/content/tools/passive-activity-loss-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const PassiveActivityLossCalculator = () => {
  return (
    <CalculatorLayout content={PASSIVE_ACTIVITY_LOSS_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={PASSIVE_ACTIVITY_LOSS_CALCULATOR_CONTENT.title}
        slug={PASSIVE_ACTIVITY_LOSS_CALCULATOR_CONTENT.slug}
        category={PASSIVE_ACTIVITY_LOSS_CALCULATOR_CONTENT.category}
        description={PASSIVE_ACTIVITY_LOSS_CALCULATOR_CONTENT.description}
        inputs={PASSIVE_ACTIVITY_LOSS_CALCULATOR_CONTENT.calculator.fields}
        results={PASSIVE_ACTIVITY_LOSS_CALCULATOR_CONTENT.calculator.results}
        calculation={PASSIVE_ACTIVITY_LOSS_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PassiveActivityLossCalculator;
