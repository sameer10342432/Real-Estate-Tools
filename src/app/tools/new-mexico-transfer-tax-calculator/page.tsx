
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'New Mexico Transfer Tax Calculator - Real Estate Recording Fees',
    description: 'Calculate New Mexico real estate costs. No state transfer tax - only county recording fees. Learn actual NM closing costs',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { NEW_MEXICO_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/new-mexico-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const NewMexicoTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={NEW_MEXICO_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={NEW_MEXICO_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="new-mexico-transfer-tax-calculator"
        category="Seller Tools"
        description={NEW_MEXICO_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={NEW_MEXICO_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={NEW_MEXICO_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={NEW_MEXICO_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default NewMexicoTransferTaxCalculatorPage;
