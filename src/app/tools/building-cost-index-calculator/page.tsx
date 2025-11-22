
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Building Cost Index (Local)',
    description: 'Calculate local construction cost index to estimate building expenses and compare markets. Free online tool for real estate developers and investors.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { BUILDING_COST_INDEX_CALCULATOR_CONTENT } from '@/content/tools/building-cost-index-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const BuildingCostIndexCalculatorPage = () => {
  return (
    <CalculatorLayout content={BUILDING_COST_INDEX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={BUILDING_COST_INDEX_CALCULATOR_CONTENT.title}
        slug="building-cost-index-calculator"
        category="Construction & Development"
        description={BUILDING_COST_INDEX_CALCULATOR_CONTENT.description}
        inputs={BUILDING_COST_INDEX_CALCULATOR_CONTENT.calculator.fields}
        results={BUILDING_COST_INDEX_CALCULATOR_CONTENT.calculator.results}
        calculation={BUILDING_COST_INDEX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default BuildingCostIndexCalculatorPage;