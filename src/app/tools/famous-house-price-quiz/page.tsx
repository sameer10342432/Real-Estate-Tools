export async function generateMetadata() {
  return {
    title: 'How Much is This Famous House? Iconic Property Price Quiz | Property Tools',
    description: 'Test your real estate knowledge! Guess the value of famous houses from movies, TV shows, and history. Learn about iconic properties and their market values.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { FamousHousePriceQuizContent } from '@/content/tools/famous-house-price-quiz';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const FamousHousePriceQuizPage = () => {
  return (
    <CalculatorLayout content={FamousHousePriceQuizContent}>
      <EnhancedCalculator
        title={FamousHousePriceQuizContent.title}
        slug="famous-house-price-quiz"
        category="Additional Tools"
        description={FamousHousePriceQuizContent.description}
        inputs={FamousHousePriceQuizContent.calculator.fields}
        results={FamousHousePriceQuizContent.calculator.results}
        calculation={FamousHousePriceQuizContent.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default FamousHousePriceQuizPage;
