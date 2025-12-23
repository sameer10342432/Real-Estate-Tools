'use client';
import type { Metadata } from 'next';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'HOA CC&Rs Red Flag Finder | Free HOA Document Analysis Tool',
    description: 'Identify red flags in HOA CC&Rs and governing documents. Check for rental restrictions, transfer fees, and restrictive covenants before buying. Free tool for homebuyers.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { HOA_CCRS_RED_FLAG_FINDER_CONTENT } from '@/content/tools/hoa-ccrs-red-flag-finder';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HOACCRsRedFlagFinderPage = () => {
  return (
    <CalculatorLayout content={HOA_CCRS_RED_FLAG_FINDER_CONTENT}>
      <EnhancedCalculator
        title={HOA_CCRS_RED_FLAG_FINDER_CONTENT.title}
        slug="hoa-ccrs-red-flag-finder"
        category="Legal & Compliance"
        description={HOA_CCRS_RED_FLAG_FINDER_CONTENT.description}
        inputs={HOA_CCRS_RED_FLAG_FINDER_CONTENT.calculator.fields}
        results={HOA_CCRS_RED_FLAG_FINDER_CONTENT.calculator.results}
        calculation={HOA_CCRS_RED_FLAG_FINDER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HOACCRsRedFlagFinderPage;
