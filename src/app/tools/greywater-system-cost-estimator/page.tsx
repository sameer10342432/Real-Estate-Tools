'use client';
async function _generateMetadata() {
  return {
    title: 'Greywater System Cost Estimator - Water Reuse System ROI',
    description: 'Calculate the cost and savings of installing a greywater recycling system for landscape irrigation using shower, sink, and laundry water with rebates.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { GREYWATER_SYSTEM_COST_ESTIMATOR_CONTENT } from '@/content/tools/greywater-system-cost-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const GreywaterSystemCostEstimatorPage = () => {
  return (
    <CalculatorLayout content={GREYWATER_SYSTEM_COST_ESTIMATOR_CONTENT}>
      <EnhancedCalculator
        title={GREYWATER_SYSTEM_COST_ESTIMATOR_CONTENT.title}
        slug="greywater-system-cost-estimator"
        category="Water Conservation"
        description={GREYWATER_SYSTEM_COST_ESTIMATOR_CONTENT.description}
        inputs={GREYWATER_SYSTEM_COST_ESTIMATOR_CONTENT.calculator.fields}
        results={GREYWATER_SYSTEM_COST_ESTIMATOR_CONTENT.calculator.results}
        calculation={GREYWATER_SYSTEM_COST_ESTIMATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default GreywaterSystemCostEstimatorPage;
