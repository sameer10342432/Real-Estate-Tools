'use client';


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
