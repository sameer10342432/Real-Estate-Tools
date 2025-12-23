'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { FANNIE_MAE_FNMA_CALCULATOR_CONTENT } from '@/content/tools/fannie-mae-fnma-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const FannieMaeFnmaCalculatorPage = () => {
  return (
    <CalculatorLayout content={FANNIE_MAE_FNMA_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={FANNIE_MAE_FNMA_CALCULATOR_CONTENT.title}
        slug="fannie-mae-fnma-calculator"
        category="Mortgage Calculators"
        description={FANNIE_MAE_FNMA_CALCULATOR_CONTENT.description}
        inputs={FANNIE_MAE_FNMA_CALCULATOR_CONTENT.calculator.fields}
        results={FANNIE_MAE_FNMA_CALCULATOR_CONTENT.calculator.results}
        calculation={FANNIE_MAE_FNMA_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default FannieMaeFnmaCalculatorPage;
