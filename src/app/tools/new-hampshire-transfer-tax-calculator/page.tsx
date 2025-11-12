
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'New Hampshire Transfer Tax Calculator - Real Estate Transfer Tax',
    description: 'Calculate New Hampshire transfer tax ($0.75 per $100 each for buyer and seller = 1.5% total). Free NH real estate transfer cost calculator',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { NEW_HAMPSHIRE_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/new-hampshire-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const NewHampshireTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={NEW_HAMPSHIRE_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={NEW_HAMPSHIRE_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="new-hampshire-transfer-tax-calculator"
        category="Seller Tools"
        description={NEW_HAMPSHIRE_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={NEW_HAMPSHIRE_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={NEW_HAMPSHIRE_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={NEW_HAMPSHIRE_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default NewHampshireTransferTaxCalculatorPage;
