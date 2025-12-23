'use client';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Structural Engineer Fee Estimator | Property Tools',
    description: 'Calculate structural engineering fees for residential and commercial projects including inspections and calculations. Get accurate cost estimates for engineering services.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { STRUCTURAL_ENGINEER_FEE_ESTIMATOR_CONTENT } from '@/content/tools/structural-engineer-fee-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const StructuralEngineerFeeEstimatorPage = () => {
  return (
    <CalculatorLayout content={STRUCTURAL_ENGINEER_FEE_ESTIMATOR_CONTENT}>
      <EnhancedCalculator
        title={STRUCTURAL_ENGINEER_FEE_ESTIMATOR_CONTENT.title}
        slug="structural-engineer-fee-estimator"
        category="Home Improvement"
        description={STRUCTURAL_ENGINEER_FEE_ESTIMATOR_CONTENT.description}
        inputs={STRUCTURAL_ENGINEER_FEE_ESTIMATOR_CONTENT.calculator.fields}
        results={STRUCTURAL_ENGINEER_FEE_ESTIMATOR_CONTENT.calculator.results}
        calculation={STRUCTURAL_ENGINEER_FEE_ESTIMATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default StructuralEngineerFeeEstimatorPage;
