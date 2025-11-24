import { FORM_4797_SALE_CALCULATOR_CONTENT } from '@/content/tools/form-4797-sale-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { Form4797SaleCalculator } from '@/components/calculators/Form4797SaleCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Form 4797 Sale of Business Property Calculator | Depreciation Recapture',
    description: 'Calculate Form 4797 tax on sale of rental property or business real estate. Determine depreciation recapture, Section 1250 gain, and total tax liability.',
  };
}

const Form4797SaleCalculatorPage = () => {
  return (
    <CalculatorLayout content={FORM_4797_SALE_CALCULATOR_CONTENT}>
      <Form4797SaleCalculator />
    </CalculatorLayout>
  );
};

export default Form4797SaleCalculatorPage;
