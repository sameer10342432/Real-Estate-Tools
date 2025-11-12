
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Nebraska Transfer Tax Calculator - Documentary Stamp Tax',
    description: 'Calculate Nebraska documentary stamp tax ($2.25-$2.32 per $1,000) effective through 2025. Free calculator for NE real estate transfer costs',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { NEBRASKA_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/nebraska-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const NebraskaTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={NEBRASKA_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={NEBRASKA_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="nebraska-transfer-tax-calculator"
        category="Seller Tools"
        description={NEBRASKA_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={NEBRASKA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={NEBRASKA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={NEBRASKA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default NebraskaTransferTaxCalculatorPage;
