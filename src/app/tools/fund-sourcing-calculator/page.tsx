'use client'

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { FUND_SOURCING_CALCULATOR_CONTENT } from '@/content/tools/fund-sourcing-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const FundSourcingCalculatorPage = () => {
  return (
    <CalculatorLayout content={FUND_SOURCING_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={FUND_SOURCING_CALCULATOR_CONTENT.title}
        slug="fund-sourcing-calculator"
        category="Mortgage Qualification"
        description={FUND_SOURCING_CALCULATOR_CONTENT.description}
        inputs={FUND_SOURCING_CALCULATOR_CONTENT.calculator.fields}
        results={FUND_SOURCING_CALCULATOR_CONTENT.calculator.results}
        calculation={FUND_SOURCING_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default FundSourcingCalculatorPage;
