'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { NEW_HAMPSHIRE_CURRENT_USE_TAX_CALCULATOR_CONTENT } from '@/content/tools/new-hampshire-current-use-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const NewHampshireCurrentUseTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={NEW_HAMPSHIRE_CURRENT_USE_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={NEW_HAMPSHIRE_CURRENT_USE_TAX_CALCULATOR_CONTENT.title}
        slug="new-hampshire-current-use-tax-calculator"
        category="Legal & Compliance"
        description={NEW_HAMPSHIRE_CURRENT_USE_TAX_CALCULATOR_CONTENT.description}
        inputs={NEW_HAMPSHIRE_CURRENT_USE_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={NEW_HAMPSHIRE_CURRENT_USE_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={NEW_HAMPSHIRE_CURRENT_USE_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default NewHampshireCurrentUseTaxCalculatorPage;
