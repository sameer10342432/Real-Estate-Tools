import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Meals & Entertainment (Real Estate) Deduction Calculator | Property Tools',
    description: 'Calculate deductible meals and entertainment expenses for real estate business. Understand 50% and 100% deduction rules with our free calculator.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { MEALS_ENTERTAINMENT_REAL_ESTATE_DEDUCTION_CONTENT } from '@/content/tools/meals-entertainment-real-estate-deduction';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const MealsEntertainmentDeductionPage = () => {
  return (
    <CalculatorLayout content={MEALS_ENTERTAINMENT_REAL_ESTATE_DEDUCTION_CONTENT}>
      <EnhancedCalculator
        title={MEALS_ENTERTAINMENT_REAL_ESTATE_DEDUCTION_CONTENT.title}
        slug="meals-entertainment-real-estate-deduction"
        category="Tax Strategy & Entity Planning"
        description={MEALS_ENTERTAINMENT_REAL_ESTATE_DEDUCTION_CONTENT.description}
        inputs={MEALS_ENTERTAINMENT_REAL_ESTATE_DEDUCTION_CONTENT.calculator.fields}
        results={MEALS_ENTERTAINMENT_REAL_ESTATE_DEDUCTION_CONTENT.calculator.results}
        calculation={MEALS_ENTERTAINMENT_REAL_ESTATE_DEDUCTION_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default MealsEntertainmentDeductionPage;
