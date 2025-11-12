
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Hawaii Transfer Tax Calculator - Conveyance Tax Calculator',
    description: 'Calculate Hawaii conveyance tax with tiered rates ($0.10-$1.25 per $100) and owner-occupant exemptions. Free HI real estate transfer cost calculator',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { HAWAII_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/hawaii-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HawaiiTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={HAWAII_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={HAWAII_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="hawaii-transfer-tax-calculator"
        category="Seller Tools"
        description={HAWAII_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={HAWAII_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={HAWAII_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={HAWAII_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HawaiiTransferTaxCalculatorPage;
