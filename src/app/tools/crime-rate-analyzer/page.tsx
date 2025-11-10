
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Crime Rate by Address Analyzer',
    description: 'Analyze crime statistics and safety metrics for any neighborhood to assess property investment risk and tenant appeal. Free online tool for real estate profe...',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { CRIME_RATE_ANALYZER_CONTENT } from '@/content/tools/crime-rate-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';


const CrimeRateAnalyzer = () => {
  return (
    <CalculatorLayout content={CRIME_RATE_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={CRIME_RATE_ANALYZER_CONTENT.title}
        slug={CRIME_RATE_ANALYZER_CONTENT.slug}
        category={CRIME_RATE_ANALYZER_CONTENT.category}
        description={CRIME_RATE_ANALYZER_CONTENT.description}
        inputs={CRIME_RATE_ANALYZER_CONTENT.calculator.fields}
        results={CRIME_RATE_ANALYZER_CONTENT.calculator.results}
        calculation={CRIME_RATE_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CrimeRateAnalyzer;
