'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { BEST_CITY_FOR_ANALYZER_CONTENT } from '@/content/tools/best-city-for-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const BestCityForAnalyzerPage = () => {
  return (
    <CalculatorLayout content={BEST_CITY_FOR_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={BEST_CITY_FOR_ANALYZER_CONTENT.title}
        slug="best-city-for-analyzer"
        category="Market Analysis"
        description={BEST_CITY_FOR_ANALYZER_CONTENT.description}
        inputs={BEST_CITY_FOR_ANALYZER_CONTENT.calculator.fields}
        results={BEST_CITY_FOR_ANALYZER_CONTENT.calculator.results}
        calculation={BEST_CITY_FOR_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default BestCityForAnalyzerPage;
