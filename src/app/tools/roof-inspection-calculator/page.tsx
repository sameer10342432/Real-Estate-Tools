
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Roof Inspection Calculator | Property Tools',
    description: 'Calculate roof inspection and repair costs. Essential for property maintenance, insurance, and real estate transactions.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { ROOF_INSPECTION_CALCULATOR_CONTENT } from '@/content/tools/roof-inspection-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const RoofInspectionCalculatorPage = () => {
  return (
    <CalculatorLayout content={ROOF_INSPECTION_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={ROOF_INSPECTION_CALCULATOR_CONTENT.title}
        slug="roof-inspection-calculator"
        category="Home Inspection"
        description={ROOF_INSPECTION_CALCULATOR_CONTENT.description}
        inputs={ROOF_INSPECTION_CALCULATOR_CONTENT.calculator.fields}
        results={ROOF_INSPECTION_CALCULATOR_CONTENT.calculator.results}
        calculation={ROOF_INSPECTION_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default RoofInspectionCalculatorPage;
