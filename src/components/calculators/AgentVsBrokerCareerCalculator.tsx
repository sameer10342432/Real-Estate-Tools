'use client';

import { AGENT_VS_BROKER_CAREER_CALCULATOR_CONTENT } from '@/content/tools/agent-vs-broker-career-calculator';
import { Calculator } from '@/components/calculators';

export const AgentVsBrokerCareerCalculator = () => {
  return (
    <Calculator
      title={AGENT_VS_BROKER_CAREER_CALCULATOR_CONTENT.title}
      description={AGENT_VS_BROKER_CAREER_CALCULATOR_CONTENT.description}
      inputs={AGENT_VS_BROKER_CAREER_CALCULATOR_CONTENT.calculator.fields}
      results={AGENT_VS_BROKER_CAREER_CALCULATOR_CONTENT.calculator.results}
      calculation={AGENT_VS_BROKER_CAREER_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
