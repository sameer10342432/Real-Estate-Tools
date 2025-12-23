'use client';
async function _generateMetadata() {
  return {
    title: 'Radon Mitigation System Cost Calculator',
    description: 'Estimate the cost of installing a radon mitigation system and calculate long-term health benefits and home value impact. Free online tool for real estate professionals, investors, and homeowners.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { RADON_MITIGATION_SYSTEM_COST_CONTENT } from '@/content/tools/radon-mitigation-system-cost';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const RadonMitigationSystemCostPage = () => {
  return (
    <CalculatorLayout content={RADON_MITIGATION_SYSTEM_COST_CONTENT}>
      <EnhancedCalculator
        title={RADON_MITIGATION_SYSTEM_COST_CONTENT.title}
        slug="radon-mitigation-system-cost"
        category="Green & Sustainable"
        description={RADON_MITIGATION_SYSTEM_COST_CONTENT.description}
        inputs={RADON_MITIGATION_SYSTEM_COST_CONTENT.calculator.fields}
        results={RADON_MITIGATION_SYSTEM_COST_CONTENT.calculator.results}
        calculation={RADON_MITIGATION_SYSTEM_COST_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default RadonMitigationSystemCostPage;
