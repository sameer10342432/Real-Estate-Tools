'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { EarthshipSustainableCostEstimatorContent } from '@/content/tools/earthship-sustainable-cost-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const EarthshipSustainableCostEstimatorPage = () => {
  return (
    <CalculatorLayout content={EarthshipSustainableCostEstimatorContent}>
      <EnhancedCalculator
        title={EarthshipSustainableCostEstimatorContent.title}
        slug="earthship-sustainable-cost-estimator"
        category="Alternative Housing"
        description={EarthshipSustainableCostEstimatorContent.description}
        inputs={EarthshipSustainableCostEstimatorContent.calculator.fields}
        results={EarthshipSustainableCostEstimatorContent.calculator.results}
        calculation={EarthshipSustainableCostEstimatorContent.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default EarthshipSustainableCostEstimatorPage;
