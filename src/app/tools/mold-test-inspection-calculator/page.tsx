'use client';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Mold Test & Inspection Calculator | Property Tools',
    description: 'Calculate mold inspection, testing, and remediation costs. Essential for water damage, health concerns, and property transactions.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { MOLD_TEST_INSPECTION_CALCULATOR_CONTENT } from '@/content/tools/mold-test-inspection-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const MoldTestInspectionCalculatorPage = () => {
  return (
    <CalculatorLayout content={MOLD_TEST_INSPECTION_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={MOLD_TEST_INSPECTION_CALCULATOR_CONTENT.title}
        slug="mold-test-inspection-calculator"
        category="Home Inspection"
        description={MOLD_TEST_INSPECTION_CALCULATOR_CONTENT.description}
        inputs={MOLD_TEST_INSPECTION_CALCULATOR_CONTENT.calculator.fields}
        results={MOLD_TEST_INSPECTION_CALCULATOR_CONTENT.calculator.results}
        calculation={MOLD_TEST_INSPECTION_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default MoldTestInspectionCalculatorPage;
