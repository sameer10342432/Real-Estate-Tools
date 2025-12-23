'use client';
async function _generateMetadata() {
  return {
    title: 'Paint Job Cost Estimator - Calculate Interior & Exterior Painting Costs',
    description: 'Estimate professional painting costs for interior and exterior projects including labor, materials, and preparation work.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { PAINT_JOB_COST_ESTIMATOR_CONTENT } from '@/content/tools/paint-job-cost-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const PaintJobCostEstimatorPage = () => {
  return (
    <CalculatorLayout content={PAINT_JOB_COST_ESTIMATOR_CONTENT}>
      <EnhancedCalculator
        title={PAINT_JOB_COST_ESTIMATOR_CONTENT.title}
        slug="paint-job-cost-estimator"
        category="Home Improvement"
        description={PAINT_JOB_COST_ESTIMATOR_CONTENT.description}
        inputs={PAINT_JOB_COST_ESTIMATOR_CONTENT.calculator.fields}
        results={PAINT_JOB_COST_ESTIMATOR_CONTENT.calculator.results}
        calculation={PAINT_JOB_COST_ESTIMATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PaintJobCostEstimatorPage;
