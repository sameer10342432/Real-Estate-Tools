'use client';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Architect Fee Calculator | Property Tools',
    description: 'Calculate architectural fees for residential and commercial projects based on project scope and fee structure. Estimate costs for design services and construction administration.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { ARCHITECT_FEE_CALCULATOR_CONTENT } from '@/content/tools/architect-fee-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ArchitectFeeCalculatorPage = () => {
  return (
    <CalculatorLayout content={ARCHITECT_FEE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={ARCHITECT_FEE_CALCULATOR_CONTENT.title}
        slug="architect-fee-calculator"
        category="Home Improvement"
        description={ARCHITECT_FEE_CALCULATOR_CONTENT.description}
        inputs={ARCHITECT_FEE_CALCULATOR_CONTENT.calculator.fields}
        results={ARCHITECT_FEE_CALCULATOR_CONTENT.calculator.results}
        calculation={ARCHITECT_FEE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ArchitectFeeCalculatorPage;
