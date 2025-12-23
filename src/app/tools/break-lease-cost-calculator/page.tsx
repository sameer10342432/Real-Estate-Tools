'use client';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Should I Break My Lease? Cost Calculator | Breaking Lease Penalty Calculator',
    description: 'Calculate the total cost of breaking your lease early including penalties, remaining rent, forfeited deposits, and relocation costs. Make an informed decision about lease termination.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { BREAK_LEASE_COST_CALCULATOR_CONTENT } from '@/content/tools/break-lease-cost-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const BreakLeaseCalculatorPage = () => {
  return (
    <CalculatorLayout content={BREAK_LEASE_COST_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={BREAK_LEASE_COST_CALCULATOR_CONTENT.title}
        slug="break-lease-cost-calculator"
        category="Real Estate"
        description={BREAK_LEASE_COST_CALCULATOR_CONTENT.description}
        inputs={BREAK_LEASE_COST_CALCULATOR_CONTENT.calculator.fields}
        results={BREAK_LEASE_COST_CALCULATOR_CONTENT.calculator.results}
        calculation={BREAK_LEASE_COST_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default BreakLeaseCalculatorPage;
