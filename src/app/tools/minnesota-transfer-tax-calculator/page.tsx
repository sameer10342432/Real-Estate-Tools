
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Minnesota Transfer Tax (Deed Tax) Calculator',
    description: 'Calculate Minnesota deed tax, recording fees, well disclosure, and agricultural conservation fees. Free online tool for real estate professionals...',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { MINNESOTA_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/minnesota-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const MinnesotaTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={MINNESOTA_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={MINNESOTA_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="minnesota-transfer-tax-calculator"
        category="Seller Tools"
        description={MINNESOTA_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={MINNESOTA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={MINNESOTA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={MINNESOTA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default MinnesotaTransferTaxCalculatorPage;
