'use client';
async function _generateMetadata() {
  return {
    title: 'Wraparound Mortgage Profit Calculator - AITD Returns Analysis | Property Tools',
    description: 'Calculate profit potential from wraparound mortgages (All-Inclusive Trust Deeds) including interest rate spreads and cash flow analysis.',
  };
}

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { WRAPAROUND_MORTGAGE_PROFIT_CALCULATOR_CONTENT } from '@/content/tools/wraparound-mortgage-profit-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const WraparoundMortgageProfitCalculatorPage = () => {
  return (
    <CalculatorLayout content={WRAPAROUND_MORTGAGE_PROFIT_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={WRAPAROUND_MORTGAGE_PROFIT_CALCULATOR_CONTENT.title}
        slug="wraparound-mortgage-profit-calculator"
        category="Investment Analysis"
        description={WRAPAROUND_MORTGAGE_PROFIT_CALCULATOR_CONTENT.description}
        inputs={WRAPAROUND_MORTGAGE_PROFIT_CALCULATOR_CONTENT.calculator.fields}
        results={WRAPAROUND_MORTGAGE_PROFIT_CALCULATOR_CONTENT.calculator.results}
        calculation={WRAPAROUND_MORTGAGE_PROFIT_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default WraparoundMortgageProfitCalculatorPage;
