'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { GINNIE_MAE_GNMA_CALCULATOR_CONTENT } from '@/content/tools/ginnie-mae-gnma-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const GinnieMaeGnmaCalculatorPage = () => {
  return (
    <CalculatorLayout content={GINNIE_MAE_GNMA_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={GINNIE_MAE_GNMA_CALCULATOR_CONTENT.title}
        slug="ginnie-mae-gnma-calculator"
        category="Basic Calculators"
        description={GINNIE_MAE_GNMA_CALCULATOR_CONTENT.description}
        inputs={GINNIE_MAE_GNMA_CALCULATOR_CONTENT.calculator.fields}
        results={GINNIE_MAE_GNMA_CALCULATOR_CONTENT.calculator.results}
        calculation={GINNIE_MAE_GNMA_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default GinnieMaeGnmaCalculatorPage;
