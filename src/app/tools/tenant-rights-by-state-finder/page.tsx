'use client';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: "Tenant's Rights by State Finder | Renter Protection Laws & Security Deposit Rules",
    description: 'Find your tenant rights, security deposit limits, eviction protections, and renter laws specific to your state. Know your rights as a renter in all 50 states.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { TENANT_RIGHTS_BY_STATE_FINDER_CONTENT } from '@/content/tools/tenant-rights-by-state-finder';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const TenantRightsFinderPage = () => {
  return (
    <CalculatorLayout content={TENANT_RIGHTS_BY_STATE_FINDER_CONTENT}>
      <EnhancedCalculator
        title={TENANT_RIGHTS_BY_STATE_FINDER_CONTENT.title}
        slug="tenant-rights-by-state-finder"
        category="Real Estate"
        description={TENANT_RIGHTS_BY_STATE_FINDER_CONTENT.description}
        inputs={TENANT_RIGHTS_BY_STATE_FINDER_CONTENT.calculator.fields}
        results={TENANT_RIGHTS_BY_STATE_FINDER_CONTENT.calculator.results}
        calculation={TENANT_RIGHTS_BY_STATE_FINDER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default TenantRightsFinderPage;
