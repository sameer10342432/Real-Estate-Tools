'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { UTAH_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/utah-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Utah Transfer Tax Calculator - NO Transfer Tax',
    description: 'Calculate Utah recording fees. Utah has NO state transfer tax - one of 13 states with $0 transfer tax...',
  };
}

const UtahTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={UTAH_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={UTAH_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="utah-transfer-tax-calculator"
        category="Seller Tools"
        description={UTAH_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={UTAH_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={UTAH_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={UTAH_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default UtahTransferTaxCalculatorPage;
