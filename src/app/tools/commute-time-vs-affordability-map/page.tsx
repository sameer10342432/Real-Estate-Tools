
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Commute Time vs Affordability Calculator | Housing Location Analysis - Free Tool',
    description: 'Analyze the trade-off between commute time and housing affordability. Calculate commute costs, time value, and find optimal living location balance with free calculator.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
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
