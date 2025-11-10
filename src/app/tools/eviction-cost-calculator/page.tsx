
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Eviction Cost & Timeline Estimator',
    description: 'Estimate eviction costs, legal fees, and timeline for tenant removal by state. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { EVICTION_COST_CALCULATOR_CONTENT } from '@/content/tools/eviction-cost-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const EvictionCostCalculatorPage = () => {
  return (
    <CalculatorLayout content={EVICTION_COST_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={EVICTION_COST_CALCULATOR_CONTENT.title}
        slug="eviction-cost-calculator"
        category="Rental & Income"
        description={EVICTION_COST_CALCULATOR_CONTENT.description}
        inputs={EVICTION_COST_CALCULATOR_CONTENT.calculator.fields}
        results={EVICTION_COST_CALCULATOR_CONTENT.calculator.results}
        calculation={EVICTION_COST_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default EvictionCostCalculatorPage;
