'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { LOSS_FACTOR_CALCULATOR_CONTENT } from '@/content/tools/loss-factor-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const LossFactorCalculatorPage = () => {
  return (
    <CalculatorLayout content={LOSS_FACTOR_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={LOSS_FACTOR_CALCULATOR_CONTENT.title}
        slug="loss-factor-calculator"
        category="Commercial Real Estate"
        description={LOSS_FACTOR_CALCULATOR_CONTENT.description}
        inputs={LOSS_FACTOR_CALCULATOR_CONTENT.calculator.fields}
        results={LOSS_FACTOR_CALCULATOR_CONTENT.calculator.results}
        calculation={LOSS_FACTOR_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default LossFactorCalculatorPage;
