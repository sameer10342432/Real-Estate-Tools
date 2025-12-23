'use client';
async function _generateMetadata() {
  return {
    title: 'Easement Finder (by Address)',
    description: 'Discover potential easements affecting your property and understand their impact on ownership rights, land use, and property value. Free online tool for real estate professionals, investors, and homeowners.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { EASEMENT_FINDER_BY_ADDRESS_CONTENT } from '@/content/tools/easement-finder-by-address';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const EasementFinderByAddressPage = () => {
  return (
    <CalculatorLayout content={EASEMENT_FINDER_BY_ADDRESS_CONTENT}>
      <EnhancedCalculator
        title={EASEMENT_FINDER_BY_ADDRESS_CONTENT.title}
        slug="easement-finder-by-address"
        category="Legal & Compliance"
        description={EASEMENT_FINDER_BY_ADDRESS_CONTENT.description}
        inputs={EASEMENT_FINDER_BY_ADDRESS_CONTENT.calculator.fields}
        results={EASEMENT_FINDER_BY_ADDRESS_CONTENT.calculator.results}
        calculation={EASEMENT_FINDER_BY_ADDRESS_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default EasementFinderByAddressPage;
