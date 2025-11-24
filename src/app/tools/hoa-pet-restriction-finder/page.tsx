'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { HOA_PET_RESTRICTION_FINDER_CONTENT } from '@/content/tools/hoa-pet-restriction-finder';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HOAPetRestrictionFinderPage = () => {
  return (
    <CalculatorLayout content={HOA_PET_RESTRICTION_FINDER_CONTENT}>
      <EnhancedCalculator
        title={HOA_PET_RESTRICTION_FINDER_CONTENT.title}
        slug="hoa-pet-restriction-finder"
        category="Real Estate"
        description={HOA_PET_RESTRICTION_FINDER_CONTENT.description}
        inputs={HOA_PET_RESTRICTION_FINDER_CONTENT.calculator.fields}
        results={HOA_PET_RESTRICTION_FINDER_CONTENT.calculator.results}
        calculation={HOA_PET_RESTRICTION_FINDER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HOAPetRestrictionFinderPage;

