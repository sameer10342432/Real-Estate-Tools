
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Pennsylvania Transfer Tax Calculator',
    description: 'Calculate Pennsylvania state (1%) and local (1%) transfer tax including Philadelphia and Pittsburgh special rates. Free online tool for real estate professio...',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { PENNSYLVANIA_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/pennsylvania-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const PennsylvaniaTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={PENNSYLVANIA_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={PENNSYLVANIA_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="pennsylvania-transfer-tax-calculator"
        category="Seller Tools"
        description={PENNSYLVANIA_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={PENNSYLVANIA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={PENNSYLVANIA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={PENNSYLVANIA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PennsylvaniaTransferTaxCalculatorPage;
