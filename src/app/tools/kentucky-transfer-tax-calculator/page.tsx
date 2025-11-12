'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { KENTUCKY_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/kentucky-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Kentucky Deed Tax Calculator',
    description: 'Calculate Kentucky deed tax and recording fees. Free online tool for real estate professionals...',
  };
}

const KentuckyTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={KENTUCKY_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={KENTUCKY_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="kentucky-transfer-tax-calculator"
        category="Seller Tools"
        description={KENTUCKY_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={KENTUCKY_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={KENTUCKY_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={KENTUCKY_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default KentuckyTransferTaxCalculatorPage;
