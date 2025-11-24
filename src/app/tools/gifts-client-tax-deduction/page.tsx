import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Gifts (Client) Tax Deduction Calculator | Property Tools',
    description: 'Calculate tax-deductible client gift expenses for real estate professionals. Understand the $25 limit per person rules with our free calculator.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { GIFTS_CLIENT_TAX_DEDUCTION_CONTENT } from '@/content/tools/gifts-client-tax-deduction';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const GiftsClientTaxDeductionPage = () => {
  return (
    <CalculatorLayout content={GIFTS_CLIENT_TAX_DEDUCTION_CONTENT}>
      <EnhancedCalculator
        title={GIFTS_CLIENT_TAX_DEDUCTION_CONTENT.title}
        slug="gifts-client-tax-deduction"
        category="Tax Strategy & Entity Planning"
        description={GIFTS_CLIENT_TAX_DEDUCTION_CONTENT.description}
        inputs={GIFTS_CLIENT_TAX_DEDUCTION_CONTENT.calculator.fields}
        results={GIFTS_CLIENT_TAX_DEDUCTION_CONTENT.calculator.results}
        calculation={GIFTS_CLIENT_TAX_DEDUCTION_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default GiftsClientTaxDeductionPage;
