'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { EARNER_1099_MORTGAGE_QUALIFIER_CONTENT } from '@/content/tools/1099-earner-mortgage-qualifier';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const Earner1099MortgageQualifierPage = () => {
  return (
    <CalculatorLayout content={EARNER_1099_MORTGAGE_QUALIFIER_CONTENT}>
      <EnhancedCalculator
        title={EARNER_1099_MORTGAGE_QUALIFIER_CONTENT.title}
        slug="1099-earner-mortgage-qualifier"
        category="Mortgage"
        description={EARNER_1099_MORTGAGE_QUALIFIER_CONTENT.description}
        inputs={EARNER_1099_MORTGAGE_QUALIFIER_CONTENT.calculator.fields}
        results={EARNER_1099_MORTGAGE_QUALIFIER_CONTENT.calculator.results}
        calculation={EARNER_1099_MORTGAGE_QUALIFIER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default Earner1099MortgageQualifierPage;
