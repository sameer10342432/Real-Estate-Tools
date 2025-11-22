
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Best Place to Live Quiz | Find Your Ideal City Based on Lifestyle - Free Tool',
    description: 'Discover the best city for you based on climate, cost of living, job market, and lifestyle preferences. Free quiz to find your perfect place to live in the United States.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { BEST_PLACE_TO_LIVE_QUIZ_CONTENT } from '@/content/tools/best-place-to-live-quiz';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const BestPlaceToLiveQuizPage = () => {
  return (
    <CalculatorLayout content={BEST_PLACE_TO_LIVE_QUIZ_CONTENT}>
      <EnhancedCalculator
        title={BEST_PLACE_TO_LIVE_QUIZ_CONTENT.title}
        slug="best-place-to-live-quiz"
        category="Lifestyle Planning"
        description={BEST_PLACE_TO_LIVE_QUIZ_CONTENT.description}
        inputs={BEST_PLACE_TO_LIVE_QUIZ_CONTENT.calculator.fields}
        results={BEST_PLACE_TO_LIVE_QUIZ_CONTENT.calculator.results}
        calculation={BEST_PLACE_TO_LIVE_QUIZ_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default BestPlaceToLiveQuizPage;
