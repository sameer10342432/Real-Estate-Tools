
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Property History Analyzer (Sales/Price)',
    description: 'Analyze property sales history, price trends, and transaction patterns to identify opportunities and assess appreciation potential',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { PROPERTY_HISTORY_ANALYZER_CONTENT } from '@/content/tools/property-history-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';


const PropertyHistoryAnalyzer = () => {
  return (
    <CalculatorLayout content={PROPERTY_HISTORY_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={PROPERTY_HISTORY_ANALYZER_CONTENT.title}
        slug={PROPERTY_HISTORY_ANALYZER_CONTENT.slug}
        category={PROPERTY_HISTORY_ANALYZER_CONTENT.category}
        description={PROPERTY_HISTORY_ANALYZER_CONTENT.description}
        inputs={PROPERTY_HISTORY_ANALYZER_CONTENT.calculator.fields}
        results={PROPERTY_HISTORY_ANALYZER_CONTENT.calculator.results}
        calculation={PROPERTY_HISTORY_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PropertyHistoryAnalyzer;
