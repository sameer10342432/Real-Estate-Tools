
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'FSBO vs Agent Savings Calculator',
    description: 'Compare the costs and benefits of selling your home yourself (For Sale By Owner) versus using a real estate agent. Free online tool for real estate professio...',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { FSBO_VS_AGENT_SAVINGS_CALCULATOR_CONTENT } from '@/content/tools/fsbo-vs-agent-savings-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const FsboVsAgentSavingsCalculatorPage = () => {
  return (
    <CalculatorLayout content={FSBO_VS_AGENT_SAVINGS_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={FSBO_VS_AGENT_SAVINGS_CALCULATOR_CONTENT.title}
        slug="fsbo-vs-agent-savings-calculator"
        category="Seller Tools"
        description={FSBO_VS_AGENT_SAVINGS_CALCULATOR_CONTENT.description}
        inputs={FSBO_VS_AGENT_SAVINGS_CALCULATOR_CONTENT.calculator.fields}
        results={FSBO_VS_AGENT_SAVINGS_CALCULATOR_CONTENT.calculator.results}
        calculation={FSBO_VS_AGENT_SAVINGS_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default FsboVsAgentSavingsCalculatorPage;
