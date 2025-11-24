'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { TIME_SHARE_EXIT_COST_CALCULATOR_CONTENT } from '@/content/tools/time-share-exit-cost-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const TimeShareExitCostCalculatorPage = () => {
  return (
    <CalculatorLayout content={TIME_SHARE_EXIT_COST_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={TIME_SHARE_EXIT_COST_CALCULATOR_CONTENT.title}
        slug="time-share-exit-cost-calculator"
        category={TIME_SHARE_EXIT_COST_CALCULATOR_CONTENT.category}
        description={TIME_SHARE_EXIT_COST_CALCULATOR_CONTENT.description}
        inputs={TIME_SHARE_EXIT_COST_CALCULATOR_CONTENT.calculator.fields}
        results={TIME_SHARE_EXIT_COST_CALCULATOR_CONTENT.calculator.results}
        calculation={TIME_SHARE_EXIT_COST_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default TimeShareExitCostCalculatorPage;
