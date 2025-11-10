
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'PMI Removal Calculator',
    description: 'Find out when you can cancel PMI and how much you will save. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { PMI_REMOVAL_CALCULATOR_CONTENT } from '@/content/tools/pmi-removal-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const PMIRemovalCalculatorPage = () => {
  return (
    <CalculatorLayout content={PMI_REMOVAL_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={PMI_REMOVAL_CALCULATOR_CONTENT.title}
        slug="pmi-removal-calculator"
        category="Basic Calculators"
        description={PMI_REMOVAL_CALCULATOR_CONTENT.description}
        inputs={PMI_REMOVAL_CALCULATOR_CONTENT.calculator.fields}
        results={PMI_REMOVAL_CALCULATOR_CONTENT.calculator.results}
        calculation={PMI_REMOVAL_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PMIRemovalCalculatorPage;
