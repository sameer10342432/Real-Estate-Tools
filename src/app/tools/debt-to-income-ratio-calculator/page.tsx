
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Debt to Income Ratio Calculator',
    description: 'Calculate your debt-to-income ratio for loan qualification. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}


'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { DEBT_TO_INCOME_RATIO_CALCULATOR_CONTENT } from '@/content/tools/debt-to-income-ratio-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const DebtToIncomeRatioCalculatorPage = () => {
  return (
    <CalculatorLayout content={DEBT_TO_INCOME_RATIO_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={DEBT_TO_INCOME_RATIO_CALCULATOR_CONTENT.title}
        slug="debt-to-income-ratio-calculator"
        category="Real Estate"
        description={DEBT_TO_INCOME_RATIO_CALCULATOR_CONTENT.description}
        inputs={DEBT_TO_INCOME_RATIO_CALCULATOR_CONTENT.calculator.fields}
        results={DEBT_TO_INCOME_RATIO_CALCULATOR_CONTENT.calculator.results}
        calculation={DEBT_TO_INCOME_RATIO_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default DebtToIncomeRatioCalculatorPage;