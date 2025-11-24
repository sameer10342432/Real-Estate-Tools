'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { DEBT_YIELD_COMMERCIAL_CALCULATOR_CONTENT } from '@/content/tools/debt-yield-commercial-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const DebtYieldCommercialCalculatorPage = () => {
  return (
    <CalculatorLayout content={DEBT_YIELD_COMMERCIAL_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={DEBT_YIELD_COMMERCIAL_CALCULATOR_CONTENT.title}
        slug="debt-yield-commercial-calculator"
        category="Commercial"
        description={DEBT_YIELD_COMMERCIAL_CALCULATOR_CONTENT.description}
        inputs={DEBT_YIELD_COMMERCIAL_CALCULATOR_CONTENT.calculator.fields}
        results={DEBT_YIELD_COMMERCIAL_CALCULATOR_CONTENT.calculator.results}
        calculation={DEBT_YIELD_COMMERCIAL_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default DebtYieldCommercialCalculatorPage;