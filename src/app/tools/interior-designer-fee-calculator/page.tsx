'use client';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Interior Designer Fee Calculator | Property Tools',
    description: 'Calculate interior designer fees based on project scope, fee structure, and design complexity. Estimate costs for design services and furniture procurement.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { INTERIOR_DESIGNER_FEE_CALCULATOR_CONTENT } from '@/content/tools/interior-designer-fee-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const InteriorDesignerFeeCalculatorPage = () => {
  return (
    <CalculatorLayout content={INTERIOR_DESIGNER_FEE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={INTERIOR_DESIGNER_FEE_CALCULATOR_CONTENT.title}
        slug="interior-designer-fee-calculator"
        category="Home Improvement"
        description={INTERIOR_DESIGNER_FEE_CALCULATOR_CONTENT.description}
        inputs={INTERIOR_DESIGNER_FEE_CALCULATOR_CONTENT.calculator.fields}
        results={INTERIOR_DESIGNER_FEE_CALCULATOR_CONTENT.calculator.results}
        calculation={INTERIOR_DESIGNER_FEE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default InteriorDesignerFeeCalculatorPage;
