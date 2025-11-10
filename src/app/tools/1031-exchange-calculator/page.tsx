
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '1031 Exchange Calculator',
    description: 'Analyze tax benefits of 1031 like-kind exchanges. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}


import { exchange1031Calculator as EXCHANGE_CALCULATOR_CONTENT } from '@/content/tools/1031-exchange-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { ExchangeCalculator } from '@/components/calculators/ExchangeCalculator';

const ExchangeCalculatorPage = () => {
  return (
    <CalculatorLayout content={EXCHANGE_CALCULATOR_CONTENT}>
      <ExchangeCalculator />
    </CalculatorLayout>
  );
};

export default ExchangeCalculatorPage;