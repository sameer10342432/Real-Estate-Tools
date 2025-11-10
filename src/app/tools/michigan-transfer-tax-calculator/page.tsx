
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Michigan Transfer Tax Calculator',
    description: 'Calculate Michigan state (0.75%) and county (0.11%) transfer tax for combined 0.86% rate. Free online tool for real estate professionals, investors, and home...',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { MICHIGAN_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/michigan-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const MichiganTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={MICHIGAN_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={MICHIGAN_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="michigan-transfer-tax-calculator"
        category="Seller Tools"
        description={MICHIGAN_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={MICHIGAN_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={MICHIGAN_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={MICHIGAN_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default MichiganTransferTaxCalculatorPage;
