'use client';
import { CALIFORNIA_MELLO_ROOS_TAX_ESTIMATOR_CONTENT } from '@/content/tools/california-mello-roos-tax-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';

const CaliforniaMelloRoosTaxEstimatorPage = () => {
  return (
    <CalculatorLayout content={CALIFORNIA_MELLO_ROOS_TAX_ESTIMATOR_CONTENT}>
      <EnhancedCalculator
        title={CALIFORNIA_MELLO_ROOS_TAX_ESTIMATOR_CONTENT.title}
        slug="california-mello-roos-tax-estimator"
        category="Tax Calculators"
        description={CALIFORNIA_MELLO_ROOS_TAX_ESTIMATOR_CONTENT.description}
        inputs={CALIFORNIA_MELLO_ROOS_TAX_ESTIMATOR_CONTENT.calculator.fields}
        results={CALIFORNIA_MELLO_ROOS_TAX_ESTIMATOR_CONTENT.calculator.results}
        calculation={CALIFORNIA_MELLO_ROOS_TAX_ESTIMATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CaliforniaMelloRoosTaxEstimatorPage;
