export async function generateMetadata() {
  return {
    title: 'Am I Ready to Buy a House? Homebuyer Readiness Quiz | Property Tools',
    description: 'Find out if you\'re financially and emotionally ready to buy a home. Assess your credit, savings, debt, income stability, and long-term commitment.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { AmIReadyToBuyHouseQuizContent } from '@/content/tools/am-i-ready-to-buy-house-quiz';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const AmIReadyToBuyHouseQuizPage = () => {
  return (
    <CalculatorLayout content={AmIReadyToBuyHouseQuizContent}>
      <EnhancedCalculator
        title={AmIReadyToBuyHouseQuizContent.title}
        slug="am-i-ready-to-buy-house-quiz"
        category="Additional Tools"
        description={AmIReadyToBuyHouseQuizContent.description}
        inputs={AmIReadyToBuyHouseQuizContent.calculator.fields}
        results={AmIReadyToBuyHouseQuizContent.calculator.results}
        calculation={AmIReadyToBuyHouseQuizContent.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default AmIReadyToBuyHouseQuizPage;
