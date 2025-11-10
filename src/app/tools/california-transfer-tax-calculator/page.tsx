
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'California Transfer Tax Calculator',
    description: 'Calculate California county and city transfer tax including San Francisco, Oakland, LA rates. Progressive rates up to 6% for luxury properties',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { CALIFORNIA_TRANSFER_TAX_CALCULATOR_CONTENT } from '@/content/tools/california-transfer-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CaliforniaTransferTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={CALIFORNIA_TRANSFER_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CALIFORNIA_TRANSFER_TAX_CALCULATOR_CONTENT.title}
        slug="california-transfer-tax-calculator"
        category="Seller Tools"
        description={CALIFORNIA_TRANSFER_TAX_CALCULATOR_CONTENT.description}
        inputs={CALIFORNIA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={CALIFORNIA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={CALIFORNIA_TRANSFER_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CaliforniaTransferTaxCalculatorPage;
