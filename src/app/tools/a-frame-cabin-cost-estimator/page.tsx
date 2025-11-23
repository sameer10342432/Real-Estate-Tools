'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { AFrameCabinCostEstimatorContent } from '@/content/tools/a-frame-cabin-cost-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const AFrameCabinCostEstimatorPage = () => {
  return (
    <CalculatorLayout content={AFrameCabinCostEstimatorContent}>
      <EnhancedCalculator
        title={AFrameCabinCostEstimatorContent.title}
        slug="a-frame-cabin-cost-estimator"
        category="Alternative Housing"
        description={AFrameCabinCostEstimatorContent.description}
        inputs={AFrameCabinCostEstimatorContent.calculator.fields}
        results={AFrameCabinCostEstimatorContent.calculator.results}
        calculation={AFrameCabinCostEstimatorContent.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default AFrameCabinCostEstimatorPage;
