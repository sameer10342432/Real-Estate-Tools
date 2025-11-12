'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { OKLAHOMA_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/oklahoma-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Oklahoma Documentary Stamp Tax Calculator',
    description: 'Calculate Oklahoma documentary stamp tax and recording fees. Free online tool for real estate professionals...',
  };
}

const OklahomaTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={OKLAHOMA_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={OKLAHOMA_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="oklahoma-transfer-tax-calculator"
        category="Seller Tools"
        description={OKLAHOMA_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={OKLAHOMA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={OKLAHOMA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={OKLAHOMA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default OklahomaTransferTaxCalculatorPage;
