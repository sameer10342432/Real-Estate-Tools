'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { AIRBNB_INCOME_ESTIMATOR_CONTENT } from '@/content/tools/airbnb-income-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const AirbnbIncomeEstimatorPage = () => {
  return (
    <CalculatorLayout content={AIRBNB_INCOME_ESTIMATOR_CONTENT}>
      <EnhancedCalculator
        title={AIRBNB_INCOME_ESTIMATOR_CONTENT.title}
        slug="airbnb-income-estimator"
        category="Rental & Income"
        description={AIRBNB_INCOME_ESTIMATOR_CONTENT.description}
        inputs={AIRBNB_INCOME_ESTIMATOR_CONTENT.calculator.fields}
        results={AIRBNB_INCOME_ESTIMATOR_CONTENT.calculator.results}
        calculation={AIRBNB_INCOME_ESTIMATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default AirbnbIncomeEstimatorPage;
