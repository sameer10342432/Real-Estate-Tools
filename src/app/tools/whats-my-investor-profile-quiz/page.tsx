'use client';
async function _generateMetadata() {
  return {
    title: 'What\'s My Investor Profile? Real Estate Risk Assessment Quiz | Property Tools',
    description: 'Identify your real estate investor profile based on risk tolerance, capital, experience, goals, and time horizon. Get personalized investment strategy recommendations.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { WhatIsMyInvestorProfileQuizContent } from '@/content/tools/whats-my-investor-profile-quiz';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const WhatsMyInvestorProfileQuizPage = () => {
  return (
    <CalculatorLayout content={WhatIsMyInvestorProfileQuizContent}>
      <EnhancedCalculator
        title={WhatIsMyInvestorProfileQuizContent.title}
        slug="whats-my-investor-profile-quiz"
        category="Additional Tools"
        description={WhatIsMyInvestorProfileQuizContent.description}
        inputs={WhatIsMyInvestorProfileQuizContent.calculator.fields}
        results={WhatIsMyInvestorProfileQuizContent.calculator.results}
        calculation={WhatIsMyInvestorProfileQuizContent.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default WhatsMyInvestorProfileQuizPage;
