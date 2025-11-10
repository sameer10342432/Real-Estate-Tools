
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'US ZIP Code Demographics Analyzer',
    description: 'Analyze ZIP code demographics including population, income, age, education, and housing data to identify target markets for investment',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { ZIP_CODE_DEMOGRAPHICS_ANALYZER_CONTENT } from '@/content/tools/zip-code-demographics-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';


const ZIPCodeDemographicsAnalyzer = () => {
  return (
    <CalculatorLayout content={ZIP_CODE_DEMOGRAPHICS_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={ZIP_CODE_DEMOGRAPHICS_ANALYZER_CONTENT.title}
        slug={ZIP_CODE_DEMOGRAPHICS_ANALYZER_CONTENT.slug}
        category={ZIP_CODE_DEMOGRAPHICS_ANALYZER_CONTENT.category}
        description={ZIP_CODE_DEMOGRAPHICS_ANALYZER_CONTENT.description}
        inputs={ZIP_CODE_DEMOGRAPHICS_ANALYZER_CONTENT.calculator.fields}
        results={ZIP_CODE_DEMOGRAPHICS_ANALYZER_CONTENT.calculator.results}
        calculation={ZIP_CODE_DEMOGRAPHICS_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ZIPCodeDemographicsAnalyzer;
