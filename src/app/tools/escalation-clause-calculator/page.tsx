'use client';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Escalation Clause Calculator | Auto-Bid Strategy for Home Offers',
    description: 'Calculate the perfect escalation clause for your home offer. Automatically beat competing bids while protecting your maximum price. Win competitive offers strategically.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { ESCALATION_CLAUSE_CALCULATOR_CONTENT } from '@/content/tools/escalation-clause-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const EscalationClauseCalculatorPage = () => {
  return (
    <CalculatorLayout content={ESCALATION_CLAUSE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={ESCALATION_CLAUSE_CALCULATOR_CONTENT.title}
        slug="escalation-clause-calculator"
        category="Real Estate"
        description={ESCALATION_CLAUSE_CALCULATOR_CONTENT.description}
        inputs={ESCALATION_CLAUSE_CALCULATOR_CONTENT.calculator.fields}
        results={ESCALATION_CLAUSE_CALCULATOR_CONTENT.calculator.results}
        calculation={ESCALATION_CLAUSE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default EscalationClauseCalculatorPage;
