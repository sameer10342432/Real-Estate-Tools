
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Colorado Transfer Tax Calculator',
    description: 'Calculate Colorado county transfer fees. No state tax but varies by city. Includes Denver, Boulder, Aspen, Vail rates. Free online tool for real estate profe...',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { COLORADO_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/colorado-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ColoradoTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={COLORADO_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={COLORADO_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="colorado-transfer-tax-calculator"
        category="Seller Tools"
        description={COLORADO_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={COLORADO_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={COLORADO_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={COLORADO_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ColoradoTransferTaxCalculatorPage;
