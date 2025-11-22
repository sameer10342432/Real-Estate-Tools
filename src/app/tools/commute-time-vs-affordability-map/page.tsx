'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { COMMUTE_TIME_VS_AFFORDABILITY_MAP_CONTENT } from '@/content/tools/commute-time-vs-affordability-map';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CommuteTimeVsAffordabilityMapPage = () => {
  return (
    <CalculatorLayout content={COMMUTE_TIME_VS_AFFORDABILITY_MAP_CONTENT}>
      <EnhancedCalculator
        title={COMMUTE_TIME_VS_AFFORDABILITY_MAP_CONTENT.title}
        slug="commute-time-vs-affordability-map"
        category="Market Analysis"
        description={COMMUTE_TIME_VS_AFFORDABILITY_MAP_CONTENT.description}
        inputs={COMMUTE_TIME_VS_AFFORDABILITY_MAP_CONTENT.calculator.fields}
        results={COMMUTE_TIME_VS_AFFORDABILITY_MAP_CONTENT.calculator.results}
        calculation={COMMUTE_TIME_VS_AFFORDABILITY_MAP_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CommuteTimeVsAffordabilityMapPage;
