'use client';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Appraisal Gap Coverage Calculator | Low Appraisal Strategy Tool',
    description: 'Calculate how much appraisal gap coverage to offer when buying a home. Protect yourself from low appraisals while making competitive offers in hot markets.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { APPRAISAL_GAP_COVERAGE_CALCULATOR_CONTENT } from '@/content/tools/appraisal-gap-coverage-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const AppraisalGapCoverageCalculatorPage = () => {
  return (
    <CalculatorLayout content={APPRAISAL_GAP_COVERAGE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={APPRAISAL_GAP_COVERAGE_CALCULATOR_CONTENT.title}
        slug="appraisal-gap-coverage-calculator"
        category="Real Estate"
        description={APPRAISAL_GAP_COVERAGE_CALCULATOR_CONTENT.description}
        inputs={APPRAISAL_GAP_COVERAGE_CALCULATOR_CONTENT.calculator.fields}
        results={APPRAISAL_GAP_COVERAGE_CALCULATOR_CONTENT.calculator.results}
        calculation={APPRAISAL_GAP_COVERAGE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default AppraisalGapCoverageCalculatorPage;
