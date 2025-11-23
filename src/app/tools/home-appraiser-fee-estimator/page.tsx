import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home Appraiser Fee Estimator - Calculate Appraisal Costs',
    description: 'Calculate home appraisal costs based on property type, size, location, and appraisal complexity. Compare typical fees across different markets.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { HOME_APPRAISER_FEE_ESTIMATOR_CONTENT } from '@/content/tools/home-appraiser-fee-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HomeAppraiserFeeEstimatorPage = () => {
  return (
    <CalculatorLayout content={HOME_APPRAISER_FEE_ESTIMATOR_CONTENT}>
      <EnhancedCalculator
        title={HOME_APPRAISER_FEE_ESTIMATOR_CONTENT.title}
        slug="home-appraiser-fee-estimator"
        category="Real Estate"
        description={HOME_APPRAISER_FEE_ESTIMATOR_CONTENT.description}
        inputs={HOME_APPRAISER_FEE_ESTIMATOR_CONTENT.calculator.fields}
        results={HOME_APPRAISER_FEE_ESTIMATOR_CONTENT.calculator.results}
        calculation={HOME_APPRAISER_FEE_ESTIMATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HomeAppraiserFeeEstimatorPage;
