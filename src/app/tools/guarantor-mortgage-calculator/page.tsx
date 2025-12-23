'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { GUARANTOR_MORTGAGE_CALCULATOR_CONTENT } from '@/content/tools/guarantor-mortgage-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const GuarantorMortgageCalculatorPage = () => {
  return (
    <CalculatorLayout content={GUARANTOR_MORTGAGE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={GUARANTOR_MORTGAGE_CALCULATOR_CONTENT.title}
        slug="guarantor-mortgage-calculator"
        category="Mortgage & Financing"
        description={GUARANTOR_MORTGAGE_CALCULATOR_CONTENT.description}
        inputs={GUARANTOR_MORTGAGE_CALCULATOR_CONTENT.calculator.fields}
        results={GUARANTOR_MORTGAGE_CALCULATOR_CONTENT.calculator.results}
        calculation={GUARANTOR_MORTGAGE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default GuarantorMortgageCalculatorPage;
