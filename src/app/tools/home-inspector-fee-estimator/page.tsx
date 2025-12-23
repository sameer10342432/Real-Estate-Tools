'use client';


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { HOME_INSPECTOR_FEE_ESTIMATOR_CONTENT } from '@/content/tools/home-inspector-fee-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HomeInspectorFeeEstimatorPage = () => {
  return (
    <CalculatorLayout content={HOME_INSPECTOR_FEE_ESTIMATOR_CONTENT}>
      <EnhancedCalculator
        title={HOME_INSPECTOR_FEE_ESTIMATOR_CONTENT.title}
        slug="home-inspector-fee-estimator"
        category="Real Estate"
        description={HOME_INSPECTOR_FEE_ESTIMATOR_CONTENT.description}
        inputs={HOME_INSPECTOR_FEE_ESTIMATOR_CONTENT.calculator.fields}
        results={HOME_INSPECTOR_FEE_ESTIMATOR_CONTENT.calculator.results}
        calculation={HOME_INSPECTOR_FEE_ESTIMATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HomeInspectorFeeEstimatorPage;
