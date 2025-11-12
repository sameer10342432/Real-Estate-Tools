
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'West Virginia Transfer Tax Calculator - Real Estate Excise Tax',
    description: 'Calculate West Virginia transfer tax ($1.10 per $500 state + county add-ons). Includes Berkeley, Harrison, Marion county rates',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { WEST_VIRGINIA_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/west-virginia-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const WestVirginiaTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={WEST_VIRGINIA_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={WEST_VIRGINIA_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="west-virginia-transfer-tax-calculator"
        category="Seller Tools"
        description={WEST_VIRGINIA_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={WEST_VIRGINIA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={WEST_VIRGINIA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={WEST_VIRGINIA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default WestVirginiaTransferTaxCalculatorPage;
