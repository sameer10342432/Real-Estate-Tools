
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'North Carolina Transfer Tax Calculator',
    description: 'Calculate North Carolina excise tax (0.2%) and recording fees. No county or city transfer taxes in NC. Free online tool for real estate professionals, invest...',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { NORTH_CAROLINA_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/north-carolina-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const NorthCarolinaTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={NORTH_CAROLINA_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={NORTH_CAROLINA_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="north-carolina-transfer-tax-calculator"
        category="Seller Tools"
        description={NORTH_CAROLINA_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={NORTH_CAROLINA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={NORTH_CAROLINA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={NORTH_CAROLINA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default NorthCarolinaTransferTaxCalculatorPage;
