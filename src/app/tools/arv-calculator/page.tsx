
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'ARV Calculator',
    description: 'Estimate the After Repair Value (ARV) of a property. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}


'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { ARV_CALCULATOR_CONTENT } from '@/content/tools/arv-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ArvCalculatorPage = () => {
  return (
    <CalculatorLayout content={ARV_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={ARV_CALCULATOR_CONTENT.title}
        slug="arv-calculator"
        category="Real Estate"
        description={ARV_CALCULATOR_CONTENT.description}
        inputs={ARV_CALCULATOR_CONTENT.calculator.fields}
        results={ARV_CALCULATOR_CONTENT.calculator.results}
        calculation={ARV_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ArvCalculatorPage;