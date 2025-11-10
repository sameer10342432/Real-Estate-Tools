
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Ohio Transfer Tax Calculator',
    description: 'Calculate Ohio county conveyance fees by county. Ohio has no state transfer tax - only county fees. Free online tool for real estate professionals, investors...',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { OHIO_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/ohio-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const OhioTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={OHIO_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={OHIO_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="ohio-transfer-tax-calculator"
        category="Seller Tools"
        description={OHIO_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={OHIO_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={OHIO_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={OHIO_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default OhioTransferTaxCalculatorPage;
