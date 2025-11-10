
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'School Rating by Address Calculator',
    description: 'Check school quality ratings and rankings for any address to assess family appeal and property value impact. Free online tool for real estate professionals, ...',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { SCHOOL_RATING_ANALYZER_CONTENT } from '@/content/tools/school-rating-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';


const SchoolRatingAnalyzer = () => {
  return (
    <CalculatorLayout content={SCHOOL_RATING_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={SCHOOL_RATING_ANALYZER_CONTENT.title}
        slug={SCHOOL_RATING_ANALYZER_CONTENT.slug}
        category={SCHOOL_RATING_ANALYZER_CONTENT.category}
        description={SCHOOL_RATING_ANALYZER_CONTENT.description}
        inputs={SCHOOL_RATING_ANALYZER_CONTENT.calculator.fields}
        results={SCHOOL_RATING_ANALYZER_CONTENT.calculator.results}
        calculation={SCHOOL_RATING_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default SchoolRatingAnalyzer;
