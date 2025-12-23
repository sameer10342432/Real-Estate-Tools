'use client';
async function _generateMetadata() {
  return {
    title: 'Drought-Tolerant Landscaping Cost Calculator - Water Savings & ROI',
    description: 'Calculate costs and water savings from drought-resistant landscaping and xeriscaping. Estimate payback period and environmental benefits.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { DROUGHT_TOLERANT_LANDSCAPING_COST_CONTENT } from '@/content/tools/drought-tolerant-landscaping-cost';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const DroughtTolerantLandscapingCostPage = () => {
  return (
    <CalculatorLayout content={DROUGHT_TOLERANT_LANDSCAPING_COST_CONTENT}>
      <EnhancedCalculator
        title={DROUGHT_TOLERANT_LANDSCAPING_COST_CONTENT.title}
        slug="drought-tolerant-landscaping-cost"
        category="Sustainability"
        description={DROUGHT_TOLERANT_LANDSCAPING_COST_CONTENT.description}
        inputs={DROUGHT_TOLERANT_LANDSCAPING_COST_CONTENT.calculator.fields}
        results={DROUGHT_TOLERANT_LANDSCAPING_COST_CONTENT.calculator.results}
        calculation={DROUGHT_TOLERANT_LANDSCAPING_COST_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default DroughtTolerantLandscapingCostPage;
