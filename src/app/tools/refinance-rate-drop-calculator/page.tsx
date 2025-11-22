'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { REFINANCE_RATE_DROP_CALCULATOR_CONTENT } from '@/content/tools/refinance-rate-drop-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const RefinanceRateDropCalculatorPage = () => {
  return (
    <CalculatorLayout content={REFINANCE_RATE_DROP_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={REFINANCE_RATE_DROP_CALCULATOR_CONTENT.title}
        slug="refinance-rate-drop-calculator"
        category="Mortgage & Financing"
        description={REFINANCE_RATE_DROP_CALCULATOR_CONTENT.description}
        inputs={REFINANCE_RATE_DROP_CALCULATOR_CONTENT.calculator.fields}
        results={REFINANCE_RATE_DROP_CALCULATOR_CONTENT.calculator.results}
        calculation={REFINANCE_RATE_DROP_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default RefinanceRateDropCalculatorPage;