'use client';

import { COMING_SOON_MARKETING_CONTENT } from '@/content/tools/coming-soon-marketing';
import { Calculator } from '@/components/calculators';

export const ComingSoonMarketingCalculator = () => {
  return (
    <Calculator
      title={COMING_SOON_MARKETING_CONTENT.title}
      description={COMING_SOON_MARKETING_CONTENT.description}
      inputs={COMING_SOON_MARKETING_CONTENT.calculator.fields}
      results={COMING_SOON_MARKETING_CONTENT.calculator.results}
      calculation={COMING_SOON_MARKETING_CONTENT.calculator.calculate}
    />
  );
};
