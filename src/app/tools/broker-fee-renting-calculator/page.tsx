'use client';


async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Broker Fee Calculator (Renting)',
    description: 'Calculate and analyze your rental/buyer options with our free online tool for real estate professionals, investors, and homebuyers.',
  };
}




import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { BROKER_FEE_RENTING_CALCULATOR_CONTENT } from '@/content/tools/broker-fee-renting-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const Page = () => {
  return (
    <CalculatorLayout content={BROKER_FEE_RENTING_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={BROKER_FEE_RENTING_CALCULATOR_CONTENT.title}
        slug="broker-fee-renting-calculator"
        category="Renter Tools"
        description={BROKER_FEE_RENTING_CALCULATOR_CONTENT.description}
        inputs={BROKER_FEE_RENTING_CALCULATOR_CONTENT.calculator.fields}
        results={BROKER_FEE_RENTING_CALCULATOR_CONTENT.calculator.results}
        calculation={BROKER_FEE_RENTING_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default Page;
