'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { EBITDA_CALCULATOR_CONTENT } from '@/content/tools/ebitda-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const EBITDACalculatorPage = () => {
  return (
    <CalculatorLayout content={EBITDA_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={EBITDA_CALCULATOR_CONTENT.title}
        slug="ebitda-calculator"
        category="Commercial Real Estate"
        description={EBITDA_CALCULATOR_CONTENT.description}
        inputs={EBITDA_CALCULATOR_CONTENT.calculator.fields}
        results={EBITDA_CALCULATOR_CONTENT.calculator.results}
        calculation={EBITDA_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default EBITDACalculatorPage;
