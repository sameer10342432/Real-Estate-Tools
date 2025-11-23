export async function generateMetadata() {
  return {
    title: 'Am I a Fix-and-Flipper? House Flipping Readiness Quiz | Property Tools',
    description: 'Discover if house flipping is right for you. Assess your capital, construction knowledge, risk tolerance, time availability, and market expertise for successful flips.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { AmIAFixAndFlipperQuizContent } from '@/content/tools/am-i-a-fix-and-flipper-quiz';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const AmIAFixAndFlipperQuizPage = () => {
  return (
    <CalculatorLayout content={AmIAFixAndFlipperQuizContent}>
      <EnhancedCalculator
        title={AmIAFixAndFlipperQuizContent.title}
        slug="am-i-a-fix-and-flipper-quiz"
        category="Additional Tools"
        description={AmIAFixAndFlipperQuizContent.description}
        inputs={AmIAFixAndFlipperQuizContent.calculator.fields}
        results={AmIAFixAndFlipperQuizContent.calculator.results}
        calculation={AmIAFixAndFlipperQuizContent.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default AmIAFixAndFlipperQuizPage;
