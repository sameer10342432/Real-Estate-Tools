export async function generateMetadata() {
  return {
    title: 'Am I Ready to Sell My House? Home Selling Readiness Quiz | Property Tools',
    description: 'Find out if now is the right time to sell your home. Assess equity, market conditions, finances, timing, and emotional readiness for maximum profit.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { AmIReadyToSellHouseQuizContent } from '@/content/tools/am-i-ready-to-sell-house-quiz';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const AmIReadyToSellHouseQuizPage = () => {
  return (
    <CalculatorLayout content={AmIReadyToSellHouseQuizContent}>
      <EnhancedCalculator
        title={AmIReadyToSellHouseQuizContent.title}
        slug="am-i-ready-to-sell-house-quiz"
        category="Additional Tools"
        description={AmIReadyToSellHouseQuizContent.description}
        inputs={AmIReadyToSellHouseQuizContent.calculator.fields}
        results={AmIReadyToSellHouseQuizContent.calculator.results}
        calculation={AmIReadyToSellHouseQuizContent.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default AmIReadyToSellHouseQuizPage;
