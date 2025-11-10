
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Florida Transfer Tax (Doc Stamps) Calculator',
    description: 'Calculate Florida documentary stamp tax, intangible tax, and recording fees including Miami-Dade special rates. Free online tool for real estate professional...',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { FLORIDA_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/florida-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const FloridaTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={FLORIDA_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={FLORIDA_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="florida-transfer-tax-calculator"
        category="Seller Tools"
        description={FLORIDA_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={FLORIDA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={FLORIDA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={FLORIDA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default FloridaTransferTaxCalculatorPage;
