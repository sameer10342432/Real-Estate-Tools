export async function generateMetadata() {
  return {
    title: 'Unmarried Partners Section 121 Exclusion Calculator | Property Tools',
    description: 'Calculate Section 121 capital gains exclusion for unmarried partners who co-own a primary residence. Determine individual exclusion amounts for each partner.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { UNMARRIED_PARTNERS_SECTION_121_CALCULATOR_CONTENT } from '@/content/tools/unmarried-partners-section-121-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const UnmarriedPartnersSection121Calculator = () => {
  return (
    <CalculatorLayout content={UNMARRIED_PARTNERS_SECTION_121_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={UNMARRIED_PARTNERS_SECTION_121_CALCULATOR_CONTENT.title}
        slug={UNMARRIED_PARTNERS_SECTION_121_CALCULATOR_CONTENT.slug}
        category={UNMARRIED_PARTNERS_SECTION_121_CALCULATOR_CONTENT.category}
        description={UNMARRIED_PARTNERS_SECTION_121_CALCULATOR_CONTENT.description}
        inputs={UNMARRIED_PARTNERS_SECTION_121_CALCULATOR_CONTENT.calculator.fields}
        results={UNMARRIED_PARTNERS_SECTION_121_CALCULATOR_CONTENT.calculator.results}
        calculation={UNMARRIED_PARTNERS_SECTION_121_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default UnmarriedPartnersSection121Calculator;
