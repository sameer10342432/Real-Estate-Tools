'use client';


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CONTRACTOR_RED_FLAG_CHECKER_CONTENT } from '@/content/tools/contractor-red-flag-checker';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ContractorRedFlagCheckerPage = () => {
  return (
    <CalculatorLayout content={CONTRACTOR_RED_FLAG_CHECKER_CONTENT}>
      <EnhancedCalculator
        title={CONTRACTOR_RED_FLAG_CHECKER_CONTENT.title}
        slug="contractor-red-flag-checker"
        category="Real Estate"
        description={CONTRACTOR_RED_FLAG_CHECKER_CONTENT.description}
        inputs={CONTRACTOR_RED_FLAG_CHECKER_CONTENT.calculator.fields}
        results={CONTRACTOR_RED_FLAG_CHECKER_CONTENT.calculator.results}
        calculation={CONTRACTOR_RED_FLAG_CHECKER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ContractorRedFlagCheckerPage;
