
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Bunker / Survival Property Cost Estimator',
    description: 'Calculate the cost to build an underground bunker or survival property with security features, off-grid systems, and emergency preparedness.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { BunkerSurvivalPropertyCostEstimatorContent } from '@/content/tools/bunker-survival-property-cost-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const BunkerSurvivalPropertyCostEstimatorPage = () => {
  return (
    <CalculatorLayout content={BunkerSurvivalPropertyCostEstimatorContent}>
      <EnhancedCalculator
        title={BunkerSurvivalPropertyCostEstimatorContent.title}
        slug="bunker-survival-property-cost-estimator"
        category="Alternative Housing"
        description={BunkerSurvivalPropertyCostEstimatorContent.description}
        inputs={BunkerSurvivalPropertyCostEstimatorContent.calculator.fields}
        results={BunkerSurvivalPropertyCostEstimatorContent.calculator.results}
        calculation={BunkerSurvivalPropertyCostEstimatorContent.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default BunkerSurvivalPropertyCostEstimatorPage;
