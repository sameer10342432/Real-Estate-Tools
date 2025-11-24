import { AGENT_VS_BROKER_CAREER_CALCULATOR_CONTENT } from '@/content/tools/agent-vs-broker-career-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { AgentVsBrokerCareerCalculator } from '@/components/calculators/AgentVsBrokerCareerCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Agent vs. Broker Career Calculator - Property Tools',
    description: 'Compare real estate agent versus broker career paths, calculate income potential, licensing costs, responsibilities, and determine which path aligns with your goals',
  };
}

const AgentVsBrokerCareerCalculatorPage = () => {
  return (
    <CalculatorLayout content={AGENT_VS_BROKER_CAREER_CALCULATOR_CONTENT}>
      <AgentVsBrokerCareerCalculator />
    </CalculatorLayout>
  );
};

export default AgentVsBrokerCareerCalculatorPage;
