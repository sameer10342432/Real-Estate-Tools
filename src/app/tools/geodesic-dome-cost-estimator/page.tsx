'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { GeodesicDomeCostEstimatorContent } from '@/content/tools/geodesic-dome-cost-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const GeodesicDomeCostEstimatorPage = () => {
  return (
    <CalculatorLayout content={GeodesicDomeCostEstimatorContent}>
      <EnhancedCalculator
        title={GeodesicDomeCostEstimatorContent.title}
        slug="geodesic-dome-cost-estimator"
        category="Alternative Housing"
        description={GeodesicDomeCostEstimatorContent.description}
        inputs={GeodesicDomeCostEstimatorContent.calculator.fields}
        results={GeodesicDomeCostEstimatorContent.calculator.results}
        calculation={GeodesicDomeCostEstimatorContent.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default GeodesicDomeCostEstimatorPage;
