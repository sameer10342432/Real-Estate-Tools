
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'LLC vs. Sole Proprietorship (Real Estate) Analyzer',
    description: 'Compare LLC and Sole Proprietorship structures for real estate investing - analyze tax implications, liability protection, and administrative costs',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { LLC_VS_SOLE_PROP_ANALYZER_CONTENT } from '@/content/tools/llc-vs-sole-proprietorship-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';


const LLCvsSolePropAnalyzer = () => {
  return (
    <CalculatorLayout content={LLC_VS_SOLE_PROP_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={LLC_VS_SOLE_PROP_ANALYZER_CONTENT.title}
        slug={LLC_VS_SOLE_PROP_ANALYZER_CONTENT.slug}
        category={LLC_VS_SOLE_PROP_ANALYZER_CONTENT.category}
        description={LLC_VS_SOLE_PROP_ANALYZER_CONTENT.description}
        inputs={LLC_VS_SOLE_PROP_ANALYZER_CONTENT.calculator.fields}
        results={LLC_VS_SOLE_PROP_ANALYZER_CONTENT.calculator.results}
        calculation={LLC_VS_SOLE_PROP_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default LLCvsSolePropAnalyzer;
