'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CELL_TOWER_LEASE_CALCULATOR_CONTENT } from '@/content/tools/cell-tower-lease-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CellTowerLeaseCalculatorPage = () => {
  return (
    <CalculatorLayout content={CELL_TOWER_LEASE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CELL_TOWER_LEASE_CALCULATOR_CONTENT.title}
        slug="cell-tower-lease-calculator"
        category="Easements & Rights"
        description={CELL_TOWER_LEASE_CALCULATOR_CONTENT.description}
        inputs={CELL_TOWER_LEASE_CALCULATOR_CONTENT.calculator.fields}
        results={CELL_TOWER_LEASE_CALCULATOR_CONTENT.calculator.results}
        calculation={CELL_TOWER_LEASE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CellTowerLeaseCalculatorPage;
