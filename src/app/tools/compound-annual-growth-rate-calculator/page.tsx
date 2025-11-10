
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'CAGR Calculator',
    description: 'Calculate Compound Annual Growth Rate for investments. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}


'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { CAGR_CALCULATOR_CONTENT } from '@/content/tools/compound-annual-growth-rate-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CompoundAnnualGrowthRateCalculatorPage = () => {
  return (
    <CalculatorLayout content={CAGR_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CAGR_CALCULATOR_CONTENT.title}
        slug="compound-annual-growth-rate-calculator"
        category="Real Estate"
        description={CAGR_CALCULATOR_CONTENT.description}
        inputs={CAGR_CALCULATOR_CONTENT.calculator.fields}
        results={CAGR_CALCULATOR_CONTENT.calculator.results}
        calculation={CAGR_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CompoundAnnualGrowthRateCalculatorPage;