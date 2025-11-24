'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { HOA_RENTAL_CAP_ANALYZER_CONTENT } from '@/content/tools/hoa-rental-cap-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HOARentalCapAnalyzerPage = () => {
  return (
    <CalculatorLayout content={HOA_RENTAL_CAP_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={HOA_RENTAL_CAP_ANALYZER_CONTENT.title}
        slug="hoa-rental-cap-analyzer"
        category="Real Estate"
        description={HOA_RENTAL_CAP_ANALYZER_CONTENT.description}
        inputs={HOA_RENTAL_CAP_ANALYZER_CONTENT.calculator.fields}
        results={HOA_RENTAL_CAP_ANALYZER_CONTENT.calculator.results}
        calculation={HOA_RENTAL_CAP_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HOARentalCapAnalyzerPage;

