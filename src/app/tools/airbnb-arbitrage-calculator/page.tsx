
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Airbnb Arbitrage Calculator',
    description: 'Calculate Airbnb arbitrage profits from subletting long-term rentals as STRs. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { AIRBNB_ARBITRAGE_CALCULATOR_CONTENT } from '@/content/tools/airbnb-arbitrage-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const AirbnbArbitrageCalculatorPage = () => {
  return (
    <CalculatorLayout content={AIRBNB_ARBITRAGE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={AIRBNB_ARBITRAGE_CALCULATOR_CONTENT.title}
        slug="airbnb-arbitrage-calculator"
        category="Rental & Income"
        description={AIRBNB_ARBITRAGE_CALCULATOR_CONTENT.description}
        inputs={AIRBNB_ARBITRAGE_CALCULATOR_CONTENT.calculator.fields}
        results={AIRBNB_ARBITRAGE_CALCULATOR_CONTENT.calculator.results}
        calculation={AIRBNB_ARBITRAGE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default AirbnbArbitrageCalculatorPage;
