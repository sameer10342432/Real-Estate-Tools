'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { NEW_HOME_PUNCH_LIST_GENERATOR_CONTENT } from '@/content/tools/new-home-punch-list-generator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const NewHomePunchListGeneratorPage = () => {
  return (
    <CalculatorLayout content={NEW_HOME_PUNCH_LIST_GENERATOR_CONTENT}>
      <EnhancedCalculator
        title={NEW_HOME_PUNCH_LIST_GENERATOR_CONTENT.title}
        slug="new-home-punch-list-generator"
        category="Construction & Development"
        description={NEW_HOME_PUNCH_LIST_GENERATOR_CONTENT.description}
        inputs={NEW_HOME_PUNCH_LIST_GENERATOR_CONTENT.calculator.fields}
        results={NEW_HOME_PUNCH_LIST_GENERATOR_CONTENT.calculator.results}
        calculation={NEW_HOME_PUNCH_LIST_GENERATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default NewHomePunchListGeneratorPage;
