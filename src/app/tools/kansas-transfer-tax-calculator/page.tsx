
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Kansas Transfer Tax Calculator - Real Estate Recording Fees',
    description: 'Calculate Kansas real estate costs. No state transfer tax since 2019 - only county recording fees. Learn actual KS closing costs',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { KANSAS_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/kansas-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const KansasTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={KANSAS_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={KANSAS_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="kansas-transfer-tax-calculator"
        category="Seller Tools"
        description={KANSAS_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={KANSAS_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={KANSAS_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={KANSAS_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default KansasTransferTaxCalculatorPage;
