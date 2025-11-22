export async function generateMetadata() {
  return {
    title: 'Real Estate Glossary & Jargon Buster - 500+ Terms Explained | Property Tools',
    description: 'Comprehensive dictionary of 500+ real estate terms, definitions, and jargon explained in plain English for buyers, sellers, and investors. Never be confused again.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { RealEstateGlossaryJargonBusterContent } from '@/content/tools/real-estate-glossary-jargon-buster';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import type { Metadata} from 'next';

const RealEstateGlossaryJargonBusterPage = () => {
  return (
    <CalculatorLayout content={RealEstateGlossaryJargonBusterContent}>
      <EnhancedCalculator
        title={RealEstateGlossaryJargonBusterContent.title}
        slug="real-estate-glossary-jargon-buster"
        category="Additional Tools"
        description={RealEstateGlossaryJargonBusterContent.description}
        inputs={RealEstateGlossaryJargonBusterContent.calculator.fields}
        results={RealEstateGlossaryJargonBusterContent.calculator.results}
        calculation={RealEstateGlossaryJargonBusterContent.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default RealEstateGlossaryJargonBusterPage;
