'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { BILLBOARD_LEASE_CALCULATOR_CONTENT } from '@/content/tools/billboard-lease-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const BillboardLeaseCalculatorPage = () => {
  return (
    <CalculatorLayout content={BILLBOARD_LEASE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={BILLBOARD_LEASE_CALCULATOR_CONTENT.title}
        slug="billboard-lease-calculator"
        category="Easements & Rights"
        description={BILLBOARD_LEASE_CALCULATOR_CONTENT.description}
        inputs={BILLBOARD_LEASE_CALCULATOR_CONTENT.calculator.fields}
        results={BILLBOARD_LEASE_CALCULATOR_CONTENT.calculator.results}
        calculation={BILLBOARD_LEASE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default BillboardLeaseCalculatorPage;
