'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { WIND_RIGHTS_TURBINE_LEASE_CALCULATOR_CONTENT } from '@/content/tools/wind-rights-turbine-lease-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const WindRightsTurbineLeaseCalculatorPage = () => {
  return (
    <CalculatorLayout content={WIND_RIGHTS_TURBINE_LEASE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={WIND_RIGHTS_TURBINE_LEASE_CALCULATOR_CONTENT.title}
        slug="wind-rights-turbine-lease-calculator"
        category="Easements & Rights"
        description={WIND_RIGHTS_TURBINE_LEASE_CALCULATOR_CONTENT.description}
        inputs={WIND_RIGHTS_TURBINE_LEASE_CALCULATOR_CONTENT.calculator.fields}
        results={WIND_RIGHTS_TURBINE_LEASE_CALCULATOR_CONTENT.calculator.results}
        calculation={WIND_RIGHTS_TURBINE_LEASE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default WindRightsTurbineLeaseCalculatorPage;
