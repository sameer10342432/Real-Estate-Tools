'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { W2_EARNER_MORTGAGE_QUALIFIER_CONTENT } from '@/content/tools/w2-earner-mortgage-qualifier';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const W2EarnerMortgageQualifierPage = () => {
  return (
    <CalculatorLayout content={W2_EARNER_MORTGAGE_QUALIFIER_CONTENT}>
      <EnhancedCalculator
        title={W2_EARNER_MORTGAGE_QUALIFIER_CONTENT.title}
        slug="w2-earner-mortgage-qualifier"
        category="Mortgage"
        description={W2_EARNER_MORTGAGE_QUALIFIER_CONTENT.description}
        inputs={W2_EARNER_MORTGAGE_QUALIFIER_CONTENT.calculator.fields}
        results={W2_EARNER_MORTGAGE_QUALIFIER_CONTENT.calculator.results}
        calculation={W2_EARNER_MORTGAGE_QUALIFIER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default W2EarnerMortgageQualifierPage;
