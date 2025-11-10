
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Cost Segregation Benefit Calculator',
    description: 'Estimate tax savings from cost segregation studies that accelerate depreciation deductions on commercial and residential rental properties',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { COST_SEGREGATION_CALCULATOR_CONTENT } from '@/content/tools/cost-segregation-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';


const CostSegregationCalculator = () => {
  return (
    <CalculatorLayout content={COST_SEGREGATION_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={COST_SEGREGATION_CALCULATOR_CONTENT.title}
        slug={COST_SEGREGATION_CALCULATOR_CONTENT.slug}
        category={COST_SEGREGATION_CALCULATOR_CONTENT.category}
        description={COST_SEGREGATION_CALCULATOR_CONTENT.description}
        inputs={COST_SEGREGATION_CALCULATOR_CONTENT.calculator.fields}
        results={COST_SEGREGATION_CALCULATOR_CONTENT.calculator.results}
        calculation={COST_SEGREGATION_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CostSegregationCalculator;
