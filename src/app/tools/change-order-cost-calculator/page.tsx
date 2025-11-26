'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CHANGE_ORDER_COST_CALCULATOR_CONTENT } from '@/content/tools/change-order-cost-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ChangeOrderCostCalculatorPage = () => {
  return (
    <CalculatorLayout content={CHANGE_ORDER_COST_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CHANGE_ORDER_COST_CALCULATOR_CONTENT.title}
        slug="change-order-cost-calculator"
        category="Construction & Development"
        description={CHANGE_ORDER_COST_CALCULATOR_CONTENT.description}
        inputs={CHANGE_ORDER_COST_CALCULATOR_CONTENT.calculator.fields}
        results={CHANGE_ORDER_COST_CALCULATOR_CONTENT.calculator.results}
        calculation={CHANGE_ORDER_COST_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ChangeOrderCostCalculatorPage;
