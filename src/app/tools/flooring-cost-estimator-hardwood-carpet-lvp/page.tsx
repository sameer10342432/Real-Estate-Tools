'use client';
async function _generateMetadata() {
  return {
    title: 'Flooring Cost Estimator - Compare Hardwood vs Carpet vs LVP Costs',
    description: 'Compare costs for hardwood, carpet, and luxury vinyl plank (LVP) flooring including materials, installation, and long-term value.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { FLOORING_COST_ESTIMATOR_CONTENT } from '@/content/tools/flooring-cost-estimator-hardwood-carpet-lvp';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const FlooringCostEstimatorPage = () => {
  return (
    <CalculatorLayout content={FLOORING_COST_ESTIMATOR_CONTENT}>
      <EnhancedCalculator
        title={FLOORING_COST_ESTIMATOR_CONTENT.title}
        slug="flooring-cost-estimator-hardwood-carpet-lvp"
        category="Home Improvement"
        description={FLOORING_COST_ESTIMATOR_CONTENT.description}
        inputs={FLOORING_COST_ESTIMATOR_CONTENT.calculator.fields}
        results={FLOORING_COST_ESTIMATOR_CONTENT.calculator.results}
        calculation={FLOORING_COST_ESTIMATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default FlooringCostEstimatorPage;
