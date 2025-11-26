'use client'

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { PROFIT_LOSS_STATEMENT_CALCULATOR_CONTENT } from '@/content/tools/profit-loss-statement-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ProfitLossStatementCalculatorPage = () => {
  return (
    <CalculatorLayout content={PROFIT_LOSS_STATEMENT_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={PROFIT_LOSS_STATEMENT_CALCULATOR_CONTENT.title}
        slug="profit-loss-statement-calculator"
        category="Self-Employed Loans"
        description={PROFIT_LOSS_STATEMENT_CALCULATOR_CONTENT.description}
        inputs={PROFIT_LOSS_STATEMENT_CALCULATOR_CONTENT.calculator.fields}
        results={PROFIT_LOSS_STATEMENT_CALCULATOR_CONTENT.calculator.results}
        calculation={PROFIT_LOSS_STATEMENT_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ProfitLossStatementCalculatorPage;
