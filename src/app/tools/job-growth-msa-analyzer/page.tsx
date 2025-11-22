
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Job Growth (by MSA) Analyzer',
    description: 'Analyze job growth trends by Metropolitan Statistical Area to identify strong real estate markets. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { JOB_GROWTH_MSA_ANALYZER_CONTENT } from '@/content/tools/job-growth-msa-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const JobGrowthMSAAnalyzerPage = () => {
  return (
    <CalculatorLayout content={JOB_GROWTH_MSA_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={JOB_GROWTH_MSA_ANALYZER_CONTENT.title}
        slug="job-growth-msa-analyzer"
        category="Market Analysis"
        description={JOB_GROWTH_MSA_ANALYZER_CONTENT.description}
        inputs={JOB_GROWTH_MSA_ANALYZER_CONTENT.calculator.fields}
        results={JOB_GROWTH_MSA_ANALYZER_CONTENT.calculator.results}
        calculation={JOB_GROWTH_MSA_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default JobGrowthMSAAnalyzerPage;