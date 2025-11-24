'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { EMINENT_DOMAIN_VALUE_CALCULATOR_CONTENT } from '@/content/tools/eminent-domain-value-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const EminentDomainValueCalculatorPage = () => {
  return (
    <CalculatorLayout content={EMINENT_DOMAIN_VALUE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={EMINENT_DOMAIN_VALUE_CALCULATOR_CONTENT.title}
        slug="eminent-domain-value-calculator"
        category={EMINENT_DOMAIN_VALUE_CALCULATOR_CONTENT.category}
        description={EMINENT_DOMAIN_VALUE_CALCULATOR_CONTENT.description}
        inputs={EMINENT_DOMAIN_VALUE_CALCULATOR_CONTENT.calculator.fields}
        results={EMINENT_DOMAIN_VALUE_CALCULATOR_CONTENT.calculator.results}
        calculation={EMINENT_DOMAIN_VALUE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default EminentDomainValueCalculatorPage;
