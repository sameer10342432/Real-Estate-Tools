
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Land Development Cost Calculator',
    description: 'Calculate subdivision, infrastructure, and development costs for raw land projects. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { LAND_DEVELOPMENT_COST_CALCULATOR_CONTENT } from '@/content/tools/land-development-cost-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const LandDevelopmentCostCalculatorPage = () => {
  return (
    <CalculatorLayout content={LAND_DEVELOPMENT_COST_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={LAND_DEVELOPMENT_COST_CALCULATOR_CONTENT.title}
        slug="land-development-cost-calculator"
        category="Investment Analysis"
        description={LAND_DEVELOPMENT_COST_CALCULATOR_CONTENT.description}
        inputs={LAND_DEVELOPMENT_COST_CALCULATOR_CONTENT.calculator.fields}
        results={LAND_DEVELOPMENT_COST_CALCULATOR_CONTENT.calculator.results}
        calculation={LAND_DEVELOPMENT_COST_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default LandDevelopmentCostCalculatorPage;
