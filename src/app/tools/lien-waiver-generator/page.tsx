'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { LIEN_WAIVER_GENERATOR_CONTENT } from '@/content/tools/lien-waiver-generator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const LienWaiverGeneratorPage = () => {
  return (
    <CalculatorLayout content={LIEN_WAIVER_GENERATOR_CONTENT}>
      <EnhancedCalculator
        title={LIEN_WAIVER_GENERATOR_CONTENT.title}
        slug="lien-waiver-generator"
        category="Construction & Development"
        description={LIEN_WAIVER_GENERATOR_CONTENT.description}
        inputs={LIEN_WAIVER_GENERATOR_CONTENT.calculator.fields}
        results={LIEN_WAIVER_GENERATOR_CONTENT.calculator.results}
        calculation={LIEN_WAIVER_GENERATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default LienWaiverGeneratorPage;
