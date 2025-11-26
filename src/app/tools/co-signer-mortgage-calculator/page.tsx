'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CO_SIGNER_MORTGAGE_CALCULATOR_CONTENT } from '@/content/tools/co-signer-mortgage-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CoSignerMortgageCalculatorPage = () => {
  return (
    <CalculatorLayout content={CO_SIGNER_MORTGAGE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CO_SIGNER_MORTGAGE_CALCULATOR_CONTENT.title}
        slug="co-signer-mortgage-calculator"
        category="Mortgage & Financing"
        description={CO_SIGNER_MORTGAGE_CALCULATOR_CONTENT.description}
        inputs={CO_SIGNER_MORTGAGE_CALCULATOR_CONTENT.calculator.fields}
        results={CO_SIGNER_MORTGAGE_CALCULATOR_CONTENT.calculator.results}
        calculation={CO_SIGNER_MORTGAGE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CoSignerMortgageCalculatorPage;
