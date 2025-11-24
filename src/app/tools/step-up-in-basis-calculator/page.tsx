"use client";
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { STEP_UP_IN_BASIS_CALCULATOR_CONTENT } from '@/content/tools/step-up-in-basis-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const StepUpInBasisCalculator = () => {
  return (
    <CalculatorLayout content={STEP_UP_IN_BASIS_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={STEP_UP_IN_BASIS_CALCULATOR_CONTENT.title}
        slug={STEP_UP_IN_BASIS_CALCULATOR_CONTENT.slug}
        category={STEP_UP_IN_BASIS_CALCULATOR_CONTENT.category}
        description={STEP_UP_IN_BASIS_CALCULATOR_CONTENT.description}
        inputs={STEP_UP_IN_BASIS_CALCULATOR_CONTENT.calculator.fields}
        results={STEP_UP_IN_BASIS_CALCULATOR_CONTENT.calculator.results}
        calculation={STEP_UP_IN_BASIS_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default StepUpInBasisCalculator;
