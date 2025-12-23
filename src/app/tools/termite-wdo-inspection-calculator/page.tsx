'use client';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Termite (WDO) Inspection Calculator | Property Tools',
    description: 'Calculate termite and wood-destroying organism inspection costs. Required for most mortgage loans and essential for property protection.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { TERMITE_WDO_INSPECTION_CALCULATOR_CONTENT } from '@/content/tools/termite-wdo-inspection-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const TermiteWdoInspectionCalculatorPage = () => {
  return (
    <CalculatorLayout content={TERMITE_WDO_INSPECTION_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={TERMITE_WDO_INSPECTION_CALCULATOR_CONTENT.title}
        slug="termite-wdo-inspection-calculator"
        category="Home Inspection"
        description={TERMITE_WDO_INSPECTION_CALCULATOR_CONTENT.description}
        inputs={TERMITE_WDO_INSPECTION_CALCULATOR_CONTENT.calculator.fields}
        results={TERMITE_WDO_INSPECTION_CALCULATOR_CONTENT.calculator.results}
        calculation={TERMITE_WDO_INSPECTION_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default TermiteWdoInspectionCalculatorPage;
