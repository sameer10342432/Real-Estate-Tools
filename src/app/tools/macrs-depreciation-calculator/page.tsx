
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'MACRS Depreciation Calculator',
    description: 'Calculate Modified Accelerated Cost Recovery System depreciation for rental property. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { MACRS_DEPRECIATION_CALCULATOR_CONTENT } from '@/content/tools/macrs-depreciation-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const MacrsDepreciationCalculatorPage = () => {
  return (
    <CalculatorLayout content={MACRS_DEPRECIATION_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={MACRS_DEPRECIATION_CALCULATOR_CONTENT.title}
        slug="macrs-depreciation-calculator"
        category="Financial Planning"
        description={MACRS_DEPRECIATION_CALCULATOR_CONTENT.description}
        inputs={MACRS_DEPRECIATION_CALCULATOR_CONTENT.calculator.fields}
        results={MACRS_DEPRECIATION_CALCULATOR_CONTENT.calculator.results}
        calculation={MACRS_DEPRECIATION_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default MacrsDepreciationCalculatorPage;
