
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'A-Frame Cabin Cost Estimator',
    description: 'Calculate the cost to build an A-frame cabin with size options, finishes, location, and customization. Free A-frame construction cost tool.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
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
