
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Illinois Transfer Tax Calculator',
    description: 'Calculate Illinois state transfer tax and Chicago city transfer tax including Cook County rates. Free online tool for real estate professionals, investors, a...',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { ILLINOIS_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/illinois-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const IllinoisTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={ILLINOIS_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={ILLINOIS_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="illinois-transfer-tax-calculator"
        category="Seller Tools"
        description={ILLINOIS_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={ILLINOIS_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={ILLINOIS_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={ILLINOIS_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default IllinoisTransferTaxCalculatorPage;
