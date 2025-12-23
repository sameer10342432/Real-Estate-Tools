'use client';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Foundation Inspection Calculator | Property Tools',
    description: 'Calculate foundation inspection and repair costs. Critical for structural integrity, property value, and preventing costly damage.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { FOUNDATION_INSPECTION_CALCULATOR_CONTENT } from '@/content/tools/foundation-inspection-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const FoundationInspectionCalculatorPage = () => {
  return (
    <CalculatorLayout content={FOUNDATION_INSPECTION_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={FOUNDATION_INSPECTION_CALCULATOR_CONTENT.title}
        slug="foundation-inspection-calculator"
        category="Home Inspection"
        description={FOUNDATION_INSPECTION_CALCULATOR_CONTENT.description}
        inputs={FOUNDATION_INSPECTION_CALCULATOR_CONTENT.calculator.fields}
        results={FOUNDATION_INSPECTION_CALCULATOR_CONTENT.calculator.results}
        calculation={FOUNDATION_INSPECTION_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default FoundationInspectionCalculatorPage;
