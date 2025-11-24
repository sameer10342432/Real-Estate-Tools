'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { ADJUSTED_BASIS_CALCULATOR_CONTENT } from '@/content/tools/adjusted-basis-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const AdjustedBasisCalculatorPage = () => {
  return (
    <CalculatorLayout content={ADJUSTED_BASIS_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={ADJUSTED_BASIS_CALCULATOR_CONTENT.title}
        slug="adjusted-basis-calculator"
        category="Tax Planning"
        description={ADJUSTED_BASIS_CALCULATOR_CONTENT.description}
        inputs={ADJUSTED_BASIS_CALCULATOR_CONTENT.calculator.fields}
        results={ADJUSTED_BASIS_CALCULATOR_CONTENT.calculator.results}
        calculation={ADJUSTED_BASIS_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default AdjustedBasisCalculatorPage;
