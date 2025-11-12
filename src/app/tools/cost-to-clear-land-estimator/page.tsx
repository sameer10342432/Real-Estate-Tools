export async function generateMetadata() {
  return {
    title: 'Cost to Clear Land Estimator - Calculate Site Preparation Costs | Property Tools',
    description: 'Estimate land clearing costs including tree removal, brush clearing, grading, and debris disposal for development projects.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { COST_TO_CLEAR_LAND_ESTIMATOR_CONTENT } from '@/content/tools/cost-to-clear-land-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CostToClearLandEstimatorPage = () => {
  return (
    <CalculatorLayout content={COST_TO_CLEAR_LAND_ESTIMATOR_CONTENT}>
      <EnhancedCalculator
        title={COST_TO_CLEAR_LAND_ESTIMATOR_CONTENT.title}
        slug="cost-to-clear-land-estimator"
        category="Investment Analysis"
        description={COST_TO_CLEAR_LAND_ESTIMATOR_CONTENT.description}
        inputs={COST_TO_CLEAR_LAND_ESTIMATOR_CONTENT.calculator.fields}
        results={COST_TO_CLEAR_LAND_ESTIMATOR_CONTENT.calculator.results}
        calculation={COST_TO_CLEAR_LAND_ESTIMATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CostToClearLandEstimatorPage;
