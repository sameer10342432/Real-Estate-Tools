'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { CONNECTICUT_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/connecticut-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Connecticut Conveyance Tax Calculator - Tiered Transfer Tax',
    description: 'Calculate Connecticut tiered conveyance tax and municipal transfer tax. Free online tool for real estate professionals...',
  };
}

const ConnecticutTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={CONNECTICUT_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CONNECTICUT_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="connecticut-transfer-tax-calculator"
        category="Seller Tools"
        description={CONNECTICUT_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={CONNECTICUT_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={CONNECTICUT_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={CONNECTICUT_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ConnecticutTransferTaxCalculatorPage;
