'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { DOCK_SLIP_MARINA_INVESTMENT_CALCULATOR_CONTENT } from '@/content/tools/dock-slip-marina-investment-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const DockSlipMarinaInvestmentCalculatorPage = () => {
  return (
    <CalculatorLayout content={DOCK_SLIP_MARINA_INVESTMENT_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={DOCK_SLIP_MARINA_INVESTMENT_CALCULATOR_CONTENT.title}
        slug="dock-slip-marina-investment-calculator"
        category={DOCK_SLIP_MARINA_INVESTMENT_CALCULATOR_CONTENT.category}
        description={DOCK_SLIP_MARINA_INVESTMENT_CALCULATOR_CONTENT.description}
        inputs={DOCK_SLIP_MARINA_INVESTMENT_CALCULATOR_CONTENT.calculator.fields}
        results={DOCK_SLIP_MARINA_INVESTMENT_CALCULATOR_CONTENT.calculator.results}
        calculation={DOCK_SLIP_MARINA_INVESTMENT_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default DockSlipMarinaInvestmentCalculatorPage;
