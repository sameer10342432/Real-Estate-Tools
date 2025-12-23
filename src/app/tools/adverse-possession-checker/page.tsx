'use client';
import type { Metadata } from 'next';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Adverse Possession (Squatter\'s Rights) Checker | Free Legal Tool',
    description: 'Analyze adverse possession claims and squatter\'s rights laws by state. Understand statutory periods, requirements, and protect your property from adverse possession. Free legal compliance tool for property owners.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { ADVERSE_POSSESSION_CHECKER_CONTENT } from '@/content/tools/adverse-possession-checker';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const AdversePossessionCheckerPage = () => {
  return (
    <CalculatorLayout content={ADVERSE_POSSESSION_CHECKER_CONTENT}>
      <EnhancedCalculator
        title={ADVERSE_POSSESSION_CHECKER_CONTENT.title}
        slug="adverse-possession-checker"
        category="Legal & Compliance"
        description={ADVERSE_POSSESSION_CHECKER_CONTENT.description}
        inputs={ADVERSE_POSSESSION_CHECKER_CONTENT.calculator.fields}
        results={ADVERSE_POSSESSION_CHECKER_CONTENT.calculator.results}
        calculation={ADVERSE_POSSESSION_CHECKER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default AdversePossessionCheckerPage;
