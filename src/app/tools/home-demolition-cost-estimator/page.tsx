'use client';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home Demolition Cost Estimator | Property Tools',
    description: 'Estimate the cost of demolishing a house or structure including permits, labor, and disposal fees. Calculate demolition costs for residential and commercial properties.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { HOME_DEMOLITION_COST_ESTIMATOR_CONTENT } from '@/content/tools/home-demolition-cost-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HomeDemolitionCostEstimatorPage = () => {
  return (
    <CalculatorLayout content={HOME_DEMOLITION_COST_ESTIMATOR_CONTENT}>
      <EnhancedCalculator
        title={HOME_DEMOLITION_COST_ESTIMATOR_CONTENT.title}
        slug="home-demolition-cost-estimator"
        category="Home Improvement"
        description={HOME_DEMOLITION_COST_ESTIMATOR_CONTENT.description}
        inputs={HOME_DEMOLITION_COST_ESTIMATOR_CONTENT.calculator.fields}
        results={HOME_DEMOLITION_COST_ESTIMATOR_CONTENT.calculator.results}
        calculation={HOME_DEMOLITION_COST_ESTIMATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HomeDemolitionCostEstimatorPage;
