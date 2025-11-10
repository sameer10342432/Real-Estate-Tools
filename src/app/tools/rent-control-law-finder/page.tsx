
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Local Rent Control Law Finder (by City/State)',
    description: 'Search rent control laws and regulations by location to understand rental property restrictions, rent increase caps, and landlord obligations',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { RENT_CONTROL_LAW_FINDER_CONTENT } from '@/content/tools/rent-control-law-finder';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';


const RentControlLawFinder = () => {
  return (
    <CalculatorLayout content={RENT_CONTROL_LAW_FINDER_CONTENT}>
      <EnhancedCalculator
        title={RENT_CONTROL_LAW_FINDER_CONTENT.title}
        slug={RENT_CONTROL_LAW_FINDER_CONTENT.slug}
        category={RENT_CONTROL_LAW_FINDER_CONTENT.category}
        description={RENT_CONTROL_LAW_FINDER_CONTENT.description}
        inputs={RENT_CONTROL_LAW_FINDER_CONTENT.calculator.fields}
        results={RENT_CONTROL_LAW_FINDER_CONTENT.calculator.results}
        calculation={RENT_CONTROL_LAW_FINDER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default RentControlLawFinder;
