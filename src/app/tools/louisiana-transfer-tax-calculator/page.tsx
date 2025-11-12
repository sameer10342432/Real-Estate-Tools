'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { LOUISIANA_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/louisiana-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Louisiana Transfer Tax & Recording Fee Calculator',
    description: 'Calculate Louisiana parish recording fees and Orleans Parish transfer tax. Free online tool for real estate professionals...',
  };
}

const LouisianaTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={LOUISIANA_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={LOUISIANA_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="louisiana-transfer-tax-calculator"
        category="Seller Tools"
        description={LOUISIANA_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={LOUISIANA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={LOUISIANA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={LOUISIANA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default LouisianaTransferTaxCalculatorPage;
