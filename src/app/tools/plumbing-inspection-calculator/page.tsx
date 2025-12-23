'use client';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Plumbing Inspection Calculator | Property Tools',
    description: 'Calculate plumbing inspection and repair costs. Critical for preventing water damage and ensuring system functionality.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { PLUMBING_INSPECTION_CALCULATOR_CONTENT } from '@/content/tools/plumbing-inspection-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const PlumbingInspectionCalculatorPage = () => {
  return (
    <CalculatorLayout content={PLUMBING_INSPECTION_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={PLUMBING_INSPECTION_CALCULATOR_CONTENT.title}
        slug="plumbing-inspection-calculator"
        category="Home Inspection"
        description={PLUMBING_INSPECTION_CALCULATOR_CONTENT.description}
        inputs={PLUMBING_INSPECTION_CALCULATOR_CONTENT.calculator.fields}
        results={PLUMBING_INSPECTION_CALCULATOR_CONTENT.calculator.results}
        calculation={PLUMBING_INSPECTION_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PlumbingInspectionCalculatorPage;
