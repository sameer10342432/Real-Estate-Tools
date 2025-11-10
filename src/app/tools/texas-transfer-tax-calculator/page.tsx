
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Texas Transfer Tax Calculator',
    description: 'Calculate Texas real estate transfer costs and county recording fees. Texas has no state transfer tax - learn actual closing costs',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { TEXAS_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/texas-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const TexasTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={TEXAS_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={TEXAS_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="texas-transfer-tax-calculator"
        category="Seller Tools"
        description={TEXAS_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={TEXAS_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={TEXAS_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={TEXAS_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default TexasTransferTaxCalculatorPage;
