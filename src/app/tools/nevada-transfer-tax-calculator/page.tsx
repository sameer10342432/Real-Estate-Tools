
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Nevada Transfer Tax Calculator - Real Estate Transfer Costs',
    description: 'Calculate Nevada real estate transfer tax and county surcharges for Clark, Washoe, and all NV counties',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { NEVADA_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/nevada-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const NevadaTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={NEVADA_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={NEVADA_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="nevada-transfer-tax-calculator"
        category="Seller Tools"
        description={NEVADA_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={NEVADA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={NEVADA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={NEVADA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default NevadaTransferTaxCalculatorPage;
