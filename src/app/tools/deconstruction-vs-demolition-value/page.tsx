'use client';
async function _generateMetadata() {
  return {
    title: 'Deconstruction vs Demolition Value Calculator - Salvage Analysis',
    description: 'Compare costs and benefits of deconstructing vs demolishing a building. Calculate material salvage value and tax deductions for sustainable building removal.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { DECONSTRUCTION_VS_DEMOLITION_VALUE_CONTENT } from '@/content/tools/deconstruction-vs-demolition-value';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const DeconstructionVsDemolitionValuePage = () => {
  return (
    <CalculatorLayout content={DECONSTRUCTION_VS_DEMOLITION_VALUE_CONTENT}>
      <EnhancedCalculator
        title={DECONSTRUCTION_VS_DEMOLITION_VALUE_CONTENT.title}
        slug="deconstruction-vs-demolition-value"
        category="Sustainability"
        description={DECONSTRUCTION_VS_DEMOLITION_VALUE_CONTENT.description}
        inputs={DECONSTRUCTION_VS_DEMOLITION_VALUE_CONTENT.calculator.fields}
        results={DECONSTRUCTION_VS_DEMOLITION_VALUE_CONTENT.calculator.results}
        calculation={DECONSTRUCTION_VS_DEMOLITION_VALUE_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default DeconstructionVsDemolitionValuePage;
