
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'State-Specific Transfer Tax Calculator',
    description: 'Calculate real estate transfer taxes and recording fees by state. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const TransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="transfer-tax-calculator"
        category="Seller Tools"
        description={TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default TransferTaxCalculatorPage;
