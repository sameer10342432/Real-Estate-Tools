'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { HOME_EQUITY_TO_INVEST_CALCULATOR_CONTENT } from '@/content/tools/home-equity-to-invest-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home Equity to Invest Calculator - Should You Leverage Home Equity for Investments?',
    description: 'Calculate potential returns, risks, and monthly costs of using home equity (HELOC or cash-out refinance) to invest in stocks, real estate, or business. Compare leveraged vs unleveraged investment scenarios.',
  };
}

const HomeEquityToInvestCalculatorPage = () => {
  return (
    <CalculatorLayout content={HOME_EQUITY_TO_INVEST_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={HOME_EQUITY_TO_INVEST_CALCULATOR_CONTENT.title}
        slug="home-equity-to-invest-calculator"
        category="Investment Analysis"
        description={HOME_EQUITY_TO_INVEST_CALCULATOR_CONTENT.description}
        inputs={HOME_EQUITY_TO_INVEST_CALCULATOR_CONTENT.calculator.fields}
        results={HOME_EQUITY_TO_INVEST_CALCULATOR_CONTENT.calculator.results}
        calculation={HOME_EQUITY_TO_INVEST_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HomeEquityToInvestCalculatorPage;