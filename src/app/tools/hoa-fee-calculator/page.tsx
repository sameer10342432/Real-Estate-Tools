
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'HOA Fee Calculator',
    description: 'Calculate and analyze HOA fees and assessments. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { HOA_FEE_CALCULATOR_CONTENT } from '@/content/tools/hoa-fee-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HOAFeeCalculatorPage = () => {
  return (
    <CalculatorLayout content={HOA_FEE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={HOA_FEE_CALCULATOR_CONTENT.title}
        slug="hoa-fee-calculator"
        category="Real Estate"
        description={HOA_FEE_CALCULATOR_CONTENT.description}
        inputs={HOA_FEE_CALCULATOR_CONTENT.calculator.fields}
        results={HOA_FEE_CALCULATOR_CONTENT.calculator.results}
        calculation={HOA_FEE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HOAFeeCalculatorPage;