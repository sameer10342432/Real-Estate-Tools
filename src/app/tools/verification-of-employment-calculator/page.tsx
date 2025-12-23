'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { VERIFICATION_OF_EMPLOYMENT_CALCULATOR_CONTENT } from '@/content/tools/verification-of-employment-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const VerificationOfEmploymentCalculatorPage = () => {
  return (
    <CalculatorLayout content={VERIFICATION_OF_EMPLOYMENT_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={VERIFICATION_OF_EMPLOYMENT_CALCULATOR_CONTENT.title}
        slug="verification-of-employment-calculator"
        category="Mortgage Qualification"
        description={VERIFICATION_OF_EMPLOYMENT_CALCULATOR_CONTENT.description}
        inputs={VERIFICATION_OF_EMPLOYMENT_CALCULATOR_CONTENT.calculator.fields}
        results={VERIFICATION_OF_EMPLOYMENT_CALCULATOR_CONTENT.calculator.results}
        calculation={VERIFICATION_OF_EMPLOYMENT_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default VerificationOfEmploymentCalculatorPage;
