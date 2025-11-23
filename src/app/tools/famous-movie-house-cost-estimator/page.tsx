'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { FamousMovieHouseCostEstimatorContent } from '@/content/tools/famous-movie-house-cost-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const FamousMovieHouseCostEstimatorPage = () => {
  return (
    <CalculatorLayout content={FamousMovieHouseCostEstimatorContent}>
      <EnhancedCalculator
        title={FamousMovieHouseCostEstimatorContent.title}
        slug="famous-movie-house-cost-estimator"
        category="Additional Tools"
        description={FamousMovieHouseCostEstimatorContent.description}
        inputs={FamousMovieHouseCostEstimatorContent.calculator.fields}
        results={FamousMovieHouseCostEstimatorContent.calculator.results}
        calculation={FamousMovieHouseCostEstimatorContent.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default FamousMovieHouseCostEstimatorPage;
