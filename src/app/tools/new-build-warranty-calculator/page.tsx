'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { NEW_BUILD_WARRANTY_CALCULATOR_CONTENT } from '@/content/tools/new-build-warranty-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const NewBuildWarrantyCalculatorPage = () => {
  return (
    <CalculatorLayout content={NEW_BUILD_WARRANTY_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={NEW_BUILD_WARRANTY_CALCULATOR_CONTENT.title}
        slug="new-build-warranty-calculator"
        category="Insurance & Protection"
        description={NEW_BUILD_WARRANTY_CALCULATOR_CONTENT.description}
        inputs={NEW_BUILD_WARRANTY_CALCULATOR_CONTENT.calculator.fields}
        results={NEW_BUILD_WARRANTY_CALCULATOR_CONTENT.calculator.results}
        calculation={NEW_BUILD_WARRANTY_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default NewBuildWarrantyCalculatorPage;
