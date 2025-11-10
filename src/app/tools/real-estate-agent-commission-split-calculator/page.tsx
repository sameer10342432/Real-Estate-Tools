
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Real Estate Agent Commission Split Calculator',
    description: 'Calculate commission splits between listing and buyer\'s agents, brokerages, and team members. Free online tool for real estate professionals, investors, and ...',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { REAL_ESTATE_AGENT_COMMISSION_SPLIT_CALCULATOR_CONTENT } from '@/content/tools/real-estate-agent-commission-split-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const RealEstateAgentCommissionSplitCalculatorPage = () => {
  return (
    <CalculatorLayout content={REAL_ESTATE_AGENT_COMMISSION_SPLIT_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={REAL_ESTATE_AGENT_COMMISSION_SPLIT_CALCULATOR_CONTENT.title}
        slug="real-estate-agent-commission-split-calculator"
        category="Seller Tools"
        description={REAL_ESTATE_AGENT_COMMISSION_SPLIT_CALCULATOR_CONTENT.description}
        inputs={REAL_ESTATE_AGENT_COMMISSION_SPLIT_CALCULATOR_CONTENT.calculator.fields}
        results={REAL_ESTATE_AGENT_COMMISSION_SPLIT_CALCULATOR_CONTENT.calculator.results}
        calculation={REAL_ESTATE_AGENT_COMMISSION_SPLIT_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default RealEstateAgentCommissionSplitCalculatorPage;
