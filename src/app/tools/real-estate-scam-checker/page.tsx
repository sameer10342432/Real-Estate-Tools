import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Real Estate Scam Checker - Identify Fraud & Warning Signs',
    description: 'Identify common real estate scams and warning signs. Protect yourself from fraud, fake listings, wire fraud, and rental scams.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { REAL_ESTATE_SCAM_CHECKER_CONTENT } from '@/content/tools/real-estate-scam-checker';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const RealEstateScamCheckerPage = () => {
  return (
    <CalculatorLayout content={REAL_ESTATE_SCAM_CHECKER_CONTENT}>
      <EnhancedCalculator
        title={REAL_ESTATE_SCAM_CHECKER_CONTENT.title}
        slug="real-estate-scam-checker"
        category="Real Estate"
        description={REAL_ESTATE_SCAM_CHECKER_CONTENT.description}
        inputs={REAL_ESTATE_SCAM_CHECKER_CONTENT.calculator.fields}
        results={REAL_ESTATE_SCAM_CHECKER_CONTENT.calculator.results}
        calculation={REAL_ESTATE_SCAM_CHECKER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default RealEstateScamCheckerPage;
