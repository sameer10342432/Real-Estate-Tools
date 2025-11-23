
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Earthship Sustainable Cost Estimator',
    description: 'Calculate the cost to build an earthship sustainable home with off-grid systems, tire walls, and eco-friendly features. Free earthship cost tool.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
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
