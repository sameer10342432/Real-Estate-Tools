
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'PMI Calculator',
    description: 'Calculate private mortgage insurance costs and monthly payments. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { PMI_CALCULATOR_CONTENT } from '@/content/tools/pmi-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const PMICalculatorPage = () => {
  return (
    <CalculatorLayout content={PMI_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={PMI_CALCULATOR_CONTENT.title}
        slug="pmi-calculator"
        category="Basic Calculators"
        description={PMI_CALCULATOR_CONTENT.description}
        inputs={PMI_CALCULATOR_CONTENT.calculator.fields}
        results={PMI_CALCULATOR_CONTENT.calculator.results}
        calculation={PMI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PMICalculatorPage;
