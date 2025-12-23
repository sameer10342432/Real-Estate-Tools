'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CALIFORNIA_EARTHQUAKE_INSURANCE_ESTIMATOR_CONTENT } from '@/content/tools/california-earthquake-insurance-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const _metadata = {
  title: 'California Earthquake Insurance Estimator | Calculate Premium Costs',
  description: 'Estimate California earthquake insurance costs based on location, construction type, and coverage. Calculate CEA premiums and deductibles for your home.',
};

const CaliforniaEarthquakeInsuranceEstimatorPage = () => {
  return (
    <CalculatorLayout content={CALIFORNIA_EARTHQUAKE_INSURANCE_ESTIMATOR_CONTENT}>
      <EnhancedCalculator
        title={CALIFORNIA_EARTHQUAKE_INSURANCE_ESTIMATOR_CONTENT.title}
        slug="california-earthquake-insurance-estimator"
        category="Insurance Tools"
        description={CALIFORNIA_EARTHQUAKE_INSURANCE_ESTIMATOR_CONTENT.description}
        inputs={CALIFORNIA_EARTHQUAKE_INSURANCE_ESTIMATOR_CONTENT.calculator.fields}
        results={CALIFORNIA_EARTHQUAKE_INSURANCE_ESTIMATOR_CONTENT.calculator.results}
        calculation={CALIFORNIA_EARTHQUAKE_INSURANCE_ESTIMATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CaliforniaEarthquakeInsuranceEstimatorPage;
