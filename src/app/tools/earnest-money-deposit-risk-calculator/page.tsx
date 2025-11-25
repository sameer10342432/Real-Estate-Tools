import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { EARNEST_MONEY_DEPOSIT_RISK_CALCULATOR_CONTENT } from '@/content/tools/earnest-money-deposit-risk-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Earnest Money Deposit Risk Calculator | EMD Amount & Protection Analysis',
    description: 'Calculate optimal earnest money deposit amounts, analyze risk of forfeiture, and understand contingency protection. Evaluate offer competitiveness and acceptance probability.',
  };
}

const EarnestMoneyDepositRiskCalculatorPage = () => {
  return (
    <CalculatorLayout content={EARNEST_MONEY_DEPOSIT_RISK_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={EARNEST_MONEY_DEPOSIT_RISK_CALCULATOR_CONTENT.title}
        slug="earnest-money-deposit-risk-calculator"
        category="Buyer Tools"
        description={EARNEST_MONEY_DEPOSIT_RISK_CALCULATOR_CONTENT.description}
        inputs={EARNEST_MONEY_DEPOSIT_RISK_CALCULATOR_CONTENT.calculator.fields}
        results={EARNEST_MONEY_DEPOSIT_RISK_CALCULATOR_CONTENT.calculator.results}
        calculation={EARNEST_MONEY_DEPOSIT_RISK_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default EarnestMoneyDepositRiskCalculatorPage;
