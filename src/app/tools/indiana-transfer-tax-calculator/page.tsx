
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Indiana Transfer Tax Calculator',
    description: 'Calculate Indiana real estate costs. No state transfer tax - only county recording fees. Learn actual Indiana closing costs Make informed property decisions with accurate calculations.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { INDIANA_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/indiana-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const IndianaTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={INDIANA_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={INDIANA_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="indiana-transfer-tax-calculator"
        category="Seller Tools"
        description={INDIANA_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={INDIANA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={INDIANA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={INDIANA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default IndianaTransferTaxCalculatorPage;
