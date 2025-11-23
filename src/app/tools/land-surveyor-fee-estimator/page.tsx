'use client'


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { LAND_SURVEYOR_FEE_ESTIMATOR_CONTENT } from '@/content/tools/land-surveyor-fee-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const LandSurveyorFeeEstimatorPage = () => {
  return (
    <CalculatorLayout content={LAND_SURVEYOR_FEE_ESTIMATOR_CONTENT}>
      <EnhancedCalculator
        title={LAND_SURVEYOR_FEE_ESTIMATOR_CONTENT.title}
        slug="land-surveyor-fee-estimator"
        category="Real Estate"
        description={LAND_SURVEYOR_FEE_ESTIMATOR_CONTENT.description}
        inputs={LAND_SURVEYOR_FEE_ESTIMATOR_CONTENT.calculator.fields}
        results={LAND_SURVEYOR_FEE_ESTIMATOR_CONTENT.calculator.results}
        calculation={LAND_SURVEYOR_FEE_ESTIMATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default LandSurveyorFeeEstimatorPage;
