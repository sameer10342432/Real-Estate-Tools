'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { PORTFOLIO_LOAN_CALCULATOR_CONTENT } from '@/content/tools/portfolio-loan-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const PortfolioLoanCalculatorPage = () => {
  return (
    <CalculatorLayout content={PORTFOLIO_LOAN_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={PORTFOLIO_LOAN_CALCULATOR_CONTENT.title}
        slug="portfolio-loan-calculator"
        category="Investment"
        description={PORTFOLIO_LOAN_CALCULATOR_CONTENT.description}
        inputs={PORTFOLIO_LOAN_CALCULATOR_CONTENT.calculator.fields}
        results={PORTFOLIO_LOAN_CALCULATOR_CONTENT.calculator.results}
        calculation={PORTFOLIO_LOAN_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PortfolioLoanCalculatorPage;
