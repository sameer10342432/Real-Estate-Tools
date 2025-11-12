'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { ALABAMA_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/alabama-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Alabama Transfer Tax & Mortgage Tax Calculator',
    description: 'Calculate Alabama transfer tax, mortgage tax, and recording fees. Free online tool for real estate professionals...',
  };
}

const AlabamaTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={ALABAMA_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={ALABAMA_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="alabama-transfer-tax-calculator"
        category="Seller Tools"
        description={ALABAMA_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={ALABAMA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={ALABAMA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={ALABAMA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default AlabamaTransferTaxCalculatorPage;
