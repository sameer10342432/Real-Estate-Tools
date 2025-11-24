'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { SECTION_121_EXCLUSION_CALCULATOR_CONTENT } from '@/content/tools/section-121-exclusion-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const Section121ExclusionCalculator = () => {
  return (
    <CalculatorLayout content={SECTION_121_EXCLUSION_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={SECTION_121_EXCLUSION_CALCULATOR_CONTENT.title}
        slug={SECTION_121_EXCLUSION_CALCULATOR_CONTENT.slug}
        category={SECTION_121_EXCLUSION_CALCULATOR_CONTENT.category}
        description={SECTION_121_EXCLUSION_CALCULATOR_CONTENT.description}
        inputs={SECTION_121_EXCLUSION_CALCULATOR_CONTENT.calculator.fields}
        results={SECTION_121_EXCLUSION_CALCULATOR_CONTENT.calculator.results}
        calculation={SECTION_121_EXCLUSION_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default Section121ExclusionCalculator;
