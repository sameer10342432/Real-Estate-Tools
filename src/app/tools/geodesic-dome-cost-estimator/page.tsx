
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Geodesic Dome Cost Estimator',
    description: 'Calculate the cost to build a geodesic dome home with size, frequency, finishes, and off-grid features. Free dome house cost estimation.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
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
