export async function generateMetadata() {
  return {
    title: 'Recaptured Depreciation (Rental Sale) Calculator | Property Tools',
    description: 'Calculate depreciation recapture tax when selling a rental property. Understand the 25% tax implications of previously claimed depreciation deductions.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { RECAPTURED_DEPRECIATION_CALCULATOR_CONTENT } from '@/content/tools/recaptured-depreciation-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const RecapturedDepreciationCalculator = () => {
  return (
    <CalculatorLayout content={RECAPTURED_DEPRECIATION_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={RECAPTURED_DEPRECIATION_CALCULATOR_CONTENT.title}
        slug={RECAPTURED_DEPRECIATION_CALCULATOR_CONTENT.slug}
        category={RECAPTURED_DEPRECIATION_CALCULATOR_CONTENT.category}
        description={RECAPTURED_DEPRECIATION_CALCULATOR_CONTENT.description}
        inputs={RECAPTURED_DEPRECIATION_CALCULATOR_CONTENT.calculator.fields}
        results={RECAPTURED_DEPRECIATION_CALCULATOR_CONTENT.calculator.results}
        calculation={RECAPTURED_DEPRECIATION_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default RecapturedDepreciationCalculator;
