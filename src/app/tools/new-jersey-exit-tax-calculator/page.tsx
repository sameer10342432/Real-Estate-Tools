'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { NEW_JERSEY_EXIT_TAX_CALCULATOR_CONTENT } from '@/content/tools/new-jersey-exit-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const NewJerseyExitTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={NEW_JERSEY_EXIT_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={NEW_JERSEY_EXIT_TAX_CALCULATOR_CONTENT.title}
        slug="new-jersey-exit-tax-calculator"
        category="Tax Calculators"
        description={NEW_JERSEY_EXIT_TAX_CALCULATOR_CONTENT.description}
        inputs={NEW_JERSEY_EXIT_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={NEW_JERSEY_EXIT_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={NEW_JERSEY_EXIT_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default NewJerseyExitTaxCalculatorPage;
