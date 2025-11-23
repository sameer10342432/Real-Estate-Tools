
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'How Many Items Could I Buy for My Home?',
    description: 'Calculate how many luxury items, cars, vacations, or fun purchases you could buy for the price of your house.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { HowManyItemsCouldIBuyForHomeCalculatorContent } from '@/content/tools/how-many-items-could-i-buy-for-home-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HowManyItemsCouldIBuyForHomeCalculatorPage = () => {
  return (
    <CalculatorLayout content={HowManyItemsCouldIBuyForHomeCalculatorContent}>
      <EnhancedCalculator
        title={HowManyItemsCouldIBuyForHomeCalculatorContent.title}
        slug="how-many-items-could-i-buy-for-home-calculator"
        category="Additional Tools"
        description={HowManyItemsCouldIBuyForHomeCalculatorContent.description}
        inputs={HowManyItemsCouldIBuyForHomeCalculatorContent.calculator.fields}
        results={HowManyItemsCouldIBuyForHomeCalculatorContent.calculator.results}
        calculation={HowManyItemsCouldIBuyForHomeCalculatorContent.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HowManyItemsCouldIBuyForHomeCalculatorPage;
