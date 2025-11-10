
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'New Jersey Transfer Tax Calculator',
    description: 'Calculate New Jersey realty transfer fee (1%) and mansion tax (1% over $1M) for properties. Free online tool for real estate professionals, investors, and ho...',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { NEW_JERSEY_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/new-jersey-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const NewJerseyTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={NEW_JERSEY_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={NEW_JERSEY_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="new-jersey-transfer-tax-calculator"
        category="Seller Tools"
        description={NEW_JERSEY_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={NEW_JERSEY_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={NEW_JERSEY_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={NEW_JERSEY_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default NewJerseyTransferTaxCalculatorPage;
