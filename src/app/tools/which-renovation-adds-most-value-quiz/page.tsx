export async function generateMetadata() {
  return {
    title: 'Which Renovation Adds Most Value? ROI Quiz | Property Tools',
    description: 'Find out which home improvements deliver the best ROI based on your home type, location, budget, and market - from kitchen remodels to landscaping.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { WhichRenovationAddsMostValueQuizContent } from '@/content/tools/which-renovation-adds-most-value-quiz';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const WhichRenovationAddsMostValueQuizPage = () => {
  return (
    <CalculatorLayout content={WhichRenovationAddsMostValueQuizContent}>
      <EnhancedCalculator
        title={WhichRenovationAddsMostValueQuizContent.title}
        slug="which-renovation-adds-most-value-quiz"
        category="Additional Tools"
        description={WhichRenovationAddsMostValueQuizContent.description}
        inputs={WhichRenovationAddsMostValueQuizContent.calculator.fields}
        results={WhichRenovationAddsMostValueQuizContent.calculator.results}
        calculation={WhichRenovationAddsMostValueQuizContent.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default WhichRenovationAddsMostValueQuizPage;
