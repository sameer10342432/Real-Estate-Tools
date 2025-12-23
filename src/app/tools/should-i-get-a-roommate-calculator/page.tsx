'use client';


async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Should I Get a Roommate? Calculator',
    description: 'Calculate and analyze your rental/buyer options with our free online tool for real estate professionals, investors, and homebuyers.',
  };
}




import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { SHOULD_I_GET_A_ROOMMATE_CALCULATOR_CONTENT } from '@/content/tools/should-i-get-a-roommate-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const Page = () => {
  return (
    <CalculatorLayout content={SHOULD_I_GET_A_ROOMMATE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={SHOULD_I_GET_A_ROOMMATE_CALCULATOR_CONTENT.title}
        slug="should-i-get-a-roommate-calculator"
        category="Renter Tools"
        description={SHOULD_I_GET_A_ROOMMATE_CALCULATOR_CONTENT.description}
        inputs={SHOULD_I_GET_A_ROOMMATE_CALCULATOR_CONTENT.calculator.fields}
        results={SHOULD_I_GET_A_ROOMMATE_CALCULATOR_CONTENT.calculator.results}
        calculation={SHOULD_I_GET_A_ROOMMATE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default Page;
