'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { SOLAR_RIGHTS_EASEMENT_ANALYZER_CONTENT } from '@/content/tools/solar-rights-easement-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const SolarRightsEasementAnalyzerPage = () => {
  return (
    <CalculatorLayout content={SOLAR_RIGHTS_EASEMENT_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={SOLAR_RIGHTS_EASEMENT_ANALYZER_CONTENT.title}
        slug="solar-rights-easement-analyzer"
        category="Easements & Rights"
        description={SOLAR_RIGHTS_EASEMENT_ANALYZER_CONTENT.description}
        inputs={SOLAR_RIGHTS_EASEMENT_ANALYZER_CONTENT.calculator.fields}
        results={SOLAR_RIGHTS_EASEMENT_ANALYZER_CONTENT.calculator.results}
        calculation={SOLAR_RIGHTS_EASEMENT_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default SolarRightsEasementAnalyzerPage;
