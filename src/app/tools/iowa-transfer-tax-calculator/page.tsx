'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { IOWA_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/iowa-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Iowa Transfer Tax Calculator - First $500 Exempt',
    description: 'Calculate Iowa real estate transfer tax with $500 exemption. Free online tool for real estate professionals...',
  };
}

const IowaTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={IOWA_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={IOWA_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="iowa-transfer-tax-calculator"
        category="Seller Tools"
        description={IOWA_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={IOWA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={IOWA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={IOWA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default IowaTransferTaxCalculatorPage;
