'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { NET_INVESTMENT_INCOME_TAX_CALCULATOR_CONTENT } from '@/content/tools/net-investment-income-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const NetInvestmentIncomeTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={NET_INVESTMENT_INCOME_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={NET_INVESTMENT_INCOME_TAX_CALCULATOR_CONTENT.title}
        slug="net-investment-income-tax-calculator"
        category="Tax Planning"
        description={NET_INVESTMENT_INCOME_TAX_CALCULATOR_CONTENT.description}
        inputs={NET_INVESTMENT_INCOME_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={NET_INVESTMENT_INCOME_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={NET_INVESTMENT_INCOME_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default NetInvestmentIncomeTaxCalculatorPage;
