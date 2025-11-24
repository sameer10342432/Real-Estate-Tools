'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CO_OP_FLIP_TAX_CALCULATOR_CONTENT } from '@/content/tools/co-op-flip-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CoOpFlipTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={CO_OP_FLIP_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CO_OP_FLIP_TAX_CALCULATOR_CONTENT.title}
        slug="co-op-flip-tax-calculator"
        category="Real Estate"
        description={CO_OP_FLIP_TAX_CALCULATOR_CONTENT.description}
        inputs={CO_OP_FLIP_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={CO_OP_FLIP_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={CO_OP_FLIP_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CoOpFlipTaxCalculatorPage;

