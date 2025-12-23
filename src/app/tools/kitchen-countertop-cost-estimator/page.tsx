'use client';
async function _generateMetadata() {
  return {
    title: 'Kitchen Countertop Cost Estimator - Compare Granite, Quartz, Marble & More',
    description: 'Estimate kitchen countertop costs for granite, quartz, marble, laminate, and other materials including installation.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { KITCHEN_COUNTERTOP_COST_ESTIMATOR_CONTENT } from '@/content/tools/kitchen-countertop-cost-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const KitchenCountertopCostEstimatorPage = () => {
  return (
    <CalculatorLayout content={KITCHEN_COUNTERTOP_COST_ESTIMATOR_CONTENT}>
      <EnhancedCalculator
        title={KITCHEN_COUNTERTOP_COST_ESTIMATOR_CONTENT.title}
        slug="kitchen-countertop-cost-estimator"
        category="Home Improvement"
        description={KITCHEN_COUNTERTOP_COST_ESTIMATOR_CONTENT.description}
        inputs={KITCHEN_COUNTERTOP_COST_ESTIMATOR_CONTENT.calculator.fields}
        results={KITCHEN_COUNTERTOP_COST_ESTIMATOR_CONTENT.calculator.results}
        calculation={KITCHEN_COUNTERTOP_COST_ESTIMATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default KitchenCountertopCostEstimatorPage;
