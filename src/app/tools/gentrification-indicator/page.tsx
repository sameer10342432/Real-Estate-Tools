
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Gentrification Indicator Tool | Neighborhood Investment Analysis - Free Real Estate Tool',
    description: 'Analyze gentrification trends and predict property value appreciation. Identify emerging neighborhoods and investment opportunities with gentrification indicators and data-driven insights.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { GENTRIFICATION_INDICATOR_CONTENT } from '@/content/tools/gentrification-indicator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const GentrificationIndicatorPage = () => {
  return (
    <CalculatorLayout content={GENTRIFICATION_INDICATOR_CONTENT}>
      <EnhancedCalculator
        title={GENTRIFICATION_INDICATOR_CONTENT.title}
        slug="gentrification-indicator"
        category="Market Analysis"
        description={GENTRIFICATION_INDICATOR_CONTENT.description}
        inputs={GENTRIFICATION_INDICATOR_CONTENT.calculator.fields}
        results={GENTRIFICATION_INDICATOR_CONTENT.calculator.results}
        calculation={GENTRIFICATION_INDICATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default GentrificationIndicatorPage;
