'use client';
async function _generateMetadata() {
  return {
    title: 'Master Lease Agreement (MLA) Calculator - Commercial Real Estate Control | Property Tools',
    description: 'Calculate cash flow and profitability from master lease agreements including rent spreads, control benefits, and exit strategies.',
  };
}

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { MASTER_LEASE_AGREEMENT_MLA_CALCULATOR_CONTENT } from '@/content/tools/master-lease-agreement-mla-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const MasterLeaseAgreementMlaCalculatorPage = () => {
  return (
    <CalculatorLayout content={MASTER_LEASE_AGREEMENT_MLA_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={MASTER_LEASE_AGREEMENT_MLA_CALCULATOR_CONTENT.title}
        slug="master-lease-agreement-mla-calculator"
        category="Investment Analysis"
        description={MASTER_LEASE_AGREEMENT_MLA_CALCULATOR_CONTENT.description}
        inputs={MASTER_LEASE_AGREEMENT_MLA_CALCULATOR_CONTENT.calculator.fields}
        results={MASTER_LEASE_AGREEMENT_MLA_CALCULATOR_CONTENT.calculator.results}
        calculation={MASTER_LEASE_AGREEMENT_MLA_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default MasterLeaseAgreementMlaCalculatorPage;
