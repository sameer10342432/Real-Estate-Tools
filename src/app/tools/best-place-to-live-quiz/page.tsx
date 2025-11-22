'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
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
