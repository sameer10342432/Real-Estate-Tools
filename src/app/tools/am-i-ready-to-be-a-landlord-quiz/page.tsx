export async function generateMetadata() {
  return {
    title: 'Am I Ready to Be a Landlord? Real Estate Investor Readiness Quiz | Property Tools',
    description: 'Assess if you\'re financially and emotionally prepared for landlord responsibilities. Evaluate your capital, risk tolerance, time commitment, and property management readiness.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { AmIReadyToBeALandlordQuizContent } from '@/content/tools/am-i-ready-to-be-a-landlord-quiz';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const AmIReadyToBeALandlordQuizPage = () => {
  return (
    <CalculatorLayout content={AmIReadyToBeALandlordQuizContent}>
      <EnhancedCalculator
        title={AmIReadyToBeALandlordQuizContent.title}
        slug="am-i-ready-to-be-a-landlord-quiz"
        category="Additional Tools"
        description={AmIReadyToBeALandlordQuizContent.description}
        inputs={AmIReadyToBeALandlordQuizContent.calculator.fields}
        results={AmIReadyToBeALandlordQuizContent.calculator.results}
        calculation={AmIReadyToBeALandlordQuizContent.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default AmIReadyToBeALandlordQuizPage;
