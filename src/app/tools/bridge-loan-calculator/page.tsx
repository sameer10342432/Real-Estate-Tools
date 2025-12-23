'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { BRIDGE_LOAN_CALCULATOR_CONTENT } from '@/content/tools/bridge-loan-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const BridgeLoanCalculatorPage = () => {
  return (
    <CalculatorLayout content={BRIDGE_LOAN_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={BRIDGE_LOAN_CALCULATOR_CONTENT.title}
        slug="bridge-loan-calculator"
        category="Mortgage"
        description={BRIDGE_LOAN_CALCULATOR_CONTENT.description}
        inputs={BRIDGE_LOAN_CALCULATOR_CONTENT.calculator.fields}
        results={BRIDGE_LOAN_CALCULATOR_CONTENT.calculator.results}
        calculation={BRIDGE_LOAN_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default BridgeLoanCalculatorPage;
