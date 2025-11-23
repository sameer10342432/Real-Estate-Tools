
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Barndominium Cost Estimator',
    description: 'Calculate the cost to build a barndominium with customizable size, finishes, location, and features. Free cost estimation tool for barn-style homes.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { BarndominiumCostEstimatorContent } from '@/content/tools/barndominium-cost-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const BarndominiumCostEstimatorPage = () => {
  return (
    <CalculatorLayout content={BarndominiumCostEstimatorContent}>
      <EnhancedCalculator
        title={BarndominiumCostEstimatorContent.title}
        slug="barndominium-cost-estimator"
        category="Alternative Housing"
        description={BarndominiumCostEstimatorContent.description}
        inputs={BarndominiumCostEstimatorContent.calculator.fields}
        results={BarndominiumCostEstimatorContent.calculator.results}
        calculation={BarndominiumCostEstimatorContent.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default BarndominiumCostEstimatorPage;
