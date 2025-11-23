'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { LOAN_CONSTANT_MORTGAGE_CONTENT } from '@/content/tools/loan-constant-mortgage';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const LoanConstantMortgagePage = () => {
  return (
    <CalculatorLayout content={LOAN_CONSTANT_MORTGAGE_CONTENT}>
      <EnhancedCalculator
        title={LOAN_CONSTANT_MORTGAGE_CONTENT.title}
        slug="loan-constant-mortgage"
        category="Real Estate"
        description={LOAN_CONSTANT_MORTGAGE_CONTENT.description}
        inputs={LOAN_CONSTANT_MORTGAGE_CONTENT.calculator.fields}
        results={LOAN_CONSTANT_MORTGAGE_CONTENT.calculator.results}
        calculation={LOAN_CONSTANT_MORTGAGE_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default LoanConstantMortgagePage;
