export async function generateMetadata() {
  return {
    title: 'Acronym Buster (REIT, FHA, VA, PITI...) - Real Estate Decoder | Property Tools',
    description: 'Decode 200+ real estate acronyms instantly - from REIT to FHA, VA, PITI, HOA, and everything in between. Never be confused by industry jargon again.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { AcronymBusterReitFhaVaPitiContent } from '@/content/tools/acronym-buster-reit-fha-va-piti';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const AcronymBusterREITFHAVAPITIPage = () => {
  return (
    <CalculatorLayout content={AcronymBusterReitFhaVaPitiContent}>
      <EnhancedCalculator
        title={AcronymBusterReitFhaVaPitiContent.title}
        slug="acronym-buster-reit-fha-va-piti"
        category="Additional Tools"
        description={AcronymBusterReitFhaVaPitiContent.description}
        inputs={AcronymBusterReitFhaVaPitiContent.calculator.fields}
        results={AcronymBusterReitFhaVaPitiContent.calculator.results}
        calculation={AcronymBusterReitFhaVaPitiContent.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default AcronymBusterREITFHAVAPITIPage;
