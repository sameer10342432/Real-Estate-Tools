
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Mississippi Transfer Tax Calculator - Real Estate Recording Fees',
    description: 'Calculate Mississippi real estate transfer costs. Mississippi has no state transfer tax - learn actual closing costs and recording fees',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { MISSISSIPPI_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/mississippi-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const MississippiTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={MISSISSIPPI_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={MISSISSIPPI_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="mississippi-transfer-tax-calculator"
        category="Seller Tools"
        description={MISSISSIPPI_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={MISSISSIPPI_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={MISSISSIPPI_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={MISSISSIPPI_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default MississippiTransferTaxCalculatorPage;
