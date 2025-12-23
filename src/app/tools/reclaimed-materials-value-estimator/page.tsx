'use client';
async function _generateMetadata() {
  return {
    title: 'Reclaimed Materials Value Estimator - Salvage Material Pricing',
    description: 'Estimate the market value of reclaimed building materials including lumber, flooring, bricks, and architectural elements for renovation or resale.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { RECLAIMED_MATERIALS_VALUE_ESTIMATOR_CONTENT } from '@/content/tools/reclaimed-materials-value-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ReclaimedMaterialsValueEstimatorPage = () => {
  return (
    <CalculatorLayout content={RECLAIMED_MATERIALS_VALUE_ESTIMATOR_CONTENT}>
      <EnhancedCalculator
        title={RECLAIMED_MATERIALS_VALUE_ESTIMATOR_CONTENT.title}
        slug="reclaimed-materials-value-estimator"
        category="Sustainability"
        description={RECLAIMED_MATERIALS_VALUE_ESTIMATOR_CONTENT.description}
        inputs={RECLAIMED_MATERIALS_VALUE_ESTIMATOR_CONTENT.calculator.fields}
        results={RECLAIMED_MATERIALS_VALUE_ESTIMATOR_CONTENT.calculator.results}
        calculation={RECLAIMED_MATERIALS_VALUE_ESTIMATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ReclaimedMaterialsValueEstimatorPage;
