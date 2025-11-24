'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { MATERIAL_PARTICIPATION_TEST_CALCULATOR_CONTENT } from '@/content/tools/material-participation-test-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const MaterialParticipationTestCalculator = () => {
  return (
    <CalculatorLayout content={MATERIAL_PARTICIPATION_TEST_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={MATERIAL_PARTICIPATION_TEST_CALCULATOR_CONTENT.title}
        slug={MATERIAL_PARTICIPATION_TEST_CALCULATOR_CONTENT.slug}
        category={MATERIAL_PARTICIPATION_TEST_CALCULATOR_CONTENT.category}
        description={MATERIAL_PARTICIPATION_TEST_CALCULATOR_CONTENT.description}
        inputs={MATERIAL_PARTICIPATION_TEST_CALCULATOR_CONTENT.calculator.fields}
        results={MATERIAL_PARTICIPATION_TEST_CALCULATOR_CONTENT.calculator.results}
        calculation={MATERIAL_PARTICIPATION_TEST_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default MaterialParticipationTestCalculator;
