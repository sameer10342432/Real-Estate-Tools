
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Best Place to Retire Calculator | Find Ideal Retirement Cities in USA - Free Tool',
    description: 'Discover the best places to retire in the US based on cost of living, taxes, healthcare, climate, and lifestyle. Free retirement location calculator with personalized city recommendations.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { BEST_PLACE_TO_RETIRE_CALCULATOR_CONTENT } from '@/content/tools/best-place-to-retire-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const BestPlaceToRetireCalculatorPage = () => {
  return (
    <CalculatorLayout content={BEST_PLACE_TO_RETIRE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={BEST_PLACE_TO_RETIRE_CALCULATOR_CONTENT.title}
        slug="best-place-to-retire-calculator"
        category="Lifestyle Planning"
        description={BEST_PLACE_TO_RETIRE_CALCULATOR_CONTENT.description}
        inputs={BEST_PLACE_TO_RETIRE_CALCULATOR_CONTENT.calculator.fields}
        results={BEST_PLACE_TO_RETIRE_CALCULATOR_CONTENT.calculator.results}
        calculation={BEST_PLACE_TO_RETIRE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default BestPlaceToRetireCalculatorPage;
