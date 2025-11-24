'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { HOA_PARKING_RESTRICTION_ANALYZER_CONTENT } from '@/content/tools/hoa-parking-restriction-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HOAParkingRestrictionAnalyzerPage = () => {
  return (
    <CalculatorLayout content={HOA_PARKING_RESTRICTION_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={HOA_PARKING_RESTRICTION_ANALYZER_CONTENT.title}
        slug="hoa-parking-restriction-analyzer"
        category="Real Estate"
        description={HOA_PARKING_RESTRICTION_ANALYZER_CONTENT.description}
        inputs={HOA_PARKING_RESTRICTION_ANALYZER_CONTENT.calculator.fields}
        results={HOA_PARKING_RESTRICTION_ANALYZER_CONTENT.calculator.results}
        calculation={HOA_PARKING_RESTRICTION_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HOAParkingRestrictionAnalyzerPage;

