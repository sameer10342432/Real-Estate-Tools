
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Depreciation Calculator',
    description: 'Calculate tax depreciation for investment properties. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { DEPRECIATION_CALCULATOR_CONTENT } from '@/content/tools/depreciation-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const DepreciationCalculatorPage = () => {
  return (
    <CalculatorLayout content={DEPRECIATION_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={DEPRECIATION_CALCULATOR_CONTENT.title}
        slug="depreciation-calculator"
        category="Tax & Legal"
        description={DEPRECIATION_CALCULATOR_CONTENT.description}
        inputs={DEPRECIATION_CALCULATOR_CONTENT.calculator.fields}
        results={DEPRECIATION_CALCULATOR_CONTENT.calculator.results}
        calculation={DEPRECIATION_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default DepreciationCalculatorPage;