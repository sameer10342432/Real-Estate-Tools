export async function generateMetadata() {
  return {
    title: 'Land Subdivision Cost Estimator - Calculate Development Costs and Profitability | Property Tools',
    description: 'Estimate total costs and profitability for subdividing raw land into individual lots including infrastructure, permitting, and development expenses.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { LAND_SUBDIVISION_COST_ESTIMATOR_CONTENT } from '@/content/tools/land-subdivision-cost-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const LandSubdivisionCostEstimatorPage = () => {
  return (
    <CalculatorLayout content={LAND_SUBDIVISION_COST_ESTIMATOR_CONTENT}>
      <EnhancedCalculator
        title={LAND_SUBDIVISION_COST_ESTIMATOR_CONTENT.title}
        slug="land-subdivision-cost-estimator"
        category="Investment Analysis"
        description={LAND_SUBDIVISION_COST_ESTIMATOR_CONTENT.description}
        inputs={LAND_SUBDIVISION_COST_ESTIMATOR_CONTENT.calculator.fields}
        results={LAND_SUBDIVISION_COST_ESTIMATOR_CONTENT.calculator.results}
        calculation={LAND_SUBDIVISION_COST_ESTIMATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default LandSubdivisionCostEstimatorPage;
