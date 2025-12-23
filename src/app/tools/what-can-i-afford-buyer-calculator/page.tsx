'use client';


async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'What Can I Afford Calculator (Buyer)',
    description: 'Calculate and analyze your rental/buyer options with our free online tool for real estate professionals, investors, and homebuyers.',
  };
}




import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { WHAT_CAN_I_AFFORD_BUYER_CALCULATOR_CONTENT } from '@/content/tools/what-can-i-afford-buyer-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const Page = () => {
  return (
    <CalculatorLayout content={WHAT_CAN_I_AFFORD_BUYER_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={WHAT_CAN_I_AFFORD_BUYER_CALCULATOR_CONTENT.title}
        slug="what-can-i-afford-buyer-calculator"
        category="Buyer Tools"
        description={WHAT_CAN_I_AFFORD_BUYER_CALCULATOR_CONTENT.description}
        inputs={WHAT_CAN_I_AFFORD_BUYER_CALCULATOR_CONTENT.calculator.fields}
        results={WHAT_CAN_I_AFFORD_BUYER_CALCULATOR_CONTENT.calculator.results}
        calculation={WHAT_CAN_I_AFFORD_BUYER_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default Page;
