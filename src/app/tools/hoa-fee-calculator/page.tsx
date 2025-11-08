'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { HOA_FEE_CALCULATOR_CONTENT } from '@/content/tools/hoa-fee-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HOAFeeCalculatorPage = () => {
  return (
    <CalculatorLayout content={HOA_FEE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={HOA_FEE_CALCULATOR_CONTENT.title}
        slug="hoa-fee-calculator"
        category="Real Estate"
        description={HOA_FEE_CALCULATOR_CONTENT.description}
        inputs={HOA_FEE_CALCULATOR_CONTENT.calculator.fields}
        results={HOA_FEE_CALCULATOR_CONTENT.calculator.results}
        calculation={HOA_FEE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HOAFeeCalculatorPage;