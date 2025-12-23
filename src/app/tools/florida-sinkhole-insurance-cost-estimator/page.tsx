'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { FLORIDA_SINKHOLE_INSURANCE_COST_ESTIMATOR_CONTENT } from '@/content/tools/florida-sinkhole-insurance-cost-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const FloridaSinkholeInsuranceCostEstimatorPage = () => {
  return (
    <CalculatorLayout content={FLORIDA_SINKHOLE_INSURANCE_COST_ESTIMATOR_CONTENT}>
      <EnhancedCalculator
        title={FLORIDA_SINKHOLE_INSURANCE_COST_ESTIMATOR_CONTENT.title}
        slug="florida-sinkhole-insurance-cost-estimator"
        category="Insurance Tools"
        description={FLORIDA_SINKHOLE_INSURANCE_COST_ESTIMATOR_CONTENT.description}
        inputs={FLORIDA_SINKHOLE_INSURANCE_COST_ESTIMATOR_CONTENT.calculator.fields}
        results={FLORIDA_SINKHOLE_INSURANCE_COST_ESTIMATOR_CONTENT.calculator.results}
        calculation={FLORIDA_SINKHOLE_INSURANCE_COST_ESTIMATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default FloridaSinkholeInsuranceCostEstimatorPage;
