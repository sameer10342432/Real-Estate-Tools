'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { FLORIDA_HURRICANE_INSURANCE_ESTIMATOR_CONTENT } from '@/content/tools/florida-hurricane-insurance-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const FloridaHurricaneInsuranceEstimatorPage = () => {
  return (
    <CalculatorLayout content={FLORIDA_HURRICANE_INSURANCE_ESTIMATOR_CONTENT}>
      <EnhancedCalculator
        title={FLORIDA_HURRICANE_INSURANCE_ESTIMATOR_CONTENT.title}
        slug="florida-hurricane-insurance-estimator"
        category="Insurance Tools"
        description={FLORIDA_HURRICANE_INSURANCE_ESTIMATOR_CONTENT.description}
        inputs={FLORIDA_HURRICANE_INSURANCE_ESTIMATOR_CONTENT.calculator.fields}
        results={FLORIDA_HURRICANE_INSURANCE_ESTIMATOR_CONTENT.calculator.results}
        calculation={FLORIDA_HURRICANE_INSURANCE_ESTIMATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default FloridaHurricaneInsuranceEstimatorPage;
