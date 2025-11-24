'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { ACCESS_EASEMENT_LANDLOCKED_TOOL_CONTENT } from '@/content/tools/access-easement-landlocked-tool';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const AccessEasementLandlockedToolPage = () => {
  return (
    <CalculatorLayout content={ACCESS_EASEMENT_LANDLOCKED_TOOL_CONTENT}>
      <EnhancedCalculator
        title={ACCESS_EASEMENT_LANDLOCKED_TOOL_CONTENT.title}
        slug="access-easement-landlocked-tool"
        category="Easements & Rights"
        description={ACCESS_EASEMENT_LANDLOCKED_TOOL_CONTENT.description}
        inputs={ACCESS_EASEMENT_LANDLOCKED_TOOL_CONTENT.calculator.fields}
        results={ACCESS_EASEMENT_LANDLOCKED_TOOL_CONTENT.calculator.results}
        calculation={ACCESS_EASEMENT_LANDLOCKED_TOOL_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default AccessEasementLandlockedToolPage;
