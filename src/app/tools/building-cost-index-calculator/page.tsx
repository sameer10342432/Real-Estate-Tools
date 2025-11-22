'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
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