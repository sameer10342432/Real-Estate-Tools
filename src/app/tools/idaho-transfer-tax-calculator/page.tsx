
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Idaho Transfer Tax Calculator - Real Estate Recording Fees',
    description: 'Calculate Idaho real estate costs. No state transfer tax - only county recording fees ($15-$30). Learn actual ID closing costs',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { IDAHO_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/idaho-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const IdahoTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={IDAHO_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={IDAHO_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="idaho-transfer-tax-calculator"
        category="Seller Tools"
        description={IDAHO_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={IDAHO_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={IDAHO_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={IDAHO_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default IdahoTransferTaxCalculatorPage;
