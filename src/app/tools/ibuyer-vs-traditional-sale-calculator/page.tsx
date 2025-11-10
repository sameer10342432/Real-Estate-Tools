
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'iBuyer vs Traditional Sale Calculator',
    description: 'Compare instant cash offers from iBuyers (Opendoor, Offerpad, Zillow) versus traditional home sales through an agent. Free online tool for real estate profes...',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { IBUYER_VS_TRADITIONAL_SALE_CALCULATOR_CONTENT } from '@/content/tools/ibuyer-vs-traditional-sale-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const IBuyerVsTraditionalSaleCalculatorPage = () => {
  return (
    <CalculatorLayout content={IBUYER_VS_TRADITIONAL_SALE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={IBUYER_VS_TRADITIONAL_SALE_CALCULATOR_CONTENT.title}
        slug="ibuyer-vs-traditional-sale-calculator"
        category="Seller Tools"
        description={IBUYER_VS_TRADITIONAL_SALE_CALCULATOR_CONTENT.description}
        inputs={IBUYER_VS_TRADITIONAL_SALE_CALCULATOR_CONTENT.calculator.fields}
        results={IBUYER_VS_TRADITIONAL_SALE_CALCULATOR_CONTENT.calculator.results}
        calculation={IBUYER_VS_TRADITIONAL_SALE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default IBuyerVsTraditionalSaleCalculatorPage;
