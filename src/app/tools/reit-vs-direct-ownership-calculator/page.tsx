'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { REIT_VS_DIRECT_OWNERSHIP_CALCULATOR_CONTENT } from '@/content/tools/reit-vs-direct-ownership-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'REIT vs Direct Property Ownership Calculator - Which Real Estate Investment is Better?',
    description: 'Compare REIT (Real Estate Investment Trust) investments versus directly owning rental property. Analyze returns, liquidity, taxes, time commitment, and passive income potential.',
  };
}

const ReitVsDirectOwnershipCalculatorPage = () => {
  return (
    <CalculatorLayout content={REIT_VS_DIRECT_OWNERSHIP_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={REIT_VS_DIRECT_OWNERSHIP_CALCULATOR_CONTENT.title}
        slug="reit-vs-direct-ownership-calculator"
        category="Investment Analysis"
        description={REIT_VS_DIRECT_OWNERSHIP_CALCULATOR_CONTENT.description}
        inputs={REIT_VS_DIRECT_OWNERSHIP_CALCULATOR_CONTENT.calculator.fields}
        results={REIT_VS_DIRECT_OWNERSHIP_CALCULATOR_CONTENT.calculator.results}
        calculation={REIT_VS_DIRECT_OWNERSHIP_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ReitVsDirectOwnershipCalculatorPage;