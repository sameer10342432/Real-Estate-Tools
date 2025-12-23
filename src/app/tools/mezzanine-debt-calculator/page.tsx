'use client';
async function _generateMetadata() {
  return {
    title: 'Mezzanine Debt Calculator - Calculate Commercial Real Estate Financing Costs | Property Tools',
    description: 'Calculate returns and analyze mezzanine debt financing for commercial real estate deals including interest rates, fees, and total costs.',
  };
}

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { MEZZANINE_DEBT_CALCULATOR_CONTENT } from '@/content/tools/mezzanine-debt-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const MezzanineDebtCalculatorPage = () => {
  return (
    <CalculatorLayout content={MEZZANINE_DEBT_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={MEZZANINE_DEBT_CALCULATOR_CONTENT.title}
        slug="mezzanine-debt-calculator"
        category="Investment Analysis"
        description={MEZZANINE_DEBT_CALCULATOR_CONTENT.description}
        inputs={MEZZANINE_DEBT_CALCULATOR_CONTENT.calculator.fields}
        results={MEZZANINE_DEBT_CALCULATOR_CONTENT.calculator.results}
        calculation={MEZZANINE_DEBT_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default MezzanineDebtCalculatorPage;
