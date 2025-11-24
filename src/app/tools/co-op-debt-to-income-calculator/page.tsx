'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CO_OP_DEBT_TO_INCOME_CALCULATOR_CONTENT } from '@/content/tools/co-op-debt-to-income-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CoOpDebtToIncomeCalculatorPage = () => {
  return (
    <CalculatorLayout content={CO_OP_DEBT_TO_INCOME_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CO_OP_DEBT_TO_INCOME_CALCULATOR_CONTENT.title}
        slug="co-op-debt-to-income-calculator"
        category="Real Estate"
        description={CO_OP_DEBT_TO_INCOME_CALCULATOR_CONTENT.description}
        inputs={CO_OP_DEBT_TO_INCOME_CALCULATOR_CONTENT.calculator.fields}
        results={CO_OP_DEBT_TO_INCOME_CALCULATOR_CONTENT.calculator.results}
        calculation={CO_OP_DEBT_TO_INCOME_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CoOpDebtToIncomeCalculatorPage;

