'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { OREGON_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/oregon-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Oregon Transfer Tax & Recording Fee Calculator',
    description: 'Calculate Oregon recording fees and Washington County transfer tax. Free online tool for real estate professionals...',
  };
}

const OregonTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={OREGON_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={OREGON_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="oregon-transfer-tax-calculator"
        category="Seller Tools"
        description={OREGON_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={OREGON_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={OREGON_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={OREGON_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default OregonTransferTaxCalculatorPage;
