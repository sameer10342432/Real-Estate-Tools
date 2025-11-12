
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'South Carolina Transfer Tax (Deed Recording Fee) Calculator',
    description: 'Calculate South Carolina deed recording fees, transfer tax, and closing costs. Free online tool for real estate professionals...',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { SOUTH_CAROLINA_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/south-carolina-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const SouthCarolinaTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={SOUTH_CAROLINA_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={SOUTH_CAROLINA_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="south-carolina-transfer-tax-calculator"
        category="Seller Tools"
        description={SOUTH_CAROLINA_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={SOUTH_CAROLINA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={SOUTH_CAROLINA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={SOUTH_CAROLINA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default SouthCarolinaTransferTaxCalculatorPage;
