'use client';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'HVAC Inspection Calculator | Property Tools',
    description: 'Calculate HVAC system inspection and service costs. Important for energy efficiency, comfort, and property transactions.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { HVAC_INSPECTION_CALCULATOR_CONTENT } from '@/content/tools/hvac-inspection-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HvacInspectionCalculatorPage = () => {
  return (
    <CalculatorLayout content={HVAC_INSPECTION_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={HVAC_INSPECTION_CALCULATOR_CONTENT.title}
        slug="hvac-inspection-calculator"
        category="Home Inspection"
        description={HVAC_INSPECTION_CALCULATOR_CONTENT.description}
        inputs={HVAC_INSPECTION_CALCULATOR_CONTENT.calculator.fields}
        results={HVAC_INSPECTION_CALCULATOR_CONTENT.calculator.results}
        calculation={HVAC_INSPECTION_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HvacInspectionCalculatorPage;
