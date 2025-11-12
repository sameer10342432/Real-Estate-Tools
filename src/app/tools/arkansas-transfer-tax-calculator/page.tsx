
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Arkansas Transfer Tax Calculator - Real Estate Transfer Costs',
    description: 'Calculate Arkansas documentary stamp tax ($3.30 per $1,000) and recording fees for real estate transactions',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { ARKANSAS_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/arkansas-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ArkansasTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={ARKANSAS_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={ARKANSAS_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="arkansas-transfer-tax-calculator"
        category="Seller Tools"
        description={ARKANSAS_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={ARKANSAS_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={ARKANSAS_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={ARKANSAS_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ArkansasTransferTaxCalculatorPage;
