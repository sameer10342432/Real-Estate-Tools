import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Real Estate Agent Red Flag Checker - Vet Your Agent',
    description: 'Evaluate your real estate agent for warning signs. Check credentials, experience, reviews, and identify potential red flags before hiring.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { REAL_ESTATE_AGENT_RED_FLAG_CHECKER_CONTENT } from '@/content/tools/real-estate-agent-red-flag-checker';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const RealEstateAgentRedFlagCheckerPage = () => {
  return (
    <CalculatorLayout content={REAL_ESTATE_AGENT_RED_FLAG_CHECKER_CONTENT}>
      <EnhancedCalculator
        title={REAL_ESTATE_AGENT_RED_FLAG_CHECKER_CONTENT.title}
        slug="real-estate-agent-red-flag-checker"
        category="Real Estate"
        description={REAL_ESTATE_AGENT_RED_FLAG_CHECKER_CONTENT.description}
        inputs={REAL_ESTATE_AGENT_RED_FLAG_CHECKER_CONTENT.calculator.fields}
        results={REAL_ESTATE_AGENT_RED_FLAG_CHECKER_CONTENT.calculator.results}
        calculation={REAL_ESTATE_AGENT_RED_FLAG_CHECKER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default RealEstateAgentRedFlagCheckerPage;
