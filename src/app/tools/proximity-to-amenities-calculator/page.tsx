
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Proximity to Amenities Calculator',
    description: 'Evaluate property location score based on proximity to key amenities including transit, schools, shopping, parks, and employment centers',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { PROXIMITY_TO_AMENITIES_CALCULATOR_CONTENT } from '@/content/tools/proximity-to-amenities-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';


const ProximityToAmenitiesCalculator = () => {
  return (
    <CalculatorLayout content={PROXIMITY_TO_AMENITIES_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={PROXIMITY_TO_AMENITIES_CALCULATOR_CONTENT.title}
        slug={PROXIMITY_TO_AMENITIES_CALCULATOR_CONTENT.slug}
        category={PROXIMITY_TO_AMENITIES_CALCULATOR_CONTENT.category}
        description={PROXIMITY_TO_AMENITIES_CALCULATOR_CONTENT.description}
        inputs={PROXIMITY_TO_AMENITIES_CALCULATOR_CONTENT.calculator.fields}
        results={PROXIMITY_TO_AMENITIES_CALCULATOR_CONTENT.calculator.results}
        calculation={PROXIMITY_TO_AMENITIES_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ProximityToAmenitiesCalculator;
