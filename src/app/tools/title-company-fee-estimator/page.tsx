'use client'


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { TITLE_COMPANY_FEE_ESTIMATOR_CONTENT } from '@/content/tools/title-company-fee-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const TitleCompanyFeeEstimatorPage = () => {
  return (
    <CalculatorLayout content={TITLE_COMPANY_FEE_ESTIMATOR_CONTENT}>
      <EnhancedCalculator
        title={TITLE_COMPANY_FEE_ESTIMATOR_CONTENT.title}
        slug="title-company-fee-estimator"
        category="Real Estate"
        description={TITLE_COMPANY_FEE_ESTIMATOR_CONTENT.description}
        inputs={TITLE_COMPANY_FEE_ESTIMATOR_CONTENT.calculator.fields}
        results={TITLE_COMPANY_FEE_ESTIMATOR_CONTENT.calculator.results}
        calculation={TITLE_COMPANY_FEE_ESTIMATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default TitleCompanyFeeEstimatorPage;
