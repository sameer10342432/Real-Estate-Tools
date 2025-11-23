import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Real Estate Attorney Fee Estimator - Calculate Legal Costs',
    description: 'Estimate real estate attorney fees for closings, contract reviews, title disputes, and legal consultations based on transaction complexity.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { REAL_ESTATE_ATTORNEY_FEE_ESTIMATOR_CONTENT } from '@/content/tools/real-estate-attorney-fee-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const RealEstateAttorneyFeeEstimatorPage = () => {
  return (
    <CalculatorLayout content={REAL_ESTATE_ATTORNEY_FEE_ESTIMATOR_CONTENT}>
      <EnhancedCalculator
        title={REAL_ESTATE_ATTORNEY_FEE_ESTIMATOR_CONTENT.title}
        slug="real-estate-attorney-fee-estimator"
        category="Real Estate"
        description={REAL_ESTATE_ATTORNEY_FEE_ESTIMATOR_CONTENT.description}
        inputs={REAL_ESTATE_ATTORNEY_FEE_ESTIMATOR_CONTENT.calculator.fields}
        results={REAL_ESTATE_ATTORNEY_FEE_ESTIMATOR_CONTENT.calculator.results}
        calculation={REAL_ESTATE_ATTORNEY_FEE_ESTIMATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default RealEstateAttorneyFeeEstimatorPage;
