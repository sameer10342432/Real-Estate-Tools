'use client';
async function _generateMetadata() {
  return {
    title: 'Building Permit Fee Estimator - Calculate Permit Costs by City & Project',
    description: 'Estimate building permit fees for construction, renovation, and home improvement projects based on project value and location.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { BUILDING_PERMIT_FEE_ESTIMATOR_CONTENT } from '@/content/tools/building-permit-fee-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const BuildingPermitFeeEstimatorPage = () => {
  return (
    <CalculatorLayout content={BUILDING_PERMIT_FEE_ESTIMATOR_CONTENT}>
      <EnhancedCalculator
        title={BUILDING_PERMIT_FEE_ESTIMATOR_CONTENT.title}
        slug="building-permit-fee-estimator"
        category="Home Improvement"
        description={BUILDING_PERMIT_FEE_ESTIMATOR_CONTENT.description}
        inputs={BUILDING_PERMIT_FEE_ESTIMATOR_CONTENT.calculator.fields}
        results={BUILDING_PERMIT_FEE_ESTIMATOR_CONTENT.calculator.results}
        calculation={BUILDING_PERMIT_FEE_ESTIMATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default BuildingPermitFeeEstimatorPage;
