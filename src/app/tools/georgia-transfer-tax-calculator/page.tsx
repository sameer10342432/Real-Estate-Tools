
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Georgia Transfer Tax Calculator',
    description: 'Calculate Georgia state transfer tax (0.1%) and intangible recording tax (0.3%) for mortgages. Free online tool for real estate professionals, investors, and...',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { GEORGIA_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/georgia-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const GeorgiaTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={GEORGIA_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={GEORGIA_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="georgia-transfer-tax-calculator"
        category="Seller Tools"
        description={GEORGIA_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={GEORGIA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={GEORGIA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={GEORGIA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default GeorgiaTransferTaxCalculatorPage;
