
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Maryland Transfer Tax Calculator',
    description: 'Calculate Maryland state (0.5%) and county (1.5%) transfer tax plus recordation tax for Baltimore and all MD counties. Free online tool for real estate profe...',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { MARYLAND_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/maryland-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const MarylandTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={MARYLAND_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={MARYLAND_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="maryland-transfer-tax-calculator"
        category="Seller Tools"
        description={MARYLAND_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={MARYLAND_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={MARYLAND_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={MARYLAND_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default MarylandTransferTaxCalculatorPage;
