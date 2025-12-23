'use client';


async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Rent vs. Buy Calculator (Simple)',
    description: 'Calculate and analyze your rental/buyer options with our free online tool for real estate professionals, investors, and homebuyers.',
  };
}




import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { RENT_VS_BUY_SIMPLE_CALCULATOR_CONTENT } from '@/content/tools/rent-vs-buy-simple-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const Page = () => {
  return (
    <CalculatorLayout content={RENT_VS_BUY_SIMPLE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={RENT_VS_BUY_SIMPLE_CALCULATOR_CONTENT.title}
        slug="rent-vs-buy-simple-calculator"
        category="Buyer Tools"
        description={RENT_VS_BUY_SIMPLE_CALCULATOR_CONTENT.description}
        inputs={RENT_VS_BUY_SIMPLE_CALCULATOR_CONTENT.calculator.fields}
        results={RENT_VS_BUY_SIMPLE_CALCULATOR_CONTENT.calculator.results}
        calculation={RENT_VS_BUY_SIMPLE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default Page;
