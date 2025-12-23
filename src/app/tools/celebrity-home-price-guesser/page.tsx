'use client';
async function _generateMetadata() {
  return {
    title: 'Celebrity Home Price Guesser - Famous House Price Quiz Game | Property Tools',
    description: 'Test your knowledge of celebrity real estate! Guess the prices of famous mansions, estates, and luxury homes owned by celebrities. Fun property valuation game.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CelebrityHomePriceGuesserContent } from '@/content/tools/celebrity-home-price-guesser';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CelebrityHomePriceGuesserPage = () => {
  return (
    <CalculatorLayout content={CelebrityHomePriceGuesserContent}>
      <EnhancedCalculator
        title={CelebrityHomePriceGuesserContent.title}
        slug="celebrity-home-price-guesser"
        category="Additional Tools"
        description={CelebrityHomePriceGuesserContent.description}
        inputs={CelebrityHomePriceGuesserContent.calculator.fields}
        results={CelebrityHomePriceGuesserContent.calculator.results}
        calculation={CelebrityHomePriceGuesserContent.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CelebrityHomePriceGuesserPage;
