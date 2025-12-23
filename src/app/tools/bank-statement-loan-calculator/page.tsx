'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { BANK_STATEMENT_LOAN_CALCULATOR_CONTENT } from '@/content/tools/bank-statement-loan-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const BankStatementLoanCalculatorPage = () => {
  return (
    <CalculatorLayout content={BANK_STATEMENT_LOAN_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={BANK_STATEMENT_LOAN_CALCULATOR_CONTENT.title}
        slug="bank-statement-loan-calculator"
        category="Mortgage"
        description={BANK_STATEMENT_LOAN_CALCULATOR_CONTENT.description}
        inputs={BANK_STATEMENT_LOAN_CALCULATOR_CONTENT.calculator.fields}
        results={BANK_STATEMENT_LOAN_CALCULATOR_CONTENT.calculator.results}
        calculation={BANK_STATEMENT_LOAN_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default BankStatementLoanCalculatorPage;
