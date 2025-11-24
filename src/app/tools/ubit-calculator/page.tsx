'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { UBIT_CALCULATOR_CONTENT } from '@/content/tools/ubit-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const UbitCalculatorPage = () => {
  return (
    <CalculatorLayout content={UBIT_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={UBIT_CALCULATOR_CONTENT.title}
        slug="ubit-calculator"
        category="Tax Planning"
        description={UBIT_CALCULATOR_CONTENT.description}
        inputs={UBIT_CALCULATOR_CONTENT.calculator.fields}
        results={UBIT_CALCULATOR_CONTENT.calculator.results}
        calculation={UBIT_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default UbitCalculatorPage;
